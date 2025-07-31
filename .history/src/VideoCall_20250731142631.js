


import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";


function VideoCall() {
  return (
    <div style={{ 
      height: "100vh", 
      width: "100vw", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 

      backgroundColor: "#FBF5DE",


      
      overflow: "hidden"  
      
    }}>
      <JitsiMeeting
        roomName="DoctorConsultationRoom"
        configOverwrite={{
          startWithAudioMuted: true,
          // StaticRouter:false,//this is only for practice /
          
          
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


