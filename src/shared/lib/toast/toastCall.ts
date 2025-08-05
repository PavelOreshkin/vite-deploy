import toast from "react-hot-toast";

export const toastError = (text: string) =>
  toast.error(text, {
    duration: 4000,
    position: "bottom-right",
    removeDelay: 1000,
  });
