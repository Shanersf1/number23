let brevoClient = null;

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
    } = req.body || {};

    if (!firstName || !lastName || !email || !phone || !watchDescription || !occasion) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const brevo = await getBrevoClient();

    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: process.env.EMAIL_FROM },
      to: [{ email: process.env.EMAIL_TO }],
      subject: 'New enquiry from website',
      htmlContent: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Watch description:</strong> ${watchDescription}</p>
        <p><strong>Requires advice:</strong> ${requiresAdvice ? 'Yes' : 'No'}</p>
        <p><strong>Occasion:</strong> ${occasion}</p>
        <p><strong>Occasion details:</strong> ${occasionDetails || '-'}</p>
        <p><strong>Event date:</strong> ${eventDate || '-'}</p>
        <p><strong>Recipient:</strong> ${recipient || '-'}</p>
        <p><strong>Preferred timeline:</strong> ${preferredTimeline || '-'}</p>
        <p><strong>Preferred materials:</strong> ${preferredMaterials || '-'}</p>
        <p><strong>Preferred style:</strong> ${preferredStyle || '-'}</p>
        <p><strong>Special requirements:</strong> ${specialRequirements || '-'}</p>
      `,
    });

    return res.status(200).json({ message: 'Enquiry received' });
  } catch (err) {
    console.error('Brevo send error:', err);
    return res.status(500).json({
      error: 'Failed to send email',
      details: err?.message || String(err),
    });
  }
}