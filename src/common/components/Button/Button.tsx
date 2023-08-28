import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Props = {
  children: string;
  href?: string;
  as?: 'button' | 'input';
  type?: 'button' | 'submit';
  variant?: 'full' | 'outlined' | 'link';
  onClick?: () => void;
};

const Button = ({
  children,
  href,
  as = 'button',
  type = 'button',
  variant = 'full',
  onClick,
}: Props) => {
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

  if (href) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    );
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
