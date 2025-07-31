// import React from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// function VideoCall() {
//     return (
//         <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <JitsiMeeting
//             roomName="DoctorConsultationRoom"
//             configOverwrite={{
//               startWithAudioMuted: true,
//               startWithVideoMuted: true,
//               disableModeratorIndicator: true,
//             }}
//             style={{ height: "100%", width: "100%" }}
//           />
//         </div>
//       );
//     }

// export default VideoCall;
// import React from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// function VideoCall() {
//   return (
//     <div style={{ 
//       height: "100vh", 
//       width: "100vw", 
//       display: "flex", 
//       justifyContent: "center", 
//       alignItems: "center", 
//       backgroundColor: "#000" // Background Black Kar Diya
//     }}>
//       <JitsiMeeting
//         roomName="DoctorConsultationRoom"
//         configOverwrite={{
//           startWithAudioMuted: true,
//           startWithVideoMuted: true,
//           disableModeratorIndicator: true,
//         }}
//         style={{
//           height: "90vh", // Almost Fullscreen Height
//           width: "90vw",  // Almost Fullscreen Width
//           border: "none", // Border Remove Kar Diya
//         }}
//       />
//     </div>
//   );
// }

// export default VideoCall;

// import React from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// function VideoCall() {
//   return (
//     <div style={{ 
//       height: "100vh", 
//       width: "100vw", 
//       display: "flex", 
//       justifyContent: "center", 
//       alignItems: "center", 
//       backgroundColor: "#000"
//     }}>
//       <JitsiMeeting
//         roomName="DoctorConsultationRoom"
//         configOverwrite={{
//           startWithAudioMuted: true,
//           startWithVideoMuted: true,
//           disableModeratorIndicator: true,
//           disableThirdPartyRequests: true, // Google Calendar Extension Disable
//         }}
//         style={{
//           height: "90vh",
//           width: "90vw",
//           border: "none",
//         }}
//       />
//     </div>
//   );
// }

// export default VideoCall;


import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { StaticRouter } from "react-router-dom";

function VideoCall() {
  return (
    <div style={{ 
      height: "100vh", 
      width: "100vw", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      // backgroundColor: "FBF5DE",dost ye string hai aur hex main 
      backgroundColor: "#FBF5DE"


      
      overflow: "hidden"  // Extra white space remove karne ke liye
      
    }}>
      <JitsiMeeting
        roomName="DoctorConsultationRoom"
        configOverwrite={{
          startWithAudioMuted: true,
     
          
          
          startWithVideoMuted: true,
          disableModeratorIndicator: true,
          disableThirdPartyRequests: true, // Google Calendar pop-up disable
        }}
        getIFrameRef={node => {
          if (node) {
            node.style.height = "100vh";  // Iframe ka height fix
            node.style.width = "100vw";   // Iframe ka width fi
          }
        }}
      />
    </div>
  );
}
const MyButton = () => {
  return (
    <button style={{ backgroundColor: 'pink', color: 'pink', padding: '10px' }}>
      Click Me
    </button>
  );}

export default VideoCall;


