interface IButton {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
}

function Button({ children, onClick, disabled }: IButton) {
	return (
		<button onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}

export default Button;
