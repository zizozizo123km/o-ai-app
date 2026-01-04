import React from 'react';
import {
  Facebook,
  Search,
  Home,
  PlaySquare,
  Store,
  Users,
  Gamepad2,
  Grid2,
  MessageSquare,
  Bell,
  ChevronDown,
} from 'lucide-react';

/**
 * Reusable component for the central navigation icons.
 * @param {object} props
 * @param {import('lucide-react').Icon} props.Icon - The Lucide icon component.
 * @param {boolean} [props.active=false] - If the link is currently active.
 * @param {string} props.label - Accessibility label/tooltip.
 */
const NavIcon = ({ Icon, active = false, label }) => (
  <div
    title={label}
    className={`flex-grow h-full flex items-center justify-center cursor-pointer p-2
                relative transition-colors duration-200 ease-in-out
                ${active 
                  ? 'text-blue-500' 
                  : 'text-gray-500 hover:bg-gray-100 rounded-lg'
                }
                `}
  >
    <Icon className={`w-6 h-6 sm:w-7 sm:h-7`} strokeWidth={active ? 2.5 : 1.5} />
    {active && (
      <div className="absolute bottom-0 h-1 w-full bg-blue-500 rounded-t-lg"></div>
    )}
  </div>
);

/**
 * Reusable component for user action buttons (right side).
 * @param {object} props
 * @param {import('lucide-react').Icon} props.Icon - The Lucide icon component.
 * @param {string} props.label - Accessibility label/tooltip.
 */
const UserActionButton = ({ Icon, label }) => (
  <div
    title={label}
    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer transition duration-150 ease-in-out ml-2"
  >
    <Icon className="w-5 h-5 text-black" />
  </div>
);


const Header = () => {
  // Assuming a static profile image for demonstration
  const userProfilePic = "https://i.pravatar.cc/32?img=1"; 
  const userName = "أحمد";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex items-center justify-between h-14">
      
      {/* 1. Left Section (Logo & Search) - LTR Flow */}
      <div className="flex items-center space-x-2">
        
        {/* Facebook Logo */}
        <Facebook className="text-blue-600 w-10 h-10 cursor-pointer fill-blue-600 shrink-0" />
        
        {/* Search Bar (Desktop/Tablet) */}
        <div className="hidden md:flex items-center bg-gray-100 p-2 rounded-full text-gray-600">
          <Search className="w-5 h-5 mx-1" />
          <input
            type="text"
            placeholder="البحث في فيسبوك" 
            // Important for RTL input
            dir="rtl"
            className="hidden sm:inline-flex mx-2 items-center bg-transparent outline-none flex-shrink w-40 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden p-2 rounded-full bg-gray-100 cursor-pointer">
            <Search className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* 2. Center Section (Navigation Icons) */}
      {/* Max width limits how far icons spread on very large screens */}
      <nav className="flex justify-center flex-grow mx-2 h-full">
        <div className="flex w-full max-w-xl">
          <NavIcon Icon={Home} label="الرئيسية" active />
          <NavIcon Icon={PlaySquare} label="مشاهدة" />
          <NavIcon Icon={Store} label="ماركت بليس" />
          <NavIcon Icon={Users} label="المجموعات" />
          {/* Gaming icon visible on larger screens */}
          <div className="hidden lg:flex h-full">
             <NavIcon Icon={Gamepad2} label="الألعاب" />
          </div>
        </div>
      </nav>

      {/* 3. Right Section (User Actions & Profile) - LTR Flow */}
      <div className="flex items-center justify-end text-sm space-x-0 sm:space-x-1">
        
        {/* Profile Info (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center cursor-pointer p-1 rounded-full hover:bg-gray-100 transition duration-150 ease-in-out order-last md:order-first">
            <img 
                src={userProfilePic} 
                alt="Profile" 
                className="w-7 h-7 rounded-full object-cover"
            />
            <span className="font-semibold whitespace-nowrap mx-2 hidden lg:inline">{userName}</span>
        </div>
        
        {/* Action Buttons (reversed order slightly for standard Facebook appearance relative to user picture) */}
        <div className="flex rtl:space-x-reverse rtl:space-x-2">
            <UserActionButton Icon={Grid2} label="القائمة" />
            <UserActionButton Icon={MessageSquare} label="ماسنجر" />
            <UserActionButton Icon={Bell} label="الإشعارات" />
        </div>
        
        {/* Mobile Profile Menu */}
        <div className="sm:hidden flex items-center ml-1">
            <UserActionButton Icon={ChevronDown} label="القائمة" />
        </div>

      </div>
    </header>
  );
};

export default Header;