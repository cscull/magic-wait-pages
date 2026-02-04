const SCREENSHOTS = [
  { id: 1, label: "Screenshot 1", rotate: "hover:-rotate-1" },
  { id: 2, label: "Screenshot 2", rotate: "hover:rotate-1" },
  { id: 3, label: "Screenshot 3", rotate: "hover:-rotate-1" },
  { id: 4, label: "Screenshot 4", rotate: "hover:rotate-1" },
  { id: 5, label: "Screenshot 5", rotate: "hover:-rotate-1" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-[#f5f6fa] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="fade-up mb-16 text-center font-heading text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
          See It in <span className="text-gold">Action</span>
        </h2>

        {/* Scrollable screenshot row */}
        <div className="screenshot-scroll px-4">
          {SCREENSHOTS.map((screenshot) => (
            <div
              key={screenshot.id}
              className={`phone-mockup flex w-[220px] h-[450px] !rounded-[32px] items-center justify-center transition-transform duration-300 hover:scale-105 ${screenshot.rotate}`}
            >
              <span className="text-sm text-gray-500">{screenshot.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
