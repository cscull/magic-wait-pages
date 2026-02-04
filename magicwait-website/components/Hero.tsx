export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Background radial gold glow behind the phone mockup */}
      <div className="radial-gold-glow absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block" />

      {/* Sparkle particles */}
      {[
        { top: "10%", left: "12%", delay: "0s" },
        { top: "25%", right: "18%", delay: "0.8s" },
        { top: "50%", left: "8%", delay: "1.6s" },
        { top: "70%", right: "15%", delay: "2.2s" },
        { top: "85%", left: "40%", delay: "1.0s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="sparkle-particle"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            animationDelay: pos.delay,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Gold badge */}
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark mb-8">
            Walt Disney World Companion
          </span>

          {/* Main heading */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-navy-950 mb-6">
            Your{" "}
            <span className="gold-shimmer">Magic</span>
            {" "}Starts Here
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-slate-500 mb-10">
            Real-time wait times, Lightning Lane pricing, and ride tracking for
            all 4 Disney World parks. Free forever.
          </p>

          {/* App Store download button */}
          <a href="#download" className="btn-gold text-base">
            <svg
              className="h-5 w-5"
              viewBox="0 0 384 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative flex-shrink-0">
          {/* Radial glow behind the phone (mobile) */}
          <div className="radial-gold-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden" />

          <div className="phone-mockup relative z-10">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-gray-400 select-none">
                Screenshot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
