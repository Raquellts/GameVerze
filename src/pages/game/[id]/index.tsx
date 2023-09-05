//CSS
import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";

//Modulos
import { useEffect, useState } from "react";
import {
  getStaticPaths as customGetStaticPaths,
  getStaticProps as customGetStaticProps,
} from "../../../components/apis";
import { useRouter } from "next/router";

//interfaces
import { GameResponse } from "../../../components/Interfaces/GamePrice";
import { GameDetails } from "../../../components/Interfaces/SteamInfos";
import { HeroResponse } from "../../../components/Interfaces/GridImgs";

//Componentes
import {
  Navbar,
  Footer,
  Banner,
  Cover,
  Marketplaces,
  Official,
  Keysellers,
  Infos,
} from "./imports";

//The getStaticPaths - getStaticProps are on apis.tsx
export const getStaticPaths = customGetStaticPaths;
export const getStaticProps = customGetStaticProps;

interface IndexProps {
  jsondata: GameResponse;
  appid: number;
  steamdata: GameDetails;
  gridimgs: HeroResponse;
}

export default function Index({
  jsondata,
  appid,
  steamdata,
  gridimgs,
}: IndexProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (!jsondata) {
      router.push("/404");
    }
  }, [jsondata]);

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <div>
          <Navbar />
          <Banner data={jsondata} hero={gridimgs} />
          <div>
            <Cover data={jsondata} />
          </div>
          <div className="bg-blackthree" style={{ zIndex: "10" }}>
            <div className="py-16 flex flex-col md:flex-row px-5 xl:px-20 ">
              <div className="flex-auto md:w-2/5 w-full">
                <Infos infos={jsondata} data={steamdata} appid={appid} />
              </div>

              <div className="opacity-50 divider md:divider-horizontal md:px-5"></div>

              <div className="flex-auto flex-col w-full">
                <div className="grid grid-row">
                  {/* Official Store */}
                  {jsondata ? <Official jsondata={jsondata} /> : "loading"}

                  {/* Marketplace */}
                  {jsondata ? <Marketplaces jsondata={jsondata} /> : "loading"}

                  {/* Key Seller */}
                  {jsondata ? <Keysellers jsondata={jsondata} /> : "loading"}
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
