import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
import { Landmark, ShoppingBag, Megaphone, CheckCircle2, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface LocalSpecialtySectionProps {
  onSelectAction: (programId: string) => void;
}

export const LocalSpecialtySection: React.FC<LocalSpecialtySectionProps> = ({ onSelectAction }) => {
  const [activeTab, setActiveTab] = useState<'tour' | 'sales' | 'pr'>('tour');

  return (
    <section id="specialty" className="py-20 bg-stone-100/80 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
            농촌 상생 특화 프로그램
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
            농촌의 역사와 문화는 깊게, <br />
            <span className="text-emerald-800">농가 홍보와 농산물 판매는 똑똑하게</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-3">
            마을의 유서 깊은 이야기를 발굴해 탐방으로 엮고, 정성껏 기른 농산물이 제값을 받도록 농가 직거래와 미디어 홍보를 원스톱으로 지원합니다.
          </p>
        </div>

        {/* 3 Tab Switcher */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 bg-stone-200/90 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'tour'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Landmark className="w-4 h-4 text-emerald-700" />
              <span>농촌역사문화탐방</span>
            </button>

            <button
              onClick={() => setActiveTab('sales')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'sales'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span>제철 농산물 직거래 판매</span>
            </button>

            <button
              onClick={() => setActiveTab('pr')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'pr'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Megaphone className="w-4 h-4 text-emerald-700" />
              <span>농가 홍보 & 미디어 제작</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 농촌 역사문화탐방 */}
        {activeTab === 'tour' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>충남 전통 마을 · 고택 돌담길 인문학 투어</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                조상의 지혜가 깃든 마을에서 <br />
                삶의 쉼표를 찾는 <span className="text-emerald-800">인문학 힐링 여정</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                단순 관광이 아닌, 마을 토박이 장인의 생생한 구술사와 고택의 숨은 건축 미학, 선조들의 농경 철학을 향토 사학자의 해설과 함께 오감으로 체험하는 고품격 역사문화 탐방입니다.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-xs sm:text-sm text-stone-900 mb-0.5">
                    코스 A. 전통 고택 돌담길과 종가집 다도 인문학 산책
                  </div>
                  <div className="text-xs text-stone-500">
                    500년 전통 돌담길 걷기 · 사대부 가옥 구조 해설 · 종부의 손맛 나물 밥상 및 전통 예절 다도
                  </div>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-xs sm:text-sm text-stone-900 mb-0.5">
                    코스 B. 향토 전통 농기구 시연 & 볏짚 민속 공예
                  </div>
                  <div className="text-xs text-stone-500">
                    전통 지게·탈곡기·홀태 시연 · 어르신과 함께 꼬는 볏짚 복조리 제작 · 향토 민요 감상
                  </div>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-xs sm:text-sm text-stone-900 mb-0.5">
                    코스 C. 토종 종자원과 친환경 팜로드 생태 트레킹
                  </div>
                  <div className="text-xs text-stone-500">
                    사라져가는 토종 씨앗 이야기 · 숲과 들판 야생화 관찰 · 계절 약초차 시음
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectAction('rural-history-culture-tour')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>역사문화탐방 코스 상담 신청</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-4/3 bg-stone-100 shadow-inner">
                <img
                  src={ASSETS.tour}
                  alt="농촌역사문화탐방 전통 고택 마을 투어 현장"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="text-xs text-emerald-300 font-medium">실제 탐방 현장 스케치</div>
                  <div className="text-sm font-bold text-white">
                    문화해설사와 함께하는 아산 외암골 고택 돌담길 탐방
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 농산물 판매 / 직거래 */}
        {activeTab === 'sales' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>우수 인증 농가 40여 곳 직거래 산지직송 네트워크</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                유통 거품 없는 건강한 식탁, <br />
                <span className="text-emerald-800">체험해봐유 엄선 로컬 농산물 직판</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                농촌교육문화기획사 체험해봐유가 농사 과정부터 안전성을 철저히 검증한 지역 농가들의 친환경 제철 과일, 곡물, 전통 가공식품을 산지에서 직송합니다. 단체 급식 납품, 기업 명절 특판, 정기 꾸러미 배송을 운영합니다.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">🍎 제철 친환경 과일</div>
                  <p className="text-stone-500 text-[11px]">
                    천안 성환 배, 예산 황토 사과, 논산 딸기 당일 수확 출하
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">🌾 유기농 곡물 & 잡곡</div>
                  <p className="text-stone-500 text-[11px]">
                    우렁이 농법 삼광쌀, 찰흑미, 찰수수, 귀리 친환경 소포장
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">🍯 자연산 토종 꿀 & 화분</div>
                  <p className="text-stone-500 text-[11px]">
                    지리산/월악산 야생화 꿀, 밤꿀, 천연 프로폴리스 원액
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">🫙 3년 숙성 전통 장류</div>
                  <p className="text-stone-500 text-[11px]">
                    국산 콩 무쇠 가마솥 전통 된장, 찹쌀 고추장, 조선간장
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectAction('local-farm-pr-market')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>제철 농산물 직거래 & 특판 구매 상담</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-4/3 bg-stone-100 shadow-inner">
                <img
                  src={ASSETS.market}
                  alt="체험해봐유 제철 농산물 직거래 팝업 마켓"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="text-xs text-emerald-300 font-medium">산지직거래 상생 장터</div>
                  <div className="text-sm font-bold text-white">
                    생산자와 소비자가 직접 얼굴을 마주하는 주말 로컬 팝업마켓
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 농가 홍보 & 미디어 제작 */}
        {activeTab === 'pr' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <Megaphone className="w-4 h-4 text-emerald-700" />
                <span>농가 가치 전달을 위한 미디어 콘텐츠 & 팸투어 솔루션</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                좋은 농산물에 날개를 다는 <br />
                <span className="text-emerald-800">농가 전문 미디어 홍보 기획</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                판로 개척에 어려움을 겪는 농가를 위해 농장 브랜딩, 고화질 숏폼 홍보 영상, 카드뉴스, 소비자 초청 팸투어를 기획합니다. 농부의 철학을 매력적인 이야기로 풀어내 충성 고객을 만듭니다.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">농장 브랜드 숏폼 영상 제작: </strong>
                    유튜브 릴스, 쇼츠, 인스타그램 트렌드에 최적화된 60초 농부 이야기 영상 연출
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">농가 홍보 리플렛 & 패키지 스토리텔링: </strong>
                    친환경 감성의 농장 소개서 및 직거래 배송용 브랜드 엽서 디자인
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">체험단 & 인플루언서 팸투어 운영: </strong>
                    파워블로거, 지역 맘카페 체험단 현장 초청을 통한 실질적 온라인 입소문 확산
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectAction('farm-branding-media-pr')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>농가 홍보 및 미디어 제작 상담</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                <h4 className="text-sm font-bold text-stone-900">
                  체험해봐유의 실제 농가 홍보 성과
                </h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-4 bg-white rounded-lg border border-stone-200">
                    <span className="text-2xl font-black text-emerald-800 tabular-nums">+185%</span>
                    <span className="text-[11px] text-stone-500 block mt-1">직거래 온라인 매출 성장</span>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-stone-200">
                    <span className="text-2xl font-black text-emerald-800 tabular-nums">42곳</span>
                    <span className="text-[11px] text-stone-500 block mt-1">홍보 콘텐츠 지원 농가</span>
                  </div>
                </div>
                <blockquote className="p-3 bg-white rounded-lg border border-stone-200 text-xs italic text-stone-600 leading-relaxed">
                  “투박한 농사꾼이라 홍보는 엄두도 못 냈는데, 대표님이 우리 과수원의 40년 흙 이야기를 영상과 글로 멋지게 살려주신 덕분에 선물세트 전량이 조기 완판되었습니다.”
                  <span className="block text-right font-semibold text-stone-800 not-italic mt-1">
                    - 아산 둔포 배 과수원 박 대표
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
