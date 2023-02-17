import { AlbumDetailsContainer, Photos, Title, User } from 'modules/albums/components';
import { AlbumPhotoType, AlbumType } from 'modules/albums/types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlbum, getAlbumPhotos } from 'services/api/albums';

const AlbumPage = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const [album, setAlbum] = useState<AlbumType>();
  const [photos, setPhotos] = useState<AlbumPhotoType[]>([]);

  useEffect(() => {
    if (!albumId) {
      return navigate('/', { replace: true });
    }

    const parsedAlbumId = +albumId;

    if (Number.isNaN(parsedAlbumId)) {
      return navigate('/', { replace: true });
    }

    getAlbum(parsedAlbumId).then((res) => {
      setAlbum(res);
    });

    getAlbumPhotos(parsedAlbumId).then((res) => {
      setPhotos(res);
    });
  }, [albumId]);

  return (
    <div>
      <h1>Album details</h1>
      <AlbumDetailsContainer>
        <Title title={album?.title} />
        <User userId={album?.userId} />
      </AlbumDetailsContainer>
      <h3>Photos</h3>
      <AlbumDetailsContainer>
        <Photos photos={photos} />
      </AlbumDetailsContainer>
    </div>
  );
};

export default AlbumPage;
