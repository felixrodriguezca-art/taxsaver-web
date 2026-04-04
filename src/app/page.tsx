import TaxCalculator from '@/components/TaxCalculator'

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">No regales ni un euro en tu Renta 2026</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Calcula tus deducciones fiscales de forma gratuita y rápida. Descubre cuánto puedes ahorrar en alquiler, hijos e inversiones con nuestra herramienta profesional.
        </p>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Elige tu Deducción</h3>
              <p>Selecciona el tipo de deducción que quieres calcular: alquiler, hijos o inversión.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Pon tus Datos</h3>
              <p>Introduce la información necesaria como ingresos, edad o cantidad invertida.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Descubre cuánto Ahorras</h3>
              <p>Obtén el cálculo exacto de tu ahorro fiscal basado en la normativa de 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <TaxCalculator />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-black/20">
        <p className="text-sm">Cálculos basados en el BOE y la normativa vigente de 2026. Esta herramienta es informativa y no constituye asesoramiento fiscal profesional.</p>
      </footer>
    </div>
  )
}
