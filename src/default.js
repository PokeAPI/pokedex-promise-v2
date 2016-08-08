const values = {};

values.protocol = 'http';
values.hostName = '://pokeapi.co';
values.versionPath = '/api/v2/';
values.offset = 0;
values.limit = 100000;

values.setProtocol = (newProtocol) => {
    values.protocol = newProtocol;
}
values.setHostName = (newHostName) => {
    values.hostName = `://${newHostName}`;
}
values.setVersionPath = (newVersionPath) => {
    values.versionPath = newVersionPath;
}
values.setOffset = (newOffset) => {
    values.offset = newOffset - 1;
}
values.setLimit = (newLimit) => {
    values.limit = newLimit + 1;
}

export { values };
