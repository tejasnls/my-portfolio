import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasnls.dev"),
  title: "Senior Frontend Engineer | N L Subramanya Tejas",
  description:
    "Senior frontend systems engineer with 5+ years in enterprise architecture, micro-frontends, performance optimization, analytics correctness, and production reliability.",
  openGraph: {
    title: "Senior Frontend Engineer | N L Subramanya Tejas",
    description:
      "Senior frontend systems engineer with 5+ years in enterprise architecture, micro-frontends, performance optimization, analytics correctness, and production reliability.",
    url: "https://tejasnls.dev",
    siteName: "N L Subramanya Tejas – Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Senior Frontend Engineer – N L Subramanya Tejas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Frontend Engineer | N L Subramanya Tejas",
    description:
      "Senior frontend systems engineer with 5+ years in enterprise architecture, micro-frontends, performance optimization, analytics correctness, and production reliability.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@700,800&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                if (theme === 'light' || (!theme && prefersLight)) {
                  document.documentElement.classList.add('light-theme');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
