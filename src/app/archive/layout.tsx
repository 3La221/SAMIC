"use client"
import TopBar from "../_components/topbar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
      <TopBar/>
        {children}
      </body>
    </html>
  );
}
