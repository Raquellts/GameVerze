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

function FormatedString(input: string): string {
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

  let jsondata: GameResponse | null = null;
  let appid: number | null = null;
  let gridimgs: any = null;
  let gridlogos: any = null;

  try {
    const jsonDataResponse = await axios.get(
      `https://www.nexarda.com/api/v3/prices?type=game&id=${id}&currency=GBP`
    );

    jsondata = jsonDataResponse.data;

    let steamResponse;
    let steamgames;
    let steaminfo;

    //steam names-ids list and steamDATA api
    try {
      steamResponse = await axios.get(STEAM_API_URL);
      steamgames = steamResponse.data;

      const cleanedAppName = FormatedString(jsondata?.info?.name ?? "");

      const matchedGame = steamgames.applist.apps.find((app: any) => {
        const cleanedApp = FormatedString(app.name);
        return cleanedApp === cleanedAppName;
      });

      appid = matchedGame ? matchedGame.appid : null;

      try {
        steaminfo = await axios.get(
          `https://store.steampowered.com/api/appdetails?appids=${appid}&l=en`
        );
      } catch (error) {
        console.error("An error occurred while fetching Steam info:");
        steaminfo = null;
      }
    } catch (error) {
      console.error("An error occurred while fetching Steam games:");
      steamResponse = null;
      steamgames = null;
      steaminfo = null;
    }

    // steamGRID heroes - banner
    try {
      const steamgridhero = await axios({
        method: "GET",
        url: `https://www.steamgriddb.com/api/v2/heroes/steam/${
          appid ? appid : ""
        }`,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      gridimgs = steamgridhero.data;
    } catch (error) {
      console.error("An error occurred while fetching grid images:");
      gridimgs = null;
    }

    // steamGRID logos
    try {
      const steamgridlogo = await axios({
        method: "GET",
        url: `https://www.steamgriddb.com/api/v2/logos/steam/${
          appid ? appid : ""
        }`,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      gridlogos = steamgridlogo.data;
    } catch (error) {
      console.error("An error occurred while fetching grid images:");
      gridlogos = null;
    }

    //return all
    return {
      props: {
        jsondata,
        appid,
        steamdata: steaminfo?.data || null,
        gridimgs,
        gridlogos,
      },
    };
  } catch (error) {
    console.error("An error occurred while fetching JSON data:");
    return {
      props: {
        jsondata: null,
        appid: null,
        steamdata: null,
        gridimgs,
      },
    };
  }
};
