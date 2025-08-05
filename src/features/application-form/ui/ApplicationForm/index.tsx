import clsx from "clsx";
import Typography from "@/shared/ui/Typography";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Textarea from "@/shared/ui/Textarea";
import Divider from "@/shared/ui/Divider";
import RepeatIcon from "@icons/repeat.svg?react";
import styles from "./styles.module.css";
import useApplicationForm from "../../model/useApplicationForm";

const ApplicationFrom = () => {
  const {
    form,
    title,
    loading,
    isEditFormMode,
    isDisabledSubmitButton,
    handleChange,
    handleSubmit,
  } = useApplicationForm();

  return (
    <section className={styles.fromRoot}>
      <Typography
        as="h2"
        type="h2"
        className={clsx(styles.title, {
          [styles.emptyTitle]: !form.jobTitle.value && !form.company.value,
        })}
      >
        {title}
      </Typography>

      <Divider className={styles.divider} />
      <form action="submit" className={styles.from} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input
            label="Job title"
            name="jobTitle"
            {...form.jobTitle}
            onChange={handleChange}
            aria-label="job title input"
          />
          <Input
            label="Company"
            name="company"
            {...form.company}
            onChange={handleChange}
            aria-label="company input"
          />
        </div>
        <Input
          label="I am good at..."
          name="skills"
          {...form.skills}
          onChange={handleChange}
          aria-label="skills input"
        />
        <Textarea
          label="Additional details"
          name="details"
          {...form.details}
          onChange={handleChange}
          maxLength={1200}
          aria-label="details textarea"
        />
        {isEditFormMode ? (
          <Button
            variant="outlined"
            size="large"
            startIcon={<RepeatIcon />}
            disabled={isDisabledSubmitButton}
            type="submit"
            loading={loading}
            aria-label="retry"
          >
            Try Again
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            disabled={isDisabledSubmitButton}
            type="submit"
            loading={loading}
            aria-label="generate"
          >
            Generate Now
          </Button>
        )}
      </form>
    </section>
  );
};

export default ApplicationFrom;
