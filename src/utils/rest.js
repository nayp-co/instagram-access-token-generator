import { checkHost, checkPath } from "./host";

const requestTokenUrl = clientId => {

  const PATH = checkPath()

  const redirectUri = `${checkHost()}/${PATH.PARSER}`

  const url =
        'https://api.instagram.com/oauth/authorize/?client_id='
        + clientId
        + '&redirect_uri='
        + redirectUri
        + '&response_type=token';

  return fetch(url, { method: 'GET'})
}

export { requestTokenUrl }