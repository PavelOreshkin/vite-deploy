import type { INIT_FORM } from "./constants";

export const VALIDATION_MAP = {
  jobTitle: (value: string) => (value ? "" : "Job title is required"),
  company: (value: string) => (value ? "" : "Company is required"),
  skills: (value: string) => (value ? "" : "Skills are required"),
  details: (value: string) =>
    value.length <= 1200 ? "" : "Details must be less than 1200 characters",
} as const;

export const validateFields = (
  form: typeof INIT_FORM,
  onChangeFiled: (args: { field: string; value: string }) => string
) => {
  let isInvalidForm = false;
  Object.entries(form).forEach(([key, values]) => {
    const isError = onChangeFiled({
      field: key as keyof typeof form,
      value: values.value,
    });
    if (isError) isInvalidForm = true;
  });
  return isInvalidForm;
};

export const validateField = (field: string, value: string) => {
  const validate = VALIDATION_MAP[field as keyof typeof INIT_FORM];
  const error = validate?.(value) || "";
  return error;
};

export const disabledSubmitButton = (form: typeof INIT_FORM) => {
  return !form.jobTitle.value || !form.company.value || !form.skills.value;
};
