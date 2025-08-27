https://vercel.com/signup

Go to Vercel dashboard
.

Click New Project → Import Git Repository.

Select your repo sudo-eddy/figa.

Configure build settings:

Framework: Next.js

Build Command: next build

Output Directory: leave default (.vercel/output auto-managed)

Add Environment Variables:

NEXT_PUBLIC_BASE_URL →

For Preview: https://<your-preview-url>.vercel.app

For Production: (after first deploy) update to https://figa.vercel.app or your custom domain.

Deploy 🎉

