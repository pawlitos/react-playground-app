export type AlbumType = {
  id: number;
  title: string;
  userId: number;
};

export type AlbumPhotoType = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
