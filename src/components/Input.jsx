import PropTypes from "prop-types";

const Input = ({ type, label, register, name, validationSchema, errors }) => {
  const error = errors[name];

  return (
    <div className="w-full">
      <input
        type={type}
        className="block w-full rounded-md bg-slate-100 px-8 py-3 outline-none ring-slate-500 transition-all duration-300 focus:ring-1"
        placeholder={label}
        {...register(name, validationSchema)}
      />
      {error && (
        <span className="mt-1 block px-2 text-sm text-red-700">
          {error.message}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
};

export default Input;
