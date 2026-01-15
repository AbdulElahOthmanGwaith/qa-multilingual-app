import { useState } from 'react';
import { Globe, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentLanguage: 'en' | 'ar' | 'am';
  onLanguageChange: (lang: 'en' | 'ar' | 'am') => void;
  onSearch: (query: string) => void;
}

export default function Header({ currentLanguage, onLanguageChange, onSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'am', label: 'አማርኛ' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">QA</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
              {currentLanguage === 'en' && 'QA Hub'}
              {currentLanguage === 'ar' && 'منصة الأسئلة'}
              {currentLanguage === 'am' && 'ጥያቄ ማእከል'}
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={
                  currentLanguage === 'en' ? 'Search questions...' :
                  currentLanguage === 'ar' ? 'ابحث عن أسئلة...' :
                  'ጥያቄዎችን ይፈልጉ...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </form>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Dropdown */}
            <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code as 'en' | 'ar' | 'am')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-sky-400 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search & Language Switcher */}
        {mobileMenuOpen && (
          <div className="mt-4 space-y-3 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder={
                  currentLanguage === 'en' ? 'Search questions...' :
                  currentLanguage === 'ar' ? 'ابحث عن أسئلة...' :
                  'ጥያቄዎችን ይፈልጉ...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>

            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code as 'en' | 'ar' | 'am');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-sky-400 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
