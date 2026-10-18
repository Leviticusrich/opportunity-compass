# Opportunity Compass — Productivity Accelerator

A working responsive hybrid assessment and opportunity advisor. Users need no login; the assessment, ranking, selection, and downloadable text report work without an API key. When deployed with a Firebase Function and an OpenAI key, the advisor switches to dynamic AI responses. Without the backend, the advisor provides explicit basic-mode guidance.

## Local setup

1. Install Node.js 22+.
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local Vite URL.
4. The questionnaire, matching engine, roadmap and report already work. Advisor chat uses basic offline answers until its API is deployed.

## Deploy to Firebase and connect subdomain

1. Create a **separate Firebase project** for Opportunity Compass (avoid modifying your game project). Enable the Blaze billing plan for Cloud Functions, if required. Set a Google Cloud budget alert. Firebase static hosting may remain within free allowance, but AI requests/Functions can cost money.
2. Install Firebase CLI: `npm i -g firebase-tools` then `firebase login`.
3. Run `firebase use --add` to select the new project, or copy `.firebaserc.example` to `.firebaserc` and fill the project ID.
4. Run `cd functions && npm install && cd ..` and `npm install` at the project root.
5. Run `firebase functions:secrets:set OPENAI_API_KEY` and enter an OpenAI API key. **Never put the key in front-end code, GitHub, or a .env prefixed VITE_.**
6. Run `npm run build` and `firebase deploy` from the project root.
7. In Firebase Console → Hosting → Add custom domain, enter `opportunity.productivityaccelerator.org`. At the DNS provider controlling `productivityaccelerator.org`, create exactly the DNS records Firebase shows, then wait for DNS and TLS provisioning. Keep existing main-site records intact.

## Notes

- Client scoring is a heuristic to help shortlist opportunities, not a validated assessment. The results make no verified claims about current vacancies or pay.
- Firebase Functions API uses an in-memory IP throttle (best-effort only). **Before significant public traffic, implement App Check, managed rate limiting/bot protection, logging and stricter spend limits.**
- The user profile is held in React state, not stored persistently or linked to an account. Using the optional AI advisor sends the profile, selected options and chat to the Function, which sends them to OpenAI's API. Add a privacy policy and relevant disclosures before public launch.
- Export creates a `.txt` report rather than a PDF, to keep the first release dependency-light.
- The Firebase Function may need a paid plan even if user access is free. Add monitoring and review OpenAI API pricing before launching.
- The website is **not yet deployed**; the custom domain must be configured by the owner.
