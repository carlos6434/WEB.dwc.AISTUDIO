import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Total scrollable height of the section minus the viewport (the "scroll distance")
        const scrollDistance = rect.height - viewportHeight;
        
        // Calculate progress: 0 when top of section hits top of viewport, 1 when bottom hits bottom
        // We use Math.abs to handle the negative top value as we scroll past
        let progress = 0;
        if (rect.top <= 0) {
            progress = Math.abs(rect.top) / scrollDistance;
        }
        
        const val = Math.max(0, Math.min(1, progress));
        setScrollProgress(val);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Phases: 0 = Intro, 1 = Air Intake, 2 = Condensation, 3 = Mineralization
  const getPhase = () => {
    if (scrollProgress < 0.1) return 0;
    if (scrollProgress < 0.4) return 1;
    if (scrollProgress < 0.7) return 2;
    return 3;
  };

  const phase = getPhase();

  return (
    <section ref={sectionRef} className="relative w-full bg-background-light" style={{ height: '400vh' }} id="technology">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
            <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[80px] opacity-60"></div>
         </div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Intro Text - Only visible at start */}
        <div className={`absolute top-0 w-full h-full flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ${phase === 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-95'}`}>
          <div className="text-center px-4 max-w-4xl mx-auto z-10 pointer-events-auto">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Modelo DC-X7 Activado
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 font-display text-balance">
              El Agua del Futuro <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Está en el Aire</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubre la tecnología que transforma la humedad atmosférica en el recurso más valioso para tu industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button onClick={() => window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' })} className="rounded-full bg-slate-900 text-white px-8 py-4 font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                 Explorar Proceso
                 <span className="material-symbols-outlined">arrow_downward</span>
               </button>
            </div>
          </div>
        </div>

        {/* The Schematic Machine Visual */}
        <div className={`relative w-[340px] md:w-[420px] lg:w-[480px] transition-all duration-1000 ease-in-out ${phase > 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-32'}`}>
            
            {/* Main Device Casing */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-200/50">
                {/* Header Labels */}
                <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100/50">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">Model: DC-X7</span>
                    <span className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-green-500 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Status: Active
                    </span>
                </div>

                {/* Vertical Stack */}
                <div className="flex flex-col">
                    
                    {/* SECTION 1: AIR INTAKE */}
                    <div className={`relative h-[200px] border-b border-slate-100/50 transition-colors duration-500 ${phase === 1 ? 'bg-primary/5' : 'bg-transparent'}`}>
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                        
                        {/* Visual Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Wind Icon / Fan */}
                            <div className={`relative transition-all duration-700 ${phase === 1 ? 'scale-110 opacity-100' : 'scale-100 opacity-40'}`}>
                                <span className="material-symbols-outlined text-[80px] text-slate-300">air</span>
                                {/* Animated Air Particles */}
                                {phase === 1 && (
                                   <>
                                     <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-1 bg-slate-300 rounded-full animate-[flow_1s_infinite]"></div>
                                     <div className="absolute -left-8 top-1/3 -translate-y-1/2 w-6 h-1 bg-slate-300 rounded-full animate-[flow_1.2s_infinite]"></div>
                                     <div className="absolute -left-10 top-2/3 -translate-y-1/2 w-10 h-1 bg-slate-300 rounded-full animate-[flow_0.8s_infinite]"></div>
                                   </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: CONDENSATION */}
                    <div className={`relative h-[220px] border-b border-slate-100/50 transition-colors duration-500 ${phase === 2 ? 'bg-blue-500/5' : 'bg-transparent'}`}>
                         {/* Horizontal Lines Pattern */}
                         <div className="absolute inset-0 flex flex-col justify-evenly px-12 py-8 opacity-30">
                            <div className="h-px w-full bg-slate-300"></div>
                            <div className="h-px w-full bg-slate-300"></div>
                            <div className="h-px w-full bg-slate-300"></div>
                            <div className="h-px w-full bg-slate-300"></div>
                         </div>

                         {/* Visual Elements */}
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`relative transition-all duration-700 ${phase === 2 ? 'scale-110 opacity-100' : 'scale-100 opacity-40'}`}>
                                <span className={`material-symbols-outlined text-[80px] ${phase === 2 ? 'text-blue-400 animate-pulse' : 'text-slate-300'}`}>ac_unit</span>
                                
                                {/* Frost/Cooling Effect */}
                                {phase === 2 && (
                                    <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-pulse-slow"></div>
                                )}
                            </div>
                            
                            {/* Condensing Drops */}
                            {phase === 2 && (
                                <>
                                    <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                </>
                            )}
                         </div>
                    </div>

                    {/* SECTION 3: MINERALIZATION */}
                    <div className={`relative h-[200px] transition-colors duration-500 ${phase === 3 ? 'bg-cyan-400/5' : 'bg-transparent'}`}>
                         {/* Visual Elements */}
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            {/* Vertical Line */}
                            <div className="absolute top-0 bottom-1/2 w-px bg-slate-200"></div>
                            
                            {/* Water Drop Container */}
                            <div className={`relative z-10 w-16 h-16 rounded-full border border-slate-100 bg-white shadow-lg flex items-center justify-center transition-all duration-700 ${phase === 3 ? 'scale-125 border-cyan-400 shadow-cyan-400/20' : 'scale-100'}`}>
                                <span className={`material-symbols-outlined text-3xl ${phase === 3 ? 'text-cyan-500' : 'text-slate-300'}`}>water_drop</span>
                            </div>

                            {/* Status Text for Machine */}
                            <div className="absolute bottom-6 left-8 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${phase === 3 ? 'bg-cyan-500' : 'bg-slate-300'}`}></span>
                                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">System Online</span>
                            </div>
                         </div>
                    </div>

                </div>
            </div>

            {/* INFO CARDS - POPPING OUT TO THE RIGHT */}
            {/* The position is relative to the machine container */}
            
            {/* Card 1: Intake */}
            <div className={`absolute top-[80px] left-[100%] ml-8 w-[280px] md:w-[320px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 transition-all duration-500 transform ${phase === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">Fase 01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Filtración Atmosférica</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Captura de aire ambiental a través de filtros HEPA de grado médico, eliminando el 99.9% de partículas y contaminantes.
                </p>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">filter_alt</span> HEPA H13
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">speed</span> 5000 m³/h
                    </div>
                </div>
            </div>

            {/* Card 2: Condensation */}
            <div className={`absolute top-[280px] left-[100%] ml-8 w-[280px] md:w-[320px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 transition-all duration-500 transform ${phase === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 block">Fase 02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Condensación Cíclica</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Choque térmico controlado en bobinas hidrofóbicas que transforma el vapor en agua líquida pura instantáneamente.
                </p>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">thermostat</span> -5°C Core
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">water_ec</span> &lt;10 PPM
                    </div>
                </div>
            </div>

            {/* Card 3: Mineralization (The one from the image) */}
            <div className={`absolute bottom-[60px] left-[100%] ml-8 w-[280px] md:w-[320px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 transition-all duration-500 transform ${phase === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-2 block">Fase de Finalización</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Mineralización Inteligente</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    El agua generada pasa por una última etapa UV. Se añaden minerales esenciales para alcanzar el pH perfecto y garantizar un sabor fresco.
                </p>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">science</span> pH: 7.5
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="material-symbols-outlined text-sm">verified</span> Minerals Added
                    </div>
                </div>
            </div>

        </div>

        {/* Scroll Progress Indicator (Right side) */}
        <div className={`absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 transition-opacity duration-500 ${phase > 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`w-1.5 rounded-full transition-all duration-500 ${phase === 1 ? 'h-12 bg-primary' : 'h-2 bg-slate-200'}`}></div>
            <div className={`w-1.5 rounded-full transition-all duration-500 ${phase === 2 ? 'h-12 bg-blue-500' : 'h-2 bg-slate-200'}`}></div>
            <div className={`w-1.5 rounded-full transition-all duration-500 ${phase === 3 ? 'h-12 bg-cyan-500' : 'h-2 bg-slate-200'}`}></div>
        </div>

      </div>

    </section>
  );
};

export default Hero;