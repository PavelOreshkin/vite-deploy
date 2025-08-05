import Typography from "@/shared/ui/Typography";
import Progress from "@/shared/ui/Progress";
import { useApplicationStore } from "@/entities/application";
import { APPLICATIONS_MAX_COUNT } from "@/shared/constants";
import { CreateApplicationButton } from "@/features/open-create-application";
import styles from "./styles.module.css";

const GoalBanner = () => {
  const { applications } = useApplicationStore();

  if (applications.length >= APPLICATIONS_MAX_COUNT) {
    return null;
  }

  return (
    <section className={styles.goalBannerRoot}>
      <div className={styles.content}>
        <Typography as="h2" type="h2" className={styles.title}>
          Hit your goal
        </Typography>
        <Typography className={styles.description}>
          Generate and send out couple more job applications today to get hired
          faster{" "}
        </Typography>
        <CreateApplicationButton size="large" className={styles.button} />
        <Progress
          filled={applications.length}
          total={APPLICATIONS_MAX_COUNT}
          shape="long"
          withDescription
          className={styles.progress}
        />
      </div>
    </section>
  );
};

export default GoalBanner;
