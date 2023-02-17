import { AlbumPhotoType } from 'modules/albums/types';
import { ActivityPlaceholder } from 'modules/shared';
import styles from './Photos.module.css';

type PhotosProps = {
  photos: AlbumPhotoType[];
};

const Photos = ({ photos }: PhotosProps) => {
  if (photos.length > 0) {
    return (
      <div>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className={styles.container}>
              <div>
                <img src={photo.thumbnailUrl} alt="Thumbnail" className={styles.photo} />
              </div>
              <div className={styles.titleContainer}>
                <span>{photo.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <div key={num} className={styles.container}>
            <div>
              <div className={styles.photoPlaceholderContainer}>
                <ActivityPlaceholder />
              </div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.titlePlaceholderContainer}>
                <ActivityPlaceholder />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
