import { errorLogger } from "./errorLogger";

export const setupGlobalErrorHandlers = () => {
  window.onerror = (message, _source, _lineno, _colno, error) => {
    errorLogger.error("window.onerror", error ?? message);
  };

  window.onunhandledrejection = (event) => {
    errorLogger.error("unhandledrejection", event.reason);
  };
};
