import PropTypes from "prop-types";

const Button = ({ children, type, disabled }) => {
  let styles = "";

  switch (type) {
    case "primary":
      styles = "bg-slate-900 text-white";
      break;
  }

  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-md  py-3 ${styles} ring-slate-400 ring-offset-2 transition-all duration-300  focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-600`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
