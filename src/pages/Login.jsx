import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../services/authServices";
import Spinner from "../components/Spinner";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: () => {
      navigate("/notes");
    },
    onError: () => {
      toast.error("Invalid email or password ");
    },
  });

  return (
    <form
      className="absolute left-2/4 top-2/4 flex w-96 translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-6 rounded-md bg-white px-8 py-8 shadow-md"
      onSubmit={handleSubmit((data) =>
        mutate({ email: data.email, password: data.password }),
      )}
    >
      <Logo />
      <Input
        label="Enter your email"
        type="email"
        name="email"
        register={register}
        validationSchema={{
          required: "Please enter your email address",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please provide a valid email address",
          },
        }}
        errors={errors}
      />
      <Input
        label="Enter your password"
        type="password"
        name="password"
        register={register}
        validationSchema={{ required: "Please enter your password" }}
        errors={errors}
      />
      <div className="w-full text-center">
        <Button type="primary" disabled={isLoading}>
          {isLoading && <Spinner />}
          Login
        </Button>
        <span className=" m-1 block">OR</span>
        <Button type="primary">
          <IoLogoGoogle size={24} />
          <span>Sign in with Google</span>
        </Button>
      </div>

      <span>
        Don&apos;t have an account ?&nbsp;
        <Link
          to="/signup"
          className=" border-b-2 border-transparent py-1 font-semibold transition-colors duration-300 hover:border-slate-900"
        >
          Sign up
        </Link>
      </span>
    </form>
  );
};

export default Login;
