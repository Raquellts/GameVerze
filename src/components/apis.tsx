import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { NEXARDA_API_URL, STEAM_API_URL } from "../components/urls";
import { GameResponse } from "../components/Interfaces/GamePrice";
import { APIResponse } from "../components/Interfaces/GameList";
require("dotenv").config();

const TOKEN = process.env.TOKEN;

interface DynamicParams {
  [key: string]: string | string[];
}

interface SteamParams {
  applist: {
    apps: {
      appid: number;
      name: string;
    }[];
  };
}

function cleanAndFormatString(input: string): string {
  return input
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .trim();
}

export const getStaticPaths: GetStaticPaths<DynamicParams> = async () => {
  try {
    const response: AxiosResponse<APIResponse> = await axios.get(
      NEXARDA_API_URL
    );
    const arr = response.data;
    const paths = arr.results.items.map((id, index) => ({
      params: { id: id.game_info.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error("An error occurred while fetching paths:", error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error("Missing params");
  }

  const { id } = params;

  try {
    const jsonDataResponse = await axios.get(
      `https://www.nexarda.com/api/v3/prices?type=game&id=${id}&currency=GBP`
    );
    const steamResponse = await axios.get(STEAM_API_URL);

    const jsondata: GameResponse = jsonDataResponse.data;
    const steamgames: SteamParams = steamResponse.data;

    const cleanedAppName = cleanAndFormatString(jsondata?.info?.name);

    const matchedGame = steamgames.applist.apps.find((app) => {
      const cleanedApp = cleanAndFormatString(app.name);
      return cleanedApp === cleanedAppName;
    });

    const appid = matchedGame ? matchedGame.appid : null;

    const steaminfo = await axios.get(
      `https://store.steampowered.com/api/appdetails?appids=${appid}&l=en`
    );
    const steamdata = steaminfo.data;

    const steamgrid = await axios({
      method: "GET",
      url: `https://www.steamgriddb.com/api/v2/heroes/steam/${appid}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const gridimgs = steamgrid.data;

    return {
      props: {
        jsondata,
        appid,
        steamdata,
        gridimgs,
      },
    };
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return {
      props: {
        jsondata: null,
        appid: null,
        steamdata: null,
        gridimgs: null,
      },
    };
  }
};
