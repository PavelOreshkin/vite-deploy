import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { GoalBanner } from "@/widgets/goal-banner";
import { useApplicationStore } from "@/entities/application";
import { ApplicationForm } from "@/features/application-form";
import { ApplicationCard } from "@/widgets/application-card";
import { ErrorBoundary } from "@/shared/lib/error";
import Typography from "@/shared/ui/Typography";

const INITIAL_CARD_CONTENT =
  "Your personalized job application will appear here...";

const ApplicationManage = () => {
  const { id } = useParams();
  const { loading, getApplication } = useApplicationStore();

  const content = useMemo(() => {
    if (!id) return INITIAL_CARD_CONTENT;
    const application = getApplication(id);
    return application?.text;
  }, [id, loading]);

  return (
    <div className={styles.applicationManageRoot}>
      <div className={styles.content}>
        <ErrorBoundary
          fallback={
            <Typography>
              Something went wrong with form, we already work on it
            </Typography>
          }
        >
          <ApplicationForm />
        </ErrorBoundary>
        <ErrorBoundary
          fallback={
            <Typography>
              Something went wrong with generated output, we already work on it
            </Typography>
          }
        >
          <ApplicationCard
            loading={loading}
            content={content}
            canRemove={false}
            fullHeight
          />
        </ErrorBoundary>
      </div>
      <GoalBanner />
    </div>
  );
};

export default ApplicationManage;
