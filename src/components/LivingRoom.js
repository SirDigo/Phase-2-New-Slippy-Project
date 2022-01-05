import React, { useState } from "react";
import { useMousePosition } from "./useMousePosition";

import idleLivingRoom from "../images/IdleLivingRoom.gif";
import tvLivingRoom from "../images/TVLivingRoom.gif";
import pixelDiary from "../images/Pixel_diary.png";

function LivingRoom() {
    const [livingRoomAnimation, setLivingRoomAnimation] = useState(idleLivingRoom)
  
    const position = useMousePosition();
    const x = position.x;
    const y = position.y;
  
    function handleSwitch() {
      if (x < 832 && y < 457 && x > 612 && y > 285) {
        setLivingRoomAnimation(idleLivingRoom);
      } else if (x < 1090 && y < 770 && x > 716 && y > 623) {
        setLivingRoomAnimation(tvLivingRoom);
      } else if (x < 1376 && y < 541 && x > 1182 && y > 366) {
        setLivingRoomAnimation(pixelDiary);
      } 
    }

    return (
      <div>
        <div>
          {x}:{y}
        </div>
        <img src={livingRoomAnimation} alt="livingroom" className="bedroom-image" onClick={handleSwitch}/>
      </div>
    );
  }
  
  export default LivingRoom;