//CSS
import games_cmpct from "./GamesCompact.module.scss";
//Interfaces
import { GameDeal } from "../../Interfaces/GameList";

type propsPrice = {
  data: GameDeal;
};

const GamesCompact = ({ data }: propsPrice) => {
  return (
    <div className={`${games_cmpct.background} ${games_cmpct.text_align} `}>
      <div
        className={`${games_cmpct.card} ${games_cmpct.border} bg-blackthree grid grid-cols-6 place-items-center`}
      >
        <div className="col-span-2 justify-self-start">
          <img
            src={data.image || ""}
            alt=""
            className={`${games_cmpct.cover} ${games_cmpct.grayscale}`}
          />
        </div>
        <div className="flex flex-col col-span-2">
          <p className="">{data.title.trim()}</p>
          <p>{data.game_info.release_date}</p>
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
