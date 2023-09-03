import React from "react";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameResponse } from "../../Interfaces/GamePrice";

interface InfosProps {
  data: GameResponse;
  appid: number;
}

const Infos: React.FC<InfosProps> = ({ data, appid }) => {
  const convertUnixToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString(); // Convert to a human-readable date format
  };

  return (
    <>
      {data ? (
        <div className={`${cards.infoCard} flex flex-col`}>
          {/* Nome do jogo */}
          <p className={cards.infoHeader}>{data.info.name}</p>

          {/* Lançamento do jogo */}

          <p className={cards.infoDescription}>
            release:&nbsp;
            <span className={cards.infoDescription}>
              {convertUnixToDate(data.info.release)}
            </span>
          </p>

          {/* Plataformas do jogo */}
          <p className={cards.infoDescription}>{appid}</p>

          {/* Descrição do jogo */}
          <p className={cards.infoDescription}></p>

          {/* Sobre os preços no site */}
          <p className={cards.infoHeader}>About the prices</p>
          <p className={`${cards.infoDescription} text-base`}>
            Discover the best deals of&nbsp;
            <span style={{ color: "#ffffff" }}>'{data.info.name}'</span>
            &nbsp;with Gameverze! Compare prices, but remember to&nbsp;
            <span style={{ color: "#ffffff" }}>check the values</span>&nbsp;on
            official websites before making a purchase to ensure accuracy of
            information. Save as you expand your collection of favorite games
            with confidence!
          </p>
        </div>
      ) : (
        <h1>...loading</h1>
      )}
    </>
  );
};

export default Infos;
