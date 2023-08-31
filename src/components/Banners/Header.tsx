//propers
import Image from "next/image";
//styles
import banners from "../Banners/banners.module.scss";

export default function Header() {
  return (
    <>
      <div className={`${banners.divHeader} flex flex-col focus-in`}>
        <div className={`${banners.backgroundImage} grayscale`} />
        <div className={`${banners.gradient} grayscale`} />

        {/*wow creations texto*/}
        <div className={`${banners.logoBG}`}>
          {/*texto header para telas BG - MD*/}
          <div className="hidden md:block focus-in">
            <Image
              src={"/logo/gameverze.svg"}
              width={900}
              height={300}
              alt="gameverze"
            ></Image>
          </div>
        </div>
        <div className={banners.logoBG}>
          {/*texto header para telas SM*/}
          <div className="md:hidden focus-in">
            <Image
              src={"/logo/gz.svg"}
              width={220}
              height={100}
              alt="gameverze"
            ></Image>
          </div>
        </div>

        <p className={`${banners.smallHDTXT} delay-focus-in`}>
          SEE THE FAVORITES
        </p>
        <Image
          src={"/icons/seta.svg"}
          width={50}
          height={50}
          alt="gameverze"
          className={`${banners.iconSeta} delay-focus-in`}
        ></Image>
      </div>
    </>
  );
}
