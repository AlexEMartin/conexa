import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import EpisodesProvider from "./context/EpisodesContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EpisodesProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </EpisodesProvider>
  </React.StrictMode>
);
