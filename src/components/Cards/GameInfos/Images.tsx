import React, { useState } from "react";
import buttons from "../../../styles/buttons.module.scss";
import images_style from "./styles/Images.module.scss";
import { GameDetails, Screenshot } from "../../Interfaces/SteamInfos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type PropsGame = {
  data: GameDetails;
  appid: number;
};

const Images = ({ data, appid }: PropsGame) => {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  const openModal = (image: Screenshot) => {
    setSelectedImage(image);
    const screenshotsModal = document.getElementById(
      "screenshots"
    ) as HTMLDialogElement;
    if (screenshotsModal) {
      screenshotsModal.showModal();
    }
  };

  return (
    <>
      <div>
        <Slider
          slidesToShow={5}
          infinite={true}
          responsive={[
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {data &&
            data[appid]?.data?.screenshots?.map(
              (image: Screenshot, index: number) => {
                return (
                  <button
                    onClick={() => openModal(image)}
                    className={`${images_style.card}`}
                  >
                    <img
                      key={index}
                      src={image.path_thumbnail || ""}
                      alt=""
                      className={`${images_style.border}`}
                    />
                  </button>
                );
              }
            )}
        </Slider>
      </div>

      {/* Modal screenshots FULLSCREEN */}
      <dialog id="screenshots" className="modal backdrop-blur-2xl">
        {selectedImage && (
          <div className="flex flex-col align-center justify-center md:w-3/4 2xl:w-2/3">
            <img
              key={selectedImage.id}
              src={selectedImage.path_full || ""}
              alt=""
              className={`${images_style.border}`}
            />
            <form
              method="dialog"
              className="flex flex-col-start justify-center mt-5"
            >
              <button className={`${buttons.primaryButton}`}>Close</button>
            </form>
          </div>
        )}
      </dialog>
    </>
  );
};

export default Images;
