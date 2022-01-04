import React, {useState} from "react";

function JournalEntryForm ({addEntry}) {

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
    <div className="new-entry-form">
      <h2>Slippy's Journal </h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={formData.date} type="date" name="date" placeholder="YYYY-MM-DD" />
        <input onChange={handleOnChange} value={formData.entry} type="text" name="entry" placeholder="Entry" />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default JournalEntryForm;