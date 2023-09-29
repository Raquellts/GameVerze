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
import GameGrid from "../components/Cards/GridCard/Maps/GameGrid";
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

        <div className="flex flex-col align-center justify-center">
          <GameGrid jsondata={arr} />
          <div className="divider py-10 mx-8 md:mx-10 lg:mx-28 before:bg-base-300 after:bg-base-300 ">
            see more
          </div>
          <CompactGrid jsondata={arr} />
        </div>

        <Footer />
      </div>
    </>
  );
}
