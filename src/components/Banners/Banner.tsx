//propers
import Image from "next/image";
//styles
import banners from "../Banners/banners.module.scss";
//Interfaces
import { GameResponse } from "../Interfaces/GamePrice";
import { HeroResponse } from "../Interfaces/GridImgs";

type propsGame = {
  data: GameResponse;
  hero: HeroResponse;
};

export default function Banner({ data, hero }: propsGame) {
  return (
    <>
      <div className={`${banners.divBanner} flex flex-col focus-in`}>
        <img
          src={
            (hero && hero.data && hero.data[0]?.url) ||
            (data && data.info && data.info.banner) ||
            ""
          }
          alt={(data && data.info && data.info.name) || "Game Img"}
          className={`${banners.backgroundBanner} grayscale`}
        />
      </div>
    </>
  );
}
