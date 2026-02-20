import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>water_drop</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">DEWCORE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#technology">Tecnología</a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#comparison">Comparativa</a>
        </div>
        
        <button className="flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-700 shadow-md hover:shadow-lg">
            Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;