import React from 'react';

const TechnicalComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="comparison">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Comparativa Técnica</h2>
          <p className="max-w-2xl text-lg text-slate-600">
            Análisis objetivo de rendimiento frente a alternativas tradicionales de suministro industrial.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-surface-light">
                  <th className="p-6 font-semibold text-slate-900 w-1/4">Métrica Clave</th>
                  <th className="p-6 font-bold text-primary w-1/4 bg-primary/5 border-t-4 border-t-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">verified</span>
                      DEWCORE
                    </div>
                  </th>
                  <th className="p-6 font-semibold text-slate-500 w-1/4">Desalinizadora</th>
                  <th className="p-6 font-semibold text-slate-500 w-1/4">Camiones Cisterna</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1 */}
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-900">Coste por Litro</td>
                  <td className="p-6 bg-primary/5 font-semibold text-primary">
                    Bajo y Estable
                    <span className="block text-xs font-normal text-slate-500 mt-1">Sin volatilidad de mercado</span>
                  </td>
                  <td className="p-6 text-slate-600">Alto (Energía intensiva)</td>
                  <td className="p-6 text-slate-600">Muy Alto (Logística + Combustible)</td>
                </tr>
                {/* Row 2 */}
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-900">Huella de Carbono</td>
                  <td className="p-6 bg-primary/5 font-semibold text-primary">
                    Mínima / Nula
                    <span className="block text-xs font-normal text-slate-500 mt-1">Compatible con energía solar</span>
                  </td>
                  <td className="p-6 text-slate-600">Alta (Salmuera residual)</td>
                  <td className="p-6 text-slate-600">Extrema (Transporte pesado)</td>
                </tr>
                {/* Row 3 */}
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-900">Pureza del Agua</td>
                  <td className="p-6 bg-primary/5 font-semibold text-primary">
                    Ultra Pura (&lt;10 PPM)
                    <span className="block text-xs font-normal text-slate-500 mt-1">Ideal procesos farmacéuticos</span>
                  </td>
                  <td className="p-6 text-slate-600">Variable (Depende de fuente)</td>
                  <td className="p-6 text-slate-600">Baja (Riesgo contaminación)</td>
                </tr>
                {/* Row 4 */}
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-900">Instalación</td>
                  <td className="p-6 bg-primary/5 font-semibold text-primary">
                    Inmediata (Plug & Play)
                  </td>
                  <td className="p-6 text-slate-600">Meses / Años (Obra civil)</td>
                  <td className="p-6 text-slate-600">Días (Requiere almacenamiento)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-6">¿Listo para asegurar su independencia hídrica?</p>
          <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800">
            Descargar Especificaciones Técnicas
            <span className="material-symbols-outlined ml-2 text-[18px]">download</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalComparison;