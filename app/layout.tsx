import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayank Dangi | Microsoft Power Platform Developer",
  description:
    "Portfolio of Mayank Dangi — Microsoft Power Platform Developer specializing in Power Apps, Power Automate, Dataverse, Power Pages, Power BI, JavaScript and enterprise automation.",
  keywords: [
    "Power Platform Developer",
    "Power Apps Developer",
    "Dataverse",
    "Power Automate",
    "Power Pages",
    "Power BI",
    "Microsoft Power Platform",
    "Mayank Dangi"
  ],
  openGraph: {
    title: "Mayank Dangi | Power Platform Developer",
    description: "Enterprise Power Platform solutions, automation and low-code engineering.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
