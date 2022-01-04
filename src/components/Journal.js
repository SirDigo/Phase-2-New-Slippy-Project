import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import JournalEntryForm from "./JournalEntryForm";

function Journal (){
const [entries, setEntries] = useState ([])

useEffect (() => {
    return (
      fetch("http://localhost:3000/entries")
    .then((r) => r.json())
    .then(data => data.map(entry => console.log(entry)))
    )})

  function addEntry(newEntry){
    const newEntryList = [newEntry, ...entries]
    setEntries(newEntryList)
  }

//   {
//       // <Entry key={entry.id} props={entry} />;
//     })
//   }
  return (
    <div>
      <Entry props={entries}/>
      <JournalEntryForm addEntry={addEntry}/>
      hi
    </div>
  );
}
export default Journal;