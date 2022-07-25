import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    // Getting saved items from local storage OR if there is not any arrays on localstorage -> show empty notes
    // '() =>' is lazy initialization to prevent app loading multiple times
    () => JSON.parse(localStorage.getItem("notes")) || data
  );

  //  UseEffect() The Effect Hook is activated by default after the first render and each time the state is changed.
  //  As the names suggest, it is used to perform an effect each time the state changes.
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      // Create a new empty array
      const newArray = [];
      // Loop over the original array
      for (let i = 0; i < oldNotes.length; i++) {
        // oldNote variable to be reusable
        const oldNote = oldNotes[i];
        // IF the id matches ...
        if (oldNote.id === currentNoteId) {
          //  ... put the updated note at the beginning of the new array
          newArray.unshift({ ...oldNote, body: text });
        }
        // ELSE push the old note to the end of the new array
        else {
          newArray.push(oldNote);
        }
      }
      // return the new array
      return newArray;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    /* Returning new array with filter() method */
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
