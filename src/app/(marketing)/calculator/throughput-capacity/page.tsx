"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle, Factory } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface CalculationInputs {
  targetThroughput: number;
  operatingHours: number;
  materialType: string;
  shiftPattern: string;
  efficiency: number;
  peakFactor: number;
  setupTime: number;
}

interface CalculationResults {
  requiredCapacity: number;
  recommendedUnits: number;
  unitCapacity: number;
  utilizationRate: number;
  totalSystemCapacity: number;
  safetyMargin: number;
  configuration: string;
  status: 'optimal' | 'acceptable' | 'undersized' | 'oversized';
}

const defaultInputs: CalculationInputs = {
  targetThroughput: 100,
  operatingHours: 16,
  materialType: 'mixed_scrap',
  shiftPattern: 'two_shift',
  efficiency: 85,
  peakFactor: 1.3,
  setupTime: 30
};

export default function ThroughputCapacityCalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = useCallback(() => {
    // Material processing factors
    const materialFactors = {
      'mixed_scrap': 1.0,
      'aluminum': 1.2,
      'steel': 0.9,
      'automotive': 0.8,
      'electronic': 1.1
    };

    const materialFactor = materialFactors[inputs.materialType as keyof typeof materialFactors] || 1.0;
    
    // Effective operating time (accounting for setup, breaks, etc.)
    const effectiveHours = inputs.operatingHours - (inputs.setupTime / 60);
    
    // Required hourly capacity including peak factor and efficiency
    const hourlyThroughput = inputs.targetThroughput / effectiveHours;
    const adjustedCapacity = (hourlyThroughput * inputs.peakFactor * materialFactor) / (inputs.efficiency / 100);
    
    // Standard unit capacities (tons/hour)
    const standardCapacities = [5, 10, 15, 20, 25, 30, 40, 50];
    
    // Find optimal configuration
    let bestConfig = { units: 1, capacity: 50, total: 50 };
    let minUnits = Infinity;
    
    for (const capacity of standardCapacities) {
      const unitsNeeded = Math.ceil(adjustedCapacity / capacity);
      if (unitsNeeded < minUnits && unitsNeeded * capacity >= adjustedCapacity) {
        minUnits = unitsNeeded;
        bestConfig = {
          units: unitsNeeded,
          capacity: capacity,
          total: unitsNeeded * capacity
        };
      }
    }
    
    // Calculate utilization and safety margin
    const utilizationRate = (adjustedCapacity / bestConfig.total) * 100;
    const safetyMargin = ((bestConfig.total - adjustedCapacity) / adjustedCapacity) * 100;
    
    // Determine configuration description
    let configuration = '';
    if (bestConfig.units === 1) {
      configuration = `Single ${bestConfig.capacity}T/h unit`;
    } else {
      configuration = `${bestConfig.units} × ${bestConfig.capacity}T/h units`;
    }
    
    // Status determination
    let status: CalculationResults['status'];
    if (utilizationRate >= 70 && utilizationRate <= 85) status = 'optimal';
    else if (utilizationRate >= 60 && utilizationRate <= 90) status = 'acceptable';
    else if (utilizationRate > 90) status = 'undersized';
    else status = 'oversized';
    
    setResults({
      requiredCapacity: Math.round(adjustedCapacity * 10) / 10,
      recommendedUnits: bestConfig.units,
      unitCapacity: bestConfig.capacity,
      utilizationRate: Math.round(utilizationRate),
      totalSystemCapacity: bestConfig.total,
      safetyMargin: Math.round(safetyMargin),
      configuration,
      status
    });
  }, [inputs]);

  useEffect(() => {
    calculateResults();
  }, [calculateResults]);

  const resetCalculator = () => {
    setInputs(defaultInputs);
  };

  const getStatusColor = (status: CalculationResults['status']) => {
    switch (status) {
      case 'optimal': return 'text-green-600';
      case 'acceptable': return 'text-blue-600';
      case 'oversized': return 'text-orange-600';
      case 'undersized': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: CalculationResults['status']) => {
    switch (status) {
      case 'optimal': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'acceptable': return <CheckCircle className="h-5 w-5 text-blue-600" />;
      default: return <AlertCircle className="h-5 w-5 text-orange-600" />;
    }
  };

  return (
    <>
      {/* Page Hero */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-arzir-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Factory className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            Throughput Capacity Calculator
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Determine optimal equipment configuration to meet your daily and hourly throughput targets.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
            Capacity Planning Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">1</div>
              <h3 className="font-semibold text-black">Target Throughput</h3>
              <p className="text-sm text-arzir-gray-600">Daily processing goals</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Operating Schedule</h3>
              <p className="text-sm text-arzir-gray-600">Hours and shift patterns</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Material Factors</h3>
              <p className="text-sm text-arzir-gray-600">Type and efficiency factors</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">4</div>
              <h3 className="font-semibold text-black">Configuration</h3>
              <p className="text-sm text-arzir-gray-600">Optimal equipment setup</p>
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
                Operating Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="targetThroughput">Target Daily Throughput (tons)</Label>
                <Input
                  id="targetThroughput"
                  type="number"
                  value={inputs.targetThroughput}
                  onChange={(e) => setInputs({...inputs, targetThroughput: Number(e.target.value)})}
                  placeholder="e.g., 100"
                  min="1"
                  max="1000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingHours">Operating Hours per Day</Label>
                <Input
                  id="operatingHours"
                  type="number"
                  value={inputs.operatingHours}
                  onChange={(e) => setInputs({...inputs, operatingHours: Number(e.target.value)})}
                  placeholder="e.g., 16"
                  min="1"
                  max="24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="materialType">Material Type</Label>
                <Select value={inputs.materialType} onValueChange={(value) => setInputs({...inputs, materialType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mixed_scrap">Mixed scrap metal</SelectItem>
                    <SelectItem value="aluminum">Aluminum</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="automotive">Automotive scrap</SelectItem>
                    <SelectItem value="electronic">Electronic waste</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shiftPattern">Shift Pattern</Label>
                <Select value={inputs.shiftPattern} onValueChange={(value) => setInputs({...inputs, shiftPattern: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shift pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single_shift">Single shift (8 hours)</SelectItem>
                    <SelectItem value="two_shift">Two shifts (16 hours)</SelectItem>
                    <SelectItem value="three_shift">Three shifts (24 hours)</SelectItem>
                    <SelectItem value="continuous">Continuous operation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="efficiency">Expected Efficiency (%)</Label>
                <Input
                  id="efficiency"
                  type="number"
                  value={inputs.efficiency}
                  onChange={(e) => setInputs({...inputs, efficiency: Number(e.target.value)})}
                  placeholder="e.g., 85"
                  min="50"
                  max="95"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="peakFactor">Peak Load Factor</Label>
                <Select value={inputs.peakFactor.toString()} onValueChange={(value) => setInputs({...inputs, peakFactor: Number(value)})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select peak factor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.1">1.1 (Low variation)</SelectItem>
                    <SelectItem value="1.3">1.3 (Normal variation)</SelectItem>
                    <SelectItem value="1.5">1.5 (High variation)</SelectItem>
                    <SelectItem value="1.8">1.8 (Very high variation)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="setupTime">Setup Time per Day (minutes)</Label>
                <Input
                  id="setupTime"
                  type="number"
                  value={inputs.setupTime}
                  onChange={(e) => setInputs({...inputs, setupTime: Number(e.target.value)})}
                  placeholder="e.g., 30"
                  min="0"
                  max="120"
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
                Capacity Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {results ? (
                <>
                  {/* Status Indicator */}
                  <div className={`p-4 rounded-lg border-2 ${
                    results.status === 'optimal' ? 'border-green-200 bg-green-50' :
                    results.status === 'acceptable' ? 'border-blue-200 bg-blue-50' :
                    'border-orange-200 bg-orange-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(results.status)}
                      <span className={`font-semibold ${getStatusColor(results.status)}`}>
                        {results.status === 'optimal' ? 'Optimal Configuration' :
                         results.status === 'acceptable' ? 'Acceptable Configuration' :
                         results.status === 'oversized' ? 'Consider Smaller Units' :
                         'Increase Capacity'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      Utilization: <strong>{results.utilizationRate}%</strong>
                    </p>
                  </div>

                  {/* Main Results */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-arzir-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-arzir-primary mb-2">
                        {results.configuration}
                      </div>
                      <div className="text-sm text-arzir-gray-600">Recommended Configuration</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.requiredCapacity}</div>
                        <div className="text-sm text-arzir-gray-600">Required T/h</div>
                      </div>
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.totalSystemCapacity}</div>
                        <div className="text-sm text-arzir-gray-600">Total T/h</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Number of Units:</span>
                        <span className="font-semibold text-black">{results.recommendedUnits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Unit Capacity:</span>
                        <span className="font-semibold text-black">{results.unitCapacity} T/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Utilization Rate:</span>
                        <span className="font-semibold text-black">{results.utilizationRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Safety Margin:</span>
                        <span className="font-semibold text-black">{results.safetyMargin}%</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="throughput_capacity_calculator">
                    <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                      Get Equipment Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteDialog>
                </>
              ) : (
                <div className="text-center py-8 text-arzir-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter requirements to see configuration</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}