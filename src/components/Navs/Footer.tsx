//propers
import Image from "next/image";
//styles
import navs from "../Navs/navs.module.scss";

export default function Footer() {
  return (
    <footer className="text-center bg-black text-neutral-600 lg:text-left">
      <div className="flex items-center justify-center p-6 lg:justify-between bg-blacktwo">
        <div className="flex justify-center">
          <p className={navs.footertext}>
            <u>Atention:</u>&nbsp;Discover the best deals of your favorite games
            with Gameverze! Compare prices, but remember to check the values on
            official websites before making a purchase to ensure accuracy of
            information. Save as you expand your collection of favorite games
            with confidence!
          </p>
        </div>
      </div>

      <div className="bg-blacktwo p-6 text-center">
        <p>By: Gameverze</p>
      </div>
    </footer>
  );
}
