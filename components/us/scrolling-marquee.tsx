"use client"

export function ScrollingMarquee() {
  const messages = [
    "🌱 Seeds Sprout in 7 Days — Guaranteed",
    "Secure Payment & Free Tracked Shipping on All Kits",
    "🌺 Everything You Need From Seed to Spectacular Bloom — Nothing Else to Buy",
    "🌱 Seeds Sprout in 7 Days — Guaranteed",
    "Secure Payment & Free Tracked Shipping on All Kits",
  ]

  return (
    <div className="sticky top-0 z-50 bg-amber-400 text-black py-2 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={`first-${index}`} className="mx-8 text-sm font-medium">
            {message}
          </span>
        ))}
        {messages.map((message, index) => (
          <span key={`second-${index}`} className="mx-8 text-sm font-medium">
            {message}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
