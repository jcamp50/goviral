// app/layout.js
import './globals.css'; // Your global styles
import inter from './fonts'; // Import the font configuration

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
