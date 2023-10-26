// Interfaces
import { GameDeal } from "../../../Interfaces/GameList";
import Link from "next/link";
import { useState } from "react";
import cmpt_grid from "./CompactGrid.module.scss";
import axios from "axios";
import Compact from "../GamesCompact";
import Search from "@/components/Navs/Search";

const FilteredGrid: React.FC = () => {
  const [searchResult, setSearchResult] = useState<GameDeal[] | "error" | null>(
    null
  );

  const handleSearchResult = (result: GameDeal[] | "error") => {
    setSearchResult(result);
  };

  return (
    <div
      className={`${cmpt_grid.background} flex flex-col my-5 mx-0 2xl:mx-10`}
    >
      <Search onSearch={handleSearchResult} />

      {/* TAMANHO DA TELA  -  EXTRA LARGE */}
      {Array.isArray(searchResult) ? (
        <div
          className={`grid w-100vw h-full
          my-10 lg:mx-20 lg:mx-10 md:mx-6 sm:mx-4
          2xl:px-64 lg:px-32 md:px-10 px-0 ${
            searchResult.length > 2
              ? "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
              : searchResult.length === 2
              ? "md:grid-cols-2 grid-cols-1"
              : "grid-cols-1"
          }`}
        >
          {searchResult.map((data, index) => (
            <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
              <Compact data={data} />
            </Link>
          ))}
        </div>
      ) : (
        <p>{"error"}</p>
      )}
    </div>
  );
};

export default FilteredGrid;
