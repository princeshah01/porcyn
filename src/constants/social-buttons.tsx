import { GoogleIcon, GithubIcon } from "~/assets/svg";

const SOCIAL_AUTH_PROVIDERS = [
  {
    name: "github",
    icon: <GithubIcon className="rounded-lg size-5" />,
    label: "Login with GitHub",
  },
  {
    name: "google",
    icon: <GoogleIcon className="rounded-lg size-5" />,
    label: "Login with Google",
  },
];

export { SOCIAL_AUTH_PROVIDERS };
