import { useQuery } from "react-query";
import { useContext } from "react";
import { EpisodesContext } from "../../context/EpisodesContext";
import {
  fetchEpisodes1,
  fetchEpisodes2,
  fetchEpisodes3,
} from "../../services/fetchEpisodes";
const Card = ({ episodes, image, name, status, species, storage }) => {
  const { setEp1, setEp2 } = useContext(EpisodesContext);

  const getEpisodes1 = useQuery({
    queryKey: ["episodes1"],
    queryFn: () => fetchEpisodes1(),
  });

  const getEpisodes2 = useQuery({
    queryKey: ["episodes2"],
    queryFn: () => fetchEpisodes2(),
  });

  const getEpisodes3 = useQuery({
    queryKey: ["episodes3"],
    queryFn: () => fetchEpisodes3(),
  });

  let data = [];

  setTimeout(() => {
    if (getEpisodes1.data) {
      data.push(getEpisodes1.data.results);
    }
    if (getEpisodes2.data) {
      data.push(getEpisodes2.data.results);
    }
    if (getEpisodes3.data) {
      data.push(getEpisodes3.data.results);
    }
  }, 300);

  const getEpisodes = (episodes) => {
    const regex = /\d+$/;
    const appearsIn = episodes.map((str) => {
      const matches = str.match(regex);
      return matches ? matches[0] : null;
    });

    const save = data.map((subArray) =>
      subArray.filter((item) => appearsIn.includes(item.id.toString()))
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
      className="w-80 h-28 my-4 hover:bg-black active:relative active:top-0.5 bg-white hover:text-green-500 text-black border-2 border-black flex justify-start items-center rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease"
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
