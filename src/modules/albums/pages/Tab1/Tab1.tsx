import { useEffect, useState } from 'react';
import { getAlbums } from '../../../../services/api/albums';
import { ActivityIndicator } from '../../../shared/components';
import Album from '../../components/Album';

type AlbumType = {
  id: number;
  title: string;
  userId: number;
};

const Tab1 = () => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    setLoading(true);
    getAlbums().then((res) => {
      setAlbums(res);
      setLoading(false);
    });
  }, []);

  const loader = (
    <p style={{ textAlign: 'center', margin: '20rem 0' }}>
      <ActivityIndicator />
    </p>
  );

  return (
    <div>
      <h1>Albums</h1>
      {loading ? loader : null}
      <div style={{ padding: '0 2rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px 10px',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {albums.map((album) => (
            <Album key={album.id} id={album.id} title={album.title} userId={album.userId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab1;
