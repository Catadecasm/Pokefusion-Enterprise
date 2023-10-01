
import './global.css';
import SetHome from '@/components/SetHome';

export default function RootLayout({children}) {
  return <html>
      <head>
        <title> Pokefusion Enterprise</title>
      
      </head>
      <body>
        {children}
      </body>
    </html>  
}
