import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // 300px以上で表示（60でも可）
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // または document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-500 hover:bg-primary-600 text-background-50 shadow-lg transition-all duration-300 cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-line text-xl md:text-2xl"></i>
    </button>
  );
}