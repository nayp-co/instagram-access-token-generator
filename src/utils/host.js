import { PATHS_DEV, PATHS_PROD } from "./constants";

const checkHost = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost:3000'
  } else {
    return 'https://nayp-co.github.io/instagram-access-token-generator/';
  }
}

const checkPath = () => {
  if (process.env.NODE_ENV === 'development') {
    return PATHS_DEV;
  } else {
    return PATHS_PROD;
  }
}

export { checkHost, checkPath };
