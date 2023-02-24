export interface ITextInput {
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string;
}

function TextInput({ onChange, value }: ITextInput) {
	return <input onChange={onChange} value={value} />;
}

export default TextInput;
