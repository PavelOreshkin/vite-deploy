// in this service should connect Sentry
export class ErrorLogger {
  error(
    context: string = "unknown",
    error: unknown,
    stack?: React.ErrorInfo["componentStack"]
  ) {
    console.error(`[Error][${context}]`, error || "unknown error", stack);
  }

  warn(message: string, data?: unknown) {
    console.warn(`[Warning] ${message}`, data);
  }

  info(message: string, data?: unknown) {
    console.info(`[Info] ${message}`, data);
  }
}

export const errorLogger = new ErrorLogger();
