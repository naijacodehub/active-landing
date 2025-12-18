import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTopButton from "../ScrollToTopButton";

export default function GeneralLayout() {
  const { pathname } = useLocation();

  const isHomepage = pathname === "/";

  return (
    <div className="w-full relative general-width h-fit overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      {isHomepage && <ScrollToTopButton />}
    </div>
  );
}
