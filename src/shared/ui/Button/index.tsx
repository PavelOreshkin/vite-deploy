import { memo } from "react";
import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Loader from "@/shared/ui/Loader";

type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  color?: "success" | "transparent";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  loading = false,
  disabled = false,
  variant = "contained",
  color = "transparent",
  size = "medium",
  startIcon,
  endIcon,
  children,
  className,
  type,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      onClick?.();
    }
  };
  return (
    <button
      className={clsx(
        styles.buttonRoot,
        styles?.[`${size}Size`],
        styles?.[`${variant}Variant`],
        styles?.[`${color}Color`],
        { [styles.disabled]: disabled },
        { [styles.loading]: loading },
        className
      )}
      type={type}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      {...props}
    >
      {loading && <Loader className={styles.loader} />}
      {!loading && (
        <div className={styles.content}>
          {startIcon}
          <p>{children}</p>
          {endIcon}
        </div>
      )}
    </button>
  );
};

export default memo(Button);
