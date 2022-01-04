import React from "react";

function Entry (props){
  const [date, entry] = props
  return (
    <li> 
        <div>
            <h4>{date}</h4>
            <p>{entry}</p>
        </div>
    </li>
  );
}

export default Entry;