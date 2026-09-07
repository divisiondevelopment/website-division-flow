const BAR_COUNT = 120;
const BAR_HEIGHT_PCT = 100;

export default function HeroBars() {
  return (
    <div className="hero-bars-wrap" aria-hidden="true">
      <div className="hero-bars">
        {Array.from({ length: BAR_COUNT }, (_, index) => (
          <span
            key={index}
            className="hero-bar"
            style={{ height: `${BAR_HEIGHT_PCT}%` }}
          />
        ))}
      </div>
    </div>
  );
}
