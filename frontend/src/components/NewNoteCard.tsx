import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const NewNoteCard = ({
  color,
  onSave,
  onCancel
}: {
  color: string;
  onSave: (note: { title: string; text: string }) => void;
  onCancel: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <motion.div
      layoutId={`note-create-${color}`}
      className="p-4 rounded-xl border border-gray-300 m-2 min-w-[150px] h-full flex flex-col"
      style={{ backgroundColor: color }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      <h2 className="text-3xl font-semibold mb-2">
        <input
          className="bg-transparent outline-none w-full placeholder:text-gray-500"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </h2>

      <p className="text-lg text-gray-700 whitespace-pre-line flex-1">
        <textarea
          className="bg-transparent outline-none resize-none w-full placeholder:text-gray-400"
          placeholder="Write your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
        />
      </p>

      {/* Action buttons - modern style */}
      <div className="mt-auto pt-4 flex gap-3">
        <button
          onClick={() => onSave({ title, text })}
          aria-label="Save"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow hover:scale-105 transition-transform"
        >
          <FaCheck size={16} />
        </button>

        <button
          onClick={onCancel}
          aria-label="Cancel"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow hover:scale-105 transition-transform"
        >
          <FaTimes size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default NewNoteCard;
