import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ASSETS } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white shrink-0 border border-emerald-500/40 shadow-xs flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="체험해봐유 회사마크"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              <span>체험해봐유</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              사람과 흙을 잇는 따뜻한 농촌교육문화기획사입니다.
              학교 늘봄·생태 교육, 사계절 농촌체험, 팜파티 기획 및 농가 6차산업 컨설팅을 전문으로 수행합니다.
            </p>
            <div className="text-stone-400 text-[11px] pt-1">
              영업배상책임보험 및 농어촌체험휴양마을 안전기준 준수
            </div>
          </div>

          {/* Site Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              바로가기
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  기획사 소개 및 대표 인사말
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  4대 핵심 사업 영역
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  체험 프로그램 카탈로그
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  현장 스케치 및 참가 후기
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  온라인 맞춤 견적 신청
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Location Info */}
          <div className="md:col-span-4 space-y-1.5 text-stone-400 text-[11px] leading-relaxed">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              사업자 및 고객센터 정보
            </div>
            <div>
              <span className="text-stone-300 font-medium">상호명: </span>
              농촌교육문화기획사 체험해봐유
            </div>
            <div>
              <span className="text-stone-300 font-medium">대표자: </span>
              송노한
              <span className="text-stone-600 mx-1.5">|</span>
              <span className="text-stone-300 font-medium">사업자등록번호: </span>
              312-82-70210
            </div>
            <div>
              <span className="text-stone-300 font-medium">소재지: </span>
              충청남도 천안시 서북구 성환읍 웰빙농업길 42
            </div>
            <div>
              <span className="text-stone-300 font-medium">대표전화: </span>
              041-558-7021
              <span className="text-stone-600 mx-1.5">|</span>
              <span className="text-stone-300 font-medium">직통: </span>
              010-3456-7021
            </div>
            <div>
              <span className="text-stone-300 font-medium">이메일: </span>
              supersong7021@gmail.com
            </div>
            <div className="pt-2 text-stone-500">
              운영시간: 평일 09:00 - 18:00 (주말 및 공휴일 체험은 사전 예약제 운영)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} 체험해봐유 (Agricultural Education & Culture Agency). All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
          >
            <span>맨 위로 가기</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
