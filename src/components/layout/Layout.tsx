'use client';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-black overflow-x-hidden ">
      <Navbar />    
      <main className="flex-1 bg-black w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
} 