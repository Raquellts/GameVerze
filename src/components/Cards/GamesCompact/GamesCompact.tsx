//CSS
import cards from "../cards.module.scss";
//Interfaces
import { GameDeal } from "../../Interfaces/GameList";

type propsPrice = {
  data: GameDeal;
};

//{ data }: propsPrice

const GamesCompact = () => {
  return (
    <div className={`${cards.bgpriceCard} ${cards.textalign} `}>
      <div
        className={`${cards.pricecard} ${cards.borderCard} bg-blackthree grid grid-cols-3 place-items-center`}
      >
        <div className="">
          teste
          <img></img>
        </div>
        <div className="flex flex-col">
          <p>teste</p>
          <p>teste</p>
        </div>
        <div className="flex flex-col">
          <p>teste</p>
          <p>teste</p>
        </div>
      </div>
    </div>
  );
};

export default GamesCompact;
