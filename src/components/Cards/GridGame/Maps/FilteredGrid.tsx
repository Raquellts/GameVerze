//Interfaces
import { GameDeal } from "../../../Interfaces/GameList";
import Link from "next/link";
import Games from "../Games";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="flex flex-col my-5 mx-0 2xl:mx-10">
      <form
        className="flex flex-row align-center justify-center"
        onSubmit={handleSubmit}
      >
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {/* TAMANHO DA TELA  -  EXTRA LARGE */}
      <div className="pt-20 grid 2xl:grid-cols-7 lg:grid-cols-5 ld:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {Array.isArray(filteredgames) ? (
          filteredgames.map((data, index) => (
            <Link key={index} href={`/game/${data.game_info.id || "404"}`}>
              <Games data={data} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FilteredGrid;
