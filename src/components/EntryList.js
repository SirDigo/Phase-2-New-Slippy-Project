import React from "react";
import Entry from "./Entry";
import background from "./Pixel_diary.png";

function EntryList({ entries }) {
  return (
    <div className="slippy-diary" style={{ backgroundImage: `url(${background})` }}>
    <table >
      <thead>
        <tr className="top-diary">
          <th scope="col">Date</th>
          <th scope="col">Entry</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Entry here
          entries.map(entry => {
            return <Entry key={entry.id} entry={entry}/>;
          })
        }
      </tbody>
    </table>
    </div>
  );
}

export default EntryList;
