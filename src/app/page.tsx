import TaxCalculator from '@/components/TaxCalculator'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 opacity-90" />
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-purple-500/20 px-4 py-1 text-sm font-semibold text-purple-200 mb-6">Gestoría digital premium</span>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">No regales ni un euro en tu Renta 2026</h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                Herramienta gratuita y rápida para profesionales y familias. Calcula tus deducciones en alquiler, hijos e inversiones con el respaldo de un diseño premium y una experiencia de gestoría de alto nivel.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
                <div className="rounded-3xl bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sin compromiso</p>
                  <p className="mt-3 text-xl font-semibold text-white">100% gratis</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Cálculo instantáneo</p>
                  <p className="mt-3 text-xl font-semibold text-white">Resultados en segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white text-center">Cómo funciona</h2>
          <p className="mt-4 text-center text-slate-300 max-w-2xl mx-auto">Tres pasos sencillos para obtener tu ahorro fiscal de forma segura y profesional.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 text-xl font-bold text-white">1</div>
              <h3 className="text-xl font-semibold text-white">Elige tu deducción</h3>
              <p className="mt-3 text-slate-300">Selecciona Alquiler, Hijos o Inversión según tu situación fiscal.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 text-xl font-bold text-white">2</div>
              <h3 className="text-xl font-semibold text-white">Pon tus datos</h3>
              <p className="mt-3 text-slate-300">Introduce ingresos, edad, número de hijos o importe de la inversión.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 text-xl font-bold text-white">3</div>
              <h3 className="text-xl font-semibold text-white">Descubre tu ahorro</h3>
              <p className="mt-3 text-slate-300">Obtén un cálculo inmediato y claro de tu beneficio fiscal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <TaxCalculator />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8 px-6 text-center text-slate-400 sm:px-10 lg:px-16">
        <p className="text-sm">Cálculos basados en el BOE y la normativa vigente de 2026. Esta herramienta es informativa y no constituye asesoramiento fiscal profesional.</p>
      </footer>
    </main>
  )
}
