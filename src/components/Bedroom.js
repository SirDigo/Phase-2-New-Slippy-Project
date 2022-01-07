import React, { useState }from "react";
import { useMousePosition } from "./useMousePosition";
// import LivingRoom from "./LivingRoom";
import { useHistory } from "react-router-dom";

import grayBedroom from "../images/GrayScaleBedroom.gif";
import idleBedroom from "../images/IdleBedroom.gif";
import computerBedroom from "../images/ComputerBedroom.gif";
import secretPage from "../images/SecretPage.gif"

function Bedroom() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [isClicked, setIsClicked] = useState(false)
  const [bedroomAnimation, setBedroomAnimation] = useState(grayBedroom)

  const position = useMousePosition();
  const x = position.x;
  const y = position.y;

  let history = useHistory();

  function handleSwitch() {
    if (x < 1107 && y < 357 && x > 930 && y > 295 && darkMode) {
      setDarkMode(false);
      setBedroomAnimation(idleBedroom);
      console.log(x, y);
    } else if (x < 832 && y < 457 && x > 612 && y > 285 && !darkMode && !isClicked) {
      setBedroomAnimation(computerBedroom);
      setIsClicked(true);
    } else if (x < 832 && y < 457 && x > 612 && y > 285 && isClicked) {
      setBedroomAnimation(secretPage);
      setIsClicked(false)
    } else if (x < 1090 && y < 770 && x > 716 && y > 623 && !darkMode) {
      setBedroomAnimation(idleBedroom);
      setIsClicked(false)
    } else if (x < 1376 && y < 541 && x > 1182 && y > 366 && !darkMode) {
      setDarkMode(true);
      setBedroomAnimation(grayBedroom);
      setIsClicked(false)
    } else if (x < 1112 && y < 970 && x > 796 && y > 892 && !darkMode) {
      history.push("/livingroom")
      setIsClicked(false)
    } 
  }



  
  // 
  return (
    <div style={{backgroundColor: darkMode ? "#2E282A" : "white"}}>
      <div>
        {x}:{y}
      </div>
      <img src={bedroomAnimation} alt="bedroom" className="bedroom-image" onClick={handleSwitch}/>
    </div>
  );
}

export default Bedroom;