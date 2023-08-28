import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'common/components';
import { Album } from 'modules/albums/components';
import { AlbumType } from 'modules/albums/types';
import { getAlbums } from 'services/api/albums';

const AlbumsSummary = () => {
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px 10px',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        {albums.map((album) => (
          <Album key={album.id} id={album.id} title={album.title} userId={album.userId} />
        ))}
      </div>
    </div>
  );
};

export default AlbumsSummary;
