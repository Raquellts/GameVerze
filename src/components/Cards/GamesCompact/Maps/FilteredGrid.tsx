// Interfaces
import { GameDeal } from "../../../Interfaces/GameList";
import Link from "next/link";
import { useState, useEffect } from "react";
import cmpt_grid from "./CompactGrid.module.scss";
import axios from "axios";
import Compact from "../GamesCompact";

const FilteredGrid = () => {
  const [filteredgames, setfilteredgames] = useState<GameDeal[] | null>(null);
  const [search, setSearch] = useState("");
  useEffect(() => {}, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(search);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (game: string) => {
    try {
      const data = await axios.get(
        `https://www.nexarda.com/api/v3/search?type=games&q=${game}`
      );
      setfilteredgames(data.data.results.items);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div
      className={`${cmpt_grid.background} flex flex-col my-5 mx-0 2xl:mx-10`}
    >
      <div className="form-control">
        <form
          className="input-group flex flex-row align-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search…"
            className="input input-bordered bg-black"
          />
          <button className="btn btn-square bg-base-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* TAMANHO DA TELA  -  EXTRA LARGE */}
      {Array.isArray(filteredgames) ? (
        <div
          className={`grid w-100vw h-full
          my-10 lg:mx-20 lg:mx-10 md:mx-6 sm:mx-4
          2xl:px-64 lg:px-32 md:px-10 px-0 ${
            filteredgames.length > 2
              ? "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
              : filteredgames.length === 2
              ? "md:grid-cols-2 grid-cols-1"
              : "grid-cols-1"
          }`}
        >
          {filteredgames.map((data, index) => (
            <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
              <Compact data={data} />
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FilteredGrid;
