import React from "react";
import { CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <CardContent className="text-justify text-sm text-neutral-500 dark:text-neutral-400">
      {t("content")}
    </CardContent>
  );
}
