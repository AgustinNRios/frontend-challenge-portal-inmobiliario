"use client";
import { PublicationTypeProvider } from "@/Domains/Properties/context/PublicationTypeContext";
import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <PublicationTypeProvider>
        <ToastProvider />
        {children}
      </PublicationTypeProvider>
    </HeroUIProvider>
  );
}
