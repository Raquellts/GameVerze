import Prices from "../../GamePrices/Prices";
//CSS
import cards from "../../cards.module.scss";
//Interfaces
import { GameResponse } from "../../../Interfaces/GamePrice";

const Marketplaces = ({ jsondata }: { jsondata: GameResponse }) => {
  return (
    <div>
      <p className={cards.infoHeader}>Marketplaces</p>
      {jsondata ? (
        jsondata.prices.list
          .filter((store) => store.store.type === "Marketplace")
          .map((store, index) => {
            if (store.price >= 0) {
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

export default Marketplaces;
