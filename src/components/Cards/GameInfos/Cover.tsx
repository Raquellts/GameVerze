//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameResponse } from "../../Interfaces/GamePrice";

type propsGame = {
  data: GameResponse;
};

const Cover = ({ data }: propsGame) => {
  return (
    <>
      <div className="flex justify-center -mt-5 md:block md:mt-5">
        <div className=" xl:ml-75px pb-8">
          <div className={`${cards.absoluteCover}`} />
          <img
            src={(data && data.info.cover) || ""}
            alt=""
            className={`${cards.cardCover} ${cards.borderCard}`}
          />
        </div>
      </div>
    </>
  );
};

export default Cover;
