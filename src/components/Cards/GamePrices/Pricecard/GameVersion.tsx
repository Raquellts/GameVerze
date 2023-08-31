import React from "react";
//CSS
import cards from "../../../Cards/cards.module.scss";
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
            className={`${cards.pricehead} ${cards.textalign} md:col-span-4 col-span-5 grid grid-rows-2 hidden lg:block`}
          >
            <p>
              {name.trim()}&nbsp;
              {data.edition}
            </p>
            <div
              className={`${cards.pricesub} ${cards.textalign} grid grid-cols-2`}
            >
              <p>store:&nbsp;{data.store.name}</p>
            </div>
          </div>

          {/* nome do jogo em telas menores */}
          <div
            className={`${cards.pricehead} ${cards.textalign} md:col-span-4 col-span-5 grid grid-rows-2 lg:hidden`}
          >
            <p className="ml-10 md:ml-0">
              {name.length > 20
                ? name.trim().substring(0, 20) + "..."
                : name.trim()}
              &nbsp;
              {data.edition}
            </p>
            <div
              className={`${cards.pricesub} ${cards.textalign} grid grid-cols-2`}
            >
              <p className="ml-10 md:ml-0">store:&nbsp;{data.store.name}</p>
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
