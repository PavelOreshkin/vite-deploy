import Typography from "@/shared/ui/Typography";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import Button from "@/shared/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(AppRoutes.APPLICATIONS);
  };
  return (
    <div className={styles.notFound}>
      <Typography as="h1" type="h1">
        404 — Page Not Found
      </Typography>
      <Typography>
        Sorry, the page you are looking for doesn't exist.
      </Typography>
      <Button
        aria-label="go home button"
        onClick={handleGoHome}
        className={styles.button}
      >
        Go back to home
      </Button>
    </div>
  );
};

export default NotFound;
