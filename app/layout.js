import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jet = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Password generator",
  description: "Simple password generator to use",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jet.className}>
        <h1>Password Generator</h1>
        {children}
      </body>
    </html>
  );
}
