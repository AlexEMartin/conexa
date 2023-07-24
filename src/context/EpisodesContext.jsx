import { createContext, useState } from "react";

export const EpisodesContext = createContext();

const EpisodesProvider = ({ children }) => {
  const [ep1, setEp1] = useState({});
  const [ep2, setEp2] = useState({});
  const [shared, setShared] = useState({});

  return (
    <EpisodesContext.Provider value={{ ep1, ep2, setEp1, setEp2, shared, setShared }}>
      {children}
    </EpisodesContext.Provider>
  );
};

export default EpisodesProvider;