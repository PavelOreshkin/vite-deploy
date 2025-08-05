import { memo } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Typography from "../Typography";

type InputProps = {
  label: string;
  name: string;
  value: string;
  error: string;
  touched: boolean;
  onChange: (args: { field: string; value: string }) => string;
  placeholder?: string;
  className?: string;
};

export const Input = ({
  label,
  value,
  error,
  name,
  touched,
  onChange,
  placeholder,
  className,
  ...props
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ field: name, value: e.target.value });
  };

  return (
    <div className={clsx(styles.root, className)}>
      <label className={styles.label}>{label}</label>
      <input
        className={clsx(styles.input, {
          [styles.inputError]: touched && error,
        })}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      {touched && error && (
        <Typography className={styles.error} type="caption">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default memo(Input);
