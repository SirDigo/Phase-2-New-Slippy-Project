import React, { useState } from "react";
import { useMousePosition } from "./useMousePosition";
import { useHistory } from "react-router-dom";
import idleLivingRoom from "../images/IdleLivingRoom.gif";
import tvLivingRoom from "../images/TVLivingRoom.gif";

function LivingRoom() {
    const [livingRoomAnimation, setLivingRoomAnimation] = useState(idleLivingRoom)
  
    const position = useMousePosition();
    const x = position.x;
    const y = position.y;

    let history = useHistory();
  
    function handleSwitch() {
      if (x < 690 && y < 312 && x > 519 && y > 242) {
        setLivingRoomAnimation(tvLivingRoom);
      } else if (x < 483 && y < 457 && x > 425 && y > 401) {
        history.push("/journal");
      } 
      else if (x < 1223 && y < 652 && x > 1104 && y > 558) {
        history.push("/bedroom");
      } 
      else if (x < 813 && y < 788 && x > 626 && y > 712) {
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