import Logo from "./Logo";
import Profile from "./Profile";
import Button from "./Button";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <div className="flex gap-8">
          <Button type="primary">
            <IoMdAdd />
            <span>New note</span>
          </Button>
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
