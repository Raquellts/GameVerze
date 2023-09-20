//CSS
import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";
import banners from "../../../components/Banners/banners.module.scss";
//Modulos
import React from "react";
import { useEffect, useState } from "react";
import {
  getStaticPaths as customGetStaticPaths,
  getStaticProps as customGetStaticProps,
} from "../../../components/apis";
import { useRouter } from "next/router";
//interfaces
import { GameResponse } from "../../../components/Interfaces/GamePrice";
import { GameDetails } from "../../../components/Interfaces/SteamInfos";
import { GridResponse } from "../../../components/Interfaces/SteamGRID";
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
  Images,
} from "./index";

//The getStaticPaths - getStaticProps are on apis.tsx
export const getStaticPaths = customGetStaticPaths;
export const getStaticProps = customGetStaticProps;

interface IndexProps {
  jsondata: GameResponse;
  appid: number;
  steamdata: GameDetails;
  gridimgs: GridResponse;
  gridlogos: GridResponse;
}

export default function Index({
  jsondata,
  appid,
  steamdata,
  gridimgs,
  gridlogos,
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

  console.log(appid);

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <div>
          <Navbar />
          <Banner data={jsondata} hero={gridimgs} />
          <div className={`${banners.gradientBanner} mt-32`}>
            <Cover data={jsondata} />
          </div>
          <div className="bg-blacktwo">
            {steamdata ? (
              <div className="px-8 xl:px-10 pb-5 border-b-2 border-blackbord">
                <Images data={steamdata} appid={appid} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bg-blackthree" style={{ zIndex: "10" }}>
            <div className="py-10 flex flex-col md:flex-row px-5 xl:px-16 ">
              <div className="flex-auto md:w-2/5 lg:w-1/3 w-full">
                <Infos
                  logo={gridlogos}
                  infos={jsondata}
                  data={steamdata}
                  appid={appid}
                />
              </div>

              <div className="divider before:bg-blackbord after:bg-blackbord md:divider-horizontal md:px-5 pb-10 md:pb-0"></div>

              <div className="flex-auto flex-col w-full">
                <div className="grid grid-row">
                  <div className="mb-10">
                    {/* Official Store */}
                    {jsondata ? <Official jsondata={jsondata} /> : "loading"}
                  </div>

                  <div className="mb-10">
                    {/* Marketplace */}
                    {jsondata ? (
                      <Marketplaces jsondata={jsondata} />
                    ) : (
                      "loading"
                    )}
                  </div>

                  <div className="mb-10">
                    {/* Key Seller */}
                    {jsondata ? <Keysellers jsondata={jsondata} /> : "loading"}
                  </div>
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
