export const getData = async () => {
	const url = "https://mocki.io/v1/7fa92919-07eb-4aa4-be77-babcd0ab9bb5";
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
