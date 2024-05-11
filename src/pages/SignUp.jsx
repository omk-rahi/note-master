import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className="absolute left-2/4 top-2/4 flex w-96 translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-6 rounded-md bg-white px-8 py-8 shadow-md">
      <Logo />
      <Input label="Enter your email" type="email" />
      <Input label="Choose a password" type="password" />
      <Input label="Confirm your password" type="password" />
      <div className="w-full text-center">
        <Button type="primary">Sign up</Button>
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
    </div>
  );
};

export default SignUp;
