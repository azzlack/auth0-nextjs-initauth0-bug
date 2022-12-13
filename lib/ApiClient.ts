import { AxiosInstance } from "axios";

class ApiClient {
    private axios: AxiosInstance;
  
    constructor(axios: AxiosInstance, isAuthenticated: boolean) {
      this.axios = axios;
      this.isAuthenticated = isAuthenticated;
    }

    public isAuthenticated: boolean;

    public async get<T>(path: string): Promise<any> {
      const response = await this.axios.get<T>(path);
  
      return {
        status: response.status,
        data: response.data,
        headers: response.headers,
      };
    }
}

export default ApiClient;