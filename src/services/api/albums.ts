import httpClient from './httpClient';

export const getAlbums = () => {
  return httpClient.get('albums');
};
