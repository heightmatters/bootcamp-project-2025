import type { Metadata } from "next"; // Object to set metadata
import { Roboto } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

// If you are experiencing an error "localFont is undefined", you might need to add the following blocks of code
const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Chang's Personal Website",
  description: "A personal website for Noah Chang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // returns boilerplate
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
