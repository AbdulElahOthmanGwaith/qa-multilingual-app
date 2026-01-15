import { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface QACardProps {
  id: number;
  englishQuestion: string;
  arabicQuestion: string;
  amharicQuestion: string;
  englishAnswer: string;
  arabicAnswer: string;
  amharicAnswer: string;
  amharicQuestionPronunciation: string;
  amharicAnswerPronunciation: string;
  currentLanguage: 'en' | 'ar' | 'am';
}

export default function QACard({
  id,
  englishQuestion,
  arabicQuestion,
  amharicQuestion,
  englishAnswer,
  arabicAnswer,
  amharicAnswer,
  amharicQuestionPronunciation,
  amharicAnswerPronunciation,
  currentLanguage
}: QACardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getQuestion = () => {
    switch (currentLanguage) {
      case 'en':
        return englishQuestion;
      case 'ar':
        return arabicQuestion;
      case 'am':
        return amharicQuestion;
    }
  };

  const getAnswer = () => {
    switch (currentLanguage) {
      case 'en':
        return englishAnswer;
      case 'ar':
        return arabicAnswer;
      case 'am':
        return amharicAnswer;
    }
  };

  const getPronunciation = () => {
    if (currentLanguage === 'am') {
      return {
        question: amharicQuestionPronunciation,
        answer: amharicAnswerPronunciation
      };
    }
    return null;
  };

  const pronunciation = getPronunciation();

  const handleCopy = (text: string, type: 'question' | 'answer') => {
    navigator.clipboard.writeText(text);
    const message = currentLanguage === 'en' ? `${type === 'question' ? 'Question' : 'Answer'} copied!` :
                   currentLanguage === 'ar' ? `تم نسخ ${type === 'question' ? 'السؤال' : 'الإجابة'}!` :
                   `${type === 'question' ? 'ጥያቄ' : 'መልስ'} ተቀድቷል!`;
    toast.success(message);
  };

  return (
    <div
      className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question Section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-sky-400 uppercase">
              {currentLanguage === 'en' && 'Question'}
              {currentLanguage === 'ar' && 'السؤال'}
              {currentLanguage === 'am' && 'ጥያቄ'}
            </span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-lg font-semibold text-gray-900 leading-relaxed">
              {getQuestion()}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(getQuestion(), 'question');
              }}
              className="p-1.5 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
              title="Copy question"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          {pronunciation && (
            <p className="text-sm text-gray-500 mt-2 italic">
              {currentLanguage === 'am' && `النطق: ${pronunciation.question}`}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-sky-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>

      {/* Answer Section */}
      {isOpen && (
        <div className="mt-6 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-sky-600 uppercase">
              {currentLanguage === 'en' && 'Answer'}
              {currentLanguage === 'ar' && 'الإجابة'}
              {currentLanguage === 'am' && 'መልስ'}
            </span>
          </div>
          <div className="flex items-start justify-between gap-2 mb-3">
            <p className="text-base text-gray-700 leading-relaxed">
              {getAnswer()}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(getAnswer(), 'answer');
              }}
              className="p-1.5 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-md transition-colors"
              title="Copy answer"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          {pronunciation && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
                {currentLanguage === 'am' && 'النطق العربي'}
              </p>
              <p className="text-sm text-gray-700 italic">
                {pronunciation.answer}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Card Number */}
      <div className="mt-4 text-xs text-gray-400">
        #{id}
      </div>
    </div>
  );
}
