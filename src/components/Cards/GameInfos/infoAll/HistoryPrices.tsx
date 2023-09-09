import React from "react";
//CSS
import cards from "../../cards.module.scss";
//Interfaces
import { GameResponse } from "../../../Interfaces/GamePrice";

const HistoryPrices = ({ data }: { data: GameResponse }) => {
  let currencySymbol = "";

  switch (data && data.prices.currency) {
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
        <div>
          <p className={`${cards.infoImportant} text-base`}>
            {/* Maior > preço registrado */}
            highest price:&nbsp;
            <span className={cards.infoDescription}>
              {currencySymbol}
              {(data.prices.highest < 1000 && data.prices.highest.toFixed(2)) ||
                ""}
            </span>
            <br />
          </p>

          <p className={`${cards.infoImportant} text-base`}>
            {/* Menor < preço registrado */}
            lowest price:&nbsp;
            <span className={cards.infoDescription}>
              {currencySymbol}
              {data.prices.lowest.toFixed(2) || ""}
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
