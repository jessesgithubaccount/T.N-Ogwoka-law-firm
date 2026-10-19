import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata = {
  title: {
    default: 'T.N.Ogwoka & Osili Advocates | Trusted Legal Guidance in Kenya',
    template: '%s',
  },
  description:
    'T.N.Ogwoka & Osili Advocates is a law firm in Nairobi, Kenya offering litigation, conveyancing, commercial work, consultancy and alternative dispute resolution.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToTop />
      </body>
    </html>
  );
}
