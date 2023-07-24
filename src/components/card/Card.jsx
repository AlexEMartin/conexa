import { useQuery } from "react-query";
import { useContext, useState } from "react";
import { EpisodesContext } from "../../context/EpisodesContext";
import fetchEpisodes from "../../services/fetchEpisodes";
const Card = ({ episodes, image, name, status, species, storage }) => {
  const { setEp1, setEp2 } = useContext(EpisodesContext);

  const { data } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => fetchEpisodes(),
  });

  const getEpisodes = (episodes) => {
    const regex = /\d+$/;
    const appearsIn = episodes.map((str) => {
      const matches = str.match(regex);
      return matches ? matches[0] : null;
    });
    const save = data.results.filter((item) =>
      appearsIn.includes(item.id.toString())
    );

    if (storage === "1") {
      setEp1(save);
    }
    if (storage === "2") {
      setEp2(save);
    }
  };

  return (
    <div
      className="w-80 h-28 my-4 hover:bg-black bg-white hover:text-green-500 text-black border-2 border-black flex justify-start items-center rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease"
      onClick={() => {
        getEpisodes(episodes);
      }}
    >
      <img className="h-28" src={image} alt="" />
      <div className="h-full ml-2 mt-4">
        <h2 className="text-xl">{name}</h2>
        <p className="mt-4">
          {status} - {species}
        </p>
      </div>
    </div>
  );
};

export default Card;
