import type { Metadata } from "next";
import "./globals.css";
import "./anime-extra.css";

export const metadata: Metadata = {
  title: "Mayank Dangi — Power Platform Developer",
  description: "Interactive portfolio of Mayank Dangi — Power Apps, Power Automate, Dataverse, Power Pages, JavaScript, analytics and AI-assisted automation.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
