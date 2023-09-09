import cards from "../../Cards/cards.module.scss";
import { GameDetails, Screenshot } from "../../Interfaces/SteamInfos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type propsGame = {
  data: GameDetails;
  appid: number;
};

const Images = ({ data, appid }: propsGame) => {
  return (
    <>
      <div>
        <Slider
          slidesToShow={5}
          infinite={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {data &&
            data[appid]?.data?.screenshots?.map(
              (image: Screenshot, index: number) => {
                return (
                  <img
                    key={index}
                    src={image.path_thumbnail || ""}
                    alt=""
                    className={`${cards.cardImages} ${cards.borderCard}`}
                  />
                );
              }
            )}
        </Slider>
      </div>
    </>
  );
};

export default Images;
