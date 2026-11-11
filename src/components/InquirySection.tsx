import React, { useState, useEffect } from 'react';
import { PROGRAMS } from '../data/mockData';
import { InquiryFormData } from '../types';
import { Calculator, Send, CheckCircle2, Phone, Mail, Building, Users, Calendar } from 'lucide-react';

interface InquirySectionProps {
  initialProgramId?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialProgramId }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    organization: '',
    phone: '',
    email: '',
    groupType: 'school',
    programId: initialProgramId || 'eco-smart-garden',
    participantCount: 30,
    desiredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryReceipt, setInquiryReceipt] = useState<{
    id: string;
    totalCost: number;
    discountRate: number;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    if (initialProgramId) {
      setFormData((prev) => ({ ...prev, programId: initialProgramId }));
    }
  }, [initialProgramId]);

  // Selected program info
  const selectedProgram = PROGRAMS.find((p) => p.id === formData.programId);
  const basePrice = selectedProgram ? selectedProgram.pricePerPerson : 25000;

  // Group discount calculation
  let discountRate = 0;
  if (formData.participantCount >= 50) {
    discountRate = 0.1; // 10%
  } else if (formData.participantCount >= 30) {
    discountRate = 0.05; // 5%
  }

  const subtotal = basePrice * formData.participantCount;
  const discountAmount = Math.round(subtotal * discountRate);
  const estimatedTotal = subtotal - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.desiredDate) {
      alert('필수 입력 항목(성함, 연락처, 희망일정)을 확인해주세요.');
      return;
    }

    const receipt = {
      id: `SNH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      totalCost: estimatedTotal,
      discountRate: discountRate * 100,
      timestamp: new Date().toLocaleString('ko-KR'),
    };

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('snh_inquiries') || '[]');
      existing.unshift({ ...formData, receipt });
      localStorage.setItem('snh_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage error
    }

    setInquiryReceipt(receipt);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquiryReceipt(null);
    setFormData({
      name: '',
      organization: '',
      phone: '',
      email: '',
      groupType: 'school',
      programId: 'eco-smart-garden',
      participantCount: 30,
      desiredDate: '',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Context & Direct Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-emerald-800 tracking-wider mb-2">
                실시간 맞춤 견적 & 예약 상담
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug mb-4">
                필요한 인원과 일정만 <br />
                알려주시면 <span className="text-emerald-800">송노한 대표</span>가 <br />
                직접 최적의 기획안을 안내합니다
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-8">
                단체 성격과 예산에 맞춰 프로그램 일정, 강사료, 재료비 내역이 포함된 공식 견적서 및 안전관리계획서를 24시간 이내에 발송해 드립니다.
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-4 py-6 border-y border-stone-200 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">전화 직통 상담</span>
                    <span className="font-semibold text-stone-900">041-558-7021 / 010-3456-7021</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">이메일 공식 문의</span>
                    <span className="font-semibold text-stone-900">supersong7021@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-800">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">교육 센터 및 본원 주소</span>
                    <span className="font-semibold text-stone-900">충청남도 천안시 서북구 성환읍 웰빙농업길 42</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Estimation Card */}
            <div className="mt-6 p-5 bg-white rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700">
                  <Calculator className="w-4 h-4 text-emerald-700" />
                  <span>예상 견적 시뮬레이션</span>
                </div>
                {discountRate > 0 && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    단체 {(discountRate * 100).toFixed(0)}% 우대 할인 적용
                  </span>
                )}
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t border-stone-100">
                <span className="text-xs text-stone-500">
                  {formData.participantCount}인 기준 예상 총액
                </span>
                <span className="text-xl font-extrabold text-emerald-900 tabular-nums">
                  {estimatedTotal.toLocaleString()}원
                </span>
              </div>
              <p className="text-[11px] text-stone-400 mt-1">
                * 식사, 재료, 강사료 포함 기준이며 실제 요구 사항에 따라 조정될 수 있습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Form or Confirmation Card */}
          <div className="lg:col-span-7">
            {submitted && inquiryReceipt ? (
              <div className="bg-white rounded-2xl border border-emerald-200/90 p-8 shadow-sm text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  교육·체험 상담 신청이 성공적으로 접수되었습니다!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md mx-auto">
                  접수 번호 <strong className="text-stone-800 font-mono">[{inquiryReceipt.id}]</strong>로 등록되었으며, 기재해주신 연락처로 송노한 대표가 확인 후 신속하게 연락드리겠습니다.
                </p>

                {/* Summary Table */}
                <div className="bg-stone-50 rounded-xl p-4 text-xs text-left max-w-md mx-auto space-y-2 mb-6 border border-stone-200">
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">신청 단체/성함</span>
                    <span className="font-semibold text-stone-800">
                      {formData.organization ? `${formData.organization} (${formData.name})` : formData.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">선택 프로그램</span>
                    <span className="font-semibold text-stone-800">
                      {selectedProgram ? selectedProgram.title : '맞춤형 커리큘럼'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">희망 일정 및 인원</span>
                    <span className="font-semibold text-stone-800">
                      {formData.desiredDate} / {formData.participantCount}명
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-500">예상 견적액</span>
                    <span className="font-bold text-emerald-800 tabular-nums">
                      {inquiryReceipt.totalCost.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  새로운 추가 문의 작성하기
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5"
              >
                {/* Group Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    신청 단체 구분 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { key: 'school', label: '초·중·고교/늘봄' },
                      { key: 'market_tour', label: '역사탐방/농산물직거래' },
                      { key: 'consulting', label: '농가홍보/컨설팅' },
                      { key: 'organization', label: '공공기관/기업' },
                      { key: 'kindergarten', label: '유치원/어린이집' },
                      { key: 'family', label: '가족/소모임/개인' },
                    ].map((gt) => (
                      <button
                        key={gt.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, groupType: gt.key as any })}
                        className={`py-2 px-3 rounded-lg border text-center font-medium transition-colors cursor-pointer ${
                          formData.groupType === gt.key
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {gt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Program Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    희망 프로그램 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.programId}
                    onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 bg-white"
                  >
                    {PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        [{prog.season}] {prog.title} (1인 {prog.pricePerPerson.toLocaleString()}원)
                      </option>
                    ))}
                    <option value="custom">맞춤형 기획 (프로그램 협의 및 신규 기획)</option>
                  </select>
                </div>

                {/* Participant Slider & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-bold text-stone-700">
                        예상 인원 <span className="text-red-500">*</span>
                      </label>
                      <span className="text-xs font-mono font-bold text-emerald-800">
                        {formData.participantCount}명
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="5"
                        max="150"
                        step="5"
                        value={formData.participantCount}
                        onChange={(e) =>
                          setFormData({ ...formData, participantCount: Number(e.target.value) })
                        }
                        className="w-full accent-emerald-800 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      희망 일정 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.desiredDate}
                        onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      신청자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동 (직책/역할)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      학교 / 소속 기관명
                    </label>
                    <input
                      type="text"
                      placeholder="예: 성환초등학교 늘봄팀"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      연락처(휴대폰) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      이메일 (견적서 수신용)
                    </label>
                    <input
                      type="email"
                      placeholder="name@school.ac.kr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    기타 요청사항 (알레르기, 버스 주차, 식사 구성 등)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="필요하신 특이사항이나 행정 증빙서류 요청을 자유롭게 적어주세요."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:scale-99 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>맞춤 견적 및 상담 예약 신청하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
