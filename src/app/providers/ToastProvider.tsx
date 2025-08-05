import { Toaster } from "react-hot-toast";
import { type PropsWithChildren } from "react";

export const ToastProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <Toaster />
  </>
);
