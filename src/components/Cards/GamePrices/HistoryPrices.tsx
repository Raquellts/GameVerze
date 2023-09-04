import React from "react";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameResponse } from "../../Interfaces/GamePrice";

const HistoryPrices = ({ data }: { data: GameResponse }) => {
  let currencySymbol = "";

  switch (data.prices.currency) {
    case "GBP":
      currencySymbol = "£";
      break;
    case "EUR":
      currencySymbol = "€";
      break;
    case "USD":
      currencySymbol = "$";
      break;
    default:
      currencySymbol = "";
      break;
  }

  return (
    <>
      {data ? (
        <div className={`${cards.infoCard} flex flex-row`}>
          <p className={cards.infoDescription}>Prices History</p>

          <p className={`${cards.infoDescription} text-base`}>
            {/* Maior > preço registrado */}
            highest:&nbsp;
            <span style={{ color: "#ffffff" }}>
              {data.prices.highest < 1000 && data.prices.currency === "GBP"
                ? "£"
                : null}
              {data.prices.highest < 1000 && data.prices.currency === "EUR"
                ? "€"
                : null}
              {data.prices.highest < 1000 && data.prices.currency === "USD"
                ? "$"
                : null}
              {data.prices.highest < 1000
                ? data.prices.highest
                : "not registred"}
            </span>
            <br />
          </p>

          <p className={`${cards.infoDescription} text-base`}>
            {/* Menor < preço registrado */}
            lowest:&nbsp;
            <span style={{ color: "#ffffff" }}>
              {currencySymbol}
              {data.prices.lowest || ""}
            </span>
            <br />
          </p>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default HistoryPrices;
