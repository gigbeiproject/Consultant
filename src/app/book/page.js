"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyInline() {
  return (
    <div className="flex justify-center">
      <InlineWidget url="https://calendly.com/help-edumentor360" />
    </div>
  );
}