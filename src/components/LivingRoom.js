import React, { useState } from "react";
import { useMousePosition } from "./useMousePosition";
import { useHistory } from "react-router-dom";
import idleLivingRoom from "../images/IdleLivingRoom.gif";
import tvLivingRoom from "../images/TVLivingRoom.gif";

function LivingRoom({ handleSleep }) {
    const [livingRoomAnimation, setLivingRoomAnimation] = useState(idleLivingRoom)
  
    const position = useMousePosition();
    const x = position.x;
    const y = position.y;

    let history = useHistory();
  
    function handleSwitch() {
      if (x < 911 && y < 765 && x > 703 && y > 680) {
        setLivingRoomAnimation(tvLivingRoom);
      } else if (x < 1341 && y < 697 && x > 1167 && y > 608){
        setLivingRoomAnimation(idleLivingRoom)
      } else if (x < 667 && y < 571 && x > 554 && y > 489) {
        history.push("/journal");
      } 
      else if (x < 1615 && y < 825 && x > 1459 && y > 689) {
        history.push("/bedroom");
      } 
      else if (x < 1083 && y < 971 && x > 824 && y > 893) {
        history.push("/garden");
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