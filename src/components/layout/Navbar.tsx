'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../items/Button';

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  isMobile?: boolean;
  index?: number;
}

const NavItem: FC<NavItemProps> = ({ href, label, active, onClick, isMobile = false, index = 0 }) => {
  return isMobile ? (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        href={href}
        className={`px-3 py-1.5 text-[20px] block transition-colors duration-300 ${
          active ? 'text-[#f7f7f7]' : 'text-[#91949c] hover:text-gray-200'
        } ${isMobile ? 'text-[10px] font-medium w-full text-left py-3' : ''}`}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  ) : (
    <Link
      href={href}
      className={`relative px-3 py-1.5 text-sm transition-colors duration-300 flex items-center justify-center ${
        active
          ? 'text-white bg-[#252527] rounded-md shadow-lg border border-[#2d2e2f]'
          : 'text-gray-400 hover:text-gray-200'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const Navbar: FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      if (window.scrollY > 50) {
        setEnlarged(true);
      } else {
        setEnlarged(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("Mobile menu toggled:", !mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/changelog', label: 'Changelog' },
    { href: '/waitlist', label: 'Waitlist' },
  ];

  return (
    <div className={`fixed ${enlarged ? 'top-0' : 'top-8'} left-0 right-0 ${enlarged ? 'px-0' : 'px-3'} z-50 w-full flex justify-center transition-all duration-500 ${enlarged ? 'max-w-full' : ''}`}>
      <div className={`max-w-3xl w-full bg-black py-3 ${enlarged ? '' : 'rounded-[15px]'} overflow-hidden duration-200 ${
        mobileMenuOpen ? 'rounded-[15px]' : ''
      } ${scrolled ? 'bg-opacity-80 backdrop-blur-md' : 'bg-opacity-95'} ${enlarged ? 'max-w-full px-6 border-x-0 z-50' : ''}`}>
        <motion.nav
          className="flex items-center justify-between px-3 sm:px-4 w-full"
          initial={false}
          animate={mobileMenuOpen ? "open" : "closed"}
        >
          <div className={`flex items-center ${enlarged ? 'w-1/3' : ''}`}>
            <Link href="/" className="flex items-center">
              <div className="bg-[#29292a] rounded-[5px] p-2 mr-1.5">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-white">Suprema<sup className="text-xs">TM</sup></span>
            </Link>
          </div>

          <div className={`hidden md:flex items-center space-x-1 ${enlarged ? 'w-1/3 justify-center' : ''}`}>
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </div>

          <div className={`hidden md:block ${enlarged ? 'w-1/3 text-right' : ''}`}>
            <Button size="sm">Contact us</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button size="sm" className="mr-2">Contact</Button>

            <motion.button
              className="text-white flex items-center justify-center w-8 h-8 relative"
              onClick={toggleMobileMenu}
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                className="absolute w-5 h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, translateY: -4 },
                  open: { rotate: 45, translateY: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-5 h-0.5 bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-5 h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, translateY: 4 },
                  open: { rotate: -45, translateY: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-3 pb-3 pt-1">
                {navItems.map((item, index) => (
                  <div key={item.href} className="border-t border-gray-800 py-1">
                    <NavItem
                      href={item.href}
                      label={item.label}
                      active={pathname === item.href}
                      onClick={closeMobileMenu}
                      isMobile={true}
                      index={index}
                    />
                  </div>
                ))}
                {/* Contact us button removed from hamburger menu */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
