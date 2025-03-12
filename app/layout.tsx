import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haflinger Tech - Technology Solutions",
  description:
    "Innovative technology solutions for various industries including healthcare, manufacturing, finance, and retail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
