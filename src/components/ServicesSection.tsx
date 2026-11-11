import React from 'react';
import { BookOpen, Utensils, Landmark, ShoppingBag, Megaphone, Lightbulb, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'education',
      number: '01',
      title: '농업·생태 교육 기획',
      subtitle: '초·중·고 늘봄 및 환경생태 교과 연계',
      icon: BookOpen,
      colSpan: 'lg:col-span-4',
      description: '학교 및 청소년 기관을 위한 정규 생태 텃밭 커리큘럼, 탄소중립 농업 체험, 미래 농업 진로 탐색 프로그램을 기획·운영합니다.',
      features: [
        '초등 늘봄학교 친환경 생태 텃밭 교실',
        '중·고교 스마트팜 & 미래 농업 진로 멘토링',
        '학교 교육과정 성취기준 연계 교재 제공',
      ],
      tag: '교육청·학교 연계',
    },
    {
      id: 'seasonal-tour',
      number: '02',
      title: '사계절 오감 농촌체험',
      subtitle: '유아·가족·단체를 위한 힐링 수확 투어',
      icon: Utensils,
      colSpan: 'lg:col-span-4',
      description: '봄 딸기·모종, 여름 옥수수, 가을 과수원 수확 및 전통 탈곡, 겨울 발효 장 담그기까지 1년 내내 자연의 리듬에 맞춘 오감 체험을 진행합니다.',
      features: [
        '1인 1박스 제철 유기농 과채류 수확 체험',
        '화덕 피자, 전통 떡 팜투테이블 쿠킹 클래스',
        '우천 걱정 없는 전천후 실내 스마트 온실',
      ],
      tag: '가족·어린이 인기',
    },
    {
      id: 'rural-history-culture',
      number: '03',
      title: '농촌 역사·문화·인문학 탐방',
      subtitle: '전통 고택 돌담길과 조상의 지혜 탐방',
      icon: Landmark,
      colSpan: 'lg:col-span-4',
      description: '수백 년 역사를 간직한 전통 한옥 마을, 고택 돌담길, 향토 민속 문화와 종가집 다도를 향토 사학자의 깊이 있는 해설과 함께 탐방합니다.',
      features: [
        '향토 사학자와 함께 걷는 전통 마을 인문학 산책',
        '종가집 종부와 함께하는 고택 다도 및 예절 교실',
        '전통 농기구 시연 및 볏짚 민속 공예 실습',
      ],
      tag: '문화유산·인문학',
    },
    {
      id: 'produce-market',
      number: '04',
      title: '제철 농산물 직거래 & 유통',
      subtitle: '우수 인증 농가와 소비자를 잇는 직판 상생 장터',
      icon: ShoppingBag,
      colSpan: 'lg:col-span-4',
      description: '충남 지역 엄선된 친환경 농가들의 우수 농산물을 유통 거품 없이 산지에서 바로 공급하며, 정기 팝업마켓과 제철 농산물 꾸러미를 큐레이션합니다.',
      features: [
        '당일 수확 산지직송 제철 과일·잡곡·토종꿀 공급',
        '기업·기관 명절선물 및 단체 급식 로컬푸드 연계',
        '주말 직판 팝업마켓 및 제철 농산물 무료 시식회',
      ],
      tag: '산지직송·직거래',
    },
    {
      id: 'farm-pr-media',
      number: '05',
      title: '농가 홍보 & 미디어 마케팅',
      subtitle: '농가의 진심을 널리 알리는 브랜딩 콘텐츠',
      icon: Megaphone,
      colSpan: 'lg:col-span-4',
      description: '땀 흘려 농사짓는 농부의 정성이 소비자에게 감동으로 닿을 수 있도록 농장 숏폼 영상 제작, 스토리북 출판, 인플루언서 팸투어를 기획합니다.',
      features: [
        '농장 소개 고화질 숏폼 영상 및 홍보 사진 촬영',
        '농가 스토리텔링 브랜드 카드뉴스 및 팸플릿 제작',
        '도시민·인플루언서 초청 현장 팸투어 디렉팅',
      ],
      tag: '홍보영상·팸투어',
    },
    {
      id: 'consulting',
      number: '06',
      title: '6차산업 & 농가 비즈니스 컨설팅',
      subtitle: '농가 자립과 융복합 고부가가치 창출',
      icon: Lightbulb,
      colSpan: 'lg:col-span-4',
      description: '단순 생산 중심 농가가 체험 관광 및 가공 유통의 6차 산업으로 도약할 수 있도록 체험 상품 개발, 패키지 디자인 기획, 공모사업 지원 멘토링을 수행합니다.',
      features: [
        '농가별 고유 자원을 발굴하는 1:1 맞춤형 상품화',
        '브랜드 네이밍, 로고 및 친환경 패키지 디자인',
        '청년 농업인·귀농인 역량 강화 실전 워크숍',
      ],
      tag: '농가 자립 멘토링',
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
              주요 사업 영역
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
              교육부터 문화탐방, 판매, 홍보까지 <br />
              <span className="text-emerald-800">체험해봐유 6대 통합 솔루션</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            생산과 교육, 문화와 유통을 아우르며 지속 가능한 농업 생태계와 활력 넘치는 농촌의 내일을 만듭니다.
          </p>
        </div>

        {/* 6-box Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 bg-white rounded-2xl border border-stone-200/90 hover:border-emerald-700/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-stone-400 font-mono">
                      {item.number}.
                    </span>
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-200 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 font-medium">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 mt-3">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-stone-600 border-t border-stone-100 pt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-700 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>이 분야 맞춤 상담 문의</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
