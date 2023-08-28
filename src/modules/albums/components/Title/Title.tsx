import { ActivityPlaceholder } from 'common/components';
import styles from './Title.module.css';
import BackLink from '../BackLink/BackLink';

type TitleProps = {
  title: string | undefined;
};

const Title = ({ title }: TitleProps) => {
  if (title) {
    return (
      <h2 className={styles.header}>
        <BackLink>Albums</BackLink>
        {' / '}
        {title}
      </h2>
    );
  }

  return (
    <div className={styles.titlePlaceholderContainer}>
      <ActivityPlaceholder />
    </div>
  );
};

export default Title;
