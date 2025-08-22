// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";

// import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import theme from './theme';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matrix Calculator | Next.js + MUI",
  description: "A matrix calculator that generates and adds matrices based on row & column indices.",
  authors: [{ name: "Rajeev Kumar Saw" }],
  icons:{
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         
          <CssBaseline />

          {/* Main Layout with Flex */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh', // Ensure full viewport height
            }}
          >
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <Box
              sx={{
                flex: 1, // Pushes footer to bottom
                padding: '2rem 0',
                backdropFilter: 'blur(2px)', // Optional: glass effect
              }}
            >
              {children}
            </Box>

            {/* Footer */}
            <Footer />
          </Box>
         
      </body>
    </html>
  );
}