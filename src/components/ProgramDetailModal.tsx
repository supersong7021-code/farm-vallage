import React from 'react';
import { ProgramItem } from '../types';
import { X, Clock, Users, Calendar, Check, Shield, FileText } from 'lucide-react';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onProceedToInquiry: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onProceedToInquiry,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200">
        {/* Modal Header */}
        <div className="relative aspect-16/8 sm:aspect-16/7 bg-stone-100 overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-semibold text-emerald-300 mb-1">
              {program.subtitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">
              {program.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-700 text-sm">
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs">
            <div>
              <span className="text-stone-400 block mb-0.5">운영 시즌</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                {program.season}
              </span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">소요 시간</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                {program.duration}
              </span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">권장 인원</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                {program.groupSize}
              </span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">예상 체험비</span>
              <span className="font-bold text-emerald-800 tabular-nums">
                1인 {program.pricePerPerson.toLocaleString()}원
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              프로그램 소개
            </h4>
            <p className="text-stone-600 leading-relaxed text-sm">
              {program.description}
            </p>
          </div>

          {/* Detailed Schedule */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
              표준 진행 일정표
            </h4>
            <div className="space-y-2 border-l-2 border-emerald-600/40 pl-3">
              {program.schedule.map((item, idx) => (
                <div key={idx} className="relative py-1">
                  <div className="text-xs font-mono font-semibold text-emerald-800">
                    {item.time}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-stone-800">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 mt-2">
              * 단체의 도착 시간 및 학사 일정에 따라 세부 시간표는 탄력적으로 조율됩니다.
            </p>
          </div>

          {/* Included Items */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              포함 사항 및 제공 내역
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
              {program.includes.map((inc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Certification */}
          <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-3 text-xs text-emerald-950">
            <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">안전 관리 및 행정 증빙 안내</span>
              체험 참여자 전원 생산물배상책임 및 영업배상보험이 자동 적용되며, 교육청 및 기관 제출용 안전관리 계획서, 세금계산서, 수료증 발급이 즉시 가능합니다.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            닫기
          </button>
          <button
            onClick={() => {
              onProceedToInquiry(program.id);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>이 프로그램으로 견적·상담 신청</span>
          </button>
        </div>
      </div>
    </div>
  );
};
