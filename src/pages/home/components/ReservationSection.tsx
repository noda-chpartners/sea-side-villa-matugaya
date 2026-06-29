import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionWave from '@/components/SectionWave';
import kai from '/src/assets/kai.png';
import hitode from '/src/assets/hitode.png';
import yotto2 from '/src/assets/yotto2.png';

export default function ReservationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });



  return (
    <section id="reservation" className="relative py-20 md:py-28 bg-background-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
        <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} block text-3xl md:text-4xl lg:text-5xl font-script text-primary-400 tracking-widest -mb-4 md:-mb-6 relative z-0`}>
            Reservation
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} relative z-10 flex items-center justify-center gap-3 md:gap-5 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-950`} data-delay="1">
            <img src={kai} alt="貝殻" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
            <span>ご予約</span>
            <img src={hitode} alt="ヒトデ" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
          </h2>
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-4 text-sm md:text-base text-foreground-600`} data-delay="2">
            ご予約は楽天トラベル様やAirbnb様で<br className="md:hidden"/>承っております。
          </p>

          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-6 flex flex-col sm:flex-row items-center justify-center gap-4`} data-delay="3">
            <a
              href="https://travel.rakuten.co.jp/HOTEL/194635/194635.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex justify-center gap-2 w-56 bg-accent-500 hover:bg-accent-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-external-link-line"></i> 楽天トラベルで予約
            </a>
            <a
              href="https://www.airbnb.jp/rooms/1491011647491988320?source_impression_id=p3_1782375389_P3eXF_o44StkZ8p1.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex justify-center gap-2 w-56 bg-accent-500 hover:bg-accent-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-external-link-line"></i> Airbnbで予約
            </a>
          </div>
          
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-10 text-sm md:text-base text-foreground-600`} data-delay="4">
            お問い合わせも含めて承っておりますので<br className="md:hidden"/>お気軽にご連絡ください。
          </p>

          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-6 flex flex-col sm:flex-row items-center justify-center gap-4`} data-delay="5">
            <a
              href="tel:08049470316"
              className="inline-flex justify-center w-56 gap-2 bg-primary-500 hover:bg-accent-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-phone-line"></i> 080-4947-0316
            </a>
            <a
              href="mailto:kazun1953jazz@gmail.com"
              className="inline-flex justify-center w-56 gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-mail-line"></i> メールで予約
            </a>
          </div>
          

        </div>


      </div>
      <SectionWave fillClass="fill-foreground-700" position="bottom" />
       
        {/* ヨット画像を画面右下、波の上に配置 */}
        <img
          src={yotto2}
          alt="ヨットのイラスト"
          className="absolute bottom-3 md:bottom-3 lg:bottom-6 left-4 md:left-6 w-16 md:w-28 lg:w-30 h-auto z-20 pointer-events-none"
        />
    </section>
  );
}