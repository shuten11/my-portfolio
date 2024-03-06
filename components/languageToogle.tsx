"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "../navigation";
type LanguageToggleProps = {
  en: string;
  pt: string;
};
const LanguageToggle: React.FC<LanguageToggleProps> = ({ en, pt }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: "en" })}
        >
          {en}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: "pt" })}
        >
          {pt}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
