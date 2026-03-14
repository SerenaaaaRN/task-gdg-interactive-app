const Title = ({ title, subtitle, description, className = "" }) => {
  return (
    <div className={`pb-4 ${className}`}>
      <h3 className="text-3xl md:text-4xl font-bold text-dark-surface capitalize">
        {title}
        {subtitle && <span className="font-light italic text-accent ml-2">{subtitle}</span>}
      </h3>
      <p className="max-w-125 mt-4 text-text-muted text-sm md:text-base leading-relaxed">
        {description ||
          "Discover books that spark curiosity, deliver quality, and bring inspiration to your everyday reading."}
      </p>
    </div>
  );
};

export default Title;
