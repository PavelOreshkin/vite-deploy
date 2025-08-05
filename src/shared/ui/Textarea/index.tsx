import styles from "./styles.module.css";
import clsx from "clsx";
import Typography from "../Typography";
import { memo } from "react";

type TextareaProps = {
  label: string;
  value: string;
  name: string;
  error: string;
  touched: boolean;
  maxLength: number;
  onChange: (args: { field: string; value: string }) => string;
  placeholder?: string;
  className?: string;
};

export const Textarea = ({
  label,
  value,
  error,
  name,
  touched,
  maxLength,
  onChange,
  placeholder,
  className,
  ...props
}: TextareaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ field: name, value: e.target.value });
  };

  return (
    <div className={clsx(styles.root, className)}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={clsx(styles.textarea, {
          [styles.textareaError]: touched && error,
        })}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      <Typography
        className={clsx(styles.caption, { [styles.error]: error })}
        type="caption"
      >
        {value.length} / {maxLength}
      </Typography>
    </div>
  );
};

export default memo(Textarea);
