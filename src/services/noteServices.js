import supabase from "../utils/supabase";

export async function createNote(note) {
  const session = await supabase.auth.getSession();

  if (!session) throw new Error("Error fetching notes");

  const userId = session.data.session.user.id;

  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title: note.title,
        content: note.content,
        isPublic: note.isPublic,
        userId: userId,
      },
    ])
    .select();

  if (error) throw new Error("Unable to save note");

  data;
}

export async function getNotes() {
  const session = await supabase.auth.getSession();

  if (!session) throw new Error("Error fetching notes");

  const userId = session.data.session.user.id;

  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", userId);

  if (error) throw new Error("Error fetching notes");

  return notes;
}
