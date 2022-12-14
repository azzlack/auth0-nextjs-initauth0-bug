import { Auth0ProfileHandler, ProfileHandler } from "lib";
import type {} from "@auth0/nextjs-auth0"; // To make TS happy: https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220

export default Auth0ProfileHandler(ProfileHandler).handleProfile;
