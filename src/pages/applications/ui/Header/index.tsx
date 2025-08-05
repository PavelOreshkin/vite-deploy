import Typography from "@/shared/ui/Typography";
import styles from "./styles.module.css";
import { CreateApplicationButton } from "@/features/open-create-application";
import Divider from "@/shared/ui/Divider";

const Header = () => (
  <header>
    <div className={styles.header}>
      <Typography as="h1" type="h1" className={styles.title}>
        Applications
      </Typography>
      <CreateApplicationButton size="medium" />
    </div>
    <Divider className={styles.divider} />
  </header>
);

export default Header;
