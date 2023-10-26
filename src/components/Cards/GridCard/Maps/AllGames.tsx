//Interfaces
import React, { useEffect, useState } from "react";
import buttons from "../../../../styles/buttons.module.scss";
import Link from "next/link";
import { APIResponse } from "../../../Interfaces/GameList";
import GridAllGames from "./GridAllGames";

const AllGames = ({ jsondata }: { jsondata: APIResponse }) => {
  const [currentPage, setCurrentPage] = useState(
    typeof window !== "undefined"
      ? Number(localStorage.getItem("currentPage")) || 1
      : 1
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentPage", String(currentPage));
    }
  }, [currentPage]);

  const totalPages = jsondata.results.pages;
  const maxButtons = 5;
  const displayPages = [];

  // Add current page and adjacent pages
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(currentPage + 2, totalPages);
    i++
  ) {
    displayPages.push(i);
  }

  // Add ellipsis if there are more pages before or after
  if (displayPages[0] !== 1) {
    displayPages.unshift("...");
  }
  if (displayPages[displayPages.length - 1] !== totalPages) {
    displayPages.push("...");
  }

  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex align-center justify-center my-5 mx-0 2xl:mx-10">
        <GridAllGames jsondata={jsondata} />
      </div>

      {/* PAGINAÇÃO */}
      <div className="flex flex-row align-center justify-center pb-20">
        {displayPages.map((page, index) => {
          if (page === "...") {
            return (
              <div key={index}>
                <span key={index} className="ellipsis">
                  &nbsp;...&nbsp;
                </span>
              </div>
            );
          } else {
            return (
              <Link key={index} href={`/page/${page}`} className="px-1">
                <button
                  className={`${buttons.primaryButton} ${
                    currentPage === page ? buttons.active : ""
                  }`}
                  onClick={() => setCurrentPage(Number(page))}
                >
                  {page}
                </button>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AllGames;
