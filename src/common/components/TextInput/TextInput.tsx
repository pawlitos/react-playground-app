import styles from './TextInput.module.css';

type Props = {
  id: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ id, type, value, placeholder, onChange }: Props) => {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
