import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "pt",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
