import React from 'react';
import { ASSETS } from '../data/mockData';
import { CheckCircle2, HeartHandshake, Sprout, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
            기획사 철학과 비전
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
            사람을 살리는 흙, 마을을 잇는 문화 <br />
            <span className="text-emerald-800">송노한 대표</span>의 따뜻한 농촌 이야기
          </h2>
        </div>

        {/* 2-column Director Profile & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait & Credentials Column */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm w-full max-w-md aspect-square bg-stone-200">
              <img
                src={ASSETS.director}
                alt="농촌교육문화기획사 송노한 대표"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 p-4 text-white backdrop-blur-xs">
                <div className="text-base font-bold text-white">송노한 대표</div>
                <div className="text-xs text-stone-300">농촌교육문화기획자 · 농촌융복합 6차산업 코디네이터</div>
              </div>
            </div>

            {/* Credential highlights */}
            <div className="mt-6 w-full max-w-md space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>농림축산식품부 인증 우수 농촌체험학습 기획·지도 15년</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>지자체 및 농업기술센터 귀농·귀촌 창업 전문 외래교수</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>전국 40여 개 농가 체험 상품 개발 및 브랜딩 자문</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>지역 문화예술과 농촌 자원을 결합한 ‘팜파티’ 프로젝트 다수 연출</span>
              </div>
            </div>

            {/* Official Company Mark */}
            <div className="mt-5 w-full max-w-md p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shrink-0 border border-emerald-600/30 flex items-center justify-center shadow-xs">
                <img
                  src={ASSETS.logo}
                  alt="체험해봐유 회사마크"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block">체험해봐유 공식 CI 마크</span>
                <span className="text-[11px] text-stone-500">자연의 황금 햇살과 전통 한옥, 푸른 들녘을 담은 상징</span>
              </div>
            </div>
          </div>

          {/* Philosophy Prose Column */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="text-lg sm:text-xl font-medium text-stone-800 border-l-2 border-emerald-700 pl-4 py-1 italic leading-relaxed">
              “‘체험해봐유’는 충청도의 구수한 온기처럼, <br className="hidden sm:inline" />
              누구든 편안한 마음으로 들러 자연의 품에서 마음을 치유하고 가시길 바라는 마음으로 지은 이름입니다.”
            </blockquote>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              도시의 바쁜 일상 속에서 우리는 흙의 냄새와 생명이 자라나는 경이로움을 잊고 살아갑니다.
              체험해봐유는 단순히 농산물을 따고 돌아가는 일회성 이벤트를 지양합니다.
              씨앗을 심고 수확하기까지 농부의 정성을 몸으로 느끼고, 가족과 동료가 건강한 제철 음식을
              마주하며 나누는 대화의 가치를 전하고자 합니다.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              교육 현장의 선생님들께는 교과과정과 딱 들어맞는 안전한 체험 교재와 안심 시설을,
              지역 농가에는 자립할 수 있는 체험 관광 상품 기획과 브랜딩의 길을 함께 열어갑니다.
            </p>

            {/* 3 Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                <Sprout className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-stone-900 mb-1">생태 중심 교육</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  교과 연계와 오감 탐색을 바탕으로 자연의 생명 순환을 오롯이 배웁니다.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                <Sparkles className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-stone-900 mb-1">문화적 감성 기획</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  팜파티, 음악회, 미식 워크숍을 더해 농촌 공간을 감성 문화 플랫폼으로 전환합니다.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                <HeartHandshake className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-stone-900 mb-1">상생과 농가 자립</h4>
                <p className="text-xs text-stone-500 leading-normal">
                  지역 농가 네트워크와 함께 성장하는 지속 가능한 농촌 생태계를 구축합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
