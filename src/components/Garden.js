import React, { useState } from "react";
import { useMousePosition } from "./useMousePosition";
import { useHistory } from "react-router-dom";
import idleGarden from "../images/IdleGarden.gif";
import tanningGarden from "../images/TanningGarden.gif";
import wateringGarden from "../images/WateringGarden.gif";

function Garden() {

    const [gardenAnimation, setGardenAnimation] = useState(idleGarden)

    const position = useMousePosition();
    const x = position.x;
    const y = position.y;

     let history = useHistory();

        function handleSwitch() {
            if (x < 1376 && y < 541 && x > 1182 && y > 366) {
            setGardenAnimation(tanningGarden);
            } else if (x < 1090 && y < 770 && x > 716 && y > 623) {
            setGardenAnimation(wateringGarden);
            } else if (x < 1130 && y < 606 && x > 860 && y > 544) {
            setGardenAnimation(idleGarden);
            } else if (x < 1107 && y < 357 && x > 930 && y > 295) {
             history.push("/livingroom");          
        }
    }
    return (
        <div>
        <div>
          {x}:{y}
        </div>
        <img src={gardenAnimation} alt="garden" className="bedroom-image" onClick={handleSwitch}/>
      </div>
    )
}

export default Garden;