import React from 'react';
import { Sector } from '../types';

const sectors: Sector[] = [
  {
    id: 'ports',
    title: 'Puertos y Logística',
    description: 'Elimina la dependencia de suministros externos y reduce la huella de carbono.',
    subtext: 'Reduce reliance on bottled supply',
    icon: 'anchor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGgVhe_udCXz2NjOb7-A6bwcqN1c44GbOf-n0ls4fjml0EGy59eK1M6eACx9AJgtt2c6dqUUzkqNN-kM6D1nLzJeLJT7hZKg0S1Nw_aVH0MwAVp1M-wACDDjr-j2DiF0--PyfeR5zVY7SWTYBNPb4dQQYBnCzyRk8SEZTfutREXtaplvXd1xyPfWs5uugtFCHEJgRaetnWsl2Kxq__5ggWN6eGNs_3G9g5Tr5Rj5PR_pAr-xK7gD9vDv_yaFYilBtHM3844I03CyU',
    alt: 'Industrial shipping port with containers'
  },
  {
    id: 'mining',
    title: 'Minería Remota',
    description: 'Abastecimiento continuo en zonas áridas sin necesidad de transporte.',
    subtext: 'Water security in arid zones',
    icon: 'landscape',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAnAVZBF8N72RbLxBc46xP-zX7ZOTVpu_eLIPi0wVAEMjE2kSPoeDC_kPlHFyDPQajgLJGAsPdVfIWC6P2F3zMjQD8WSXyD19j7elINnQ2QFvHvszW8r-xNvbLdY1Mvkon7rUjqbvERm_2wzH8-tuZaPPg21wTFBSbpZ_Y2qnBkYchE5UVrse4SZk6_nLdLERQNgwBYZUY_oyDNJWUX6kR0RKSH_OMq5CO5gnhOA5L4cffH-Xasa2-6EJoodtWZbJ7ZyxWrF2hFME',
    alt: 'Mining excavation site in arid landscape'
  },
  {
    id: 'industrial',
    title: 'Plantas Industriales',
    description: 'Redundancia crítica para procesos de refrigeración y limpieza.',
    subtext: 'Process water redundancy',
    icon: 'factory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0uvRocIyNkLfllpG9hDKFqTHh2DwSxHjReG19F9VFs2Bd2xREPx3AiNl1cfW-e8MJtbw1uwuEWipN_r4_uTaBjTxkr5iEbohtPQTugNjLeGNEvknpWRMWTCQW7JqwR0dUpox6hKKrUn_a0BM9K2xxwSrW48xUkkP5RPW_bxH7ahb5VmU-TVIePnrQzJIs9lKer9WaU3fHBK2nHXBHQ2COnVsGItnD35TyblzZr4lnnYvbGGvfgKwcosHjOoKWV4vA_4bwUyN2ew',
    alt: 'Modern industrial factory interior with pipes'
  }
];

const Sectors: React.FC = () => {
  return (
    <section className="w-full bg-background-light py-24 px-4 sm:px-10 z-30 relative" id="sectors">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Aplicaciones</span>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] font-display">Sectores Estratégicos</h2>
          </div>
          <p className="text-slate-500 max-w-sm text-right md:text-left hidden md:block">
            Soluciones escalables para industrias críticas donde el agua es un recurso vital y escaso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div key={sector.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 h-[380px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  alt={sector.alt} 
                  className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" 
                  src={sector.image} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4 size-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{sector.icon}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 font-display">{sector.title}</h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                    <div className="overflow-hidden">
                        <p className="text-slate-300 text-sm mb-4">{sector.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span>
                  <span className="text-white text-sm font-medium">{sector.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;