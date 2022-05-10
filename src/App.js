import Header from "./components/Header";
import CharacterDetail from "./pages/CharacterDetail";
import { HeroProvider } from "./context/CharacterContext";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <Header />
        <CharacterDetail />
      </HeroProvider>
    </div>
  );
}

export default App;
