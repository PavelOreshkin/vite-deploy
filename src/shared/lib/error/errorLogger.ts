import { toastError } from "../toast";
// in this service should connect Sentry
export class ErrorLogger {
  error(
    context: string = "unknown",
    error: unknown,
    stack?: React.ErrorInfo["componentStack"]
  ) {
    const title = `[Error][${context}]`;
    const errorToPrint = error || "unknown error";

    if (stack) {
      console.error(title, errorToPrint, stack);
    } else {
      console.error(title, errorToPrint);
    }
    toastError(`${title}, ${errorToPrint}`);
  }

  warn(message: string, data?: unknown) {
    console.warn(`[Warning] ${message}`, data);
  }

  info(message: string, data?: unknown) {
    console.info(`[Info] ${message}`, data);
  }
}

export const errorLogger = new ErrorLogger();
