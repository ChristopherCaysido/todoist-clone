import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import MainSidebar from "./components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "CRUD App Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <SidebarProvider>
        <MainSidebar/>
        <SidebarTrigger/>
        {children}
      </SidebarProvider>
      </body>
    </html>
  );
}
