import React from "react";
//CSS
import price_card from "./PriceCard.module.scss";
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
            <p className={`${price_card.value}`}>
              {currencySymbol}

              {data.price === 0 ? "Free" : data.price.toFixed(2) || ""}
            </p>

            {/* ${cards.percentDiv} */}
            <div className={`flex flex-row`}>
              {data.discount > 0 && (
                <p className={`${price_card.percent}`}>
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
