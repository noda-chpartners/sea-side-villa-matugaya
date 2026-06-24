type SectionWaveProps = {
  /** 次のセクション（または前のセクション）の背景色 */
  fillClass?: string;
  position?: 'top' | 'bottom';
  /** 波の向きを反転 */
  flip?: boolean;
  className?: string;
};

export default function SectionWave({
  fillClass = 'fill-background-50',
  position = 'bottom',
  flip = false,
  className = '',
}: SectionWaveProps) {
  return (
    <div
      // 修正ポイント: 99%のズレをなくし、微小な隙間対策として 1px だけ重ねる指定に変更
      // 確実に見えるように z-20 などを追加
      className={`absolute left-0 w-full pointer-events-none leading-none z-20 ${
        position === 'top' ? 'top-0 -translate-y-[1px]' : 'bottom-0 translate-y-[1px]'
      } ${flip ? 'scale-y-[-1]' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        {/* なだらかな波 */}
        <path
          d="M0,64 C200,120 400,0 600,64 C800,128 1000,0 1200,64 L1200,120 L0,120 Z"
          className={fillClass}
        />
      </svg>
    </div>
  );
}