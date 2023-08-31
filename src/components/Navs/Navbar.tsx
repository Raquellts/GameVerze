//propers
import Image from "next/image";
//styles
import navs from "../Navs/navs.module.scss";

export default function Navbar() {
  return (
    <div
      className={`${navs.backNav} sticky top-0 z-50 navbar backdrop-blur-xl bg-white/50`}
    >
      <a className="flex-1">
        {/* logo for desktop */}
        <Image
          src={"/logo/gz.svg"}
          width={50}
          height={50}
          alt="..."
          className="ml-5 hidden md:block"
        ></Image>
      </a>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className={navs.linkTXT} href="/">
              Home
            </a>
          </li>
          <li className="mr-5">
            <a className={navs.linkTXT} href="/">
              Filters
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
