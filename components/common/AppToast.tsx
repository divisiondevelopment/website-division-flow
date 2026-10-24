"use client";

import { Toaster } from "sonner";

export default function AppToast() {
  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      duration={4500}
      expand={false}
      gap={12}
      visibleToasts={4}
      offset={{ bottom: 90 }}
    />
  );
}
