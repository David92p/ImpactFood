import React, { useContext } from 'react'
import { DispatchContext, StarterContext } from '../../context/context';
import { IoIosArrowBack } from 'react-icons/io';

const Question:React.FC = () => {

  const context = useContext(StarterContext);
	const dispatch = useContext(DispatchContext);

	console.log(context);
	

	return (
		<div className={`flex flex-col ${
			context?.darkMode
				? "bg-green-200"
				: "bg-green-300"
		} text-slate-900 font-bold tracking-wider text-justify text-xl leading-loose my-8 p-4 gap-y-8 rounded-xl`}>
				<div className='font-extrabold text-2xl sm:text-4xl text-justify leading-relaxed p-8'>
					I surrogati della carne come i burger vegetali che hanno la pretesa di inserirsi come sostituti della carne per colore, forma e consistenza, hanno un impatto sostenibile?
				</div>

				<div className='flex items-start gap-4 h-auto'>
					<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
					<label htmlFor="vehicle1">Si, la produzione di questi prodotti non hanno impatto sul nostro pianeta</label>
				</div>
				<div className='flex items-start gap-4 h-auto'>
					<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
					<label htmlFor="vehicle1">No, la produzione di questi alimenti hanno un impatto superiore rispetto al consumo di carni bianche</label>
				</div>
				<div className='flex items-start gap-4 h-auto'>
					<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
					<label htmlFor="vehicle1">No, vi sono all'interno oli raffinali parzialmente idrogenati, amido modificato, aromi chimici e glicerina che aiutano la consistenza a essere il più vicina possibile a quella della carne</label>
				</div>
				<div className='flex items-start gap-4 h-auto'>
					<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
					<label htmlFor="vehicle1">Si, la produzione di questi alimenti permette di non utilizzare le risorse ambientali</label>
				</div>
		</div>
	)
}

export default Question
