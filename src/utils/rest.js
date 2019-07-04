import { checkHost } from "./host";
import { PATHS } from "./constants";

const requestTokenUrl = clientId => {

  const redirectUri = `${checkHost()}/${PATHS.PARSER}`

  const url =
        'https://api.instagram.com/oauth/authorize/?client_id='
        + clientId
        + '&redirect_uri='
        + redirectUri
        + '&response_type=token';

  return fetch(url, { method: 'GET'})
}

export { requestTokenUrl }