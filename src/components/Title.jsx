const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles, para }) => {
  return (
    <div className={`${titleStyles} pb-4`}>
      <h3 className={`${title1Styles} text-3xl md:text-4xl font-bold text-[var(--color-dark-surface)] capitalize`}>
        {title1}
        <span className="font-light italic text-[var(--color-accent)] ml-2">{title2}</span>
      </h3>
      <p className={`${paraStyles} max-w-[500px] mt-4 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed`}>
        {para
          ? para
          : "Discover books that spark curiosity, deliver quality, and bring inspiration to your everyday reading."}
      </p>
    </div>
  );
};

export default Title;
