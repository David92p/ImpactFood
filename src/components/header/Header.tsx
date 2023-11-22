import React, { useContext } from "react";
import en from "../../assets/images/en.png";
import it from "../../assets/images/it.png";
import { CONTEXT, DISPATCH } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons/faSun";

const Header: React.FC = () => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  return (
    <div className="flex justify-between px-4 gap-10 w-[100%]">
      <div className="flex gap-4">
        <img
          onClick={() => dispatch({ type: "language", payload: "ENG" })}
          src={en}
          alt="english"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
        />
        <img
          onClick={() => dispatch({ type: "language", payload: "ITA" })}
          src={it}
          alt="italian"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
        />
      </div>
      <label
        className={`${
          context?.darkMode ? "bg-green-300" : "bg-green-400"
        } relative w-16 h-8 rounded-full`}
      >
        <input
          onClick={() => dispatch({ type: "darkMode" })}
          type="checkbox"
          aria-label="set dark mode"
          className="sr-only peer "
        />
        <span className="flex justify-center items-center w-2/5 h-4/5 bg-slate-900 absolute rounded-full left-1 top-1 cursor-pointer peer-checked:bg-slate-200 peer-checked:left-8 transition-all duration-500">
          {context?.darkMode ? <FontAwesomeIcon icon={faMoon} size="lg" /> : <FontAwesomeIcon icon={faSun} size="lg" />}
        </span>
      </label>
    </div>
  );
};

export default Header;
