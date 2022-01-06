import React from "react";


function Entry ({entry, handleDeleteEntry }){

  function deleteEntry(e) {
    fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(data => handleDeleteEntry(entry))
    // handleDeleteEntry(entry)
  }


console.log(entry)
  return (
    <tr className="table-content">
    <td>{entry.date}</td>
    <td>{entry.entry}</td>
    <td><button type="button" onClick={(e) => deleteEntry(e)} style={{ backgroundColor:"#FFD447", fontFamily:'Common Pixel', borderRadius:"60px", cursor:"pointer", boxShadow: "0 0 5px #2ba805"  }}>Regret</button>
    </td>
  </tr>
);
}

export default Entry;