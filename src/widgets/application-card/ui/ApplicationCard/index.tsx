import styles from "./styles.module.css";
import clsx from "clsx";
import Typography from "@/shared/ui/Typography";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import { ClipboardCopy } from "@/features/clipboard-copy";
import { RemoveApplicationButton } from "@/features/remove-application";

type ApplicationCardProps = {
  id?: string;
  fullHeight?: boolean;
  content?: string;
  loading?: boolean;
  canRemove?: boolean;
  className?: string;
};

const ApplicationCard = ({
  id,
  content,
  fullHeight,
  loading,
  canRemove = true,
  className,
}: ApplicationCardProps) => {
  const navigate = useNavigate();

  const handleOpenCard = () => {
    if (!id) return;
    navigate(AppRoutes.application(id));
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label="Open details section"
      className={clsx(
        styles.root,
        {
          [styles.rootFullHeight]: fullHeight,
        },
        className
      )}
      onClick={handleOpenCard}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          handleOpenCard();
        }
      }}
    >
      {loading && (
        <div className={styles.loaderWrap}>
          <div className={styles.loader} />
          <div className={styles.loaderBlur} />
        </div>
      )}
      {!loading && (
        <>
          <div
            className={clsx(styles.contentWrap, {
              [styles.contentFullHeight]: fullHeight,
            })}
          >
            <Typography as="pre" className={styles.content}>
              {content}
            </Typography>
            {!fullHeight && <div className={styles.fade} />}
          </div>
          <div className={styles.actions}>
            {canRemove && Boolean(id) && (
              <RemoveApplicationButton id={id as string} />
            )}
            <div />
            <ClipboardCopy content={content} />
          </div>
        </>
      )}
    </article>
  );
};

export default ApplicationCard;
