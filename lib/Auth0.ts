import { Auth0Server, initAuth0 } from '@auth0/nextjs-auth0';
import type { AfterRefetch, ProfileHandler } from '@auth0/nextjs-auth0/dist/handlers/profile';

const Auth0ProfileHandler = (afterRefetch: AfterRefetch) => {
  const handleProfile: ProfileHandler = async (req, res, options) => {
    const auth0 = Auth0();

    try {
      await auth0.handleProfile(req, res, {
        ...options,
        afterRefetch: afterRefetch,
        refetch: true
      });
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  };

  return {
    handleProfile: handleProfile,
  };
};

const Auth0 = (): Auth0Server => {
  const instance = initAuth0({
    clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    baseURL: process.env.AUTH0_BASE_URL || 'http://localhost:3000',
    idpLogout: true,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || '',
    secret: process.env.AUTH0_SECRET || '',
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE || '',
      scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE || 'openid profile email',
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/api/auth/callback',
    },
    session: {
      name: 'test', // Cookie name
    },
  });

  return instance;
};

export { Auth0ProfileHandler, Auth0 };
