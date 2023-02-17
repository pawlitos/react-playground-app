import styles from './AlbumDetailsContainer.module.css';

type AlbumDetailsContainerProps = {
  children: React.ReactNode;
};

const AlbumDetailsContainer = ({ children }: AlbumDetailsContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default AlbumDetailsContainer;
