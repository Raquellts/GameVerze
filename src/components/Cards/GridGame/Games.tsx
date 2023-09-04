//CSS
import Image from "next/image";
import cards from "../cards.module.scss";
//Interfaces
import { GameDeal } from "../../Interfaces/GameList";

type propsPrice = {
  data: GameDeal;
};

const Games = ({ data }: propsPrice) => {
  return (
    <div className={`${cards.grayscale}`}>
      {/* ABSOLUTE - GRADIENT */}
      <div className={`${cards.gradientCard} ${cards.absoluteCard}`} />
      {data ? (
        <div className={`${cards.cardContainer}`}>
          {/* ABSOLUTE - BACKGROUND IMAGE */}
          <img
            src={data.image || ""}
            alt=""
            className={`${cards.card} ${cards.borderCard}`}
          />

          {/* ABSOLUTE - GAME NAME ON CARD */}
          <h2 className={`${cards.cardTXT} ${cards.absoluteCard}`}>
            {data.game_info.name.length > 20
              ? data.game_info.name.substring(0, 20) + "..."
              : data.game_info.name || ""}
          </h2>
        </div>
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default Games;
