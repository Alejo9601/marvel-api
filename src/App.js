import Header from "./components/Header";
import CharacterDetail from "./pages/CharacterDetail";
import { HeroProvider } from "./context/CharacterContext";
import CharacterList from "./pages/CharactersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharSearchList from "./pages/CharSearchList";
import styled from "styled-components";

const Application = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  /* background-color: beige; */
`;

function App() {
  return (
    <Application>
      <HeroProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="*" element={<h1>NOT FOUND - 404</h1>} />
            <Route path="/marvel-characters" element={<CharacterList />} />
            <Route
              path="/character-search/:charName"
              element={<CharSearchList />}
            />
            <Route
              path="/character-detail/:charName"
              element={<CharacterDetail />}
            />
          </Routes>
        </BrowserRouter>
      </HeroProvider>
    </Application>
  );
}

export default App;
