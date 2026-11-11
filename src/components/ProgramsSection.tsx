import React, { useState } from 'react';
import { ProgramItem } from '../types';
import { PROGRAMS } from '../data/mockData';
import { Users, Clock, CalendarDays, ArrowRight, Eye } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgramForDetail: (program: ProgramItem) => void;
  onSelectProgramForInquiry: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramForDetail,
  onSelectProgramForInquiry,
}) => {
  const [filter, setFilter] = useState<'all' | 'school' | 'kids' | 'family' | 'farmer' | 'culture' | 'market'>('all');

  const categories = [
    { key: 'all', label: '전체 프로그램' },
    { key: 'school', label: '초·중·고 늘봄/단체' },
    { key: 'culture', label: '농촌역사·문화탐방' },
    { key: 'market', label: '농가홍보·농산물판매' },
    { key: 'family', label: '가족·오감힐링' },
    { key: 'farmer', label: '성인·귀농실무' },
  ];

  const filteredPrograms =
    filter === 'all' ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);

  return (
    <section id="programs" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
            체험 프로그램 카탈로그
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
            자연의 리듬을 배우는 <br />
            <span className="text-emerald-800">체험해봐유 시그니처 코스</span>
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            참여 대상과 목적에 따라 최적화된 맞춤형 일정과 전문 교재를 제공합니다.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-stone-200/80 rounded-xl max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as any)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === cat.key
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 bg-stone-200 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{program.season} 시즌</span>
                </div>
                <div className="absolute top-3 right-3 bg-emerald-900/90 text-emerald-100 text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  1인 {program.pricePerPerson.toLocaleString()}원~
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">
                    {program.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {program.highlight}
                  </p>

                  {/* Metadata Specs - Unboxed text with subtle separators */}
                  <div className="space-y-1.5 py-3 border-y border-stone-100 text-xs text-stone-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>소요 시간: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>권장 인원: {program.groupSize}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProgramForDetail(program)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-500" />
                    <span>상세 일정</span>
                  </button>

                  <button
                    onClick={() => onSelectProgramForInquiry(program.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs cursor-pointer"
                  >
                    <span>상담 신청</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom inquiry prompt box */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              찾으시는 형태의 프로그램이나 단체 전용 일정이 필요하신가요?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              학교 예산 규모, 지자체 보조금 사업, 기관 워크숍 테마에 맞추어 커리큘럼을 전면 재구성해 드립니다.
            </p>
          </div>
          <button
            onClick={() => onSelectProgramForInquiry('custom')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            맞춤형 커리큘럼 제안받기
          </button>
        </div>
      </div>
    </section>
  );
};
