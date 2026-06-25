import SectionWave from '@/components/SectionWave';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="access" className="relative py-20 md:py-28 bg-background-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-16 text-left min-[455px]:text-center">
          <div className="lg:w-[55%]">

            <blockquote className={`scroll-fade-up ${isVisible ? 'visible' : ''} relative`}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-foreground-950 leading-snug ">
                〒289-1303<br />
                千葉県山武市松ヶ谷3102-4<br />
                シーサイドビラ松ヶ谷
              </h2>
            </blockquote>

            <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-6 space-y-3`} data-delay="1">
              <div className="flex gap-3 w-full justify-start min-[455px]:justify-center">
                <i className="ri-train-line text-lg text-primary-500 w-6 h-6 flex items-center justify-center flex-shrink-0"></i>
                <p className="text-sm md:text-base text-foreground-700">
                  JR東金線 <strong className="text-foreground-950">成東駅</strong> から<strong className="text-foreground-950">車</strong>で<strong className="text-foreground-950">約10分</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full">
            <div className={`scroll-scale-in ${isVisible ? 'visible' : ''} rounded-lg overflow-hidden h-[300px] md:h-[400px] w-full`} data-delay="2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.5!2d140.3741!3d35.6022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM2JzA3LjkiTiAxNDDCsDIyJzI2LjgiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="シーサイドビラ松ヶ谷 アクセスマップ"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <SectionWave fillClass="fill-background-200" position="bottom" />
    </section>
  );
}