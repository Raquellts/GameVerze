//CSS
import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";
import axios, { AxiosResponse } from "axios";
import Navbar from "../../../components/Navs/Navbar";
import Footer from "../../../components/Navs/Footer";
import AllGames from "../../../components/Cards/GridGame/Maps/AllGames";
import { APIResponse } from "../../../components/Interfaces/GameList";
import { GetStaticPaths } from "next";

interface DynamicParams {
  [key: string]: string | string[];
}

export const getStaticPaths: GetStaticPaths<DynamicParams> = async () => {
  try {
    const pages: AxiosResponse<APIResponse> = await axios.get(
      `https://www.nexarda.com/api/v3/search?type=games`
    );
    const jsonpages = pages.data.results.pages;

    var nums = [];
    for (var i = 1; i <= jsonpages; i++) {
      await nums.push(i);
    }

    const paths = nums.map((num, index) => {
      return { params: { id: num.toString() } };
    });

    return { paths, fallback: true };
  } catch (error) {
    console.error("An error occurred while fetching paths:", error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps = async ({ params }: any) => {
  if (!params) {
    throw new Error("Missing params");
  }
  const { id } = params;

  const response: AxiosResponse<APIResponse[]> = await axios.get(
    `https://www.nexarda.com/api/v3/search?type=games&page=${id}`
  );
  const arr = response.data;

  return { props: { arr } };
};

const Index = ({ arr }: { arr: APIResponse }) => {
  const data = arr.results;
  return (
    <>
      <div className="pt-20 bg-black">
        <Navbar />
        <div className="flex align-center justify-center mx-0 md:mx-10">
          <AllGames jsondata={arr} />
        </div>
        <Footer />
      </div>
      <div className="pagination-buttons"></div>
    </>
  );
};

export default Index;
