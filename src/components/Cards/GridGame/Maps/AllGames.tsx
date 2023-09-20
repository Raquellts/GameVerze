//Interfaces
import { APIResponse } from "../../../Interfaces/GameList";
import buttons from "../../../../styles/buttons.module.scss";
import Link from "next/link";
import Games from "../Games";

const AllGames = ({ jsondata }: { jsondata: APIResponse }) => {
  const pages = [];

  for (let i = 1; i <= jsondata.results.pages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex align-center justify-center my-5 mx-0 2xl:mx-10">
        {/* TAMANHO DA TELA  -  EXTRA LARGE */}
        <div className="hidden 2xl:block ">
          <div className="pt-20 grid grid-cols-7">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                  <Games data={data} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* TAMANHO DA TELA  -  LARGE */}
        <div className="2xl:hidden hidden lg:block  ">
          <div className="pt-20 grid grid-cols-5">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                  <Games data={data} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* TAMANHO DA TELA  -  MEDIUM */}
        <div className="lg:hidden hidden md:block  ">
          <div className="pt-20 grid grid-cols-4">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                  <Games data={data} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* TAMANHO DA TELA  -  SMALL */}
        <div className="md:hidden hidden sm:block  ">
          <div className="pt-20 grid grid-cols-3">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                  <Games data={data} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* TAMANHO DA TELA  -  EXTRA SMALL */}
        <div className="sm:hidden block  ">
          <div className="pt-20 grid grid-cols-2">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                  <Games data={data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* PAGINAÇÃO */}
      <div className="flex flex-row align-center justify-center">
        {pages?.map((page, index) => {
          if (page)
            return (
              <Link key={index} href={`/page/${page}`}>
                <button className={`${buttons.primaryButton}`}>{page}</button>
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default AllGames;
