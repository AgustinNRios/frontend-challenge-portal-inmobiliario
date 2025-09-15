"use client";
import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>  
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
