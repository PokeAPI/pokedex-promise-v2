/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
function handleError(error: any, callback?: (result: any, error?: boolean | any) => any) {
  if (callback) {
    callback('Pokedex-promise-v2 error', error);
  } else {
    throw error;
  }
}

export default handleError;
