import styles from './Button.module.css';

type Props = {
  children: string;
  as?: 'button' | 'input';
  type?: 'button' | 'submit';
  variant?: 'full' | 'outlined' | 'link';
  onClick?: () => void;
};

const Button = ({ children, as = 'button', type = 'button', variant = 'full', onClick }: Props) => {
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

  if (as === 'input') {
    return <input value={children} type={type} className={className} onClick={onClick} />;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
