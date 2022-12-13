import axios from 'axios';
import { ServerResponse, IncomingMessage } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import type Session from "@auth0/nextjs-auth0/dist/session/session"
import { Auth0 } from './Auth0';
import ApiClient from './ApiClient';

const ApiClientFactory = {
  async CreateBackendClient(
    req: NextApiRequest | IncomingMessage,
    res: NextApiResponse | ServerResponse,
    session?: Session | null | undefined
  ): Promise<ApiClient | null> {
    // Get session if not supplied
    if (!session) {
      const auth0 = Auth0();
      session = await auth0.getSession(req, res);
    }

    if (session) {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const authHeader = `Bearer ${session.accessToken}`;

      const instance = axios.create({
        baseURL: baseUrl,
      });
      instance.defaults.headers.common['Authorization'] = authHeader;

      return new ApiClient(instance, session.accessToken !== null);
    }

    return null;
  },
};

export default ApiClientFactory;
