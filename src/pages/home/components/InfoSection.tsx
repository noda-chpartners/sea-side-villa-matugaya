import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import info from '/src/assets/info.png';
import kai from '/src/assets/kai.png';
import hitode from '/src/assets/hitode.png';
import yashi from '/src/assets/yashi.png'; // ヤシの木画像をインポート

export default function InfoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  // 表示する基本情報を配列で管理
  const infoItems = [
    { 
      label: 'チェックイン', 
      value: '14:00' 
    },
    { 
      label: 'チェックアウト', 
      value: '12:00' 
    },
    { 
      label: '定休日', 
      value: 'なし' 
    },
    { 
      label: '定員', 
      value: '5名〜最大8名' 
    },
    { 
      label: '駐車場', 
      value: 'あり' 
    },
    { 
      label: 'お電話', 
      value: (
        <a href="tel:08049470316" className="hover:text-primary-600 transition-colors">
          080-4947-0316
        </a>
      )
    },
  ];

  return (
    <section id="info" className="relative py-20 md:py-28 bg-background-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative"> {/* relativeを追加 */}
        
        {/* 見出しエリア */}
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} block text-3xl md:text-4xl lg:text-5xl font-script text-primary-400 tracking-widest -mb-4 md:-mb-6 relative z-0`}>
            information
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} relative z-10 flex items-center justify-center gap-3 md:gap-5 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-950`} data-delay="1">
            <img src={kai} alt="貝殻" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
            <span>基本情報</span>
            <img src={hitode} alt="ヒトデ" className="w-16 md:w-18 lg:w-24 h-auto object-contain" />
          </h2>
        </div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* 画像エリア */}
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} rounded-xl overflow-hidden shadow-md aspect-[4/3] relative w-full bg-gray-200`} data-delay="2">
            <img
              src={info}
              alt="シーサイドビラ松ヶ谷の様子"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* リストエリア（親要素をrelativeに、ヤシの木をabsoluteで重ねる） */}
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} border-t border-background-200 w-full mt-2 lg:mt-0 relative`} data-delay="3">
            {infoItems.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row py-5 border-b border-background-200 gap-2 sm:gap-8 hover:bg-background-100/50 transition-colors px-2 -mx-2 sm:mx-0 sm:px-0"
              >
                {/* 左側：項目名 */}
                <div className="font-bold text-foreground-950 sm:w-36 flex-shrink-0">
                  {item.label}
                </div>
                {/* 右側：内容 */}
                <div className="text-foreground-800 flex-1 leading-relaxed z-10 relative"> {/* z-10とrelativeを追加 */}
                  {item.value}
                </div>
              </div>
            ))}
            
            {/* ヤシの木画像を右下に配置 */}
            <img 
              src={yashi} 
              alt="ヤシの木" 
              className="absolute -bottom-10 -right-2 md:-bottom-16 md:-right-4 lg:-right-10 w-40 md:w-48 lg:w-56 h-auto object-contain z-0" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}