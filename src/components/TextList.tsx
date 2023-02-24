import React from 'react';
import { ITextItem } from '../App';

interface ITextListProps {
	list: ITextItem[];
	setList: React.Dispatch<React.SetStateAction<ITextItem[]>>;
}

const TextList = ({ list, setList }: ITextListProps) => {
	const handleRemove = (id: string) => {
		const newList = list.filter((item) => item.id !== id);

		setList(newList);
	};

	return (
		<ul>
			{list.map((item) => (
				<li key={item.id} onClick={() => handleRemove(item.id)} className='list-item'>
					{item.text}
				</li>
			))}
		</ul>
	);
};

export default TextList;
