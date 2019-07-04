
const checkHost = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost:3000'
  } else {
    return 'https://nayp-co.github.io/instagram-access-token-generator/';
  }
}

export { checkHost };
