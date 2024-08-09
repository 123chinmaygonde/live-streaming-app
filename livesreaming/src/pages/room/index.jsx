import React from "react";
import {ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from "react-router-dom";

const RoomPage = ()=>{
    const roomId =  useParams()
    const myMeeting=async(element)=>{
        const appId =1086273101;
        const serverSecret="06c699ac951e34e0f68e53ceb0414906";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),"chinmay")

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference,
            }
        })

    }
    return(
        <div className="room-page">

            <div ref={myMeeting}/>

        </div>
    );
}

export default RoomPage