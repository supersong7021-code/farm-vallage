import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>자주 묻는 질문</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
            궁금하신 점을 빠르게 해결해 드립니다
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            체험 일정 및 단체 운영과 관련해 가장 자주 주시는 질문들을 모았습니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-emerald-800 font-mono">
                      Q{idx + 1}.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50/40">
                    <p className="pl-6 border-l-2 border-emerald-600/40">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support banner */}
        <div className="mt-10 text-center p-6 bg-stone-100/70 rounded-xl border border-stone-200 text-xs text-stone-600">
          <span>더 자세한 행정 증빙이나 특별한 운영 조건이 필요하신가요? </span>
          <a
            href="tel:041-558-7021"
            className="font-bold text-emerald-800 hover:underline ml-1"
          >
            041-558-7021로 직통 전화 주시면 친절히 상담해 드립니다.
          </a>
        </div>
      </div>
    </section>
  );
};
