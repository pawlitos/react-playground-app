import styles from './Label.module.css';

type Props = {
  children?: React.ReactNode;
  htmlFor?: string;
};

const Label = ({ children, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
};

export default Label;
