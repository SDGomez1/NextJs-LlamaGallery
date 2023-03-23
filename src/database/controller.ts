import { DLlamaInfo } from "./data";
import allData from "./data";

class database {
    constructor() { }

    async getAllData(): Promise<DLlamaInfo[]> {
        return new Promise((resolve, reject) => {
            const data = Object.values(allData);
            return resolve(data);
        });
    }

    async getDataByName(name: string | string[] | undefined): Promise<DLlamaInfo> {
        return new Promise((resolve, reject) => {
            const data = Object.values(allData);

            for (var i = 0; i < data.length; i++) {
                const nombre = data[i].nombre.replace(' ', '')

                if (nombre == name) {
                    return resolve(data[i]);
                }
            }
        });
    }
}

export default database;