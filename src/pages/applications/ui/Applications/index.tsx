import styles from "./styles.module.css";
import Header from "../Header";
import CardList from "../CardList";
import { GoalBanner } from "@/widgets/goal-banner";
import { ErrorBoundary } from "@/shared/lib/error";
import Typography from "@/shared/ui/Typography";

const Applications = () => {
  return (
    <div className={styles.applicationsRoot}>
      <Header />
      <ErrorBoundary
        fallback={
          <Typography>Something went wrong, we already work on it</Typography>
        }
      >
        <CardList />
      </ErrorBoundary>
      <GoalBanner />
    </div>
  );
};

export default Applications;
