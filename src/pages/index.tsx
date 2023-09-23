//CSS
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
//Modulos
import axios, { AxiosResponse } from "axios";
//Interfaces
import { APIResponse } from "../components/Interfaces/GameList";
//Componentes
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Navs/Footer";
import Header from "../components/Banners/Header";
import GameGrid from "../components/Cards/GridGame/Maps/GameGrid";
import CompactGrid from "@/components/Cards/GamesCompact/Maps/CompactGrid";

// Versão correta

export const getStaticProps = async () => {
  const response: AxiosResponse<APIResponse[]> = await axios.get(
    "https://www.nexarda.com/api/v3/search?type=games&page=1"
  );
  const arr = response.data;

  return { props: { arr } };
};

export default function index({ arr }: { arr: APIResponse }) {
  return (
    <>
      <div className="pt-20 bg-black">
        <Navbar />
        <Header />

        <div className="flex align-center justify-center mx-0 md:mx-10">
          <GameGrid jsondata={arr} />
        </div>
        <CompactGrid jsondata={arr} />
        <Footer />
      </div>
    </>
  );
}
