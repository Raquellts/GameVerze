import React from "react";
//CSS
import price_card from "./PriceCard.module.scss";
//Interfaces
import { PriceListItem } from "../../../Interfaces/GamePrice";

const HistoryPrices = ({
  name,
  data,
}: {
  name: string;
  data: PriceListItem;
}) => {
  return (
    <>
      {data ? (
        <>
          {/* nome do jogo em telas maiores */}
          <div
            className={`${price_card.header} ${price_card.text_align} md:col-span-4 col-span-5 grid grid-rows-2 hidden lg:block`}
          >
            <p>
              {name.trim() || "no name"}&nbsp;
              {data.edition || "no edition"}
            </p>
            <div
              className={`${price_card.subtitle} ${price_card.text_align} grid grid-cols-2`}
            >
              {/* info rodapé */}
              <p>store:&nbsp;{data.store.name || "no store"}</p>
              <p>
                {data.edition_full
                  ? data.edition_full.split(":")[1].trim()
                  : "not found"}
              </p>
            </div>
          </div>

          {/* nome do jogo em telas menores */}
          <div
            className={`${price_card.header} ${price_card.text_align} md:col-span-4 col-span-5 grid grid-rows-2 lg:hidden`}
          >
            <div className="ml-5 md:ml-0 flex flex-row">
              <span className="hidden sm:block">
                {name.length > 20
                  ? name.trim().substring(0, 20) + "..."
                  : name.trim() || "no name"}
                &nbsp;
              </span>
              <span>{data.edition || "no edition"}</span>
            </div>
            <div
              className={`${price_card.subtitle} ${price_card.text_align} grid grid-cols-2`}
            >
              <p className="ml-5 md:ml-0">
                store:&nbsp;{data.store.name || "no store"}
              </p>
              <p>
                for:&nbsp;
                {data.edition_full
                  ? data.edition_full.split(":")[1].trim()
                  : "no type"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h1>...loading</h1>
      )}
    </>
  );
};

export default HistoryPrices;
