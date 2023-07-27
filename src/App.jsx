import Characters from "./components/characters/Characters";
import Episodes from "./components/episodes/Episodes";
import "./App.css";

function App() {
  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-full xl:mt-0 mt-48 xl:h-[500px] h-[380px] flex justify-center items-center xl:flex-row flex-col">
        <Characters number="1" />
        <Characters number="2" />
      </div>
      <Episodes />
    </div>
  );
}

export default App;
