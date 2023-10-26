//CSS
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
//Componentes
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Navs/Footer";
import FilteredGrid from "@/components/Cards/GamesCompact/Maps/FilteredGrid";

export default function filter() {
  return (
    <>
      <Navbar />
      <div className="pt-20 flex align-center justify-center bg-black">
        <FilteredGrid />
      </div>
      <Footer />
    </>
  );
}
