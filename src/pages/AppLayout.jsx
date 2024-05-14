import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NewNote from "./NewNote";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <NewNote />
      </main>
      <Outlet />
    </div>
  );
};

export default AppLayout;
