import httpClient from './httpClient';

export const getAlbums = () => {
  return httpClient.get('albums');
};

export const getAlbum = (albumId: number) => {
  return httpClient.get(`albums/${albumId}`);
};

export const getAlbumPhotos = (albumId: number) => {
  return httpClient.get(`albums/${albumId}/photos`);
};
