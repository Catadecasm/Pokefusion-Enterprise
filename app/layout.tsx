
import './global.css';


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
