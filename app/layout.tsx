import Header from "@/components/header";
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kenny Personal Portfolio',
  description: 'View Information about Kenny',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#cfe1f7] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#6369b9]"></div>
        <div className="bg-[#b5adf8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <div className="bg-[#f8d9d3] absolute top-[90rem] -z-10 left-[552rem] h-[41.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c9c5e9]"></div>
        <div className="bg-[#f0d3bc] absolute top-[90rem] -z-10 right-[11rem] h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#6369b9]"></div>

        <div className="bg-[#cfe1f7] absolute top-[260rem] -z-10 left-[-35rem] h-[17.25rem] w-[65rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[253rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7d83b3]"></div>
        <div className="bg-[#b5adf8] absolute top-[260rem] -z-10 right-[11rem] h-[17.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] dark:bg-[#6369b9]"></div>

        <div className="bg-[#9a9eb1] absolute top-[373rem] -z-10 left-[-35rem] h-[10.25rem] w-[25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[253rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7d83b3]"></div>
        <div className="bg-[#666885] absolute top-[373rem] -z-10 right-[11rem] h-[10.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#6369b9]"></div>
      
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
