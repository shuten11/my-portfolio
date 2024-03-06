import React from "react";
import { useTranslations } from "next-intl";
import { CardContent } from "@/components/ui/card";

function Academic() {
  const t = useTranslations("Academic");
  const keys = ["EI", "CTSP", "ESAC"] as const;

  return (
    <CardContent className="flex flex-col gap-6">
      {keys.map((key) => (
        <div key={key} className="flex flex-col gap-1">
          <h4 className="font-bold">{t(`${key}.name`)}</h4>
          <p className="shrink-0 text-sm dark:text-neutral-300">
            {t(`${key}.year`)}
          </p>
          <div className="flex items-center justify-start gap-1 text-sm">
            <p className="text-neutral-500 dark:text-neutral-400">
              {t(`${key}.school`)} - {t(`${key}.local`)}
            </p>
          </div>
        </div>
      ))}
    </CardContent>
  );
}
export default Academic;
