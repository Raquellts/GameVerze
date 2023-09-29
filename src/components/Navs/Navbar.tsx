//propers
import Image from "next/image";
//styles
import navs from "../Navs/navs.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className={`${navs.backNav} sticky top-0 z-50 navbar backdrop-blur-xl bg-white/50`}
    >
      <a className="flex-1" href="/">
        {/* logo for desktop */}
        <Image
          src={"/logo/gz.svg"}
          width={50}
          height={50}
          alt="..."
          className="ml-5"
        ></Image>
      </a>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={`${navs.linkTXT} borderless`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navs.linkTXT} href="/page/1">
              Games
            </Link>
          </li>
          <li className="ml-5">
            <Link className={navs.linkTXT} href="/filter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
