//CSS
import cards from "../../Cards/cards.module.scss";

import banners from "../../Banners/banners.module.scss";
//Interfaces
import { GameResponse } from "../../Interfaces/GamePrice";

type propsGame = {
  data: GameResponse;
};

const Cover = ({ data }: propsGame) => {
  return (
    <>
      <div className={`${banners.gradientBanner} mt-32`}>
        <div className="flex justify-center -mt-5 md:block md:mt-5">
          <div className=" xl:ml-20 lg:ml-6 pb-10">
            <div className={`${cards.absoluteCover}`} />
            {data ? (
              <img
                src={data.info.cover}
                alt=""
                className={`${cards.cardCover} ${cards.borderCard}`}
              />
            ) : (
              <h1>...loading</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
