import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Star Branding",
  icons: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
