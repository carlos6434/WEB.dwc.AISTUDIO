import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-white pt-20 pb-10 px-4 sm:px-10 border-b border-slate-100" id="contact">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Certifications */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Confianza</span>
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 font-display">Certificación Global</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Nuestros sistemas cumplen con los estándares más rigurosos de calidad y sostenibilidad internacional.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-1 group">
                <div className="size-16 border-2 border-slate-300 rounded-full flex items-center justify-center group-hover:border-slate-800 transition-colors">
                  <span className="font-bold text-slate-800 text-xs">ISO 9001</span>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-slate-800">verified_user</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 group-hover:text-slate-800">Patent</span>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-800">Pending</span>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-green-600">eco</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 group-hover:text-green-600">Green</span>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-green-600">Tech Award</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="text-slate-900 font-bold mb-2 font-display">Oficinas Centrales</h4>
              <p className="text-slate-500 text-sm">Parque Tecnológico de Andalucía<br/>Málaga, España</p>
              <a className="text-slate-900 font-medium text-sm mt-2 inline-block hover:text-primary transition-colors" href="mailto:info@dewcore.com">info@dewcore.com</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-background-light rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-slate-900 text-2xl font-bold mb-6 font-display">Solicitar Auditoría Técnica</h3>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider ml-1" htmlFor="name">Nombre Completo</label>
                <input className="w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-300" id="name" placeholder="Ej. Juan Pérez" type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider ml-1" htmlFor="company">Empresa</label>
                <input className="w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-300" id="company" placeholder="Ej. Logística Global S.A." type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider ml-1" htmlFor="industry">Sector</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer" id="industry" defaultValue="">
                    <option disabled value="">Seleccionar sector...</option>
                    <option value="ports">Puertos y Marítimo</option>
                    <option value="mining">Minería</option>
                    <option value="industrial">Industrial</option>
                    <option value="agriculture">Agricultura Tech</option>
                    <option value="other">Otro</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider ml-1" htmlFor="email">Correo Electrónico</label>
                <input className="w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-300" id="email" placeholder="juan@empresa.com" type="email" />
              </div>
              <button className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-4 px-6 text-slate-900 font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20" type="button">
                Enviar Solicitud
              </button>
              <p className="text-xs text-center text-slate-400 mt-2">Uno de nuestros ingenieros se pondrá en contacto en 24h.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;