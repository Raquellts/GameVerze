//CSS
import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";
//Modulos
import { GetStaticPaths } from "next/types";
import { GetStaticProps } from "next";
import axios, { AxiosResponse } from "axios";
//Interfaces
import { APIResponse } from "../../../components/Interfaces/GameList";
import { GameResponse } from "../../../components/Interfaces/GamePrice";
//Componentes
import Navbar from "../../../components/Navs/Navbar";
import Footer from "../../../components/Navs/Footer";
import Banner from "../../../components/Banners/Banner";
import Cover from "../../../components/Cards/GamePrices/Cover";
import Infos from "../../../components/Cards/GamePrices/Infos";
import Marketplaces from "../../../components/Cards/Maps/Shop/Marktplaces";
import Official from "../../../components/Cards/Maps/Shop/Official";
import Keysellers from "../../../components/Cards/Maps/Shop/Keysellers";
import HistoryPrices from "@/components/Cards/GamePrices/HistoryPrices";

interface DynamicParams {
  [key: string]: string | string[];
}

export const getStaticPaths: GetStaticPaths<DynamicParams> = async () => {
  const response: AxiosResponse<APIResponse> = await axios.get(
    "https://www.nexarda.com/api/v3/search?type=games"
  );
  const arr = response.data;
  const paths = arr.results.items.map((id, index) => ({
    params: { id: id.game_info.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  if (!params) {
    throw new Error("Missing params");
  }

  const id = params.id;

  //-----------------------------------

  const response: AxiosResponse<GameResponse> = await axios.get(
    `https://www.nexarda.com/api/v3/prices?type=game&id=${id}&currency=GBP`
  );
  const jsondata = response.data;

  //retornar varias apis aqui depois da virgula, dentro de props
  return {
    props: {
      jsondata,
    },
  };
};

export default function index({ jsondata }: { jsondata: GameResponse }) {
  return (
    <div>
      <Navbar />
      <Banner data={jsondata} />
      <div>
        <Cover data={jsondata} />
      </div>
      <div className="bg-blackthree" style={{ zIndex: "10" }}>
        <div className="pt-16 flex flex-col md:flex-row">
          <div className="px-10 xl:px-20 flex-auto md:w-2/5 w-full">
            <Infos data={jsondata} />
          </div>
          <div className="px-10 xl:px-20 flex-auto flex-col w-full">
            <div className="grid grid-row">
              {/* Prices History */}
              <HistoryPrices data={jsondata} />

              {/* Official Store */}
              <Official jsondata={jsondata} />

              {/* Marketplace */}
              <Marketplaces jsondata={jsondata} />

              {/* Key Seller */}
              <Keysellers jsondata={jsondata} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
