//Modulos
import Image from "next/image";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { PriceListItem } from "../../Interfaces/GamePrice";
import GameVersion from "../GamePrices/Pricecard/GameVersion";
import GamePrice from "./Pricecard/GamePrice";

const Prices = ({
  name,
  data,
  currency,
}: {
  name: string;
  data: PriceListItem;
  currency: string;
}) => {
  const convertUnixToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString(); // Convert to a human-readable date format
  };

  return (
    <div className={`${cards.bgpriceCard} ${cards.textalign} `}>
      <div
        className={`${cards.pricecard} ${cards.borderCard} bg-black grid grid-cols-7 place-items-center`}
      >
        {data ? (
          <>
            {/* icones da loja em telas maiores */}
            <div className="hidden md:block">
              <img
                src={data.store.image || ""}
                width={35}
                height={35}
                alt="..."
                className=""
              ></img>
            </div>

            {/* Nome - Versão do jogo */}
            <GameVersion data={data} name={name} />

            {/* Preço */}
            <GamePrice data={data} currency={currency} />

            <div className={`${cards.shopbutton} center`}>
              <button
                className={cards.textbutton}
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                shop<p className={cards.textarrow}>{"______ >"}</p>
              </button>
            </div>
          </>
        ) : (
          <h1>...loading</h1>
        )}
      </div>
    </div>
  );
};

export default Prices;
