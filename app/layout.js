import "./globals.css";
import Theme from "./Components/Theme";
import DarkLight from "./Components/DarkLight";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Seifeldeen Adel - Frontend Developer",
  description:
    "I am Seifeldeen Adel Abdelfattah a Frontend Developer, I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from my home office in Cairo, Egypt. Please have a look at my portfolio and experience on this site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pb-32 bg-gray-200 dark:bg-gray-950 transition-all duration-500 mx-4">
        <Theme>
          <DarkLight />
          {children}
          <Analytics />
        </Theme>
      </body>
    </html>
  );
}
