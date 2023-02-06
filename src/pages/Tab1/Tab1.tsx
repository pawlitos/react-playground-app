import { useEffect, useState } from 'react';
import { getAlbums } from '../../services/api/albums';

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
      <h1>Tab1</h1>
      <p>{loading ? 'Loading...' : null}</p>
      <div style={{ padding: '2rem', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {albums.map((album) => {
            return (
              <div style={{ border: '1px solid', width: '200px' }}>
                <div>{album.title}</div>
                <div>Created by: {album.userId}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab1;
