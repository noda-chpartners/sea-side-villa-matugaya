import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionWave from '@/components/SectionWave';
import  hero from '/src/assets/hero.png';
import  hero2 from '/src/assets/hero2.jpg';
import  hero3 from '/src/assets/hero3.jpg';
import  hero4 from '/src/assets/hero4.jpg';

// 画像配列を定義（4枚の画像を順番にセット）
const backgroundImages = [hero, hero2, hero3, hero4];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 現在表示している画像のインデックスを管理するステート
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 画像を一定間隔で切り替えるためのuseEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5000ミリ秒（5秒）ごとに切り替え。お好みで調整してください。

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  const navItems = [
    { id: 'plans', label: '宿泊プラン' },
    { id: 'amenities', label: '設備' },
    { id: 'info', label: '基本情報' },
    { id: 'access', label: 'アクセス' },
  ];

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden" id="hero">
        <div className="absolute inset-0 bg-foreground-950">
          {/* 画像をループ出力し、現在のインデックスのみopacity-100にする */}
          {backgroundImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`シーサイドビラ松ヶ谷 外観 ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>

        <nav
          id="main-nav"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-background-50/95 shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <i className="ri-home-smile-line text-xl text-background-50"></i>
              </div>
              <span className={`text-lg font-heading font-bold whitespace-nowrap transition-colors ${scrolled ? 'text-foreground-950' : 'text-background-50'}`}>
                シーサイドビラ松ヶ谷
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm whitespace-nowrap cursor-pointer transition-colors ${
                    scrolled ? 'text-foreground-700 hover:text-foreground-950' : 'text-background-50/90 hover:text-background-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a href="#reservation" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition-all">
                ご予約 <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden text-2xl cursor-pointer ${scrolled ? 'text-foreground-950' : 'text-background-50'}`}
              aria-label="メニューを開く"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </nav>

        <div ref={ref} className="relative z-10 flex flex-col items-start justify-center h-full max-w-[1400px] mx-auto px-4 md:px-6 pt-20">
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
            
          </div>
          <h1 className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} data-delay="1">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-zen font-bold text-background-50 leading-tight">
             カジュアルに<br />
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-background-50 leading-tight">
              楽しめる別荘
            </span>
          </h1>
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-4 md:mt-6 text-base md:text-lg text-background-50/80 max-w-lg`} data-delay="2">
            最大8名様まで。BBQも楽しめる千葉の隠れ家で、<br className="hidden sm:block" />心ゆくまでくつろぐ時間を。
          </p>
         
        </div>
        <SectionWave fillClass="fill-background-100" position="bottom" />
      </section>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-foreground-950/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-background-50 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center">
                  <i className="ri-home-smile-line text-lg text-background-50"></i>
                </div>
                <span className="text-base font-heading font-bold text-foreground-950">シーサイドビラ松ヶ谷</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-foreground-950 text-2xl cursor-pointer w-10 h-10 flex items-center justify-center"
                aria-label="メニューを閉じる"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <li
                    key={item.id}
                    className={`transition-all duration-300 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                    style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
                  >
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left py-4 px-3 text-lg font-heading font-bold text-foreground-950 hover:text-primary-600 border-b border-background-200 cursor-pointer transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={`pt-6 border-t border-background-200 transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: menuOpen ? `${150 + navItems.length * 60}ms` : '0ms' }}
            >
              <a
                href="#reservation"
                onClick={(e) => { e.preventDefault(); scrollTo('reservation'); }}
                className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-background-50 px-6 py-4 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
              >
                ご予約する <i className="ri-arrow-right-line"></i>
              </a>

              <p className="text-center text-xs text-foreground-500 mt-5">
                <a href="tel:08049470316" className="hover:text-primary-600 transition-colors">
                  <i className="ri-phone-line mr-1"></i>080-4947-0316
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}