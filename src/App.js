import Header from "./components/Header";
import CharacterDetail from "./pages/CharacterDetail";
import { HeroProvider } from "./context/CharacterContext";
import CharacterList from "./pages/CharactersList";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <Header />
        {/* <CharacterDetail /> */}
        <CharacterList />
      </HeroProvider>
    </div>
  );
}

export default App;
