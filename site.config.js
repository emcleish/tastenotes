/*
  TASTE NOTES — SITE SETTINGS
  ---------------------------
  This is the one file to edit for launch details. Save, commit, push:
  Vercel redeploys the site in about a minute.

  Leave a value as null to show the "not announced yet" wording instead.
*/
window.TASTE_NOTES_CONFIG = {
  // Paste the App Store link once Apple approves the app,
  // e.g. "https://apps.apple.com/us/app/taste-notes/id1234567890"
  appStoreUrl: null,

  // Where people can reach you. Shown on Support, Privacy and Terms.
  supportEmail: "tastenotes.phone.app@gmail.com",

  // The name that appears as the seller in the App Store (your legal name for now).
  developerName: "Eric McLeish",

  // State whose law governs the Terms of Use.
  governingState: "Iowa",

  // Date shown at the top of the Privacy Policy and Terms.
  legalUpdated: "September 27, 2026",

  // Pricing. Prices are NOT final — keep them null until you decide.
  // "status" controls the small label on each card: "At launch" or "Planned".
  pricing: {
    free: {
      price: "$0",
      note: "Up to 10 restaurants",
      status: "At launch"
    },
    lifetime: {
      price: "$9.99",
      note: "One-time purchase",
      status: "At launch"
    },
    plus: {
      priceMonthly: null,   // e.g. "$4.99"
      priceYearly: null,    // e.g. "$39.99"
      note: "Subscription",
      status: "Planned"
    }
  }
};
