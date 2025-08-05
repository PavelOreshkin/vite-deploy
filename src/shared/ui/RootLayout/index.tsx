import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default RootLayout;
