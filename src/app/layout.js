import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Dolphin Asset",
  description: "Dolphin Asset website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}