# John Robert Doughty — Bespoke Watches

A minimalistic, luxury website for John Robert Doughty, who builds truly unique, one-of-a-kind bespoke watches using the finest parts, made to order by hand.

## Tech Stack

- **Frontend**: React.js (Vite)
- **Backend**: Node.js + Express
- **Database**: MongoDB

## Design

- **Colours**: Regency green, champagne, black font
- **Style**: Minimalistic with refined features
- **Features**: Image carousel, About page, comprehensive enquiry form

## Setup

### Prerequisites

- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### Installation

1. Install all dependencies:

   ```bash
   npm run install:all
   ```

   Or manually:

   ```bash
   npm install
   cd backend && npm install
   cd ../client && npm install
   ```

2. Configure the backend (optional):

   - Copy `backend/.env.example` to `backend/.env`
   - Update `MONGODB_URI` if needed (default: `mongodb://localhost:27017/jrd-watches`)

3. Start MongoDB if running locally.

### Running the App

**Development** (frontend + backend):

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**Or run separately:**

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### Build for Production

```bash
npm run build
```

The built client will be in `client/dist/`. Serve it with the Express server (or any static host) and run the backend with:

```bash
npm start
```

## Pages

- **Home** — Hero carousel with previous builds, intro, and features
- **About** — Information about John Robert Doughty and the philosophy
- **Make an Enquiry** — Form for contact details, watch description, occasion (event/gift), advice needed, budget, timeline, and preferences
