export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 2つ目のコードで使われていたリンクを配列化
  const navLinks = [
    { href: '#plans', label: '宿泊プラン' },
    { href: '#amenities', label: '設備' },
    { href: '#info', label: '基本情報' },
    { href: '#access', label: 'アクセス' },
    { href: '#reservation', label: 'ご予約' },
  ];

  return (
    <footer className="bg-foreground-700 text-background-50">
      {/* Upper section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18 flex flex-col items-center text-center">

        {/* Brand */}
        <div className="mb-10 flex flex-col items-center">
          <p className="font-heading font-bold text-3xl tracking-tight">
            シーサイドビラ松ヶ谷
          </p>
          <p className="font-heading text-base tracking-tight mb-4">
            SEASIDE VILLA  MATUGAYA
          </p>
          <div className="w-8 h-[2px] bg-accent-500 mb-5"></div>
        </div>

        {/* Navigation Links */}
        <div className="mb-12 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-background-50/70 text-sm hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <ul className="space-y-2 text-background-50/70 text-sm">
            <li>
              TEL: <a href="tel:08049470316" className="hover:text-background-50 transition-colors">080-4947-0316</a>
            </li>
            <li>チェックイン: 14:00</li>
            <li>チェックアウト: 12:00</li>
            <li>〒289-1303</li>
            <li>千葉県山武市松ヶ谷3102-4 シーサイドビラ松ヶ谷</li>
            <li className="pt-4">
              <a
                href="https://travel.rakuten.co.jp/HOTEL/194635/194635.html"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <i className="ri-external-link-line"></i> 楽天トラベルで予約
              </a>
            </li>
            <li >
              <a
                href="https://www.airbnb.jp/rooms/1491011647491988320?source_impression_id=p3_1782375389_P3eXF_o44StkZ8p1.html"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <i className="ri-external-link-line"></i> Airbnbで予約
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-6 border-t border-background-50/10 flex flex-col items-center justify-center">
        <p className="text-background-50/40 text-xs">
          &copy; {new Date().getFullYear()} シーサイドビラ松ヶ谷. All rights reserved.
        </p>
      </div>
    </footer>
  );
}