import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ReservationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });



  return (
    <section id="reservation" className="relative py-20 md:py-28 bg-background-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} inline-block text-xs font-bold text-primary-600 tracking-widest uppercase border border-primary-200 rounded-full px-3 py-1 mb-6`}>
            Reservation
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground-950`} data-delay="1">
            ご予約
          </h2>
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-4 text-sm md:text-base text-foreground-600`} data-delay="2">
            ご予約・お問い合わせは<br />お電話や楽天トラベル様にて承っております
          </p>

          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-6 flex flex-col sm:flex-row items-center justify-center gap-4`} data-delay="3">
            <a
              href="tel:08049470316"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-phone-line"></i> 080-4947-0316
            </a>
            <a
              href="https://travel.rakuten.co.jp/HOTEL/194635/194635.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-background-50 px-6 py-3 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all"
            >
              <i className="ri-external-link-line"></i> 楽天トラベルで予約
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}