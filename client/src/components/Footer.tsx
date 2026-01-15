import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  currentLanguage: 'en' | 'ar' | 'am';
}

export default function Footer({ currentLanguage }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' && 'About'}
              {currentLanguage === 'ar' && 'عن الموقع'}
              {currentLanguage === 'am' && 'ስለ ድረ-ገጽ'}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentLanguage === 'en' && 'A multilingual Q&A platform to help you learn English, Arabic, and Amharic with ease.'}
              {currentLanguage === 'ar' && 'منصة أسئلة وأجوبة متعددة اللغات لمساعدتك على تعلم الإنجليزية والعربية والأمهرية بسهولة.'}
              {currentLanguage === 'am' && 'ብዙ ቋንቋዊ ጥያቄ እና መልስ መድረክ ለእንግሊዝኛ፣ ለአረብኛ እና ለአማርኛ ለመማር።'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' && 'Quick Links'}
              {currentLanguage === 'ar' && 'روابط سريعة'}
              {currentLanguage === 'am' && 'ፈጣን ሊንክ'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-400 transition-colors">
                  {currentLanguage === 'en' && 'Home'}
                  {currentLanguage === 'ar' && 'الرئيسية'}
                  {currentLanguage === 'am' && 'ቤት'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-400 transition-colors">
                  {currentLanguage === 'en' && 'Explore'}
                  {currentLanguage === 'ar' && 'استكشاف'}
                  {currentLanguage === 'am' && 'ዳሳሽ'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-400 transition-colors">
                  {currentLanguage === 'en' && 'About'}
                  {currentLanguage === 'ar' && 'عن'}
                  {currentLanguage === 'am' && 'ስለ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' && 'Contact'}
              {currentLanguage === 'ar' && 'اتصل بنا'}
              {currentLanguage === 'am' && 'ያግኙን'}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:info@qaplatform.com" className="hover:text-sky-400 transition-colors">
                  info@qaplatform.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href="tel:+1234567890" className="hover:text-sky-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>
              © {year} {currentLanguage === 'en' && 'QA Hub. All rights reserved.'}
              {currentLanguage === 'ar' && 'منصة الأسئلة. جميع الحقوق محفوظة.'}
              {currentLanguage === 'am' && 'ጥያቄ ማእከል። ሁሉም መብቶች የተጠበቁ ናቸው።'}
            </p>
            <div className="flex items-center gap-2">
              <span>
                {currentLanguage === 'en' && 'Powered by'}
                {currentLanguage === 'ar' && 'مدعوم من'}
                {currentLanguage === 'am' && 'ተጠናክሮ በ'}
              </span>
              <a href="https://manus.im" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-400 hover:text-sky-600 transition-colors">
                Manus
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
