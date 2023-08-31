import Prices from "../../GamePrices/Prices";
//CSS
import cards from "../../cards.module.scss";
//Interfaces
import { GameResponse } from "../../../Interfaces/GamePrice";

const Official = ({ jsondata }: { jsondata: GameResponse }) => {
  return (
    <div>
      <p className={cards.infoHeader}>Official Stores</p>
      {jsondata ? (
        jsondata.prices.list
          .filter((store) => store.store.type === "Official Store")
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

export default Official;
