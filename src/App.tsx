import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Counter from './components/Counter';
import TextList from './components/TextList';

export interface ITextItem {
	id: string;
	text: string;
}

function App() {
	const [list, setList] = useState<ITextItem[]>([]);
	const [text, setText] = useState('');
	const disabled = text === '' ? true : false;

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setText(ev.target.value);
	};

	const handleAdd = () => {
		const newListItem = {
			id: Math.random().toString(),
			text,
		};
		setList(() => [...list, newListItem]);
		setText('');
	};

	return (
		<div className='App'>
			<h1>Adder test</h1>
			<Counter count={list.length} />
			<TextInput onChange={handleChange} value={text} />
			<Button onClick={handleAdd} disabled={disabled}>
				Add to the list
			</Button>
			<TextList list={list} setList={setList} />
		</div>
	);
}

export default App;
