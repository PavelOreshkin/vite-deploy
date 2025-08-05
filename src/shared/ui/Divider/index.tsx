import clsx from "clsx";
import styles from "./styles.module.css";

type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  return <div className={clsx(styles.divider, className)} />;
};

export default Divider;
