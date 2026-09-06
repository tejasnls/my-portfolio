import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasnls.dev"),
  title: "Senior Frontend Engineer | N L Subramanya Tejas",
  description:
    "Senior frontend engineer focused on frontend architecture, enterprise Search, platform engineering, and reliable delivery.",
  openGraph: {
    title: "Senior Frontend Engineer | N L Subramanya Tejas",
    description:
      "Senior frontend engineer focused on frontend architecture, enterprise Search, platform engineering, and reliable delivery.",
    url: "https://tejasnls.dev",
    siteName: "N L Subramanya Tejas – Portfolio",
    images: ["https://tejasnls.dev/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Frontend Engineer | N L Subramanya Tejas",
    description:
      "Senior frontend engineer focused on frontend architecture, enterprise Search, platform engineering, and reliable delivery.",
    images: ["https://tejasnls.dev/og-image.png"],
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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@700,800&display=swap"
        />
        <meta
          name="image"
          property="og:image"
          content="https://tejasnls.dev/og-image.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme !== 'light' && theme !== 'dark') {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  if (theme === 'light') {
                    document.documentElement.classList.add('light-theme');
                  }
                } catch (e) {}
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
