import axios, { AxiosInstance } from 'axios';

class CatFactService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
  }

  getCatFact = async (): Promise<Array<any>> => {
    try {
        const response = await this.axios.get<Array<any>>(`/api/catfacts`);

        return response.data;
    }
    catch(err) {
        return [];
    }
  };
}

export default CatFactService;
