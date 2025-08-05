import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/shared/ui/RootLayout";
import { MobileProvider } from "./MobileProvider";
import { ToastProvider } from "./ToastProvider";

const Providers = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <MobileProvider>
      <ToastProvider>
        <RootLayout>{children}</RootLayout>
      </ToastProvider>
    </MobileProvider>
  </BrowserRouter>
);
export default Providers;
