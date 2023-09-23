//CSS
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
//Interfaces
import { APIResponse } from "../components/Interfaces/GameList";
//Componentes
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Navs/Footer";
import FilteredGrid from "@/components/Cards/GamesCompact/Maps/FilteredGrid";
import axios, { AxiosResponse } from "axios";

export default function filter({ arr }: { arr: APIResponse }) {
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
