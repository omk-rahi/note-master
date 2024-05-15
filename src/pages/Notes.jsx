import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../services/noteServices";

import FullPageSpinner from "../components/FullPageSpinner";
import Note from "../components/Note";

const Notes = () => {
  const { data: notes, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isLoading) return <FullPageSpinner />;

  return (
    <div className="grid grid-cols-4 gap-8">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
