
import './App.css';
import { Formulaire } from './Formulaire/Formulaire';
import { Ampoule } from './Ampoules/Ampoule';
import { Podemetres } from './Podometre/Podemetres';

function App() {
  return (
    <>
      <Ampoule />
      <Podemetres />
      <Formulaire />
    </>
  );
}

export default App;
