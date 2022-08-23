import { Card } from 'primereact/card';
import { CardContent } from '../recruiter_components/recluiter_vacants/CardContent';

export const CardData = ({obj, process}) => {

	const title = (
		<div>
			<p className='text-gray-600 text-center m-0 p-0'>{obj.title}</p>
		</div>
	);

	const header = (
		<div className='card '>
			<div className='card-container green-container overflow-hidden'>
				<div className='flex justify-content-center h-10rem'>
					<img
						alt='Imagen de vacante'
						onError={(e) => e.target.src='https://random.imagecdn.app/418/120'}
						src={obj.image}
						width={'100%'}
						height={'100%'}
						className='object-fit border-round-sm'
					/>
				</div>
			</div>
		</div>
	);

	return (
		<Card
			title={title}
			className='w-25rem m-5 shadow-3 hover:shadow-6'
			header={header}>
			<CardContent obj={obj} process={process}/>
		</Card>
	);
}
