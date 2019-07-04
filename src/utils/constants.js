const PATHS_DEV = Object.freeze({
  GENERATOR: '/',
  PARSER: '/parser',
});

const PATHS_PROD = Object.freeze({
  GENERATOR: `${process.env.PUBLIC_URL}/`,
  PARSER: `${process.env.PUBLIC_URL}/parser`,
});

const PROTOCOL = Object.freeze({
  HTTP: 'http',
});

const HASH = Object.freeze({
  ACCESS_TOKEN: '#access_token=ACCESS-TOKEN',
})

export {
  PATHS_DEV,
  PATHS_PROD,
  PROTOCOL,
  HASH
};
