import { useState } from "react";
import { Counter } from "./Componnents/Counter";
import { Usuario } from "./Componnents/Usuario";
import { TimerPadre } from "./Componnents/TimerPadre";

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
    </>
  );
}

export default App;
