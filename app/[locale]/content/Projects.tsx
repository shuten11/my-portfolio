import React, { createElement } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, Figma } from "lucide-react";
import Image from "next/image";
export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      tittle: t("portfolio.title"),
      description: t("portfolio.description"),
      tools: ["ReactJS", "TypeScript", "Tailwindcss", "NextJS", "shadcn/ui"],
      img: "/portfolio.svg",
    },
    {
      tittle: t("COCARE.title"),
      description: t("COCARE.description"),
      link: "https://www.figma.com/file/JI3eCIW3dPMbvczY5Y6Xnl/CareCoach?type=design&node-id=0-1&mode=design",
      icon: createElement(Figma),
      tools: ["Figma"],
      img: "/co-care.svg",
    },
    {
      tittle: t("miniBlog.title"),
      description: t("miniBlog.description"),
      link: "https://github.com/shuten11/mini-blog",
      icon: createElement(Github),
      tools: ["ReactJS", "JavaScript", "Html", "Css"],
      img: "/mini-blog.svg",
    },
  ];
  return (
    <CardContent>
      <Carousel>
        <CarouselContent>
          {projects.map((key, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col gap-4">
                <h4>{key.tittle}</h4>
                <Image
                  width={800}
                  height={800}
                  className="h-52 w-full rounded-md object-cover "
                  src={key.img}
                  alt=""
                />
                <p className="text-justify text-sm text-neutral-500 dark:text-neutral-400">
                  {key.description}
                </p>
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
                {key.link ? (
                  <div>
                    <Link className="hover:text-primary" href={key.link}>
                      <button>{key.icon}</button>
                    </Link>
                  </div>
                ) : null}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </CardContent>
  );
}
