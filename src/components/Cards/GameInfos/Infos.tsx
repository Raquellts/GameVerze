import React from "react";
//CSS
import info_style from "./styles/infos.module.scss";
//Interfaces
import { GameDetails } from "../../Interfaces/SteamInfos";
import { GameResponse } from "../../Interfaces/GamePrice";
import { GridResponse } from "../../Interfaces/SteamGRID";

import Metacritic from "./infoAll/Metacritic";
import HistoryPrices from "./infoAll/HistoryPrices";
import Image from "next/image";

interface InfosProps {
  infos: GameResponse;
  data: GameDetails;
  appid: number;
  logo: GridResponse;
}

const Infos = ({ data, appid, infos, logo }: InfosProps) => {
  const convertUnixToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString(); // Convert to a human-readable date format
  };

  return (
    <>
      <div
        className={`${info_style.card} flex flex-col align-center justify-center`}
      >
        {logo && logo.data && logo.data.length > 0 ? (
          <div className="flex align-center justify-center mb-10">
            <Image
              src={
                logo?.data.find((item) => item.style === "white")?.url ||
                logo?.data[0]?.url ||
                ""
              }
              alt="logo"
              width={300}
              height={300}
              layout="fixed"
              className={info_style.logo}
            />
          </div>
        ) : (
          <p
            className={`${info_style.header} flex align-center justify-center -mt-0`}
          >
            {(infos && infos.info.name) || ""}
          </p>
        )}

        <HistoryPrices data={infos} />
        <p className={info_style.important}>
          release:&nbsp;
          <span className={info_style.description}>
            {convertUnixToDate(infos && infos.info.release) || ""}
          </span>
        </p>
        {/*infos steamAPI*/}
        <p className={info_style.important}>
          Description:&nbsp;
          <span className={info_style.description}>
            {(data && data[appid]?.data?.short_description) || ""}
          </span>
        </p>
        <p className={info_style.important}>
          Genres:&nbsp;
          {data &&
          data[appid]?.data?.genres &&
          data[appid]?.data?.genres.length > 0 ? (
            data[appid]?.data?.genres.map((genre) => (
              <span
                key={genre.id}
                className={`${info_style.description} flex flex-col`}
              >
                {genre.description},&nbsp;
              </span>
            ))
          ) : (
            <span className={info_style.description}>any genre found</span>
          )}
        </p>
        <p className={info_style.important}>
          Developers:&nbsp;
          {data &&
          data[appid]?.data?.developers &&
          data[appid]?.data?.developers.length > 0 ? (
            data[appid]?.data?.developers.map((developer) => (
              <span key={developer} className={info_style.description}>
                {developer}
              </span>
            ))
          ) : (
            <span className={info_style.description}>any Developers found</span>
          )}
        </p>
        <p className={info_style.important}>
          Publishers:&nbsp;
          {data && data[appid]?.data?.publishers ? (
            data[appid]?.data?.publishers.map((publisher, index) => (
              <span key={index} className={info_style.description}>
                {publisher},&nbsp;
              </span>
            ))
          ) : (
            <span className={info_style.description}>any Publishers found</span>
          )}
        </p>
        <Metacritic data={data} appid={appid} />
        <p className={info_style.important}>
          site:&nbsp;
          <span className={info_style.description}>
            {(data && data[appid]?.data?.website) || ""}
          </span>
        </p>
        <p className={info_style.important}>
          Languages:&nbsp;
          <span
            className={`${info_style.description} flex flex-col`}
            dangerouslySetInnerHTML={
              data && {
                __html: data[appid]?.data?.supported_languages || "",
              }
            }
          ></span>
        </p>
      </div>
    </>
  );
};

export default Infos;
