import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface NavbarProps {
  onOpenInquiry: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '기획사 소개', href: '#about' },
    { label: '주요 사업', href: '#services' },
    { label: '체험 프로그램', href: '#programs' },
    { label: '홍보·판매·탐방', href: '#specialty' },
    { label: '현장 이야기', href: '#gallery' },
    { label: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-stone-50/80 backdrop-blur-xs border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Zone with company mark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-900 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white shrink-0 border border-emerald-600/30 shadow-2xs flex items-center justify-center">
              <img
                src={ASSETS.logo}
                alt="체험해봐유 회사마크"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            <span>체험해봐유</span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:scale-98 rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              교육·체험 신청
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              교육·체험 맞춤 상담 신청
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
