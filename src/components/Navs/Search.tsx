import { useState } from "react";
import axios from "axios";
import { GameDeal } from "../Interfaces/GameList";

interface SearchFormProps {
  onSearch: (searchResult: GameDeal[] | "error") => void;
}
const Search: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchResult = await handleSearch(search);
    if (searchResult === "error") {
      setError("Game not found");
    } else {
      setError("");
    }
    onSearch(searchResult);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (game: string) => {
    try {
      const response = await axios.get(
        `https://www.nexarda.com/api/v3/search?type=games&q=${game}`
      );
      const data = response.data.results.items;
      if (data.length === 0) {
        return "error";
      } else {
        return data;
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again later.");
      return "error";
    }
  };

  return (
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
            fillRule="evenodd"
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
