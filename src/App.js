import Header from "./components/Header";
import CharacterDetail from "./pages/CharacterDetail";
import { HeroProvider } from "./context/CharacterContext";
import CharacterList from "./pages/CharactersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharVariantsList from "./pages/CharVariantsList";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/marvel-characters" element={<CharacterList />} />
            <Route
              path="/character-search/:charName"
              element={<CharVariantsList />}
            />
            <Route
              path="/character-detail/:charName"
              element={<CharacterDetail />}
            />
            <Route path="*" element={<h1>NOT FOUND - 404</h1>} />
          </Routes>
        </BrowserRouter>
      </HeroProvider>
    </div>
  );
}

export default App;
