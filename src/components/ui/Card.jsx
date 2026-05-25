const Card = ({
  children,
  header,
  footer,
  className = '',
  padding = true,
  ...props
}) => {
  const cardStyles = `
    bg-white rounded-lg shadow-sm border border-neutral-200
    transition-all duration-200
    hover:shadow-md
    ${className}
  `;

  return (
    <div className={cardStyles} {...props}>
      {header && (
        <div className="px-6 py-4 border-b border-neutral-200">
          {typeof header === 'string' ? (
            <h3 className="text-lg font-semibold text-neutral-900">{header}</h3>
          ) : (
            header
          )}
        </div>
      )}
      <div className={padding ? 'p-6' : ''}>
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
