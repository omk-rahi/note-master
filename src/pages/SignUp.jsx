import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { signUp } from "../services/authServices";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signUp(email, password),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      const errorMessage = err.message.split(":").at(-1).trim();
      toast.error(errorMessage);
    },
  });

  return (
    <form
      className="absolute left-2/4 top-2/4 flex w-96 translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-6 rounded-md bg-white px-8 py-8 shadow-md"
      onSubmit={handleSubmit((data) =>
        mutate({ email: data.email, password: data.password }),
      )}
      noValidate
    >
      <Logo />
      <Input
        label="Enter your email"
        type="email"
        name="email"
        register={register}
        validationSchema={{
          required: "Please provide a email address",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please provide a valid email address",
          },
        }}
        errors={errors}
      />
      <Input
        label="Choose a password"
        type="password"
        name="password"
        register={register}
        validationSchema={{
          required: "Please choose a password",
          minLength: { value: 8, message: "Password must be 8 character long" },
        }}
        errors={errors}
      />
      <Input
        label="Confirm your password"
        type="password"
        name="confirmPassword"
        register={register}
        validationSchema={{
          required: "Please confirm your password",
          validate: (data) =>
            getValues().password === data || "Password does not match",
        }}
        errors={errors}
      />
      <div className="w-full text-center">
        <Button type="primary" disabled={isLoading}>
          {isLoading && <Spinner />}
          Sign up
        </Button>
        <span className="m-1 block">OR</span>
        <Button type="primary">
          <IoLogoGoogle size={24} />
          <span>Sign up with Google</span>
        </Button>
      </div>

      <span>
        Already have an account ?&nbsp;
        <Link
          to="/login"
          className=" border-b-2 border-transparent py-1 font-semibold transition-colors duration-300 hover:border-slate-900"
        >
          Sign in
        </Link>
      </span>
    </form>
  );
};

export default SignUp;
