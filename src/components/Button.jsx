import PropTypes from "prop-types";

const Button = ({ children, type }) => {
  let styles = "";

  switch (type) {
    case "primary":
      styles = "bg-slate-900 text-white";
      break;
  }

  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-md  py-3 ${styles}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
