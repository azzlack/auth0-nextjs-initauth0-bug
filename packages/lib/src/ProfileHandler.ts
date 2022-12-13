import type { AfterRefetch } from '@auth0/nextjs-auth0/dist/handlers/profile';

const ProfileHandler: AfterRefetch = async (req, res, session) => {
  // TODO: Get data from backend system

  return session;
};


export default ProfileHandler;