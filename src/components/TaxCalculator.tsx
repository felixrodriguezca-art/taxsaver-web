'use client'

import { useState } from 'react'

type DeductionType = 'rent' | 'children' | 'investment'

export default function TaxCalculator() {
  const [type, setType] = useState<DeductionType>('rent')
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    let deduction = 0
    if (type === 'rent') {
      const age = parseInt(inputs.age || '0')
      const rent = parseFloat(inputs.rent || '0')
      const income = parseFloat(inputs.income || '0')
      const highDemand = inputs.highDemand === 'yes'
      const maxRent = highDemand ? 800 : 600
      if (age < 35 && rent <= maxRent && income <= 25000) {
        deduction = Math.min(0.2 * rent, 300)
      }
    } else if (type === 'children') {
      const numChildren = parseInt(inputs.children || '0')
      const deductions = [0, 2500, 2800, 4200, 4500]
      for (let i = 1; i <= numChildren && i < deductions.length; i++) {
        deduction += deductions[i]
      }
      if (numChildren > 4) {
        deduction += (numChildren - 4) * 4500
      }
    } else if (type === 'investment') {
      const invType = inputs.invType
      const amount = parseFloat(inputs.amount || '0')
      if (invType === 'green') {
        deduction = Math.min(0.2 * amount, 5000)
      } else if (invType === 'electric') {
        deduction = Math.min(0.15 * amount, 2000)
      } else if (invType === 'startup') {
        deduction = Math.min(0.3 * amount, 10000) // assuming small company
      }
    }
    setResult(deduction)
  }

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Calculadora TaxSaver 2026</h1>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-3">Tipo de Deducción</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as DeductionType)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="rent">Alquiler</option>
          <option value="children">Hijos</option>
          <option value="investment">Inversión</option>
        </select>
      </div>

      {type === 'rent' && (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Edad"
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Alquiler Anual (€)"
            onChange={(e) => handleInputChange('rent', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Ingresos Anuales (€)"
            onChange={(e) => handleInputChange('income', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <select
            onChange={(e) => handleInputChange('highDemand', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="no">Zona Normal</option>
            <option value="yes">Zona de Alta Demanda</option>
          </select>
        </div>
      )}

      {type === 'children' && (
        <input
          type="number"
          placeholder="Número de Hijos"
          onChange={(e) => handleInputChange('children', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      )}

      {type === 'investment' && (
        <div className="space-y-4">
          <select
            onChange={(e) => handleInputChange('invType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="green">Inversión Verde</option>
            <option value="electric">Vehículo Eléctrico</option>
            <option value="startup">Startup</option>
          </select>
          <input
            type="number"
            placeholder="Cantidad Invertida (€)"
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      )}

      <button
        onClick={calculate}
        className="w-full mt-6 p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
      >
        Calcular mi Ahorro
      </button>

      {result !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
          <p className="text-xl font-semibold text-green-800">Ahorro Fiscal: €{result.toFixed(2)}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-3">¿Necesitas ayuda profesional con tus impuestos?</p>
            <div className="space-y-2">
              <a
                href="https://taxdown.es/afiliados?ref=yourcode"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition-colors"
              >
                Optimiza con TaxDown
              </a>
              <a
                href="https://infoautonomos.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-green-500 text-white rounded text-center hover:bg-green-600 transition-colors"
              >
                Usa Infoautonomos
              </a>
              <a
                href="https://www.contasimple.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-purple-500 text-white rounded text-center hover:bg-purple-600 transition-colors"
              >
                Prueba Contasimple
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">Enlaces de afiliados que pueden generar comisiones.</p>
          </div>
        </div>
      )}
    </div>
  )
}