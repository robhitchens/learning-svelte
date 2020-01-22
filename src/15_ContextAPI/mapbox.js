import mapbox from 'mapbox-gl';

//https://account.mapbox.com/access-tokens
console.info(`Mapbox access token is ${'MAPBOX_ACCESS_TOKEN'}`);
mapbox.accessToken = 'MAPBOX_ACCESS_TOKEN';

const key = {};

export {mapbox, key};