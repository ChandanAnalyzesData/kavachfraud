// Settings for this site. Both values are optional.
// Leave them empty and the site still works; the "Share your story" page just cannot send messages yet.

window.KAVACH_CONFIG = {
  // Where visitors' stories are sent. Pick ONE free form service and paste its key or ID.
  //   Web3Forms: get a free access key at web3forms.com (you enter your email and they send you the key).
  //   Formspree: create a form at formspree.io and copy the form ID (the part after /f/).
  contact: {
    provider: "web3forms",   // "web3forms" or "formspree"
    key: "",                 // Web3Forms access key
    id: ""                   // Formspree form ID (only if provider is "formspree")
  },
  contactEmail: ""           // optional: your public email, used as a backup "Email us" button
};
