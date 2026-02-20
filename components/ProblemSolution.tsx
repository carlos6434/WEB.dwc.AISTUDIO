import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-surface-light border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">El Problema vs. La Solución</h2>
          <p className="mt-4 text-lg text-slate-600">
            Compare el riesgo de la dependencia actual con la seguridad de la generación in situ. La tecnología DEWCORE transforma el aire en su recurso más valioso.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-200">
            <div className="flex flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-[28px]">warning</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">El coste de la escasez</h3>
                <p className="text-slate-600 leading-relaxed">
                  La dependencia de redes municipales o camiones cisterna expone su operación a costes impredecibles, cortes de suministro no planificados y una calidad de agua variable que amenaza la producción continua.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-slate-500">
                    <span className="material-symbols-outlined mr-2 text-red-500 text-[18px]">close</span>
                    Logística compleja y costosa
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <span className="material-symbols-outlined mr-2 text-red-500 text-[18px]">close</span>
                    Huella de carbono elevada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md ring-1 ring-primary/10 hover:ring-primary/30">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px] text-primary">water_drop</span>
            </div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">water_drop</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">La abundancia del aire</h3>
                <p className="text-slate-600 leading-relaxed">
                  Suministro ilimitado directamente en sus instalaciones. Nuestra tecnología captura la humedad atmosférica garantizando pureza constante y autonomía total sin residuos ni impacto ambiental negativo.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-slate-700 font-medium">
                    <span className="material-symbols-outlined mr-2 text-primary text-[18px]">check_circle</span>
                    Generación In-Situ (Cero transporte)
                  </li>
                  <li className="flex items-center text-sm text-slate-700 font-medium">
                    <span className="material-symbols-outlined mr-2 text-primary text-[18px]">check_circle</span>
                    Calidad ultra-pura constante
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;