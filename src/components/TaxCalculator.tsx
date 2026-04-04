'use client'

import { useState } from 'react'

type DeductionType = 'alquiler' | 'hijos' | 'inversion'

type InvestmentType = 'verde' | 'electrico' | 'startup'

export default function TaxCalculator() {
  const [type, setType] = useState<DeductionType>('alquiler')
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    let deduction = 0

    if (type === 'alquiler') {
      const age = parseInt(inputs.edad || '0')
      const rent = parseFloat(inputs.alquiler || '0')
      const income = parseFloat(inputs.ingresos || '0')
      const highDemand = inputs.zona === 'alta'
      const maxRent = highDemand ? 800 : 600
      if (age < 35 && rent <= maxRent && income <= 25000) {
        deduction = Math.min(0.2 * rent, 300)
      }
    } else if (type === 'hijos') {
      const numChildren = parseInt(inputs.hijos || '0')
      const deductions = [0, 2500, 2800, 4200, 4500]
      for (let i = 1; i <= numChildren && i < deductions.length; i++) {
        deduction += deductions[i]
      }
      if (numChildren > 4) {
        deduction += (numChildren - 4) * 4500
      }
    } else if (type === 'inversion') {
      const investmentType = inputs.tipoInversion as InvestmentType
      const amount = parseFloat(inputs.monto || '0')
      if (investmentType === 'verde') {
        deduction = Math.min(0.2 * amount, 5000)
      } else if (investmentType === 'electrico') {
        deduction = Math.min(0.15 * amount, 2000)
      } else if (investmentType === 'startup') {
        deduction = Math.min(0.3 * amount, 10000)
      }
    }

    setResult(deduction)
  }

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] text-slate-100">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Herramienta premium</p>
        <h2 className="mt-4 text-3xl font-semibold">Calcula tu ahorro fiscal</h2>
        <p className="mt-3 text-slate-400">Rellena tus datos y obtén un resultado claro y rápido.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de deducción</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as DeductionType)}
            className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
          >
            <option value="alquiler">Alquiler</option>
            <option value="hijos">Hijos</option>
            <option value="inversion">Inversión</option>
          </select>
        </div>

        {type === 'alquiler' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Edad</label>
              <input
                type="number"
                placeholder="Ej. 30"
                onChange={(e) => handleInputChange('edad', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Alquiler anual (€)</label>
              <input
                type="number"
                placeholder="Ej. 7200"
                onChange={(e) => handleInputChange('alquiler', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Ingresos anuales (€)</label>
              <input
                type="number"
                placeholder="Ej. 18000"
                onChange={(e) => handleInputChange('ingresos', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Zona</label>
              <select
                onChange={(e) => handleInputChange('zona', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              >
                <option value="normal">Zona normal</option>
                <option value="alta">Zona de alta demanda</option>
              </select>
            </div>
          </div>
        )}

        {type === 'hijos' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Número de hijos</label>
            <input
              type="number"
              placeholder="Ej. 2"
              onChange={(e) => handleInputChange('hijos', e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>
        )}

        {type === 'inversion' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de inversión</label>
              <select
                onChange={(e) => handleInputChange('tipoInversion', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              >
                <option value="verde">Inversión verde</option>
                <option value="electrico">Vehículo eléctrico</option>
                <option value="startup">Startup</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Importe invertido (€)</label>
              <input
                type="number"
                placeholder="Ej. 5000"
                onChange={(e) => handleInputChange('monto', e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              />
            </div>
          </div>
        )}

        <button
          onClick={calculate}
          className="w-full rounded-3xl bg-gradient-to-r from-purple-500 to-sky-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:from-purple-600 hover:to-sky-600"
        >
          Calcular mi Ahorro
        </button>

        {result !== null && (
          <div className="rounded-3xl border border-green-500/20 bg-emerald-50/80 p-6 text-slate-900 shadow-lg shadow-emerald-500/10">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Ahorro estimado</p>
            <p className="mt-4 text-4xl font-semibold">€{result.toFixed(2)}</p>
            <p className="mt-2 text-slate-600">Estimación basada en las reglas comunes de deducción para 2026.</p>

            <div className="mt-5 space-y-3">
              <a
                href="https://taxdown.es/afiliados?ref=yourcode"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Optimiza con TaxDown
              </a>
              <a
                href="https://infoautonomos.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Usa Infoautonomos
              </a>
              <a
                href="https://www.contasimple.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Prueba Contasimple
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">Enlaces de afiliados que pueden generar comisiones.</p>
          </div>
        )}
      </div>
    </div>
  )
}
