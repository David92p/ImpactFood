import React, { useState } from "react";

import logo from "../../assets/images/logo.jpg";

const Starter: React.FC = () => {

	//prova descrizione
	const [toggle, setToggle] = useState<boolean>(false)


  return (
    <div className="flex flex-col items-center text-white sm:w-[50%] mx-4 tracking-wider">
      <div className="text-3xl sm:text-4xl text-center font-medium">
        Benvenuto su ImpactFood
      </div>
      <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-4 px-6" />
      {/* <div className="text-center text-xl sm:text-2xl mt-4 sm:mx-4">
        Questo è un quiz che aiuta le persone a conoscere il cibo e l'impatto
        che esso ha sul nostro pianeta.
      </div> */}
      <div className="flex flex-col items-center mt-4 px-4 text-xl sm:text-lg text-center">
        Per iniziare il test, clicca sul pulsante qui sotto.
        <button className="btn mt-6 text-xl ">START</button>
      </div>
      <div className="flex flex-col w-[100%] my-auto text-lg sm:text-2xl">
        { toggle ? <div className="w-[100%] h-auto" onClick={() => setToggle(!toggle)}>Contenuto testo bottone </div> : 
					<>
						<div className="flex h-1/2 gap-x-3 mb-2">
							<button className="w-1/2 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800" onClick={() =>setToggle(!toggle)}>Supporto</button>
							<button className="w-1/2 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800" onClick={() =>setToggle(!toggle)}>Perchè farlo?</button>
						</div>
						<div className="flex h-1/2 gap-x-3 ">
							<button className="w-1/2 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800" onClick={() =>setToggle(!toggle)}>Calcolo punteggio</button>
							<button className="w-1/2 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800" onClick={() =>setToggle(!toggle)}>Perchè è utile?</button>
						</div>	
					</>
				} 
      </div>
    </div>
  );
};

export default Starter;
