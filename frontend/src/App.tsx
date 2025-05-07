import { useEffect, useState } from "react";
import type { Note } from "./models/note";
import NoteCard from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("http://localhost:5001/api/notes", { method: "GET" })
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
      }
    }
    loadNotes();
  }, []);
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        notes.length > 0 &&
        notes.map((note) => (
          <NoteCard note={note} key={note._id} />
        ))
      }
    </div>
  )
}

export default App