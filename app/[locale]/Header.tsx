import React from "react";
import LanguageToggle from "../../components/languageToogle";
import ModeToggle from "../../components/modeToggle";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header>
      <div className="h-20 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-400" />
      <div className="relative -top-9 z-10 flex w-full justify-center">
        <div className="absolute rounded-full bg-background p-1">
          <Image
            width={800}
            height={800}
            className="h-16 w-16 rounded-full object-cover "
            src="/avatar.png"
            alt=""
          />
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 pt-12">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <h3 className="font-Intermedium text-2xl">{t("name")}</h3>
          <div className="flex justify-center space-x-2">
            <ModeToggle />
            <LanguageToggle pt="PT" en="EN" />
          </div>
        </div>
        <div className="font-Interegular mb-2 flex flex-col items-center justify-center gap-x-2 text-neutral-500 sm:flex-row">
          <div className="flex items-center justify-start gap-1">
            <MapPin size={16} className="text-primary" />
            <p>{t("local")}</p>
          </div>
          <span className="rounded-ful invisible h-[3px] w-[3px] bg-neutral-600 sm:visible" />
          <p>{t("role")}</p>
          <span className="invisible h-[3px]  w-[3px] rounded-full bg-neutral-600 sm:visible" />
          <div className="flex items-center justify-start space-x-2">
            <p className="">{t("availability")}</p>
            <span>
              <span className="mr-1.5 flex h-2 w-2 items-center justify-center ">
                <span
                  className={`animation-delay-4000 absolute  flex h-2 w-2  animate-ping rounded-full bg-lime-500 opacity-75`}
                ></span>
                <span
                  className={`g-yellow-400 relative inline-flex h-1 w-1 rounded-full bg-lime-500`}
                ></span>
              </span>
            </span>
          </div>
        </div>
        <Separator />
      </nav>
    </header>
  );
}
