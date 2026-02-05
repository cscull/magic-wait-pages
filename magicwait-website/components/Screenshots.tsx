const SCREENSHOTS = [
  {
    src: "/screenshots/wait-times-mk.png",
    alt: "Real-time wait times for Magic Kingdom attractions",
    label: "Wait Times",
  },
  {
    src: "/screenshots/wait-times-filters.png",
    alt: "Smart filtering options for attractions",
    label: "Smart Filters",
  },
  {
    src: "/screenshots/wait-times-alerts.png",
    alt: "Wait time alert notifications",
    label: "Alerts",
  },
  {
    src: "/screenshots/ride-details-card.png",
    alt: "Detailed attraction view with Lightning Lane pricing",
    label: "Ride Details",
  },
  {
    src: "/screenshots/ride-history.png",
    alt: "Ride history and trip tracking analytics",
    label: "Ride History",
  },
  {
    src: "/screenshots/favorites-page.png",
    alt: "Favorites page with saved attractions",
    label: "Favorites",
  },
  {
    src: "/screenshots/park-info-hs.png",
    alt: "Park info and hours for Hollywood Studios",
    label: "Park Info",
  },
  {
    src: "/screenshots/wait-times-early-entry.png",
    alt: "Early Entry indicator with Lightning Lane pricing",
    label: "Early Entry",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-[#f5f6fa] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="fade-up mb-4 text-center font-heading text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
          See It in <span className="text-gold">Action</span>
        </h2>
        <p className="fade-up mb-14 text-center text-lg text-slate-500 max-w-2xl mx-auto">
          Scroll through every screen — from live wait times to ride history.
        </p>

        {/* Scrollable screenshot row */}
        <div className="screenshot-scroll px-4">
          {SCREENSHOTS.map((screenshot) => (
            <div
              key={screenshot.src}
              className="screenshot-item group flex flex-col items-center gap-3"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="screenshot-phone transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1"
                width={260}
                height={532}
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-500 group-hover:text-navy-700 transition-colors">
                {screenshot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
