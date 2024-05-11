import PropTypes from "prop-types";

const Input = ({ type, label }) => {
  return (
    <input
      type={type}
      className="block w-full rounded-md bg-slate-100 px-8 py-3 outline-none ring-slate-500 transition-all duration-300 focus:ring-1"
      placeholder={label}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
