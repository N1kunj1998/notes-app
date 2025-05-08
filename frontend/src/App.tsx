import { useEffect, useState } from "react";
import type { Note } from "./models/note";
import NoteCard from "./components/Note";
import Sidebar from "./components/Sidebar";
import NewNoteCard from "./components/NewNoteCard";
import { AnimatePresence, motion } from "framer-motion";
import { createNote, deleteNote, getNotes } from "./api/notes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteColor, setNewNoteColor] = useState<string | null>(null);

  const loadNotes = async () => {
    try {
      const notes = await getNotes();
      setNotes(notes);
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAddNote = (color: string) => {
    console.log("Add note with color:", color);
    setNewNoteColor(color);
  };

  const handleDeleteNote = async (noteId: string) => {
    await deleteNote(noteId);
    loadNotes();
  }

  const handleSaveNewNote = async (data: { title: string; text: string }) => {
    try {
      await createNote({ ...data, color: newNoteColor });
      setNewNoteColor(null);
      await loadNotes();
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };
  return (
    <div className="flex">
      <Sidebar onAddNote={handleAddNote} />
      <main className="ml-20 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence initial={false}>
        {newNoteColor && (
          <motion.div
            key="new-card"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            layout
          >
            <NewNoteCard
              color={newNoteColor}
              onSave={handleSaveNewNote}
              onCancel={() => setNewNoteColor(null)}
            />
          </motion.div>
        )}
        {notes.length > 0 && notes.map((note) => (
          <motion.div key={note._id} layout className="h-full">
            <NoteCard note={note} handleDeleteNote={handleDeleteNote} />
          </motion.div>
        ))}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App