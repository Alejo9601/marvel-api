import Header from "./components/Header";
import CharacterDetail from "./pages/CharacterDetail";
import { HeroProvider } from "./context/CharacterContext";
import CharacterList from "./pages/CharactersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/marvel-characters" element={<CharacterList />} />
            <Route path="/character-detail" element={<CharacterDetail />} />
          </Routes>
        </BrowserRouter>
      </HeroProvider>
    </div>
  );
}

export default App;
