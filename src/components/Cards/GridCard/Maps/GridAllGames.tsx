//Interfaces
import Link from "next/link";
import Games from "../GamesCard";
import { APIResponse } from "../../../Interfaces/GameList";

const GridAllGames = ({ jsondata }: { jsondata: APIResponse }) => {
  return (
    <div>
      <div>
        {/* TAMANHO DA TELA  -  EXTRA LARGE */}
        <div className="hidden 2xl:block ">
          <div className="pt-20 grid grid-cols-7">
            {jsondata.results.items.map((data, index) => {
              return (
                <Link
                  key={data.game_info.id || index}
                  href={`/game/${data.game_info.id || "404"}`}
                >
                  <Games key={data.game_info.id || index} data={data} />
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
                <Link
                  key={data.game_info.id || index}
                  href={`/game/${data.game_info.id || "404"}`}
                >
                  <Games key={data.game_info.id || index} data={data} />
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
                <Link
                  key={data.game_info.id || index}
                  href={`/game/${data.game_info.id || "404"}`}
                >
                  <Games key={data.game_info.id || index} data={data} />
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
                <Link
                  key={data.game_info.id || index}
                  href={`/game/${data.game_info.id || "404"}`}
                >
                  <Games key={data.game_info.id || index} data={data} />
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
                <Link
                  key={data.game_info.id || index}
                  href={`/game/${data.game_info.id || "404"}`}
                >
                  <Games key={data.game_info.id || index} data={data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridAllGames;
