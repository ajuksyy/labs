import React from 'react';
import { Link } from 'react-router-dom';
import EmailIcon from '../../../public/svg/EmailIcon';
import FacebookIcon from '../../../public/svg/FacebookIcon';
import TwitterIcon from '../../../public/svg/TwitterIcon';
import InstagramIcon from '../../../public/svg/InstagramIcon';

interface LinkItem {
  text: string;
  href: string;
}

interface NavigationSectionProps {
  title: string;
  links: LinkItem[];
}

interface SocialHandlesProps {
  socialLinks: SocialLink[];
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

const LogoSection: React.FC = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
        <span className="text-black text-xs font-bold">S</span>
      </div>
      <span className="font-medium">Suprema</span>
    </div>
    <p className="text-sm text-gray-400 mt-2">Plan and navigate from idea to launch.</p>
    <a href="" className="text-xs text-gray-400 flex items-center gap-2">
      <EmailIcon />
      hello@suprema.com
    </a>
  </div>
);

const NavigationSection: React.FC<NavigationSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-medium mb-4">{title}</h3>
    <ul className="text-xs text-gray-400 flex flex-col gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialHandles: React.FC<SocialHandlesProps> = ({ socialLinks }) => (
  <div className="flex gap-3">
    {socialLinks.map((social, index) => (
      <a key={index} href={social.href} className="bg-gray-900 p-2 rounded-md hover:bg-gray-800 transition-colors">
        {social.icon}
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const quickLinks: LinkItem[] = [
    { text: 'Product Overview', href: '#' },
    { text: 'Features', href: '#' },
    { text: 'Pricing', href: '#' },
    { text: 'Testimonials', href: '#' },
    { text: "FAQ's", href: '#' },
  ];
  
  const allPagesLinks: LinkItem[] = [
    { text: 'Home', href: '#' },
    { text: 'Waitlist', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Blogs', href: '#' },
    { text: 'Changelog', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: '404', href: '#' },
  ];
  
  const socialLinks: SocialLink[] = [
    { href: '#', icon: <FacebookIcon /> },
    { href: '#', icon: <TwitterIcon /> },
    { href: '#', icon: <InstagramIcon /> },
  ];
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <LogoSection />
          </div>
          <div className="col-span-1">
            <NavigationSection title="Quick Navigation" links={quickLinks} />
          </div>
          <div className="col-span-1">
            <NavigationSection title="All Pages" links={allPagesLinks} />
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4">Social Handles</h3>
            <SocialHandles socialLinks={socialLinks} />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500"> {new Date().getFullYear()} All rights reserved.</p>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;