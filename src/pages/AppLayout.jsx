import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
