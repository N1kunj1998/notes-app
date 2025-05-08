import type { Note } from "../models/note";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/notes`;

export async function getNotes(): Promise<Note[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch notes");
  return await response.json();
}

export async function createNote(noteData: {
  title: string;
  text: string;
  color: string | null;
}): Promise<Note> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  if (!response.ok) throw new Error("Failed to create note");
  return await response.json();
}

export async function deleteNote(noteId: string): Promise<unknown> {
    const response = await fetch(`${BASE_URL}/${noteId}`, {
        method: "DELETE",
    });
    if(!response.ok) throw new Error("Failed to delete note");
    return await response.json();
}
