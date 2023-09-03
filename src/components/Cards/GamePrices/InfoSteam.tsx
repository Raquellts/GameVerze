import React from "react";
//CSS
import cards from "../../Cards/cards.module.scss";
//Interfaces
import { GameDetails } from "../../Interfaces/SteamInfos";

interface InfosProps {
  data: GameDetails;
  appid: number;
}

const InfoSteam = ({ data, appid }: InfosProps) => {
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

    const { minimum, recommended } = requirements;

    return (
      <>
        {minimum && <span dangerouslySetInnerHTML={{ __html: minimum }}></span>}
        {recommended && (
          <span dangerouslySetInnerHTML={{ __html: recommended }}></span>
        )}
      </>
    );
  };

  return (
    <>
      {data[appid] ? (
        <div className={`${cards.infoCard} flex flex-col`}>
          <p className={cards.infoDescription}>
            <span>Description</span>
            {data[appid].data.short_description}
          </p>

          {data[appid].data.genres ? (
            <p className={cards.infoDescription}>
              <span>Genres</span>
              {data[appid].data.genres.map((genre, index) => (
                <span key={index}>{genre.description}</span>
              ))}
            </p>
          ) : (
            <h1>...loading</h1>
          )}

          {data[appid].data.developers ? (
            <p className={cards.infoDescription}>
              <span>Developers</span>
              {data[appid].data.developers.map((developer, index) => (
                <span key={index}>{developer}</span>
              ))}
            </p>
          ) : (
            <h1>...loading</h1>
          )}

          {data[appid].data.publishers ? (
            <p className={cards.infoDescription}>
              <span>Publishers</span>
              {data[appid].data.publishers.map((publisher, index) => (
                <span key={index}>{publisher}</span>
              ))}
            </p>
          ) : (
            <h1>...loading</h1>
          )}

          <p className={cards.infoDescription}>
            <span>Metacritic</span>
            {data[appid].data.metacritic?.score}
            {data[appid].data.metacritic?.url ? (
              <a href={data[appid].data.metacritic.url}>See More</a>
            ) : (
              <h1>...loading</h1>
            )}
          </p>

          <p className={cards.infoDescription}>
            <span>Languages</span>
            <span
              dangerouslySetInnerHTML={{
                __html: data[appid].data.supported_languages,
              }}
            ></span>
          </p>

          <p className={cards.infoDescription}>
            <span>Requirements</span>
            {data[appid].data.pc_requirements ? (
              <span>
                Pc:
                <Requirements requirements={data[appid].data.pc_requirements} />
              </span>
            ) : (
              <h1>...loading</h1>
            )}

            {data[appid].data.mac_requirements ? (
              <span>
                Mac:
                <Requirements
                  requirements={data[appid].data.mac_requirements}
                />
              </span>
            ) : (
              <h1>...loading</h1>
            )}

            {data[appid].data.linux_requirements ? (
              <span>
                Linux:
                <Requirements
                  requirements={data[appid].data.linux_requirements}
                />
              </span>
            ) : (
              <h1>...loading</h1>
            )}
          </p>

          <p className={cards.infoDescription}>
            <span>Official Website</span>
            {data[appid].data.website}
          </p>
        </div>
      ) : (
        <h1>...loading</h1>
      )}
    </>
  );
};

export default InfoSteam;
