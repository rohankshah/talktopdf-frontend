import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="h-[calc(100vh-66px)] bg-[#F5F6FA] overflow-y-auto relative px-4 py-3 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
