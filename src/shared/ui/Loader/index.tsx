import clsx from "clsx";
import Loading from "@icons/loading.svg?react";
import styles from "./styles.module.css";

type LoaderProps = {
  className?: string;
};

const Loader = ({ className }: LoaderProps) => {
  return <Loading className={clsx(styles.loaderRoot, className)} />;
};

export default Loader;
