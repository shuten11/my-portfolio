import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-8">
      <Separator />
      <div className="flex items-center justify-between pt-2 text-sm text-neutral-600">
        <div className="flex">
          <span>©</span>
          <p>Rafael Trindade</p>
        </div>
        <div className="flex gap-2">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://github.com/shuten11"
          >
            <Github size={16} className="text-primary" />
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://www.linkedin.com/in/rafael-trindade-481439168/"
          >
            <Linkedin size={16} className="text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
