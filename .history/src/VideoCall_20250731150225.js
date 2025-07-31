


// // import React from "react";
// // import { JitsiMeeting } from "@jitsi/react-sdk";


// // function VideoCall() {
// //   return (
// //     <div style={{ 
// //       height: "100vh", 
// //       width: "100vw", 
// //       display: "flex", 
// //       justifyContent: "center", 
// //       alignItems: "center", 

// //       backgroundColor: "#FBF5DE",


      
// //       overflow: "hidden"  
      
// //     }}>
// //       <JitsiMeeting
// //         roomName="CallNexusRoom"
// //         configOverwrite={{
// //           startWithAudioMuted: true,
        
          
          
// //           startWithVideoMuted: true,
// //           disableModeratorIndicator: true,
// //           disableThirdPartyRequests: true, // Google Calendar pop-up disable
// //         }}
// //         getIFrameRef={node => {
// //           if (node) {
// //             node.style.height = "100vh";  
// //             node.style.width = "100vw";   
// //           }
// //         }}
// //       />
// //     </div>
// //   );
// // }
// // const MyButton = () => {
// //   return (
// //     <button style={{ backgroundColor: 'pink', color: 'pink', padding: '10px' }}>
// //       Click Me
// //     </button>
// //   );}

// // export default VideoCall;

// import React, { useState, useEffect } from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// function VideoCall() {
//   // Room name generation logic
//   const generateRandomRoomName = () => {
//     return "CallNexus-" + Math.random().toString(36).substring(2, 8);
//   };

//   const [roomName, setRoomName] = useState("");

//   // Set default random room on first load
//   useEffect(() => {
//     setRoomName(generateRandomRoomName());
//   }, []);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#FBF5DE",
//         overflow: "hidden",
//       }}
//     >
//       {/* Room Name Input */}
//       <input
//         type="text"
//         value={roomName}
//         onChange={(e) => setRoomName(e.target.value)}
//         placeholder="Enter room name"
//         style={{
//           padding: "10px",
//           marginBottom: "10px",
//           borderRadius: "5px",
//           border: "1px solid gray",
//           width: "250px",
//         }}
//       />

//       {/* Jitsi Call */}
//       <div style={{ height: "90%", width: "100%" }}>
//         <JitsiMeeting
//           roomName={roomName}
//           configOverwrite={{
//             startWithAudioMuted: true,
//             startWithVideoMuted: true,
//             disableModeratorIndicator: true,
//             disableThirdPartyRequests: true,
//           }}
          
//           getIFrameRef={(node) => {
//             if (node) {
//               node.style.height = "100%";
//               node.style.width = "100%";
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default VideoCall;

import React, { useState, useEffect } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function VideoCall() {
  const generateRandomRoomName = () => {
    return "CallNexus-" + Math.random().toString(36).substring(2, 8);
  };

  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    setRoomName(generateRandomRoomName());
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF5DE",
        overflow: "hidden",
      }}
    >
      {/* Room Name Input */}
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter room name"
        style={{
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "250px",
        }}
      />

      {/* Jitsi Call Embed */}
      <div style={{ height: "90%", width: "100%" }}>
        <JitsiMeeting
          roomName={roomName}
          configOverwrite={{
            startWithAudioMuted: true,
            startWithVideoMuted: true,
            disableModeratorIndicator: true,
            disableThirdPartyRequests: true,
          }}
          interfaceConfigOverwrite={{
            DEFAULT_REMOTE_DISPLAY_NAME: 'Participant',
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            DISPLAY_WELCOME_PAGE_CONTENT: false,
            DISPLAY_WELCOME_FOOTER: false,
            HIDE_DEEP_LINKING_LOGO: true,
          }}
          getIFrameRef={(node) => {
            if (node) {
              node.style.height = "100%";
              node.style.width = "100%";
            }
          }}
        />
      </div>
    </div>
  );
}

export default VideoCall;
