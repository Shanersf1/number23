import express from 'express';
import Enquiry from '../models/Enquiry.js';
import * as Brevo from '@getbrevo/brevo';
import xss from 'xss';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    // Send email using Brevo
    try {
      const api = new Brevo.TransactionalEmailsApi();
      api.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

      const sendSmtpEmail = new Brevo.SendSmtpEmail();

      const enquiryRef = enquiry._id.toString().slice(-6).toUpperCase();
      sendSmtpEmail.subject = `New Watch Enquiry - Ref: ${enquiryRef}`;
      sendSmtpEmail.htmlContent = `
        <h1>New Watch Enquiry - Ref: ${enquiryRef}</h1>
        <p><strong>Name:</strong> ${xss(enquiry.firstName)} ${xss(enquiry.lastName)}</p>
        <p><strong>Email:</strong> ${xss(enquiry.email)}</p>
        <p><strong>Phone:</strong> ${xss(enquiry.phone)}</p>
        <hr>
        <h2>Watch Details</h2>
        <p><strong>Description:</strong> ${xss(enquiry.watchDescription)}</p>
        <p><strong>Requires Advice:</strong> ${enquiry.requiresAdvice ? 'Yes' : 'No'}</p>
        <p><strong>Occasion:</strong> ${xss(enquiry.occasion)}</p>
        <p><strong>Occasion Details:</strong> ${xss(enquiry.occasionDetails)}</p>
        <p><strong>Event Date:</strong> ${enquiry.eventDate ? new Date(enquiry.eventDate).toLocaleDateString() : 'Not specified'}</p>
        <p><strong>Recipient:</strong> ${xss(enquiry.recipient)}</p>
        <p><strong>Preferred Timeline:</strong> ${xss(enquiry.preferredTimeline)}</p>
        <p><strong>Preferred Materials:</strong> ${xss(enquiry.preferredMaterials)}</p>
        <p><strong>Preferred Style:</strong> ${xss(enquiry.preferredStyle)}</p>
        <p><strong>Special Requirements:</strong> ${xss(enquiry.specialRequirements)}</p>
      `;
      sendSmtpEmail.sender = { name: 'No23 Bespoke Watches', email: process.env.EMAIL_FROM };
      sendSmtpEmail.to = [{ email: process.env.EMAIL_TO }];
      
      await api.sendTransacEmail(sendSmtpEmail);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Do not block the user response if email fails
    }

    res.status(201).json({ message: 'Enquiry submitted successfully', id: enquiry._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
