import React from "react";


function Entry ({entry}){
console.log(entry)
  return (
    <tr className="table-content">
    <td>{entry.date}</td>
    <td>{entry.entry}</td>
    <td>
    </td>
  </tr>
);
}

export default Entry;