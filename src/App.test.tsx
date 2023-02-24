import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Counter from './components/Counter';
import userEvent from '@testing-library/user-event';

test('renders the app', () => {
	render(<App />);
	const title = screen.getByRole('heading', { level: 1 });
	expect(title).toBeInTheDocument();
});

describe('<TextInput />', () => {
	test('renders an input component', () => {
		render(<TextInput />);
		const textInput = screen.getByRole('textbox');
		expect(textInput).toBeInTheDocument();
	});

	test('allows user to input text', async () => {
		render(<TextInput />);
		const textInput = screen.getByRole<HTMLInputElement>('textbox');
		userEvent.type(textInput, 'test');
		expect(textInput.value).toBe('test');
	});

	test('clears input when button is clicked', async () => {
		render(<App />);
		userEvent.type(screen.getByRole('textbox'), 'test');
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(screen.getByRole('textbox')).toHaveValue('');
	});
});

describe('<Button />', () => {
	test('renders a button component', () => {
		const onClick = jest.fn();
		const disabled = true;
		render(
			<Button onClick={onClick} disabled={disabled}>
				Test
			</Button>
		);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('allows a user to click the button', () => {
		const onClick = jest.fn();
		const disabled = false;
		render(
			<Button onClick={onClick} disabled={disabled}>
				test
			</Button>
		);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	test('disables button if text input is empty', () => {
		render(<App />);
		const button = screen.getByRole('button');
		userEvent.type(screen.getByRole('textbox'), '');
		expect(button).toBeDisabled();
	});
});

test('renders a counter component', () => {
	const count = 0;
	render(<Counter count={count} />);
	const counter = screen.getByText(/There are 0 items in the list/);
	expect(counter).toBeInTheDocument();
});

describe('<li />', () => {
	test('render list item', () => {
		render(<App />);
		userEvent.type(screen.getByRole('textbox'), 'test');
		const button = screen.getByRole('button');
		fireEvent.click(button);
		const listItem = screen.getByText('test');
		expect(listItem).toBeInTheDocument();
	});

	test('delete list item when clicked', () => {
		render(<App />);
		userEvent.type(screen.getByRole('textbox'), 'test');
		const button = screen.getByRole('button');
		fireEvent.click(button);
		const listItem = screen.getByText('test');
		fireEvent.click(listItem);
		expect(listItem).not.toBeInTheDocument();
	});
});
