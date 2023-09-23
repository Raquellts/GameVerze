import Prices from "../../Prices";
import MoreButton from "./ButtonMore";
//CSS
import shop from "./Shop.module.scss";
//Interfaces
import { GameResponse } from "../../../../Interfaces/GamePrice";
import { useState } from "react";

const Keysellers = ({ jsondata }: { jsondata: GameResponse }) => {
  const [showMore, setShowMore] = useState(false);
  const filteredKeysellers = jsondata.prices.list.filter(
    (store) =>
      store.store.type === "Key Seller" &&
      store.price >= 0 &&
      store.price < 1000
  );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {filteredKeysellers.length > 0 && (
        <p
          className={`${shop.header} text-center mt-5 md:mt-0  md:text-left md:ml-1`}
        >
          Key Sellers
        </p>
      )}
      {jsondata ? (
        filteredKeysellers
          .slice(0, showMore ? filteredKeysellers.length : 3)
          .map((store, index) => (
            <Prices
              currency={jsondata.prices.currency}
              data={store}
              name={jsondata.info.name}
              key={index}
            />
          ))
      ) : (
        <h1>...loading</h1>
      )}
      {filteredKeysellers.length > 3 && (
        <div>
          <MoreButton onClick={handleShowMore} showMore={showMore} />
        </div>
      )}
    </div>
  );
};

export default Keysellers;
