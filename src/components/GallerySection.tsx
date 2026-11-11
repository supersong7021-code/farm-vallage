import React, { useState } from 'react';
import { ASSETS, REVIEWS } from '../data/mockData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const galleryItems = [
    {
      image: ASSETS.harvest,
      title: '당진 농원 초등 어린이 가을 당근 & 사과 수확 실습',
      location: '충남 당진 · 성환초 3학년 65명',
      date: '2026 가을 시즌',
    },
    {
      image: ASSETS.party,
      title: '마을 장인과 함께하는 달빛 별밤 팜파티 & 디너 콘서트',
      location: '충남 아산 외암골 · 80인 기업 워크숍',
      date: '2026 초여름',
    },
    {
      image: ASSETS.greenhouse,
      title: '스마트 온실 탄소중립 유기농 채소 모종 정식 교실',
      location: '천안 본원 교육농장 · 중학교 자유학기제',
      date: '2026 봄 시즌',
    },
  ];

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[activeReviewIdx];

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
              생생한 현장 스케치
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
              흙을 만지고 땀 흘리며 <br />
              <span className="text-emerald-800">함께 웃었던 행복한 순간들</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            교실 밖 탁 트인 대자연 속에서 아이들과 어른 모두가 오감으로 배운 생생한 교육 현장 기록입니다.
          </p>
        </div>

        {/* 3-column Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-emerald-300 font-medium block">
                    {item.date}
                  </span>
                  <span className="text-xs font-semibold text-stone-100">
                    {item.location}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Attributable Client Proof & Testimonials */}
        <div className="bg-stone-100/90 rounded-2xl border border-stone-200 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
            <div className="lg:max-w-xs shrink-0 text-center lg:text-left">
              <Quote className="w-8 h-8 text-emerald-700/60 mb-2 inline-block lg:block" />
              <h3 className="text-xl font-bold text-stone-900 mb-1">
                교육 참여 기관의 목소리
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                선생님, 귀농 실무자, 학부모님들이 남겨주신 솔직한 후기입니다.
              </p>
              {/* Pagination controls */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <button
                  onClick={handlePrevReview}
                  className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
                  aria-label="이전 후기"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-stone-500 px-2 tabular-nums">
                  {activeReviewIdx + 1} / {REVIEWS.length}
                </span>
                <button
                  onClick={handleNextReview}
                  className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
                  aria-label="다음 후기"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Current Review Card */}
            <div className="flex-1 bg-white p-6 sm:p-8 rounded-xl border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-1 mb-3 text-amber-500">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-stone-400 font-mono">
                  {currentReview.rating}.0 / 5.0
                </span>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed mb-4">
                "{currentReview.comment}"
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-stone-100 text-xs">
                <div>
                  <span className="font-bold text-stone-900">{currentReview.clientName}</span>
                  <span className="text-stone-500 ml-1.5">{currentReview.role}</span>
                  <span className="text-stone-300 mx-1.5">|</span>
                  <span className="text-emerald-800 font-medium">{currentReview.organization}</span>
                </div>
                <div className="text-stone-400">
                  참여 프로그램: <span className="font-medium text-stone-600">{currentReview.programTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
