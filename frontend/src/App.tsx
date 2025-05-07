import { useEffect, useState } from "react";
import type { Note } from "./models/note";

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
    <div>
      {JSON.stringify(notes)}
    </div>
  )
}

export default App