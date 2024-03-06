import React from "react";
import { useTranslations } from "next-intl";
import { CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Work() {
  const t = useTranslations("Professional");
  const works = [
    {
      name: t("BuildUpLabs.name"),
      role: t("BuildUpLabs.role"),
      date: t("BuildUpLabs.date"),
      time: t("BuildUpLabs.time"),
      local: t("BuildUpLabs.local"),
      tools: ["ReactJS", "Material UI", "Html", "Css", "JavaScript"],
      description: t("BuildUpLabs.description"),
    },
    {
      name: t("Cibersur.name"),
      role: t("Cibersur.role"),
      date: t("Cibersur.date"),
      time: t("Cibersur.time"),
      local: t("Cibersur.local"),
      tools: ["MySql", "ASP.NET", "C#", "Html", "Css"],
      description: t("Cibersur.description"),
    },
    {
      name: t("DAGI.name"),
      role: t("DAGI.role"),
      date: t("DAGI.date"),
      time: t("DAGI.time"),
      local: t("DAGI.local"),
      tools: ["Microsoft SQL Server", "ASP.NET", "C#", "Html", "Css"],
      description: t("DAGI.description"),
    },
    {
      name: t("100Limite.name"),
      role: t("100Limite.role"),
      date: t("100Limite.date"),
      time: t("100Limite.time"),
      local: t("100Limite.local"),
      tools: ["WordPress"],
      description: t("100Limite.description"),
    },
  ];

  return (
    <CardContent>
      <Accordion type="single" collapsible className="space-y-6">
        {works.map((key, index) => (
          <AccordionItem key={index} value={key.name}>
            <AccordionTrigger>
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="font-bold">
                  {key.name}
                  <span className=" pl-2 text-sm font-light">({key.role})</span>
                </h4>
                <div className="flex items-center justify-start gap-2 text-xs dark:text-neutral-300">
                  <p className="shrink-0">{key.date}</p>
                  <span className="h-[3px] w-[3px] rounded-full bg-neutral-600" />
                  <p className="flex items-center justify-start gap-1 font-light">
                    {key.time}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {key.tools.map((value) => (
                    <p
                      key={value}
                      className="rounded-lg border border-primary p-1 font-JetBrainsMono"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-clip text-justify text-sm text-neutral-500 dark:text-neutral-400">
                {key.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  );
}
export default Work;
