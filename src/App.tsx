import Wrapper from "./components/Wrapper/Wrapper";
import { CharacterProvider } from "./context/CharacterProvider";

function App() {
  return (
    <CharacterProvider>
      <Wrapper />
    </CharacterProvider>
  );
}

export default App;
