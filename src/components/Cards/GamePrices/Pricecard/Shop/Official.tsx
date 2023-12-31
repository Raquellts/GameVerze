import Prices from "../../Prices";
import MoreButton from "./ButtonMore";
//CSS
import shop from "./Shop.module.scss";
//Interfaces
import { GameResponse } from "../../../../Interfaces/GamePrice";
import { useState } from "react";

const Official = ({ jsondata }: { jsondata: GameResponse }) => {
  const [showMore, setShowMore] = useState(false);
  const filteredOfficial = jsondata.prices.list.filter(
    (store) =>
      store.store.type === "Official Store" &&
      store.price >= 0 &&
      store.price < 1000
  );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {filteredOfficial.length > 0 && (
        <p
          className={`${shop.header} text-center mt-5 md:mt-0 md:text-left md:ml-1`}
        >
          Official Stores
        </p>
      )}
      {jsondata ? (
        filteredOfficial
          .slice(0, showMore ? filteredOfficial.length : 3)
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
      {filteredOfficial.length > 3 && (
        <div>
          <MoreButton onClick={handleShowMore} showMore={showMore} />
        </div>
      )}
    </div>
  );
};

export default Official;
