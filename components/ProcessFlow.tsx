import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="relative w-full bg-white border-y border-slate-100 overflow-hidden" id="process">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-[0.15] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[300vh] flex flex-col items-center">
        
        {/* Sticky Visual Card - Stays centered while user scrolls 300vh worth of content */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-10 perspective-1000">
          <div className="relative w-[340px] h-[500px] md:w-[500px] md:h-[700px] lg:w-[600px] lg:h-[800px] transition-all duration-700 ease-out preserve-3d">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-hydro-blue/5 rounded-3xl blur-3xl transform scale-110 opacity-50 animate-pulse-slow"></div>
            
            {/* The Glassmorphism Card */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-200/80 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-2xl overflow-hidden flex flex-col group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/10 via-transparent to-transparent"></div>
              
              {/* Card Header */}
              <div className="absolute top-8 left-8 right-8 flex justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <span>Model: DC-X7</span>
                <span>Status: Active</span>
              </div>
              
              {/* Card Footer */}
              <div className="absolute bottom-8 left-8 text-[10px] font-mono text-slate-400 uppercase">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                  System Online
                </div>
              </div>

              {/* Card Internal Modules */}
              <div className="relative h-full w-full p-8 md:p-12 flex flex-col justify-between pt-20 pb-20">
                
                {/* Module 1: Air Intake */}
                <div className="relative flex-1 border border-slate-300/30 rounded-xl bg-white/40 backdrop-blur-sm mb-4 overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <span className="material-symbols-outlined text-[80px] md:text-[120px] text-slate-300">air</span>
                  </div>
                  {/* Flowing particles animation */}
                  <div className="absolute inset-x-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwZGYyZjIiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-0 animate-[flow_3s_linear_infinite]"></div>
                </div>

                {/* Module 2: Condensation Core */}
                <div className="relative flex-[1.5] border border-hydro-blue/20 rounded-xl bg-hydro-blue/5 mb-4 overflow-hidden shadow-[inset_0_0_40px_rgba(0,119,190,0.05)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border-2 border-hydro-blue/30 rounded-lg flex flex-col justify-around p-4 relative">
                      <div className="w-full h-1 bg-hydro-blue/20 rounded-full"></div>
                      <div className="w-full h-1 bg-hydro-blue/20 rounded-full"></div>
                      <div className="w-full h-1 bg-hydro-blue/20 rounded-full"></div>
                      <div className="w-full h-1 bg-hydro-blue/20 rounded-full"></div>
                      <div className="absolute inset-0 bg-cyan-glow/10 blur-xl opacity-60"></div>
                      <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[80px] text-hydro-blue opacity-20">ac_unit</span>
                    </div>
                  </div>
                  {/* Active condensation points */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80">
                    <div className="absolute top-1/4 left-1/3 size-2 bg-cyan-glow rounded-full shadow-[0_0_10px_cyan] animate-bounce"></div>
                    <div className="absolute top-1/2 right-1/3 size-3 bg-cyan-glow rounded-full shadow-[0_0_10px_cyan] animate-pulse"></div>
                  </div>
                </div>

                {/* Module 3: Water Collection */}
                <div className="relative flex-1 border border-cyan-glow/30 rounded-xl bg-cyan-glow/5 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-1 h-full bg-gradient-to-b from-transparent via-cyan-glow to-hydro-blue opacity-50"></div>
                    <div className="absolute bottom-4 size-12 md:size-16 rounded-full border border-cyan-glow/50 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                      <span className="material-symbols-outlined text-2xl md:text-4xl text-hydro-blue">water_drop</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Text Content - Overlay */}
        <div className="relative z-20 w-full -mt-[300vh]">
          
          {/* Step 1 */}
          <div className="h-screen w-full flex items-center justify-between px-6 md:px-10 max-w-[1600px] mx-auto">
            <div className="hidden md:flex w-1/3 flex-col items-start pl-10 opacity-100 transition-opacity duration-500">
              <div className="text-[120px] font-bold text-slate-100 leading-none select-none relative font-display">
                01
                <span className="absolute top-0 left-0 text-primary blur-sm opacity-50">01</span>
              </div>
            </div>
            <div className="w-full md:w-1/3"></div> 
            <div className="w-full md:w-1/3 md:pr-10">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all transform translate-y-0">
                <h3 className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Fase de Captura</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Aspiración Atmosférica</h2>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  El sistema inicia con la succión silenciosa de aire ambiental. Nuestros filtros HEPA de grado industrial eliminan el 99.9% de partículas, polvo y patógenos antes de que el aire toque el núcleo.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">wind_power</span> Intake: 5000 m³/h</div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">filter_alt</span> HEPA H13</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="h-screen w-full flex items-center justify-between px-6 md:px-10 max-w-[1600px] mx-auto">
            <div className="hidden md:flex w-1/3 flex-col items-start pl-10">
              <div className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-hydro-blue to-cyan-glow leading-none select-none relative opacity-40 font-display">
                02
              </div>
            </div>
            <div className="w-full md:w-1/3"></div> 
            <div className="w-full md:w-1/3 md:pr-10">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-l-4 border-hydro-blue shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-hydro-blue font-bold tracking-widest text-xs uppercase mb-2">Fase de Conversión</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Condensación Cíclica</h2>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  El aire limpio golpea el núcleo de enfriamiento a -5°C. La humedad se condensa instantáneamente en las bobinas hidrofóbicas, creando una lluvia controlada de agua pura destilada.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">thermostat</span> Temp: 2°C</div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">humidity_percentage</span> Efficiency: 98%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="h-screen w-full flex items-center justify-between px-6 md:px-10 max-w-[1600px] mx-auto">
            <div className="hidden md:flex w-1/3 flex-col items-start pl-10">
              <div className="text-[120px] font-bold text-slate-100 leading-none select-none relative font-display">
                03
              </div>
            </div>
            <div className="w-full md:w-1/3"></div> 
            <div className="w-full md:w-1/3 md:pr-10">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-l-4 border-cyan-glow shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-cyan-glow font-bold tracking-widest text-xs uppercase mb-2">Fase de Finalización</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Mineralización Inteligente</h2>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  El agua generada pasa por una última etapa de mineralización UV. Se añaden minerales esenciales para alcanzar el pH perfecto y garantizar un sabor fresco y saludable.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">water_ph</span> pH: 7.5</div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified</span> Minerals Added</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;