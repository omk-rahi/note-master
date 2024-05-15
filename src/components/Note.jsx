import PropTypes from "prop-types";

const Note = ({ note }) => {
  return (
    <div className="rounded-md bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <h2 className="text-xl font-semibold">{note.title}</h2>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
};

export default Note;
