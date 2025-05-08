import { FaTrash } from "react-icons/fa";
import type { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";
import { motion } from "framer-motion";

interface NoteProps {
  note: NoteModel;
  handleDeleteNote: (noteId: string) => unknown
}

const Note = ({ note, handleDeleteNote }: NoteProps) => {
  const { title, text, color, createdAt, updatedAt } = note;
  return (
    <motion.div layout style={{backgroundColor: `${color ? color : "oklch(97.3% 0.071 103.193)" }`}} className="group p-4 rounded-xl border border-gray-200 m-2 transition-transform ease-in-out duration-300 hover:scale-105 min-w-[150px] cursor-pointer h-full flex flex-col">
      <div>
        <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <button
                onClick={() => handleDeleteNote(note._id)}
                aria-label="Delete"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow transition-transform hover:scale-105 opacity-0 group-hover:opacity-100"
            >
                <FaTrash size={16} />
            </button>
        </div>
        <p className="text-lg text-gray-600 whitespace-pre-line line-clamp-5">{text}</p>
      </div>

      <span className="text-md text-gray-700 mt-auto pt-4">
        {createdAt === updatedAt
          ? `Created At ${formatDate(createdAt)}`
          : `Updated At ${formatDate(updatedAt)}`}
      </span>
    </motion.div>
  );
};

export default Note;
