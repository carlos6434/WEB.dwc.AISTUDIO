import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light border-t border-slate-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>water_drop</span>
          </div>
          <span className="text-base font-bold text-slate-900">DEWCORE</span>
        </div>
        <p className="text-sm text-slate-500">
          © 2024 Dewcore Systems. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;