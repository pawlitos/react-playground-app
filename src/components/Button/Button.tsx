import styles from './Button.module.css';

type Props = {
  children: string;
  variant?: 'full' | 'outlined' | 'link';
  onClick?: () => void;
};

const Button = ({ children, variant = 'full', onClick }: Props) => {
  let className: string = styles.button;

  if (variant === 'full') {
    className += ` ${styles.full}`;
  }

  if (variant === 'outlined') {
    className += ` ${styles.outlined}`;
  }

  if (variant === 'link') {
    className += ` ${styles.link}`;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
