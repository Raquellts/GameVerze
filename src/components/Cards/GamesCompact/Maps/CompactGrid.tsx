//Interfaces
import { APIResponse } from "../../../Interfaces/GameList";
import Link from "next/link";
import Compact from "../GamesCompact";

const CompactGrid = ({ jsondata }: { jsondata: APIResponse }) => {
  return (
    <div className="flex align-center justify-center my-5 mx-0 2xl:mx-10">
      {/* TAMANHO DA TELA  -  EXTRA LARGE */}
      <div className="hidden xl:block ">
        <div className="grid grid-cols-3 px-16">
          {jsondata.results.items.slice(14, 50).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                <Compact data={data} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="xl:hidden hidden lg:block ">
        <div className="grid grid-cols-2 px-16">
          {jsondata.results.items.slice(14, 30).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                <Compact data={data} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* TAMANHO DA TELA  -  MEDIUM */}
      <div className="lg:hidden hidden md:block  ">
        <div className="grid grid-cols-2 px-8">
          {jsondata.results.items.slice(14, 30).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                <Compact data={data} />
              </Link>
            );
          })}
        </div>
      </div>
      {/* TAMANHO DA TELA  -  SMALL */}
      <div className="md:hidden hidden sm:block  ">
        {" "}
        <div className="grid grid-cols-1 px-10">
          {jsondata.results.items.slice(14, 30).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                <Compact data={data} />
              </Link>
            );
          })}
        </div>
      </div>
      {/* TAMANHO DA TELA  -  EXTRA SMALL */}
      <div className="sm:hidden block  ">
        {" "}
        <div className="grid grid-cols-1 px-2">
          {jsondata.results.items.slice(14, 30).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
                <Compact data={data} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompactGrid;
