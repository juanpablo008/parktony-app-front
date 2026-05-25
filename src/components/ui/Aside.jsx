import { X } from 'lucide-react';

const Aside = ({ children, title, isOpen, onClose, position = 'right' }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Aside Panel */}
      <aside
        className={`
          fixed lg:sticky top-0 ${position === 'right' ? 'right-0' : 'left-0'}
          h-screen w-80 xl:w-96
          bg-white border-l border-neutral-200 shadow-xl
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          z-50
          ${isOpen ? 'translate-x-0' : position === 'right' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        {title && (
          <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-10">
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
            <button
              onClick={onClose}
              className="lg:hidden text-neutral-500 hover:text-neutral-700 transition-colors"
              aria-label="Close aside"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </aside>
    </>
  );
};

export default Aside;
