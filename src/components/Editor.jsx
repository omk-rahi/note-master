import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";

const Editor = ({ editorValue, setEditorValue }) => {
  return (
    <ReactQuill theme="snow" value={editorValue} onChange={setEditorValue} />
  );
};

Editor.propTypes = {
  editorValue: PropTypes.string,
  setEditorValue: PropTypes.func,
};

export default Editor;
