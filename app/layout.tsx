
import './global.css';


import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title> Pokefusion Enterprise</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
