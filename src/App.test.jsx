import { render } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders the App component without errors", () => {
    render(<App />);
  });

  it("the characters titles are rendered correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Character # 1")).toBeInTheDocument();
    expect(getByText("Character # 2")).toBeInTheDocument();
  });

  it("there is a appropriate response to a fetch error", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      isError: true,
      error: { message: "Error fetching data" },
      data: null,
      isFetching: false,
    });
    const { getByText } = render(<App />);
    expect(getByText("Error: Error fetching data")).toBeInTheDocument();
  });

  it("button are disabled on pagination limits", () => {
    const { getByText } = render(<App />);
    expect(getByText("Previous Page")).toBeDisabled();
    fireEvent.click(getByText("Next Page").tohaveBeenCalled(42));
    expect(getByText("Next Page")).toBeDisabled();
  });

  it("shows shared episodes after clicking the button", () => {
    const { getByText } = render(<App />);

    const button = getByText("See shared episodes:");
    fireEvent.click(button);

    const sharedEpisodes = getByText("Characters #1 & #2 - Shared Episodes");
    expect(sharedEpisodes).toBeInTheDocument();
  });
});
