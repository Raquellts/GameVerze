//CSS
import game_card from "./GamesCard.module.scss";
//Interfaces
import { GameDeal } from "../../Interfaces/GameList";

type propsPrice = {
  data: GameDeal;
};

const Games = ({ data }: propsPrice) => {
  const priceMatch = data?.text?.match(/Prices start at ([^\(]+)/i);
  const price = priceMatch?.[1] || "";
  const discountMatch = data?.text?.match(/\(up to ([^%]+)% off\)/i);
  const discount = discountMatch?.[1] || "";
  const percentage = discount ? `${discount}% off` : "";

  return (
    <div className={`${game_card.grayscale} group`}>
      {/* ABSOLUTE - GRADIENT */}
      <div className={`${game_card.gradient} ${game_card.absolute_card}`} />
      {data ? (
        <div>
          {/* ABSOLUTE - BACKGROUND IMAGE */}
          <img
            src={data.image || ""}
            alt=""
            className={`${game_card.card} ${game_card.border}`}
          />

          {/* ABSOLUTE - GAME ACTUAL PRICE */}
          <div className={`${game_card.discount} ${game_card.absolute_card}`}>
            <div className={`w-60px -mt-2 ml-120px 2xl:ml-110px`}>
              <p
                className={`${game_card.price} bg-black pr-4`}
                style={{
                  zIndex: 2,
                }}
              >
                {price || ""}
              </p>
            </div>
            <div
              className={`w-60px -mt-3 ml-120px 2xl:ml-110px slide-bottom hidden group-hover:block`}
            >
              <p
                className={`${game_card.percent} bg-black pr-4 ${
                  percentage ? "pt-1" : ""
                }`}
                style={{
                  borderRadius: "0px 0px 0px 8px",
                  zIndex: 1,
                }}
              >
                {percentage || ""}
              </p>
            </div>
          </div>
          {/* */}

          {/* ABSOLUTE - GAME NAME ON CARD */}
          <h2 className={`${game_card.title} ${game_card.absolute_card}`}>
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
