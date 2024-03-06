"use client";

import { useState } from "react";
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";

import DropTarget from "@/components/dropTarget";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import About from "./content/About";
import Skills from "./content/Skills";
import Contact from "./content/Contact";
import Projects from "./content/Projects";

import { GripHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import Path from "./content/path/Path";
import Languages from "./content/Languages";

export default function Home() {
  const t = useTranslations();
  const [items, setItems] = useState([
    {
      title: t("About.title"),
      content: <About />,
      space: "col-span-2",
    },
    {
      content: <Path />,
      space: "col-span-2 row-span-2",
    },
    {
      title: t("Skills.title"),
      content: <Skills />,
      space: "col-span-2",
    },
    {
      title: t("Projects.title"),
      content: <Projects />,
      space: "col-span-2 row-span-2",
    },
    {
      title: t("ContactMe.title"),
      content: <Contact />,
      space: "col-span-2",
    },
    {
      title: t("Languages.title"),
      content: <Languages />,
      space: "col-span-2",
    },
  ]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pt-8">
      <SortableList
        onSortEnd={onSortEnd}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        draggedItemClassName="dragged"
        dropTarget={<DropTarget />}
      >
        {items.map((item, index) => (
          <SortableItem key={index}>
            <Card className={item.space}>
              <div className="flex justify-center pb-4">
                <SortableKnob>
                  <div className="invisible absolute cursor-pointer text-yellow-400 sm:visible">
                    <GripHorizontal className="text-primary" />
                  </div>
                </SortableKnob>
              </div>
              {item.title ? (
                <CardHeader>
                  <CardTitle> {item.title}</CardTitle>
                </CardHeader>
              ) : null}
              {item.content}
            </Card>
          </SortableItem>
        ))}
      </SortableList>
    </main>
  );
}
