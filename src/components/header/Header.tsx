import React, { useContext } from 'react';
import en from "../../assets/images/en.png";
import it from "../../assets/images/it.png";
import { BsSun, BsMoon } from "react-icons/bs";
import { AppContext } from '../../context/context';

const Header:React.FC = () => {

  const context = useContext(AppContext)
  console.log(context);
  
  //context.dispatch({type: "darkMode"})
	return (
    <div className="flex justify-between px-4 gap-10 w-[100%]">
      <div className="flex gap-4">
				<img src={en} alt="english" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer" />
        <img src={it} alt="italian" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer" />
      </div>
      <label className="bg-slate-300 relative w-16 h-8 rounded-full">
        <input
          onClick={() => context.dispatch({ type: "darkMode" })}
          type="checkbox"
          className="sr-only peer "
        />
        <span className="flex justify-center items-center w-2/5 h-4/5 bg-slate-900 absolute rounded-full left-1 top-1 cursor-pointer peer-checked:bg-slate-200 peer-checked:left-8 transition-all duration-500">
          {context.state.darkMode ? <BsMoon /> : <BsSun color={"black"} />} 
        </span>
      </label>
    </div>
  )
}

export default Header