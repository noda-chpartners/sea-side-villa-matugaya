import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// インポート文に合わせてinfo.jpgを使用します
import info from '/src/assets/info.png';

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
      <div className="max-w-[1200px] mx-auto px-4 md:px-6"> {/* 画像と並べるため幅を少し広げています */}
        
        {/* 見出しエリア：他のセクションに合わせて中央揃え・サイズ調整 */}
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} inline-block text-xs font-bold text-primary-600 tracking-widest uppercase border border-primary-200 rounded-full px-3 py-1 mb-4`}>
            Information
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground-950 leading-tight`} data-delay="1">
            基本情報
          </h2>
        </div>

        {/* コンテンツエリア：画像とリストを横並び（スマホでは縦並び） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* 画像エリア */}
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} rounded-xl overflow-hidden shadow-md aspect-[4/3] relative w-full bg-gray-200`} data-delay="2">
            <img
              src={info}
              alt="シーサイドビラ松ヶ谷の様子"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* リストエリア */}
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} border-t border-background-200 w-full mt-2 lg:mt-0`} data-delay="3">
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
                <div className="text-foreground-800 flex-1 leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}