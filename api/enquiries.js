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

    // TODO: add real DB/email logic here later if needed.

    return res.status(200).json({
      message: 'Enquiry received',
    });
  } catch (err) {
    console.error('Error handling enquiry:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}