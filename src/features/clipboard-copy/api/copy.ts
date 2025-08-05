import { errorLogger } from "@/shared/lib/error";

export const copy = async (content?: string) => {
  if (!content) return;
  try {
    await navigator.clipboard.writeText(content);
  } catch (error) {
    errorLogger.error("copy to clipboard", error);
  }
};
