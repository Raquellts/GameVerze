import React from "react";
//CSS
import cards from "../../../Cards/cards.module.scss";
//Interfaces
import { PriceListItem } from "../../../Interfaces/GamePrice";
import Cupom from "@/components/Modals/cupom";

const GamePrice = ({
  currency,
  data,
}: {
  currency: string;
  data: PriceListItem;
}) => {
  const currencySymbol =
    data.price > 0
      ? currency === "GBP"
        ? "£"
        : currency === "EUR"
        ? "€"
        : "$"
      : "";

  return (
    <>
      {data ? (
        <>
          <div className="grid grid-row-2 mr-5 md:mr-0">
            <p className={`${cards.pricevalue}`}>
              {currencySymbol}

              {data.price === 0 ? "Free" : data.price.toFixed(2) || ""}
            </p>
            <div className={`${cards.percentDiv} flex flex-row`}>
              {data.discount > 0 && (
                <p className={`${cards.percent}`}>
                  {data.discount.toString() + "%" || ""}
                </p>
              )}
              {/*{data.coupon.available > false && <Cupom data={data} />}*/}
            </div>
          </div>
        </>
      ) : (
        <h1>...loading</h1>
      )}
    </>
  );
};

export default GamePrice;
