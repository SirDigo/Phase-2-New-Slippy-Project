import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function JournalEntryForm ({addEntry}) {

  let history = useHistory();

  const [formData, setFormData] = useState(
    {
      "id": "",
      "date": "",
      "entry": ""
    },
  )
function handleOnChange(e){
  console.log(formData)
  setFormData ({...formData, [e.target.name] : e.target.value})
}

function handleSubmit (e) {
  e.preventDefault()
  fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(resp => resp.json())
  .then (data => addEntry(data) )

  }
  return (
    <div  >
      <h2 >What is Slippy doing next? </h2>
      <form className="new-entry-form" onSubmit={handleSubmit}>
        <input style={{boxShadow: "0 0 5px #2ba805"}} onChange={handleOnChange} value={formData.date} type="date" name="date" placeholder="YYYY-MM-DD" />
        <input style={{boxShadow: "0 0 5px #2ba805"}} onChange={handleOnChange} value={formData.entry} type="text" name="entry" placeholder="Entry" />
        <button style={{ backgroundColor:"#FFD447", fontFamily:'Common Pixel', borderRadius:"60px", cursor:"pointer", boxShadow: "0 0 5px #2ba805"  }} type="submit">Add Entry</button>
        <button onClick={() => history.push("/livingroom")} style={{ backgroundColor:"#FFD447", fontFamily:'Common Pixel', borderRadius:"60px", cursor:"pointer", boxShadow: "0 0 5px #2ba805"  }} type="submit">Close Journal</button>

      </form>
    </div>
  );
}

export default JournalEntryForm;