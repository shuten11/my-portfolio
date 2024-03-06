import React from "react";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      img: "/icon-figma.svg",
      name: "Figma",
    },
    {
      img: "/icon-sql.svg",
      name: "SQL",
    },
    {
      img: "/icon-javscript.svg",
      name: "JavaScript",
    },
    {
      img: "/icon-html.svg",
      name: "HTML",
    },
    {
      img: "/icon-css.svg",
      name: "CSS",
    },
    {
      img: "/icon-react.svg",
      name: "ReactJS",
    },
    {
      img: "/icon-github.svg",
      name: "GitHub",
    },
    {
      img: "/icon-tailwindcss.svg",
      name: "Tailwindcss",
    },
  ];
  return (
    <CardContent className="grid grid-cols-4 gap-4">
      {skills.map(({ name, img }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-1"
        >
          <Image
            width={800}
            height={800}
            className="h-12 w-12"
            src={img}
            alt=""
          />
          <p>{name}</p>
        </div>
      ))}
    </CardContent>
  );
}
