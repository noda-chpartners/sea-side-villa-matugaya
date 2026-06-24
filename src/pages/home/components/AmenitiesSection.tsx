import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';
import living from '/src/assets/living.png';

const amenitiesData = [
  {
    id: 1,
    title: 'BBQ',
    icon: 'ri-fire-line',
    description: 'セットご料金3,000円。折り畳み椅子３脚付き。',
  },
  {
    id: 2,
    title: 'Wi-Fi',
    icon: 'ri-wifi-line',
    description: 'インターネット接続。LAN形式と無線LAN形式ございます。',
  },
  {
    id: 3,
    title: 'アメニティ',
    icon: 'ri-drop-line',
    description: 'タオル、固形石鹸、ヘアドライヤー、シャンプー、ソープ、歯ブラシ',
  },
  {
    id: 4,
    title: 'テレビ',
    icon: 'ri-tv-2-line',
    description: 'スマートTV、Amazonプライムビデオ、YouTube視聴可能です。',
  },
  {
    id: 5,
    title: 'キッチン',
    icon: 'ri-restaurant-line',
    description: 'コンロ、調理器具、冷蔵庫、電子レンジ、食器',
  },
  {
    id: 6,
    title: '洗濯機',
    icon: 'ri-t-shirt-line',
    description: '洗濯物干しもございます。',
  },
];

export default function AmenitiesSection() {
  const { ref, isVisible } = useScrollAnimationGroup({ threshold: 0.15 });

  return (
    <section id="amenities" className="relative py-20 md:py-28 bg-background-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* 見出しエリア */}
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <span className={`scroll-fade-up ${isVisible ? 'visible' : ''} inline-block text-xs font-bold text-primary-600 tracking-widest uppercase border border-primary-200 rounded-full px-3 py-1 mb-4`}>
            Amenities
          </span>
          <h2 className={`scroll-fade-up ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground-950`} data-delay="1">
            設備・アメニティ
          </h2>
          <p className={`scroll-fade-up ${isVisible ? 'visible' : ''} text-sm md:text-base text-foreground-600 mt-4`} data-delay="2">
            快適にお過ごしいただくための設備をご用意
          </p>
        </div>

        {/* メイン画像 (living.jpg) */}
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''} mb-12 md:mb-16 rounded-xl overflow-hidden shadow-md aspect-video max-h-[500px] relative w-full bg-gray-200`} data-delay="3">
          <img
            src={living}
            alt="リビングルームの様子"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* シンプルなカードのグリッド (3列 x 2行) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {amenitiesData.map((item, index) => (
            <div 
              key={item.id} 
              className={`scroll-fade-up ${isVisible ? 'visible' : ''} bg-background-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-background-200 flex flex-col items-start`} 
              data-delay={String(index + 4)}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-5 flex-shrink-0">
                <i className={`${item.icon} text-2xl text-primary-600`}></i>
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground-950 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}