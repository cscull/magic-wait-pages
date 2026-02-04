export default function FreeCallout() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #1a73e8 0%, #4fc3f7 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl pt-4 pb-4 text-center">
        {/* Heading */}
        <h2 className="fade-up mb-6 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Completely <span className="text-gold-light">Free</span>. No Catches.
        </h2>

        {/* Body text */}
        <p className="fade-up mx-auto max-w-2xl text-lg leading-relaxed text-white/85">
          No subscriptions. No premium tiers. No paywalls. MagicWait gives you
          everything — wait times, alerts, Lightning Lane tracking, ride
          history — without spending a dime.
        </p>

        {/* Icon row */}
        <div className="fade-up mt-12 flex flex-wrap items-start justify-center gap-12">
          {/* Lock — No Paywalls */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="5"
                y="12"
                width="18"
                height="13"
                rx="3"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M9 12V8a5 5 0 0 1 10 0v4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <line
                x1="4"
                y1="24"
                x2="24"
                y2="4"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm font-medium text-white">No Paywalls</span>
          </div>

          {/* User with X — No Sign-Up Required */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="8"
                r="4"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M3 24c0-4.418 3.582-8 8-8 1.296 0 2.52.31 3.6.86"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <line
                x1="20"
                y1="17"
                x2="26"
                y2="23"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="26"
                y1="17"
                x2="20"
                y2="23"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm font-medium text-white">
              No Sign-Up Required
            </span>
          </div>

          {/* Dollar with slash — No In-App Purchases */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="14"
                cy="14"
                r="12"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="14"
                y1="6"
                x2="14"
                y2="8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="14"
                y1="20"
                x2="14"
                y2="22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10.5 18c.828 1.167 2.069 2 3.5 2s3-.895 3-2-.895-2-3-2-3-.895-3-2 1.345-2 3-2 2.672.833 3.5 2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <line
                x1="4"
                y1="24"
                x2="24"
                y2="4"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm font-medium text-white">
              No In-App Purchases
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
