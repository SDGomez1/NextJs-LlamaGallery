import allData from "./data";



class database {

	constructor() {}

	async getAllData() {
		return new Promise((resolve, reject) => {
			const data = Object.values(allData);
			return resolve(data);
		});
	}
}

export default database