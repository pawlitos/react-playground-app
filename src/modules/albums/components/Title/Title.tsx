import { ActivityPlaceholder } from 'common/components';
import styles from './Title.module.css';

type TitleProps = {
  title: string | undefined;
};

const Title = ({ title }: TitleProps) => {
  if (title) {
    return <h1 className={styles.header}>{title}</h1>;
  }

  return (
    <div className={styles.titlePlaceholderContainer}>
      <ActivityPlaceholder />
    </div>
  );
};

export default Title;
