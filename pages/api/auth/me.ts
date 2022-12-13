import { Auth0ProfileHandler } from "../../../lib/Auth0";
import ProfileHandler from "../../../lib/ProfileHandler";

export default Auth0ProfileHandler(ProfileHandler).handleProfile;
