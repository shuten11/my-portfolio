import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "@/components/ui/toaster";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body className="bg-background font-roboto">
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Toaster />
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
