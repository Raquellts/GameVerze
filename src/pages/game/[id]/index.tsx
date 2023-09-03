//CSS
import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";
//Modulos
import { useEffect, useState } from "react";
import {
  getStaticPaths as customGetStaticPaths,
  getStaticProps as customGetStaticProps,
} from "../../../components/apis";
//Componentes
import {
  Navbar,
  Footer,
  Banner,
  Cover,
  InfoAll,
  Marketplaces,
  Official,
  Keysellers,
  HistoryPrices,
} from "./imports";
//interfaces
import { GameResponse } from "../../../components/Interfaces/GamePrice";
import { GameDetails } from "../../../components/Interfaces/SteamInfos";
import InfoSteam from "@/components/Cards/GamePrices/InfoSteam";

//The getStaticPaths - getStaticProps are on apis.tsx
export const getStaticPaths = customGetStaticPaths;
export const getStaticProps = customGetStaticProps;

interface IndexProps {
  jsondata: GameResponse;
  appid: number;
  steamdata: GameDetails;
}

export default function Index({ jsondata, appid, steamdata }: IndexProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (!jsondata || !jsondata.info) {
    // Handle the case where jsondata or jsondata.info is undefined
    return <div>Error: Data is missing</div>;
  }

  if (!steamdata) {
    // Handle the case where steamdata is undefined
    return <div>Error: Steam data is missing</div>;
  }

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <div>
          <Navbar />
          <Banner data={jsondata} />
          <div>
            <Cover data={jsondata} />
          </div>
          <div className="bg-blackthree" style={{ zIndex: "10" }}>
            <div className="pt-16 flex flex-col md:flex-row">
              <div className="px-2 sm:px-10 xl:px-20 flex-auto md:w-2/5 w-full">
                <InfoAll data={jsondata} appid={appid} />
                <InfoSteam data={steamdata} appid={appid} />
              </div>
              <div className="px-2 sm:px-10 xl:px-20 flex-auto flex-col w-full">
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
      )}
    </>
  );
}
