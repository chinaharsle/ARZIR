"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle, Target } from "lucide-react";
import { useState, useEffect } from "react";

interface CalculationInputs {
  materialType: string;
  currentDensity: number;
  targetTransportCost: number;
  transportDistance: number;
  fuelCost: number;
  laborCost: number;
  baleSize: string;
}

interface CalculationResults {
  optimalDensity: number;
  densityIncrease: number;
  transportSavings: number;
  annualSavings: number;
  loadsReduction: number;
  pressureRequired: number;
  cycleTime: number;
  energyIncrease: number;
  netBenefit: number;
  status: 'optimal' | 'good' | 'acceptable' | 'poor';
}

const defaultInputs: CalculationInputs = {
  materialType: 'mixed_steel',
  currentDensity: 0.8,
  targetTransportCost: 5000,
  transportDistance: 150,
  fuelCost: 4.5,
  laborCost: 25,
  baleSize: 'standard'
};

export default function BaleDensityOptimizer() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    // Material density potentials
    const materialPotentials = {
      'mixed_steel': { max: 1.8, optimal: 1.5 },
      'aluminum': { max: 1.2, optimal: 1.0 },
      'copper': { max: 2.5, optimal: 2.0 },
      'stainless': { max: 2.0, optimal: 1.7 },
      'automotive': { max: 1.4, optimal: 1.2 }
    };

    const potential = materialPotentials[inputs.materialType as keyof typeof materialPotentials] || { max: 1.5, optimal: 1.3 };
    
    // Calculate optimal density (between current and potential)
    const optimalDensity = Math.min(potential.optimal, Math.max(inputs.currentDensity * 1.2, potential.optimal));
    const densityIncrease = ((optimalDensity - inputs.currentDensity) / inputs.currentDensity) * 100;
    
    // Transport calculations
    const currentLoads = 100; // baseline loads per month
    const newLoads = currentLoads * (inputs.currentDensity / optimalDensity);
    const loadsReduction = currentLoads - newLoads;
    
    // Cost calculations
    const costPerLoad = (inputs.transportDistance * 2 * inputs.fuelCost / 100) + (inputs.laborCost * 4); // round trip
    const transportSavings = loadsReduction * costPerLoad;
    const annualSavings = transportSavings * 12;
    
    // Pressure and energy requirements
    const pressureIncrease = (optimalDensity / inputs.currentDensity) ** 1.5;
    const pressureRequired = 300 * pressureIncrease; // base 300 tons
    
    // Cycle time impact
    const cycleTimeIncrease = (optimalDensity / inputs.currentDensity) ** 0.5;
    const cycleTime = 60 * cycleTimeIncrease; // base 60 seconds
    
    // Energy cost increase
    const energyIncrease = pressureIncrease * 1.2; // 20% overhead
    const monthlyEnergyIncrease = (energyIncrease - 1) * 2000; // $2000 baseline
    
    // Net benefit
    const netBenefit = transportSavings - monthlyEnergyIncrease;
    
    // Status determination
    let status: CalculationResults['status'];
    if (netBenefit > 1000 && densityIncrease > 20) status = 'optimal';
    else if (netBenefit > 500 && densityIncrease > 10) status = 'good';
    else if (netBenefit > 0) status = 'acceptable';
    else status = 'poor';
    
    setResults({
      optimalDensity: Math.round(optimalDensity * 100) / 100,
      densityIncrease: Math.round(densityIncrease),
      transportSavings: Math.round(transportSavings),
      annualSavings: Math.round(annualSavings),
      loadsReduction: Math.round(loadsReduction * 10) / 10,
      pressureRequired: Math.round(pressureRequired),
      cycleTime: Math.round(cycleTime),
      energyIncrease: Math.round((energyIncrease - 1) * 100),
      netBenefit: Math.round(netBenefit),
      status
    });
  };

  const resetCalculator = () => {
    setInputs(defaultInputs);
  };

  const getStatusColor = (status: CalculationResults['status']) => {
    switch (status) {
      case 'optimal': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'acceptable': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: CalculationResults['status']) => {
    switch (status) {
      case 'optimal': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'good': return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case 'acceptable': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'poor': return <AlertCircle className="h-5 w-5 text-red-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <>
      {/* Page Hero */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-arzir-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Target className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            Bale Density Optimizer
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Optimize bale density settings for different material types to maximize transport efficiency and value.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
            Density Optimization Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">1</div>
              <h3 className="font-semibold text-black">Current State</h3>
              <p className="text-sm text-arzir-gray-600">Material type and current density</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Transport Costs</h3>
              <p className="text-sm text-arzir-gray-600">Distance and cost factors</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Optimization</h3>
              <p className="text-sm text-arzir-gray-600">Calculate optimal density</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">4</div>
              <h3 className="font-semibold text-black">Benefits</h3>
              <p className="text-sm text-arzir-gray-600">Cost savings analysis</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Calculator Interface */}
      <Section background="gray" size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Parameters */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading font-bold text-black flex items-center gap-2">
                <Calculator className="h-5 w-5 text-arzir-primary" />
                Current Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="materialType">Material Type</Label>
                <Select value={inputs.materialType} onValueChange={(value) => setInputs({...inputs, materialType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mixed_steel">Mixed steel scrap</SelectItem>
                    <SelectItem value="aluminum">Aluminum</SelectItem>
                    <SelectItem value="copper">Copper</SelectItem>
                    <SelectItem value="stainless">Stainless steel</SelectItem>
                    <SelectItem value="automotive">Automotive scrap</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentDensity">Current Bale Density (t/m³)</Label>
                <Input
                  id="currentDensity"
                  type="number"
                  step="0.1"
                  value={inputs.currentDensity}
                  onChange={(e) => setInputs({...inputs, currentDensity: Number(e.target.value)})}
                  placeholder="e.g., 0.8"
                  min="0.3"
                  max="3.0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="baleSize">Bale Size</Label>
                <Select value={inputs.baleSize} onValueChange={(value) => setInputs({...inputs, baleSize: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bale size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1.0 x 1.0 x 1.2m)</SelectItem>
                    <SelectItem value="standard">Standard (1.1 x 1.1 x 1.6m)</SelectItem>
                    <SelectItem value="large">Large (1.2 x 1.2 x 1.8m)</SelectItem>
                    <SelectItem value="jumbo">Jumbo (1.5 x 1.5 x 2.0m)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transportDistance">Transport Distance (km)</Label>
                <Input
                  id="transportDistance"
                  type="number"
                  value={inputs.transportDistance}
                  onChange={(e) => setInputs({...inputs, transportDistance: Number(e.target.value)})}
                  placeholder="e.g., 150"
                  min="10"
                  max="1000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelCost">Fuel Cost ($/liter)</Label>
                <Input
                  id="fuelCost"
                  type="number"
                  step="0.1"
                  value={inputs.fuelCost}
                  onChange={(e) => setInputs({...inputs, fuelCost: Number(e.target.value)})}
                  placeholder="e.g., 4.5"
                  min="1.0"
                  max="10.0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="laborCost">Driver Labor Cost ($/hour)</Label>
                <Input
                  id="laborCost"
                  type="number"
                  value={inputs.laborCost}
                  onChange={(e) => setInputs({...inputs, laborCost: Number(e.target.value)})}
                  placeholder="e.g., 25"
                  min="10"
                  max="100"
                />
              </div>

              <Button onClick={resetCalculator} variant="outline" className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset Calculator
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="lg:sticky lg:top-8">
            <CardHeader>
              <CardTitle className="text-xl font-heading font-bold text-black">
                Optimization Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {results ? (
                <>
                  {/* Status Indicator */}
                  <div className={`p-4 rounded-lg border-2 ${
                    results.status === 'optimal' ? 'border-green-200 bg-green-50' :
                    results.status === 'good' ? 'border-blue-200 bg-blue-50' :
                    results.status === 'acceptable' ? 'border-yellow-200 bg-yellow-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(results.status)}
                      <span className={`font-semibold ${getStatusColor(results.status)}`}>
                        {results.status === 'optimal' ? 'Excellent Optimization' :
                         results.status === 'good' ? 'Good Optimization' :
                         results.status === 'acceptable' ? 'Marginal Benefit' :
                         'Limited Benefit'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      Net monthly benefit: <strong>${results.netBenefit}</strong>
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-arzir-primary">{results.optimalDensity}</div>
                      <div className="text-sm text-arzir-gray-600">Optimal Density (t/m³)</div>
                    </div>
                    <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-arzir-primary">{results.densityIncrease}%</div>
                      <div className="text-sm text-arzir-gray-600">Density Increase</div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Transport Loads Reduced:</span>
                      <span className="font-semibold text-black">{results.loadsReduction}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Monthly Transport Savings:</span>
                      <span className="font-semibold text-green-600">${results.transportSavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Annual Savings:</span>
                      <span className="font-semibold text-green-600">${results.annualSavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Required Pressure:</span>
                      <span className="font-semibold text-black">{results.pressureRequired} tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Cycle Time:</span>
                      <span className="font-semibold text-black">{results.cycleTime} seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Energy Increase:</span>
                      <span className="font-semibold text-orange-600">{results.energyIncrease}%</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="bale_density_optimizer">
                    <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                      Optimize My Baler
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteDialog>
                </>
              ) : (
                <div className="text-center py-8 text-arzir-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter current operations to see optimization</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}