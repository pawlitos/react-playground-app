import styles from './Button.module.css';

type Props = {
  children: string;
  variant?: 'full' | 'outlined' | 'link';
};

const Button = ({ children, variant = 'full' }: Props) => {
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

  return <button className={className}>{children}</button>;
};

export default Button;
