import { ChangeEvent } from "react";

type Props = {
  htmlFor?: string;
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
  styles: string;
  error?: boolean;
  ariaLabel?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({
  htmlFor,
  label,
  type,
  placeholder,
  name,
  styles,
  error,
  handleChange,
  ariaLabel,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles}
        onChange={handleChange}
        aria-label={ariaLabel}
      />
      {error && "This field is required"}
    </>
  );
};

export default Input;
