import React from 'react';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';
import twinroom from '/src/assets/twin.jpg';
import doubleroom from '/src/assets/double.png';
import bbq from '/src/assets/hero3.png';
import kai from '/src/assets/kai.png';
import hitode from '/src/assets/hitode.png';

const plans = [
  {
    id: 1,
    name: '2名様プラン',
    image: twinroom,
    prices: [
      { label: '月〜木', value: '12,000', suffix: '円〜', note: '（税込）' },
      { label: '金土日祝', value: '16,000', suffix: '円〜', note: '（税込）' },
    ],
    features: ['LDK続きのツインルーム', '添い寝の小さなお子様無料'],
    isSpecial: false,
  },
  {
    id: 2,
    name: '2階ダブルルーム',
    image: doubleroom,
    prices: [
      { label: 'エアコン付き', value: '3,500', suffix: '円', note: '（税込）' },
      { label: '扇風機付き', value: '2,500', suffix: '円', note: '（税込）' },
    ],
    features: ['定員2名', '150cm幅ダブルベッド', '全3部屋（エアコン付2部屋 / 扇風機付1部屋）'],
    isSpecial: false,
  },
  {
    id: 3,
    name: 'BBQセット',
    image: bbq,
    prices: [
      { label: '', value: '3,000', suffix: '円', note: '（税込）' },
    ],
    features: ['BBQ機材貸出', '食材はお客様ご持参'],
    isSpecial: true,
  },
];

export default function PlansSection() {
  const { ref, isVisible } = useScrollAnimationGroup({ threshold: 0.1 });

  return (
    <section id="plans" className="relative py-20 md:py-28 bg-background-100">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        
        {/* 見出しエリア */}
        <div ref={ref} className="text-center mb-12 md:mb-16 relative">
          <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} block text-3xl md:text-4xl lg:text-5xl font-script text-primary-400 tracking-widest -mb-4 md:-mb-6 relative z-0`}>
            Prices
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} relative z-10 flex items-center justify-center gap-3 md:gap-5 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-950`} data-delay="1">
            <img src={kai} alt="貝殻" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
            <span>ご料金</span>
            <img src={hitode} alt="ヒトデ" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
          </h2>
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-6 text-sm md:text-base text-foreground-600 max-w-xl mx-auto`} data-delay="2">
            お客様のスタイルに合わせて宿泊プランを<br className="md:hidden" />お選びいただけます。<br />
          </p>
        </div>

        {/* プラン一覧 */}
        <div className="flex flex-col gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <React.Fragment key={plan.id}>
              
              {/* オプションプランの前の区切り見出しと注意書き */}
              {plan.isSpecial && (
                <>
                  <p 
                    className={`scroll-fade-up ${isVisible ? 'visible' : ''} text-[10px] md:text-sm text-foreground-600 text-center`} 
                    data-delay={String(index + 2)}
                  >
                    ※1名で1部屋利用をご希望の場合は、2部屋ご予約ください。
                  </p>
                  
                  <div 
                    className={`scroll-fade-up ${isVisible ? 'visible' : ''} mt-4 md:mt-6 flex items-center gap-4`} 
                    data-delay={String(index + 3)}
                  >
                    <div className="h-px bg-background-300 flex-1"></div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-foreground-800 tracking-wider">
                      追加オプション
                    </h3>
                    <div className="h-px bg-background-300 flex-1"></div>
                  </div>
                </>
              )}

              {/* アニメーション用のラッパー */}
              <div
                className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}
                data-delay={String(index + 4)}
              >
                <div className={`${
                    plan.isSpecial 
                      ? 'bg-amber-50/80 border-amber-300' 
                      : 'bg-background-50 border-background-200'
                  } rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row group cursor-pointer h-full border`}
                >
                  
                  <div className="w-full md:w-5/12 lg:w-1/2 h-56 md:h-auto relative flex-shrink-0 bg-gray-200 overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  
                    {plan.isSpecial && (
                      <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-md z-10 tracking-wider">
                        オプション
                      </span>
                    )}
                  </div>

                  <div className="p-5 md:p-8 flex flex-col flex-1 min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-950">
                        {plan.name}
                      </h3>
                      
                      <div className={`mt-4 pt-4 border-t ${plan.isSpecial ? 'border-amber-200/80' : 'border-background-200'}`}>
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground-700 mt-2">
                            <i className={`ri-check-line text-base flex items-center justify-center flex-shrink-0 ${plan.isSpecial ? 'text-amber-500' : 'text-primary-500'}`}></i>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 料金エリア */}
                    <div className="mt-auto pt-8 flex justify-end w-full">
                      <table className="border-collapse">
                        <tbody>
                          {plan.prices.map((p, i) => (
                            <tr key={i}>
                              {p.label && (
                                <td className="pb-1 pr-4 text-sm md:text-base text-foreground-700 text-left align-baseline whitespace-nowrap font-medium">
                                  {p.label}
                                </td>
                              )}
                              <td className="pb-1 text-right align-baseline whitespace-nowrap">
                                <span className={`text-2xl md:text-3xl font-bold font-heading ${plan.isSpecial ? 'text-amber-600' : 'text-primary-500'}`}>
                                  {p.value}
                                </span>
                                <span className="text-sm md:text-base font-normal text-foreground-950 ml-1 inline-block">
                                  {p.suffix}
                                </span>
                                {p.note && (
                                  <span className="text-xs md:text-sm text-foreground-600 ml-1 inline-block">
                                    {p.note}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}