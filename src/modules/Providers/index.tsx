import { ReactNode } from "react"

import { FormProvider } from "@/contexts/Form"

type ProvidersPropsType = {
    children?: ReactNode;
}

export default function Providers({ children }: ProvidersPropsType) {
    return (
      <FormProvider>
          {children}
      </FormProvider>
    );
  }
  