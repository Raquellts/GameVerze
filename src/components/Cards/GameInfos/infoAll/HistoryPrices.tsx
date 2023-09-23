import React from "react";
//CSS
import info_all from "./InfoAll.module.scss";
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
          <p className={`${info_all.important} text-base`}>
            {/* Maior > preço registrado */}
            highest price:&nbsp;
            <span className={info_all.description}>
              {currencySymbol}
              {(data.prices.highest < 1000 && data.prices.highest.toFixed(2)) ||
                ""}
            </span>
            <br />
          </p>

          <p className={`${info_all.important} text-base`}>
            {/* Menor < preço registrado */}
            lowest price:&nbsp;
            <span className={info_all.description}>
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
