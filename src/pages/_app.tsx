import type { AppProps } from "next/app";

import Providers from "@/modules/Providers";
import { ToastProvider } from "react-toast-notifications";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ToastProvider autoDismiss={true} autoDismissTimeout={2000}>
        <Component {...pageProps} />
      </ToastProvider>
    </Providers>
  );
}
