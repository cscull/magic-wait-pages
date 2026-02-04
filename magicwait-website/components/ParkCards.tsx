const parks = [
  {
    name: "Magic Kingdom",
    attractions: "50+",
    color: "#7c3aed",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Castle */}
        <rect x="8" y="22" width="24" height="14" rx="1" fill="currentColor" opacity="0.25" />
        <rect x="12" y="16" width="4" height="6" fill="currentColor" opacity="0.35" />
        <rect x="24" y="16" width="4" height="6" fill="currentColor" opacity="0.35" />
        <rect x="17" y="10" width="6" height="12" fill="currentColor" opacity="0.4" />
        <polygon points="20,4 23,10 17,10" fill="currentColor" opacity="0.5" />
        <polygon points="14,10 16,16 12,16" fill="currentColor" opacity="0.4" />
        <polygon points="26,10 28,16 24,16" fill="currentColor" opacity="0.4" />
        <rect x="18" y="28" width="4" height="8" rx="1" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    name: "EPCOT",
    attractions: "40+",
    color: "#0d9488",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sphere */}
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
        <line x1="6" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Hollywood Studios",
    attractions: "35+",
    color: "#dc2626",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Clapperboard */}
        <rect x="6" y="16" width="28" height="18" rx="2" fill="currentColor" opacity="0.25" />
        <path d="M6 16 L10 8 L18 12 L14 16Z" fill="currentColor" opacity="0.35" />
        <path d="M14 16 L18 8 L26 12 L22 16Z" fill="currentColor" opacity="0.4" />
        <path d="M22 16 L26 8 L34 12 L30 16Z" fill="currentColor" opacity="0.35" />
        <line x1="6" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="25" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <polygon points="19,24 22,25 19,26" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    name: "Animal Kingdom",
    attractions: "35+",
    color: "#16a34a",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Tree */}
        <rect x="18" y="26" width="4" height="10" rx="1" fill="currentColor" opacity="0.3" />
        <ellipse cx="20" cy="18" rx="10" ry="10" fill="currentColor" opacity="0.2" />
        <ellipse cx="14" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.25" />
        <ellipse cx="26" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.25" />
        <ellipse cx="20" cy="14" rx="7" ry="8" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
];

export default function ParkCards() {
  return (
    <section id="parks" className="bg-[#f5f6fa] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-950 text-center mb-16 fade-up">
          All 4 Parks.{" "}
          <span className="text-gold">200+</span> Attractions.
        </h2>

        {/* Park Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parks.map((park) => (
            <div
              key={park.name}
              className="glass-card fade-up p-6 transition-transform duration-300 hover:scale-[1.03]"
              style={{ borderLeft: `4px solid ${park.color}` }}
            >
              {/* Park Icon */}
              <div className="mb-4" style={{ color: park.color }}>
                {park.icon}
              </div>

              {/* Park Name */}
              <h3 className="text-navy-950 text-xl font-bold mb-2">
                {park.name}
              </h3>

              {/* Attraction Count */}
              <p className="text-gold-dark font-semibold text-lg">
                {park.attractions} attractions
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
