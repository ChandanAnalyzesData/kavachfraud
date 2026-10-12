# KavachFraud

**India Financial Scam Repository**

KavachFraud is a website about financial scams in India. For each scam you can listen to a scripted version of the call or message, read the warning signs, see which laws apply, and open the news reports where the same trick was reported.

Live site: _add your link here_

## Why I made it

Most scam advice is a list of tips, and tips are easy to forget in the moment. A scam call is different: it is fast, it sounds official, and it is built to make you panic. I wanted people to hear what that sounds like before it happens to them, and to see that these are real patterns reported by Indian police and newspapers, not rare bad luck.

## What's in it

- **40 evidence cases.** Five for each type of fraud: impersonation, payment fraud, device compromise, extortion, investment fraud, e-commerce fraud, job and mule-account fraud, and phishing. Each one has a voiced replay with a transcript you can click through, the red flags, what to do, the indicators scammers leave behind, the laws involved, and links to the reports it is based on.
- **41-pattern index.** A searchable list of scam patterns adapted to India, each with its warning signals and a link to the matching replay.
- **99-entry catalogue.** A wider list of frauds grouped by type, with red flags and controls.
- **Share your story.** A form where visitors can describe a scam that happened to them, or almost did. It goes to my inbox through a free form service, and if they ask for a reply, I write back by email. Nothing is stored in the browser or sent anywhere until the visitor presses Send.
- **Spot the red flags.** A small exercise on a made-up scam SMS.
- **Search and filters** by scam type, severity and how the money moves (UPI and QR, IMPS and RTGS, APK files, mule accounts, crypto).
- **Dark mode, three text sizes and a phone-friendly layout.**

Examples of what it covers: the "digital arrest" video-call scam, fake electricity-bill and e-challan APK files, QR codes sent to shopkeepers, cloned shopping sites with fake prices, fake investment apps, and job offers that turn people into money mules.

## Things you should know

- **The replays are not real recordings.** I wrote the scripts from how these scams are reported. Your browser's built-in voice reads them out, so the sound depends on your device.
- **Every number, account, UPI ID and website in the indicators is made up or masked.**
- **The legal sections are for awareness.** Which charges apply depends on the facts, so check with the police or a lawyer.
- **The severity ratings are my own judgement,** not an official ranking.
- **Source quality varies.** Most links are to news reports of police cases. Some are older, and a few are consumer guides rather than newsrooms.
- **Three index entries have no Indian report linked yet** (IX-006, IX-040 and IX-041). The site marks them as watch-list patterns.

## Running it

There is nothing to install. Download the repository and open `index.html` in a browser. Voice works best in Chrome, Edge or Safari.

The site works without any setup. To receive stories from visitors, add a Web3Forms access key (or a Formspree form ID) to `config.js`. Until you do, the story form cannot send anything, and the site never sends anything anywhere.

## Messages from visitors

The "Share your story" page sends a visitor's message to my email through a free form service (Web3Forms or Formspree, set in `config.js`). Only what the visitor types is sent. I do not ask for OTPs, PINs or money, and I cannot recover lost money or investigate, so the form tells people to call 1930 first. If a visitor asks for a reply, their email address is used for that and nothing else.

## How it's built

React, Tailwind CSS and Lucide icons, bundled into one static page. The font is Atkinson Hyperlegible. Voice uses the browser's Web Speech API. There is no server and no database.

## Where the information comes from

I started with five scam scenarios and an index of scam patterns that was written for the US, and rebuilt the index around how these scams are reported in India. The case details come from Indian news reports, police and ED statements, and regulator notices. The official portals I relied on most:

- [National Cyber Crime Reporting Portal](https://cybercrime.gov.in) and the 1930 helpline
- [RBI BE(A)WARE booklet](https://rbidocs.rbi.org.in/rdocs/content/pdfs/BEAWARE07032022.pdf)
- [Sanchar Saathi and Chakshu](https://sancharsaathi.gov.in) from the Department of Telecommunications
- [SEBI](https://www.sebi.gov.in) and [SEBI SCORES](https://scores.sebi.gov.in)
- [NPCI](https://www.npci.org.in) for UPI guidance
- [CERT-In](https://www.cert-in.org.in), [PIB Fact Check](https://factcheck.pib.gov.in), [UIDAI](https://uidai.gov.in) and [eMigrate](https://emigrate.gov.in)

The full list of reports behind each case is in [SOURCES.md](SOURCES.md).

## If you've lost money

1. Stop. Don't send anything else or share any code.
2. Call **1930** and your bank, using the number on your card. Ask them to hold or freeze the payment and block UPI and cards.
3. Save screenshots, transaction numbers, phone numbers and links.
4. Report it at [cybercrime.gov.in](https://cybercrime.gov.in).

The first hour matters most. Under the RBI's 2017 circular, telling your bank about an unauthorised transaction within three working days limits or removes your liability in many cases.

## Disclaimer

This is an independent project. It is not run by or connected to any government body, regulator, bank or police force. The names of agencies and brands appear only to explain how scammers pretend to be them. Nothing here is legal, financial or investment advice.

## Author

Built by **Chandan K A**.
[LinkedIn](https://www.linkedin.com/in/chandan-k-a-41248b11b)
