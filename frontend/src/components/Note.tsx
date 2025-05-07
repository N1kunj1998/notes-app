import type { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
  note: NoteModel;
}

const Note = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;
  return (
    <div className="bg-yellow-100 p-4 rounded-xl border border-gray-200 m-2 transition-transform ease-in-out duration-300 hover:scale-105 min-w-[150px] cursor-pointer flex flex-col">
      <div>
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 whitespace-pre-line">{text}</p>
      </div>

      <span className="text-md text-gray-700 mt-auto pt-4">
        {createdAt === updatedAt
          ? `Created At ${formatDate(createdAt)}`
          : `Updated At ${formatDate(updatedAt)}`}
      </span>
    </div>
  );
};

export default Note;
