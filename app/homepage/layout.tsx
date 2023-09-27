import SideBarMenu from "@/components/SideBarMenu"
export default function RootLayout({children}) {
  return <html>
      <head>
        <title> Pokefusion Enterprise</title>
      </head>
      <body>
        <SideBarMenu/>
        {children}
      </body>
    </html>  
}
