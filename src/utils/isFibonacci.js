const isPerfectSquare = (x) => {
	let s = parseInt(Math.sqrt(x));
	return s * s === x;
};

export const isFibonacci = (num) => {
	return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
};
