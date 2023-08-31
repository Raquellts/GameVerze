//propers
import Image from "next/image";
//styles
import banners from "../Banners/banners.module.scss";
//Interfaces
import { GameResponse } from "../Interfaces/GamePrice";

type propsGame = {
  data: GameResponse;
};

export default function Banner({ data }: propsGame) {
  return (
    <>
      <div className={`${banners.divBanner} flex flex-col focus-in`}>
        <img
          src={data.info.banner}
          alt=""
          className={`${banners.backgroundBanner} grayscale`}
        />
      </div>
    </>
  );
}
