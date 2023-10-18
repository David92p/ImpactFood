import React, { useContext } from "react";

import type {Question} from "../../datatypes"
import { CONTEXT, DISPATCH } from "../../context";


const Question: React.FC<Question> = ({ question, options, answer }) => {

  const context = useContext(CONTEXT);
  // const dispatch = useContext(DISPATCH);

 
  return (
    <div className={`flex flex-col  text-slate-900 font-bold tracking-wider text-justify text-xl leading-loose my-8 p-4 gap-y-8 rounded-xl  ${
      context?.darkMode
        ? "bg-green-200"
        : "bg-green-300"
    }`}>
			<div className='font-extrabold text-2xl sm:text-4xl text-justify leading-relaxed p-8'>
				{ question }
			</div>

			<div className='flex items-start gap-4 h-auto'>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
				<label htmlFor="vehicle1">{options[0]}</label>
			</div>
			<div className='flex items-start gap-4 h-auto'>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
				<label htmlFor="vehicle1">{options[1]}</label>
			</div>
			<div className='flex items-start gap-4 h-auto'>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
				<label htmlFor="vehicle1">{options[2]}</label>
			</div>
			<div className='flex items-start gap-4 h-auto'>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
				<label htmlFor="vehicle1">{options[3]}</label>
			</div>
		</div>
  );
};

export default Question;
