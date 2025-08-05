import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/shared/ui/RootLayout";
import { MobileProvider } from "./MobileProvider";
import type { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <MobileProvider>
      <RootLayout>{children}</RootLayout>
    </MobileProvider>
  </BrowserRouter>
);
export default Providers;
