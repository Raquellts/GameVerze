import React from "react";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameDetails } from "../../Interfaces/SteamInfos";
import { GameResponse } from "../../Interfaces/GamePrice";
import Metacritic from "./infoAll/Metacritic";
import HistoryPrices from "./infoAll/HistoryPrices";

interface InfosProps {
  infos: GameResponse;
  data: GameDetails;
  appid: number;
}

const Infos = ({ data, appid, infos }: InfosProps) => {
  const convertUnixToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString(); // Convert to a human-readable date format
  };

  return (
    <>
      <div className={`${cards.infoCard} flex flex-col`}>
        {/* Nome do jogo */}
        <p className={cards.infoHeader}>{(infos && infos.info.name) || ""}</p>

        <HistoryPrices data={infos} />

        <p className={cards.infoImportant}>
          release:&nbsp;
          <span className={cards.infoDescription}>
            {convertUnixToDate(infos && infos.info.release) || ""}
          </span>
        </p>

        {/*infos steamAPI*/}
        <p className={cards.infoImportant}>
          Description:&nbsp;
          <span className={cards.infoDescription}>
            {(data && data[appid].data.short_description) || ""}
          </span>
        </p>

        <p className={cards.infoImportant}>
          Genres:&nbsp;
          {data &&
          data[appid].data.genres &&
          data[appid].data.genres.length > 0 ? (
            data[appid].data.genres.map((genre) => (
              <span key={genre.id} className={cards.infoDescription}>
                {genre.description},&nbsp;
              </span>
            ))
          ) : (
            <span className={cards.infoDescription}>any genre found</span>
          )}
        </p>

        <p className={cards.infoImportant}>
          Developers:&nbsp;
          {data &&
          data[appid].data.developers &&
          data[appid].data.developers.length > 0 ? (
            data[appid].data.developers.map((developer) => (
              <span key={developer} className={cards.infoDescription}>
                {developer}
              </span>
            ))
          ) : (
            <span className={cards.infoDescription}>any Developers found</span>
          )}
        </p>

        <p className={cards.infoImportant}>
          Publishers:&nbsp;
          {data && data[appid].data.publishers ? (
            data[appid].data.publishers.map((publisher, index) => (
              <span key={index} className={cards.infoDescription}>
                {publisher},&nbsp;
              </span>
            ))
          ) : (
            <span className={cards.infoDescription}>any Publishers found</span>
          )}
        </p>

        <Metacritic data={data} appid={appid} />

        <p className={cards.infoImportant}>
          site:&nbsp;
          <span className={cards.infoDescription}>
            {(data && data[appid].data.website) || ""}
          </span>
        </p>

        <p className={cards.infoImportant}>
          Languages:&nbsp;
          <span
            className={`${cards.infoDescription} flex flex-col`}
            dangerouslySetInnerHTML={
              data && {
                __html: data[appid]?.data.supported_languages || "",
              }
            }
          ></span>
        </p>
      </div>
    </>
  );
};

export default Infos;
