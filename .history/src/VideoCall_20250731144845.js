


import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";


function VideoCall() {
  return (
    <div style={{ 
      height: "100vh", DoctorConsultationRoom
      width: "100vw", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 

      backgroundColor: "#FBF5DE",


      
      overflow: "hidden"  
      
    }}>
      <JitsiMeeting
        roomName=""
        configOverwrite={{
          startWithAudioMuted: true,
        
          
          
          startWithVideoMuted: true,
          disableModeratorIndicator: true,
          disableThirdPartyRequests: true, // Google Calendar pop-up disable
        }}
        getIFrameRef={node => {
          if (node) {
            node.style.height = "100vh";  
            node.style.width = "100vw";   
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


