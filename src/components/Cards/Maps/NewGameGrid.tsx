//Interfaces
import { APIResponse } from "../../../components/Interfaces/GameList";
import Link from "next/link";
import Games from "../Games";

const NewGameGrid = ({ jsondata }: { jsondata: APIResponse }) => {
  return (
    <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
      <div className="hidden 2xl:block ">
        <div className="pt-20 grid grid-cols-7">
          {jsondata.results.items.slice(0, 21).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id}`}>
                <Games data={data} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="2xl:hidden hidden md:block  ">
        <div className="pt-20 grid grid-cols-4 xl:grid-cols-5">
          {jsondata.results.items.slice(0, 20).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id}`}>
                <Games data={data} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:hidden hidden sm:block  ">
        <div className="pt-20 grid grid-cols-3">
          {jsondata.results.items.slice(0, 21).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id}`}>
                <Games data={data} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sm:hidden block  ">
        <div className="pt-20 grid grid-cols-2">
          {jsondata.results.items.slice(0, 20).map((data, index) => {
            return (
              <Link key={index} href={`/game/${data.game_info.id}`}>
                <Games data={data} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewGameGrid;
