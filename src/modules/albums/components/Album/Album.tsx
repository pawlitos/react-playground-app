import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlbumPhotoType, UserType } from 'modules/albums/types';
import { ActivityIndicator } from 'modules/shared';
import { getAlbumPhotos } from 'services/api/albums';
import { getUser } from 'services/api/users';
import styles from './Album.module.css';

type AlbumProps = {
  id: number;
  title: string;
  userId: number;
};

const Album = ({ id, title, userId }: AlbumProps) => {
  const [user, setUser] = useState<UserType>({ name: '' });
  const [albumMainPhoto, setAlbumMainPhoto] = useState<AlbumPhotoType>();
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([getAlbumPhotos(id), getUser(userId)])
      .then((values) => {
        setAlbumMainPhoto(values[0][0]);
        setTotalPhotos(values[0].length);
        setUser(values[1]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, userId]);

  return (
    <Link to={`${id}`} className={styles.container}>
      {loading && (
        <div className={styles.loader}>
          <ActivityIndicator />
        </div>
      )}
      {albumMainPhoto?.thumbnailUrl ? (
        <img className={styles.photo} src={albumMainPhoto.thumbnailUrl} />
      ) : (
        <div className={styles.photoPlaceholder} />
      )}
      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subtitle}>Created by: {user.name}</div>
        <div className={styles.subtitle}>Total: {totalPhotos}</div>
      </div>
    </Link>
  );
};

export default Album;
