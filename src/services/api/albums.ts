import httpClient from './httpClient';

export const getAlbums = () => {
  return httpClient.get('albums');
};

export const getAlbumPhotos = (albumId: number) => {
  return httpClient.get(`albums/${albumId}/photos`);
};
