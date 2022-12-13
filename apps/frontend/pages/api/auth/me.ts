import { Auth0ProfileHandler, ProfileHandler } from "lib";

export default Auth0ProfileHandler(ProfileHandler).handleProfile;
