import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={
  title:"Mayank Dangi | Microsoft Power Platform Developer",
  description:"Enterprise Power Platform developer portfolio — Power Apps, Power Automate, Dataverse, Power Pages, JavaScript, Power BI and AI-assisted automation."
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}