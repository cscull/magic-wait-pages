interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Live Wait Times",
    description:
      "Real-time updates for every ride, show, and meet & greet across all 4 parks.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="13"
          stroke="#d4af37"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="16"
          y1="16"
          x2="16"
          y2="8"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="16"
          x2="22"
          y2="16"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="1.5" fill="#d4af37" />
      </svg>
    ),
  },
  {
    title: "Lightning Lane Tracking",
    description:
      "Multi-Pass and Individual LL pricing and availability at a glance.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 3L8 18h7l-1 11 10-15h-7l1-11z"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Wait Time Alerts",
    description:
      "Get notified when your favorite ride drops to your target wait time.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 4c-1.1 0-2 .9-2 2v1.07A7.002 7.002 0 009 14v5l-2 2v1h18v-1l-2-2v-5a7.002 7.002 0 00-5-6.93V6c0-1.1-.9-2-2-2z"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 25a3 3 0 006 0"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Ride History",
    description:
      "Log every ride and track your trips with detailed analytics.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 3"
          fill="none"
        />
        <polyline
          points="12,8 16,4 20,8"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="16"
          y1="12"
          x2="16"
          y2="17"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="17"
          x2="20"
          y2="17"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Park Hours & Weather",
    description:
      "Operating hours, forecasts, and crowd levels at a glance.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="6" stroke="#d4af37" strokeWidth="2" fill="none" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="16" x2="6" y2="16" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="16" x2="30" y2="16" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="6.1" y1="6.1" x2="8.93" y2="8.93" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="23.07" y1="23.07" x2="25.9" y2="25.9" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="6.1" y1="25.9" x2="8.93" y2="23.07" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="23.07" y1="8.93" x2="25.9" y2="6.1" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Smart Filters",
    description:
      "Filter by wait time, type, LL status, and ridden status simultaneously.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 7h24M8 16h16M12 25h8"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="fade-up mb-16 text-center font-heading text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
          <span className="text-gold">Everything</span> You Need in the Parks
        </h2>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card fade-up border-t-2 border-t-gold p-6 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-navy-950">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
