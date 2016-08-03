const values = {};

values.protocol = 'http';
values.hostName = '://pokeapi.co';
values.versionPath = '/api/v2/';

values.setProtocol = (newProtocol) => {
    values.protocol = newProtocol;
}
values.setHostName = (newHostName) => {
    values.hostName = `://${newHostName}`;
}
values.setVersionPath = (newVersionPath) => {
    values.versionPath = newVersionPath;
}

export { values };
