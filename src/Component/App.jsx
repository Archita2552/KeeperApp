import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

// function CreateNotes(notes){
//     return(
//         <Note
//         key={notes.id}
//         title={notes.title}
//         content={notes.content}
//         />
        
//     )
// }

// function App(){
// return(
//     <div>
//        {/* <h1>Hello App</h1> */}
//     <Header/>
//     {notes.map(CreateNotes)}
//     <Footer/>
//     </div>
    
// )
// }

// --using arrow function--
// function App(){
//     return(
//         <div>
//            {/* <h1>Hello App</h1> */}
//         <Header/>
//         {notes.map(notes=>(
//         <Note
//         key={notes.id}
//         title={notes.title}
//         content={notes.content}
//         />
//     ))}
//         <Footer/>
//         </div>
        
//     )
//     }
