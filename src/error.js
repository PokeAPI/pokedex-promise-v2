function handleError(error, cb) {
  if (cb) {
    cb('Pokedex-promise-v2 error', error);
  } else {
    throw error;
  }
}

export default handleError;
