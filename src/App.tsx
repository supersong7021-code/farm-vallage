/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { LocalSpecialtySection } from './components/LocalSpecialtySection';
import { GallerySection } from './components/GallerySection';
import { InquirySection } from './components/InquirySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ProgramItem } from './types';
import { MessageSquareText } from 'lucide-react';

export default function App() {
  const [selectedProgramForDetail, setSelectedProgramForDetail] = useState<ProgramItem | null>(null);
  const [selectedProgramForInquiry, setSelectedProgramForInquiry] = useState<string>('eco-smart-garden');

  const scrollToInquiry = (programId?: string) => {
    if (programId) {
      setSelectedProgramForInquiry(programId);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (_serviceName: string) => {
    scrollToInquiry('custom');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans">
      {/* 3-zone Top Bar Contract */}
      <Navbar onOpenInquiry={scrollToInquiry} />

      {/* Main Page Flow: Proposition -> Capabilities -> Proof -> Action */}
      <main className="flex-1">
        {/* 1. Hero with 4-column KPI strip */}
        <Hero onOpenInquiry={scrollToInquiry} />

        {/* 2. Director Song & Agency Philosophy */}
        <AboutSection />

        {/* 3. 6 Core Service Pillars (Bento Grid) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Filterable Signature Programs Catalog */}
        <ProgramsSection
          onSelectProgramForDetail={(prog) => setSelectedProgramForDetail(prog)}
          onSelectProgramForInquiry={(id) => scrollToInquiry(id)}
        />

        {/* 5. Special Feature: Rural History & Cultural Tour, Produce Sales, Farm PR */}
        <LocalSpecialtySection onSelectAction={(id) => scrollToInquiry(id)} />

        {/* 6. Field Photo Sketch & Testimonials */}
        <GallerySection />

        {/* 6. Interactive Estimate Calculator & Booking Form */}
        <InquirySection initialProgramId={selectedProgramForInquiry} />

        {/* 7. Practical FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 8. Quiet Footer */}
      <Footer />

      {/* Quick Floating Quick Inquiry Action on Mobile */}
      <div className="sm:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={() => scrollToInquiry()}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-800 text-white font-semibold text-xs shadow-lg hover:bg-emerald-700 active:scale-95 transition-all cursor-pointer"
          aria-label="빠른 상담 신청"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>빠른 상담</span>
        </button>
      </div>

      {/* Detail Modal */}
      <ProgramDetailModal
        program={selectedProgramForDetail}
        onClose={() => setSelectedProgramForDetail(null)}
        onProceedToInquiry={(id) => scrollToInquiry(id)}
      />
    </div>
  );
}
