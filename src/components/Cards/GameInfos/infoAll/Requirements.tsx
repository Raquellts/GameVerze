/*import React from "react";
//CSS
import info_all from "./InfoAll.module.scss";
//Interfaces
import { GameDetails } from "../../../Interfaces/SteamInfos";
import Link from "next/link";

interface InfosProps {
  data: GameDetails;
  appid: number;
}
const Requirements = ({ data, appid }: InfosProps) => {
  // Define the type for the requirements object
  type RequirementsType = {
    minimum: string;
    recommended?: string; // Make the recommended property optional
  };

  // Update the Requirements component to handle the case where recommended is undefined
  const Requirements = ({
    requirements,
  }: {
    requirements: RequirementsType;
  }) => {
    if (!requirements) {
      return <h1>...loading</h1>;
    }

    //requirements
    const { minimum, recommended } = requirements;
    return (
      <>
        {minimum && (
          <span
            className={info_all.description}
            dangerouslySetInnerHTML={{ __html: minimum }}
          ></span>
        )}
        {recommended && (
          <span
            className={info_all.description}
            dangerouslySetInnerHTML={{ __html: recommended }}
          ></span>
        )}
      </>
    );
  };
  return (
    <>
      <p className={`${info_all.important} divider`}>Requirements</p>
      <span className={info_all.description}>
        <div>Pc</div>
        <span className={`flex flex-row`}>
          <Requirements
            requirements={(data && data[appid].data.pc_requirements) || ""}
          />
        </span>

        <div>Mac</div>
        <span className={`flex flex-row`}>
          <Requirements
            requirements={(data && data[appid].data.mac_requirements) || ""}
          />
        </span>

        <div>Linux</div>
        <span className={`flex flex-row`}>
          <Requirements
            requirements={(data && data[appid].data.linux_requirements) || ""}
          />
        </span>
      </span>
    </>
  );
};

export default Requirements;*/
