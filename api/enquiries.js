let brevoClient = null;

function escapeHtml(value) {
  const str = String(value ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function asCleanString(value, maxLength) {
  const normalized = String(value ?? '').trim();
  return normalized.length > maxLength ? normalized.slice(0, maxLength) : normalized;
}

async function getBrevoClient() {
  if (!brevoClient) {
    const { BrevoClient } = await import('@getbrevo/brevo');
    brevoClient = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY,
    });
  }
  return brevoClient;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      watchDescription,
      requiresAdvice,
      occasion,
      occasionDetails,
      eventDate,
      recipient,
      preferredTimeline,
      preferredMaterials,
      preferredStyle,
      specialRequirements,
      website,
    } = req.body || {};

    // Honeypot anti-bot field.
    if (website) {
      return res.status(200).json({ message: 'Enquiry received' });
    }

    const cleanFirstName = asCleanString(firstName, 80);
    const cleanLastName = asCleanString(lastName, 80);
    const cleanEmail = asCleanString(email, 254);
    const cleanPhone = asCleanString(phone, 40);
    const cleanWatchDescription = asCleanString(watchDescription, 3000);
    const cleanOccasion = asCleanString(occasion, 40);
    const cleanOccasionDetails = asCleanString(occasionDetails, 200);
    const cleanEventDate = asCleanString(eventDate, 30);
    const cleanRecipient = asCleanString(recipient, 120);
    const cleanPreferredTimeline = asCleanString(preferredTimeline, 60);
    const cleanPreferredMaterials = asCleanString(preferredMaterials, 300);
    const cleanPreferredStyle = asCleanString(preferredStyle, 200);
    const cleanSpecialRequirements = asCleanString(specialRequirements, 2000);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedOccasions = new Set(['event', 'gift', 'personal', 'investment', 'other']);

    if (
      !cleanFirstName ||
      !cleanLastName ||
      !cleanEmail ||
      !cleanPhone ||
      !cleanWatchDescription ||
      !cleanOccasion
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!allowedOccasions.has(cleanOccasion)) {
      return res.status(400).json({ error: 'Invalid occasion value' });
    }

    const brevo = await getBrevoClient();

    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: process.env.EMAIL_FROM },
      to: [{ email: process.env.EMAIL_TO }],
      subject: 'New enquiry from website',
      htmlContent: `
        <p><strong>Name:</strong> ${escapeHtml(cleanFirstName)} ${escapeHtml(cleanLastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(cleanPhone)}</p>
        <p><strong>Watch description:</strong> ${escapeHtml(cleanWatchDescription)}</p>
        <p><strong>Requires advice:</strong> ${requiresAdvice ? 'Yes' : 'No'}</p>
        <p><strong>Occasion:</strong> ${escapeHtml(cleanOccasion)}</p>
        <p><strong>Occasion details:</strong> ${escapeHtml(cleanOccasionDetails || '-')}</p>
        <p><strong>Event date:</strong> ${escapeHtml(cleanEventDate || '-')}</p>
        <p><strong>Recipient:</strong> ${escapeHtml(cleanRecipient || '-')}</p>
        <p><strong>Preferred timeline:</strong> ${escapeHtml(cleanPreferredTimeline || '-')}</p>
        <p><strong>Preferred materials:</strong> ${escapeHtml(cleanPreferredMaterials || '-')}</p>
        <p><strong>Preferred style:</strong> ${escapeHtml(cleanPreferredStyle || '-')}</p>
        <p><strong>Special requirements:</strong> ${escapeHtml(cleanSpecialRequirements || '-')}</p>
      `,
    });

    return res.status(200).json({ message: 'Enquiry received' });
  } catch (err) {
    console.error('Brevo send error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}