import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="logo.png" alt="NoteMaster Logo" className="h-12" />
    </Link>
  );
};

export default Logo;
