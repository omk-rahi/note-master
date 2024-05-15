import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <div className="flex gap-8">
          <Button type="primary">
            <IoMdAdd />
            <Link to="/new">New note</Link>
          </Button>
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
