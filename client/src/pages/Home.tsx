import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QACard from '@/components/QACard';
import InstallPrompt from '@/components/InstallPrompt';

import qaData from '@/data/qa_data.json';

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar' | 'am'>('en');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQA = useMemo(() => {
    if (!searchQuery.trim()) return qaData;

    const query = searchQuery.toLowerCase();
    return qaData.filter(qa => {
      const question = currentLanguage === 'en' ? qa.englishQuestion :
                      currentLanguage === 'ar' ? qa.arabicQuestion :
                      qa.amharicQuestion;
      const answer = currentLanguage === 'en' ? qa.englishAnswer :
                    currentLanguage === 'ar' ? qa.arabicAnswer :
                    qa.amharicAnswer;

      return question.toLowerCase().includes(query) || answer.toLowerCase().includes(query);
    });
  }, [searchQuery, currentLanguage]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InstallPrompt />
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onSearch={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'en' && 'Learn Languages with Ease'}
                {currentLanguage === 'ar' && 'تعلم اللغات بسهولة'}
                {currentLanguage === 'am' && 'ቋንቋዎችን በቀላሉ ይማሩ'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {currentLanguage === 'en' && 'Explore thousands of questions and answers in English, Arabic, and Amharic. Perfect for language learners of all levels.'}
                {currentLanguage === 'ar' && 'استكشف آلاف الأسئلة والأجوبة باللغة الإنجليزية والعربية والأمهرية. مثالي لمتعلمي اللغات من جميع المستويات.'}
                {currentLanguage === 'am' && 'በእንግሊዝኛ፣ አረብኛ እና አማርኛ ሺህ ሺህ ጥያቄዎች እና መልሶች ይዳሳሱ። ለሁሉም ደረጃዎች ተስማሚ።'}
              </p>
            </div>
          </div>
        </section>

        {/* QA Cards Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' && `Showing ${filteredQA.length} question${filteredQA.length !== 1 ? 's' : ''}`}
                {currentLanguage === 'ar' && `عرض ${filteredQA.length} سؤال`}
                {currentLanguage === 'am' && `${filteredQA.length} ጥያቄ ያሳያል`}
              </p>
            </div>

            {/* Cards Grid */}
            {filteredQA.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQA.map((qa) => (
                  <QACard
                    key={qa.id}
                    id={qa.id}
                    englishQuestion={qa.englishQuestion}
                    arabicQuestion={qa.arabicQuestion}
                    amharicQuestion={qa.amharicQuestion}
                    englishAnswer={qa.englishAnswer}
                    arabicAnswer={qa.arabicAnswer}
                    amharicAnswer={qa.amharicAnswer}
                    amharicQuestionPronunciation={qa.amharicQuestionPronunciation}
                    amharicAnswerPronunciation={qa.amharicAnswerPronunciation}
                    currentLanguage={currentLanguage}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {currentLanguage === 'en' && 'No questions found. Try a different search.'}
                  {currentLanguage === 'ar' && 'لم يتم العثور على أسئلة. حاول بحثاً مختلفاً.'}
                  {currentLanguage === 'am' && 'ጥያቄ አልተገኘም። የተለየ ፍለጋ ይሞክሩ።'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}
