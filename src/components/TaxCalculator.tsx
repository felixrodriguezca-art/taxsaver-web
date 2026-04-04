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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">TaxSaver 2026 Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Deduction Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as DeductionType)}
          className="w-full p-2 border rounded"
        >
          <option value="rent">Rent</option>
          <option value="children">Children</option>
          <option value="investment">Investment</option>
        </select>
      </div>

      {type === 'rent' && (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Annual Rent (€)"
            onChange={(e) => handleInputChange('rent', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Annual Income (€)"
            onChange={(e) => handleInputChange('income', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <select
            onChange={(e) => handleInputChange('highDemand', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="no">Normal Area</option>
            <option value="yes">High Demand Area</option>
          </select>
        </div>
      )}

      {type === 'children' && (
        <input
          type="number"
          placeholder="Number of Children"
          onChange={(e) => handleInputChange('children', e.target.value)}
          className="w-full p-2 border rounded"
        />
      )}

      {type === 'investment' && (
        <div className="space-y-4">
          <select
            onChange={(e) => handleInputChange('invType', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="green">Green Investment</option>
            <option value="electric">Electric Vehicle</option>
            <option value="startup">Startup</option>
          </select>
          <input
            type="number"
            placeholder="Investment Amount (€)"
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      <button
        onClick={calculate}
        className="w-full mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Calculate Savings
      </button>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-lg font-semibold">Tax Savings: €{result.toFixed(2)}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Need professional help with your taxes?</p>
            <div className="space-y-2">
              <a
                href="https://taxdown.es/afiliados?ref=yourcode"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600"
              >
                Optimize with TaxDown (Affiliate)
              </a>
              <a
                href="https://infoautonomos.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-green-500 text-white rounded text-center hover:bg-green-600"
              >
                Use Infoautonomos (Affiliate)
              </a>
              <a
                href="https://www.contasimple.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-purple-500 text-white rounded text-center hover:bg-purple-600"
              >
                Try Contasimple (Affiliate)
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">Affiliate links may earn commissions.</p>
          </div>
        </div>
      )}
    </div>
  )
}