interface ICounter {
	count: number;
}

function Counter({ count }: ICounter) {
	return <p>{`There are ${count} items in the list`}</p>;
}

export default Counter;
