import React from "react";
import { useTranslations } from "next-intl";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Academic";
import Work from "./Professional";
export default function Path() {
  const t = useTranslations();
  return (
    <Tabs defaultValue="experience" className="p-2 pt-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="experience">{t("Professional.title")}</TabsTrigger>
        <TabsTrigger value="education">{t("Academic.title")}</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Work />
      </TabsContent>
      <TabsContent value="education">
        <Education />
      </TabsContent>
    </Tabs>
  );
}
