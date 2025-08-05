import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "pre";
  type?: "h1" | "h2" | "default" | "caption";
  className?: string;
};

const Typography = ({
  as: Tag = "p",
  type = "default",
  children,
  className,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Tag
      className={clsx(
        styles.typographyRoot,
        { [styles?.[type]]: type },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
