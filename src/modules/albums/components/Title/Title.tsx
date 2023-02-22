import { ActivityPlaceholder } from 'common';
import styles from './Title.module.css';

type TitleProps = {
  title: string | undefined;
};

const Title = ({ title }: TitleProps) => {
  if (title) {
    return <h3 className={styles.header}>{title}</h3>;
  }

  return (
    <div className={styles.titlePlaceholderContainer}>
      <ActivityPlaceholder />
    </div>
  );
};

export default Title;
