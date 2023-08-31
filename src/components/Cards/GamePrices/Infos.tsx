import React from "react";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameResponse } from "../../Interfaces/GamePrice";

type propsPrice = {
  data: GameResponse;
};

const Infos = ({ data }: propsPrice) => {
  const convertUnixToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString(); // Convert to a human-readable date format
  };

  return (
    <>
      {data ? (
        <div className={`${cards.infoCard} flex flex-col`}>
          <p className={cards.infoHeader}>About the Game</p>

          <p className={`${cards.infoDescription} text-base`}>
            {/* Nome do jogo */}
            <span style={{ color: "#ffffff" }}>name:&nbsp;</span>
            {data.info.name}
            <br />

            {/* Lançamento do jogo */}
            <span style={{ color: "#ffffff" }}>release:&nbsp;</span>
            {convertUnixToDate(data.info.release)}
            <br />

            {/* EDITAR - descrição do jogo */}
            <span style={{ color: "#ffffff" }}>about:&nbsp;</span>
            {data.info.slug}
            <br />
          </p>

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
