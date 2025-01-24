import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Notes",
  description: "Crie suas notas sem esforço",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Note Taking App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
