import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import { HeroProvider } from "./context/HeroContext";

function App() {
  return (
    <div className="App">
      <HeroProvider>
        <Header />
        <HeroContent />
      </HeroProvider>
    </div>
  );
}

export default App;
