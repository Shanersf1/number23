import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
// If you want to persist enquiries, import your model here, for example:
// import Enquiry from '../backend/models/Enquiry.js';

dotenv.config();
connectDB();

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

    // Example persistence (uncomment and adjust if using a model):
    // const enquiry = await Enquiry.create({
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   watchDescription,
    //   requiresAdvice,
    //   occasion,
    //   occasionDetails,
    //   eventDate,
    //   recipient,
    //   preferredTimeline,
    //   preferredMaterials,
    //   preferredStyle,
    //   specialRequirements,
    // });

    return res.status(200).json({
      message: 'Enquiry received',
      // enquiryId: enquiry._id, // if you persist to DB
    });
  } catch (err) {
    console.error('Error handling enquiry:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}