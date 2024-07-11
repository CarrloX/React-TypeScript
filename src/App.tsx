import { Counter } from "./Componnents/Counter";
import { Usuario } from "./Componnents/Usuario";
import { TimerPadre } from "./Componnents/TimerPadre";
import { ContadorRed } from "./Componnents/ContadorRed";
import { Formulario } from "./Componnents/Formulario";
import { Formulario2 } from "./Componnents/Formulario2";

function App() {
  return (
    <>
      <h1>React+TypeScript </h1>
      <hr />

      <Counter/>
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre/>
      <h2>Use Reducter</h2>
      <hr />
      <ContadorRed/>
      <hr />
      <h2>Custom Hooks</h2>
      <Formulario/>
      <hr />
      <Formulario2/>
    </>
  );
}

export default App;
