import { useState } from "react";
import { useQuery } from "react-query";
import fetchCharacters from "../../services/fetchCharacters";
import Card from "../card/Card";

const Characters = (props) => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
    keepPreviousData: true,
  });

  return (
    <div className="relative xl:border-none border-8 border-black xl:w-1/2 w-full h-full flex flex-col">
      <h2 className="m-auto text-2xl my-4">Character # {props.number}</h2>
      <div className="overflow-auto border-t-4 border-black">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="w-full grid xl:grid-cols-2 grid-cols-1 place-items-center">
            {data.results.map((c) => (
              <Card
                key={Math.random() * 1000}
                image={c.image}
                name={c.name}
                status={c.status}
                species={c.species}
                episodes={c.episode}
                storage={props.number}
              />
            ))}
          </div>
        )}
        <button
          className="absolute top-0 left-0 ml-4 mt-4 border-2 border-black p-1 rounded-md w-28 bg-black text-green-400 hover:bg-white hover:text-black transition-all duration-300 ease"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="absolute top-0 right-0 mr-8 mt-4 border-2 border-black p-1 rounded-md w-28 bg-black text-green-400 hover:bg-white hover:text-black transition-all duration-300 ease"
          onClick={() => {
            if (page < data.info.pages) {
              setPage(page + 1);
            }
          }}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </div>
  );
};

export default Characters;
