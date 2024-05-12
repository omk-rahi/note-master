import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
};

export default AppLayout;
