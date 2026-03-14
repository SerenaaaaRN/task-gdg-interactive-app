const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm hover:border-dark-surface flex flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
