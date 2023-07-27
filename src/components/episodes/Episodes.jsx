import { useContext } from "react";
import { EpisodesContext } from "../../context/EpisodesContext";

const Episodes = () => {

  const { ep1, ep2, shared, setShared } = useContext(EpisodesContext);

  const sameEpisode = (ep1, ep2) => {
    const repeatedEpisodes = ep1.filter((ep) => {
      return ep2.some((ep2) => ep.id === ep2.id);
    });

    setShared(repeatedEpisodes);
  };

  return (
    <div className="w-full xl:mt-0 mt-48 flex justify-start items-start">
      <div className="w-1/3 bg-green-200 text-center">
        <h2 className="my-4">Character #1 - Only Episodes</h2>
        <div className="w-full bg-white flex items-start flex-col">
          {ep1.length > 0 &&
            ep2.length > 0 &&
            ep1.map((ep) => (
              <p className="mx-2" key={Math.random() * 1000}>
                {ep.id} - {ep.name} - {ep.air_date}
              </p>
            ))}
        </div>
      </div>
      <div className="w-1/3 bg-green-500 text-center">
        <h2 className="my-4">Characters #1 & #2 - Shared Episodes</h2>
        <div className="w-full bg-white flex justify-start flex-wrap flex-col">
          <button
            className="mt-1 ml-1 border-2 border-black p-1 rounded-md bg-black text-green-400 hover:bg-white hover:text-black transition-all duration-300 ease"
            onClick={() => sameEpisode(ep1, ep2)}
          >
            See shared episodes:
          </button>
          <div className="w-full flex items-start flex-col">
            {shared.length > 0 &&
              shared.map((ep) => (
                <p className="mx-2" key={Math.random() * 1000}>
                  {ep.id} - {ep.name} - {ep.air_date}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-green-700 text-center">
        <h2 className="my-4">Character #2 - Only Episodes</h2>
        <div className="w-full bg-white flex items-start flex-col">
          {ep2.length > 0 &&
            ep1.length > 0 &&
            ep2.map((ep) => (
              <p className="mx-2" key={Math.random() * 1000}>
                {ep.id} - {ep.name} - {ep.air_date}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
