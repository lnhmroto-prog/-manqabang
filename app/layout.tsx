import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "'Manqabang — Lake Maqalika, Maseru, Lesotho",
  description:
    "Stay. Gather. Discover Lesotho. An intimate lakeside hospitality property on the banks of Lake Maqalika, just minutes from the heart of Maseru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:wght@400;500;600&family=Petit+Formal+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-espresso">{children}</body>
    </html>
  );
}