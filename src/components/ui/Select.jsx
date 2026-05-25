const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Seleccionar...',
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const selectStyles = `
    w-full px-4 py-2
    bg-white border rounded-lg
    text-neutral-900
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light
    disabled:bg-neutral-100 disabled:cursor-not-allowed
    ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-300'}
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={selectStyles}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;
