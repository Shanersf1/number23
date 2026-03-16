import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  // Contact details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  
  // Watch preferences
  watchDescription: { type: String, required: true },
  requiresAdvice: { type: Boolean, default: false },
  occasion: { type: String, enum: ['event', 'gift', 'personal', 'investment', 'other'], required: true },
  occasionDetails: String,
  eventDate: Date,
  recipient: String,
  
  // Budget & timeline
  budgetRange: { type: String, enum: ['under-10k', '10k-25k', '25k-50k', '50k-100k', '100k-plus', 'flexible', 'prefer-not-to-say'] },
  preferredTimeline: { type: String, enum: ['urgent', '3-6-months', '6-12-months', 'flexible', 'no-rush'] },
  
  // Additional preferences
  preferredMaterials: String,
  preferredStyle: String,
  specialRequirements: String,
  
  // Admin
  status: { type: String, enum: ['new', 'contacted', 'in-progress', 'completed'], default: 'new' },
  notes: String,
}, { timestamps: true });

export default mongoose.model('Enquiry', enquirySchema);
