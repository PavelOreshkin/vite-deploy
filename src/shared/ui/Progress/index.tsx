import Typography from "../Typography";
import styles from "./styles.module.css";
import clsx from "clsx";

type ProgressProps = {
  total: number;
  filled: number;
  shape?: "round" | "long";
  withDescription?: boolean;
  className?: string;
};

const Progress = ({
  total,
  filled,
  shape = "round",
  withDescription = false,
  className,
}: ProgressProps) => {
  return (
    <div className={clsx(styles.progressRoot, className)}>
      <div className={styles.progress}>
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={clsx(styles.segment, {
              [styles.roundShape]: shape === "round",
              [styles.longShape]: shape === "long",
              [styles.filled]: filled > index,
            })}
          />
        ))}
      </div>
      {withDescription && (
        <Typography className={styles.description}>
          {filled} out of {total}
        </Typography>
      )}
    </div>
  );
};

export default Progress;
