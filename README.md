# CallNexus

CallNexus is a video calling application built with **React.js** and the **Jitsi Meet SDK**.

I created this project to learn how to integrate reliable video conferencing capabilities into a custom frontend. Unlike standard Jitsi links, this app embeds the video call directly into the UI, removes external branding, and provides a cleaner, distraction-free experience.

🔗 **Live Demo:** 

## Features

- **Custom & Random Rooms:** Users can join a specific room name or generate a secure, random Room ID automatically.
- **Clean Interface:** Removed Jitsi watermarks, footers, and third-party prompts for a native app feel.
- **Privacy First:** Calls start with Audio/Video muted by default to prevent accidental broadcasts.
- **Responsive:** The video layout adapts to full-screen on both desktop and mobile.

## Technical Implementation

This project uses the `@jitsi/react-sdk` to render the meeting frame.

- **Framework:** React.js (Create React App)
- **Styling:** Vanilla CSS (No heavy UI libraries)
- **Configuration:** I used `configOverwrite` and `interfaceConfigOverwrite` props to:
    - Disable the "Lobby" mode.
    - Hide the Google Calendar integration.
    - Remove the default Jitsi logo and watermarks.

### Project Structure
/src
├── VideoCall.js    # Main component handling the Jitsi API
├── App.js          # Route and Room ID logic
├── App.css         # Custom styling for the iframe
└── ...


## Challenges & Learnings

The biggest challenge was customizing the Jitsi iframe to look like a part of my app. I had to experiment with the SDK's `interfaceConfig` to successfully remove the external branding and fix iframe height issues on mobile browsers.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sanchitsinghal1/CallNexus.git
Install dependencies:

Bash
npm install
Start the server:

Bash
npm start
Author: Sanchit Singhal
License: MIT
