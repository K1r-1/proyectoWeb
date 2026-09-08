// Por terminar

import { useState } from "react";
import TarjetaPokemon from "./TarjetaPokemon";

function DetallePokemon({nombre}) {
const [count, setCount] = useState(0);
   const testFunction = () => {
      console.log("Funcionando");
      setCount(10); 
   }

   return (
      <div className="Detalles">
         <button onClick={() => <TarjetaPokemon nombre={nombre} />}>test btn</button>
         <p>{count}</p>
      </div>
   )
}

export default DetallePokemon;