import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Users, Calendar, Award } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeroProps {
  onOpenInquiry: (programId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Brand emblem & Metadata kicker */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white shrink-0 border border-emerald-600/30 shadow-2xs flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="체험해봐유 회사마크"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
                <span>농업생태교육</span>
                <span aria-hidden="true">·</span>
                <span>농촌역사문화탐방</span>
                <span aria-hidden="true">·</span>
                <span>제철 농산물 직거래</span>
                <span aria-hidden="true">·</span>
                <span>농가 홍보 브랜딩</span>
              </div>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.18] mb-6"
              style={{ textWrap: 'balance' }}
            >
              흙에서 삶을 배우고, <br className="hidden sm:inline" />
              <span className="text-emerald-800">역사와 문화</span>로 물드는 농촌
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
              농촌은 단순한 생산을 넘어 생명과 조상의 지혜, 사람의 온기를 잇는 종합 문화입니다.
              체험해봐유는 학교·단체 <strong>생태교육</strong>과 전통 고택 <strong>역사문화탐방</strong>,
              지역 우수 <strong>농산물 직거래 판매</strong>와 <strong>농가 미디어 홍보</strong>까지
              농촌과 도시가 함께 상생하는 풍요로운 길을 정성껏 기획합니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <span>단체·학교 프로그램 상담하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-700 hover:text-emerald-900 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>체험 프로그램 둘러보기</span>
              </a>
            </div>

            {/* Trust reassurance note */}
            <div className="mt-8 flex items-center gap-4 text-xs text-stone-500 pt-6 border-t border-stone-200/70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>영업배상책임보험 전원 가입</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>농촌융복합 6차산업 전문 인증</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-4/3 lg:aspect-4/3 bg-stone-200 group">
              <img
                src={ASSETS.hero}
                alt="체험해봐유 농촌교육문화 교육농장 전경"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-medium text-emerald-200 mb-1">
                  충남 천안·아산 교육 현장
                </span>
                <p className="text-sm font-semibold text-white/95">
                  사계절 자연과 생태를 만나는 3,000평 친환경 교육농원
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI / Quantitative Rigor Strip below hero */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-stone-500 uppercase">누적 참여 인원</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums">
                15,200<span className="text-emerald-700 text-lg font-bold ml-0.5">명+</span>
              </span>
              <span className="text-xs text-stone-500 mt-1">유치원·초중고 및 일반 참여자</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-stone-500 uppercase">협력 학교 및 기관</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums">
                85<span className="text-emerald-700 text-lg font-bold ml-0.5">개처</span>
              </span>
              <span className="text-xs text-stone-500 mt-1">교육청 늘봄 연계 및 센터</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-stone-500 uppercase">문화행사 & 팜파티</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums">
                128<span className="text-emerald-700 text-lg font-bold ml-0.5">회</span>
              </span>
              <span className="text-xs text-stone-500 mt-1">성공적인 축제 및 팝업 운영</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-stone-500 uppercase">현장 기획 경력</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums">
                15<span className="text-emerald-700 text-lg font-bold ml-0.5">년</span>
              </span>
              <span className="text-xs text-stone-500 mt-1">송노한 대표 직접 기획·지도</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
