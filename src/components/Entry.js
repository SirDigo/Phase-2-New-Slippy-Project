import React from "react";


function Entry ({entry, handleDeleteEntry }){

  function deleteEntry () {
    handleDeleteEntry(entry)
  }


console.log(entry)
  return (
    <tr className="table-content">
    <td>{entry.date}</td>
    <td>{entry.entry}</td>
    <td><button type="button" onClick={deleteEntry} style={{ background:"none", fontFamily:"cursive", borderRadius:"60px", cursor:"pointer", boxShadow: "0 0 5px #2ba805"  }}>Remove from Journal</button>
    </td>
  </tr>
);
}

export default Entry;