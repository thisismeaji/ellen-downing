import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Open_Sans, Merienda } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Atur berat font yang diinginkan
});

const merienda = Merienda({
  subsets: ['latin'],
  weight: ['700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${merienda.className}`}>
        <header>
          <Navigation/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
