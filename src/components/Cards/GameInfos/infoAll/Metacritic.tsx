import React from "react";
//CSS
import cards from "../../../Cards/cards.module.scss";
//Interfaces
import { GameDetails } from "../../../Interfaces/SteamInfos";
import Link from "next/link";

interface InfosProps {
  data: GameDetails;
  appid: number;
}
const Metacritic = ({ data, appid }: InfosProps) => {
  //metacritic
  const metacriticScore = data && data[appid].data.metacritic?.score;
  let backgroundColor = "";

  if (metacriticScore >= 76 && metacriticScore <= 100) {
    backgroundColor = "green";
  } else if (metacriticScore >= 51 && metacriticScore <= 75) {
    backgroundColor = "yellow";
  } else if (metacriticScore >= 26 && metacriticScore <= 50) {
    backgroundColor = "orange";
  } else if (metacriticScore === 0 && metacriticScore <= 25) {
    backgroundColor = "red";
  }
  return (
    <>
      <p className={cards.infoImportant}>
        Metacritic:&nbsp;
        <span
          style={{
            backgroundColor,
          }}
        >
          {metacriticScore || ""}
        </span>
        {data && data[appid].data.metacritic?.url ? (
          <Link
            href={data[appid].data.metacritic.url}
            className={cards.infoDescription}
          >
            See More
          </Link>
        ) : (
          <span className={cards.infoDescription}>Not found</span>
        )}
      </p>
    </>
  );
};

export default Metacritic;
