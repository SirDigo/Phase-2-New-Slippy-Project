import React from "react";
import Entry from "./Entry";
import image from "../images/SlippyTWO.png";


// import background from "./Pixel_diary.png";

function EntryList({ entries, handleDeleteEntry }) {

const entryList = entries.map((entry) => (
  <Entry key={entry.id} date={entry.date} entry={entry} handleDeleteEntry={handleDeleteEntry}/>
))

  return (
    // <div className="slippy-diary" style={{ backgroundImage: `url(${background})` }}>
    <div> 
        <h1><img className="slippy-face" src={image} alt="Slippy"  />Slippy's Journal</h1>
    <table className="top-diary" >
      <tbody>
        <tr >
          <th scope="col">Date</th>
          <th scope="col">Entry</th>
        </tr>
        { 
          //render Entry here
          // entries.map(entry => {
          //   return <Entry key={entry.id} entry={entry}/>;
          // })
          entryList
        }
      </tbody>
    </table>
  </div>
  );
}

export default EntryList;