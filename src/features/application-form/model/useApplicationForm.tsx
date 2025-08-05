import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApplicationStore } from "@/entities/application";
import { sendPrompt } from "@/entities/open-ai";
import { AppRoutes } from "@/shared/routes";
import {
  validateField,
  validateFields,
  disabledSubmitButton,
} from "./validation";
import { INIT_FORM } from "./constants";
import { errorLogger } from "@/shared/lib/error";

const useApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(INIT_FORM);

  const {
    loading,
    setLoading,
    addApplication,
    updateApplication,
    getApplication,
  } = useApplicationStore();

  const isEditFormMode = Boolean(id);

  useEffect(() => {
    if (!id) return;
    const application = getApplication(id);
    setForm((prev) => ({
      jobTitle: { ...prev.jobTitle, value: application?.jobTitle || "" },
      company: { ...prev.company, value: application?.company || "" },
      skills: { ...prev.skills, value: application?.skills || "" },
      details: { ...prev.details, value: application?.details || "" },
    }));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);

      e.preventDefault();

      const isInvalidForm = validateFields(form, handleChange);
      if (isInvalidForm) return;

      const response = await sendPrompt({
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        skills: form.skills.value,
        details: form.details.value,
      });

      if (isEditFormMode && id) {
        updateApplication({
          id,
          jobTitle: form.jobTitle.value,
          company: form.company.value,
          skills: form.skills.value,
          details: form.details.value,
          text: response as string,
        });
        return;
      }

      const newId = addApplication({
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        skills: form.skills.value,
        details: form.details.value,
        text: response as string,
      });

      navigate(AppRoutes.application(String(newId)));
    } catch (error) {
      errorLogger.error("submit application form", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = useCallback(
    ({ field, value }: { field: string; value: string }) => {
      const error = validateField(field, value);
      setForm((prev) => ({
        ...prev,
        [field]: { value, error, touched: true },
      }));
      return error;
    },
    []
  );

  const title =
    [form.jobTitle.value, form.company.value]
      .filter((item) => item)
      .join(", ") || "New application";

  const isDisabledSubmitButton = disabledSubmitButton(form);

  return {
    form,
    title,
    handleSubmit,
    handleChange,
    isEditFormMode,
    isDisabledSubmitButton,
    loading,
  };
};

export default useApplicationForm;
