import React, { useEffect, useState } from "react";
import JournalEntryForm from "./JournalEntryForm";
import EntryList from "./EntryList"; 
import image from "../images/Pixel_diary.png";

function Journal (){
  
  const [entries, setEntries] = useState ([])

  function addEntry(newEntry){
    const newEntryList = [ ...entries, newEntry,]
    setEntries(newEntryList)
  }


  useEffect (() => {
    fetch("http://localhost:3000/entries")
    .then((r) => r.json())
    .then (data => {
      //doing this so the entries are loaded in the page.
      setEntries(data)});
  }, [],)

  return (
    <div className="slippy-diary" style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize: "cover", textAlign: "center" }}>
    {/* // <div className="slippy-diary" style={{backgroundImage: `url("https://image.pngaaa.com/905/2624905-middle.png")` }}> */}

           <EntryList entries={entries}/>
           <JournalEntryForm addEntry={addEntry}/>
           </div>
  );
}

export default Journal;