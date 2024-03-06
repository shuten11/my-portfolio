import React from "react";
import { CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations("Languages");
  return (
    <CardContent className="text-justify text-sm text-neutral-500 dark:text-neutral-400">
      <ul className="list-disc pl-4">
        <li>{t("portuguese")}</li>
        <li>{t("english")}</li>
      </ul>
    </CardContent>
  );
}
