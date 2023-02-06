import { useEffect, useState } from 'react';
import { getAlbums } from '../../../../services/api/albums';
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

  return (
    <div>
      <h1>Albums</h1>
      <p>{loading ? 'Loading...' : null}</p>
      <div style={{ padding: '2rem', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {albums.map((album) => (
            <Album title={album.title} userId={album.userId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab1;
