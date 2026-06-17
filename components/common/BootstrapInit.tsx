"use client";

import { useEffect } from "react";

/**
 * Loads Bootstrap 5 JS once on the client (bundle includes Popper).
 * Enables data-bs-* components (dropdown, modal, collapse, tooltip, etc.).
 */
export default function BootstrapInit() {
  useEffect(() => {
    void import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
