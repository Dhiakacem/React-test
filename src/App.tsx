
import './App.css';
import { AficherListeMusique } from './TP1/AfficherListeMusique';
import { pieces } from './TP1/pieces';
import { TrierListeMusiques } from './TP1/TrierListemusiques';
import {FiltrerPiecesmusicales} from './TP1/FiltrerPiecesmusicales';

function App() {
  return (
    <>
   {/* <AficherListeMusique pieces={pieces}/> */}
    < FiltrerPiecesmusicales pieces={pieces}/>
    </>
  );
}
export default App;
