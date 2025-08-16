import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "My personal website",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      
        <Navbar/>
      <div className="bg-blue-100">
        {children}
      </div>
      </body>
    </html>
  );
}
