import React from 'react';
import logo from './logo.svg';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import ToggleTheme, { ClickCounter } from "./hooksExercise";
import './App.css';

function App() {

  
  return (
    <div className='app-container'>

      <form className="note-form">
            <div><input placeholder="NoteTitle"></input></div>

            <div><textarea></textarea></div>

            <div>
              <select name="label" id="label_note">
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Study">Study</option>
                  <option value="Other">Other</option>
              </select>
            </div>

            <div><button type="submit">Create Note</button></div>

            <div>
              <h2>
                List of Favorites
              </h2>
            </div>
      </form>
      <div className="notes-grid">
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
             <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
      </div>
      <ToggleTheme/>
    </div>
 
  );
 }
 

export default App;
