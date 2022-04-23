import Header from "./components/Header";
import CharacterContent from "./components/CharacterContent";
import { HeroProvider } from "./context/CharacterContext";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <Header />
        <CharacterContent />
      </HeroProvider>
    </div>
  );
}

export default App;
