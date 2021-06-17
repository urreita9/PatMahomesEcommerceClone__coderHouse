export const getData = async () => {
	const url = "https://mocki.io/v1/11869eda-909a-4538-9c8a-c125480fa0e3";
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
