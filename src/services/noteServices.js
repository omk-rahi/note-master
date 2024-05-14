import supabase from "../utils/supabase";

export async function createNote(note) {
  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title: note.title,
        content: note.content,
        isPublic: note.isPublic,
        userId: note.userId,
      },
    ])
    .select();

  if (error) throw new Error("Unable to save note");

  data;
}
