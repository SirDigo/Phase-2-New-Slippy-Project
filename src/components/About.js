import React from "react";
import slippyHouse from "../images/Slippy'sHouse.png";

function About() {
  
  return (
    <div id="about" style={{backgroundColor: "#FFE799", lineHeight: "40px", padding:"20px", fontFamily:'Pixeled' }}>

        {/* Pixeled */}

      <p>Hey there! I am Slippy, the sleepy slime. Thanks for stopping by my house.</p>
      <img  alt="Slippy's House" style={{height:"500px", width:"800"}} src={slippyHouse}/>

      <p >You will notice that I love to sleep and need your help to wake up, however, once I am awake I jump around my house doing a lot of different things.</p>

      <p>Among all the things I normally do in my house, I love spending time online connecting with my friends. If you let me, I can spend the entire day just sitting there chatting while moving my little butt.</p>

      <p>Once you enter my house you will notice that I love plants. Mouthy is my favorite one! You can see her in the living room on top of the table. I gave her that name as it appears that she is always talking and talking. I like to keep her inside the house so she keeps the bugs away.
      Mouthy and I hangout a lot in the living room watching TV and playing NES. Oh, I almost forgot to introduce my fish, Peixe. One time he jumped out of his tank and almost got eaten by Mouthy.</p>

      <p>I also spend a lot of time outside taking care of my garden and getting some tan. Since I like to sleep a lot, some times I pass out while sun tanning. Would you please wake me up whenever that happens? I’m afraid the ants will crawl on me and get stuck in my slimy body.</p>
      <p>Feel free to visit me at any time! Just make sure to wake me up so I can be a good host and hangout with you.</p>
      <p>Oh, please watch out for the little river when you walk out of my house. Do not get your feet wet.</p>


    </div>
  );
}

export default About;