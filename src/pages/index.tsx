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
import NewGameGrid from "../components/Cards/Maps/NewGameGrid";

// Versão correta

export const getStaticProps = async () => {
  const response: AxiosResponse<APIResponse[]> = await axios.get(
    "https://www.nexarda.com/api/v3/search?type=games"
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

        <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
          <NewGameGrid jsondata={arr} />
        </div>
        <Footer />
      </div>
    </>
  );
}
