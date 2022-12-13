import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import ApiClientFactory from "../../lib/ApiClientFactory";

const Proxy: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const apiClient = await ApiClientFactory.CreateBackendClient(req, res);
      if (apiClient == null || !apiClient.isAuthenticated) {
        res.status(401).end("Unathorized");
        return;
      }

      // Make call to backend API
      const promiseResult = await apiClient.get("fact");

      res.status(promiseResult.status).send(promiseResult.data);
      
      return;
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  };
  
  export default Proxy;