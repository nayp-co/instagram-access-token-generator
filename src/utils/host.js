
const checkHost = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost:3000'
  } else {
    return 'http://instagram-accessotoken-generator.github.io';
  }
}

export { checkHost };
