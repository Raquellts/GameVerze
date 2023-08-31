import Prices from "../../GamePrices/Prices";
//CSS
import cards from "../../cards.module.scss";
//Interfaces
import { GameResponse } from "../../../Interfaces/GamePrice";

const Keysellers = ({ jsondata }: { jsondata: GameResponse }) => {
  return (
    <div>
      <p className={cards.infoHeader}>Key sellers</p>
      {jsondata ? (
        jsondata.prices.list
          .filter((store) => store.store.type === "Key Seller")
          .map((store, index) => {
            if (store.price >= 0 && store.price < 1000) {
              return (
                <Prices
                  currency={jsondata.prices.currency}
                  data={store}
                  name={jsondata.info.name}
                  key={index}
                />
              );
            }
          })
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default Keysellers;
