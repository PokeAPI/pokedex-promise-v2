/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
function handleError(error, callback) {
    if (callback) {
        callback('Pokedex-promise-v2 error', error);
    }
    else {
        throw error;
    }
}
export default handleError;
