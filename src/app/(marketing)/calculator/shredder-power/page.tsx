"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface CalculationInputs {
  materialType: string;
  feedSize: number;
  targetSize: number;
  throughput: number;
  operatingHours: number;
  electricityCost: number;
}

interface CalculationResults {
  recommendedPower: number;
  motorSize: string;
  energyConsumption: number;
  dailyEnergyCost: number;
  annualEnergyCost: number;
  shredderModel: string;
  efficiency: number;
  status: 'optimal' | 'acceptable' | 'oversized' | 'undersized';
}

const defaultInputs: CalculationInputs = {
  materialType: 'mixed_metal',
  feedSize: 300,
  targetSize: 50,
  throughput: 20,
  operatingHours: 8,
  electricityCost: 0.12
};

export default function ShredderPowerCalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = useCallback(() => {
    // Material hardness factors
    const materialFactors = {
      'mixed_metal': 1.0,
      'aluminum': 0.7,
      'steel': 1.3,
      'copper': 0.8,
      'electronic_waste': 0.9
    };

    const factor = materialFactors[inputs.materialType as keyof typeof materialFactors] || 1.0;
    
    // Size reduction ratio
    const sizeReduction = inputs.feedSize / inputs.targetSize;
    
    // Base power calculation (simplified)
    const basePower = inputs.throughput * factor * Math.log(sizeReduction) * 15;
    const recommendedPower = Math.round(basePower);
    
    // Determine motor size and model
    let motorSize = '';
    let shredderModel = '';
    if (recommendedPower <= 150) {
      motorSize = '150 kW';
      shredderModel = 'ARZIR-S150';
    } else if (recommendedPower <= 300) {
      motorSize = '300 kW';
      shredderModel = 'ARZIR-S300';
    } else if (recommendedPower <= 500) {
      motorSize = '500 kW';
      shredderModel = 'ARZIR-S500';
    } else {
      motorSize = '750 kW';
      shredderModel = 'ARZIR-S750';
    }
    
    // Energy calculations
    const energyConsumption = recommendedPower * inputs.operatingHours / 1000; // kWh per day
    const dailyEnergyCost = energyConsumption * inputs.electricityCost;
    const annualEnergyCost = dailyEnergyCost * 250; // 250 working days
    
    // Efficiency and status
    const efficiency = Math.min(95, Math.max(70, 100 - (sizeReduction * 2)));
    let status: CalculationResults['status'] = 'optimal';
    if (recommendedPower < 50) status = 'undersized';
    else if (recommendedPower > 600) status = 'oversized';
    else if (recommendedPower > 400) status = 'acceptable';
    
    setResults({
      recommendedPower,
      motorSize,
      energyConsumption: Math.round(energyConsumption * 10) / 10,
      dailyEnergyCost: Math.round(dailyEnergyCost * 100) / 100,
      annualEnergyCost: Math.round(annualEnergyCost),
      shredderModel,
      efficiency: Math.round(efficiency),
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
            <Zap className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            Shredder Power Calculator
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estimate power requirements and energy costs for different shredder configurations and material types.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
            How to Use
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">1</div>
              <h3 className="font-semibold text-black">Material Properties</h3>
              <p className="text-sm text-arzir-gray-600">Enter material type, input size, and target output size</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Operating Parameters</h3>
              <p className="text-sm text-arzir-gray-600">Set throughput requirements and operating hours</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Power & Cost Analysis</h3>
              <p className="text-sm text-arzir-gray-600">Review power requirements and energy cost estimates</p>
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
                Input Parameters
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
                    <SelectItem value="mixed_metal">Mixed metals</SelectItem>
                    <SelectItem value="aluminum">Aluminum</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="copper">Copper</SelectItem>
                    <SelectItem value="electronic_waste">Electronic waste</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedSize">Feed Size (mm)</Label>
                <Input
                  id="feedSize"
                  type="number"
                  value={inputs.feedSize}
                  onChange={(e) => setInputs({...inputs, feedSize: Number(e.target.value)})}
                  placeholder="e.g., 300"
                  min="10"
                  max="1000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetSize">Target Output Size (mm)</Label>
                <Input
                  id="targetSize"
                  type="number"
                  value={inputs.targetSize}
                  onChange={(e) => setInputs({...inputs, targetSize: Number(e.target.value)})}
                  placeholder="e.g., 50"
                  min="5"
                  max="200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="throughput">Throughput (tons/hour)</Label>
                <Input
                  id="throughput"
                  type="number"
                  value={inputs.throughput}
                  onChange={(e) => setInputs({...inputs, throughput: Number(e.target.value)})}
                  placeholder="e.g., 20"
                  min="1"
                  max="100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingHours">Operating Hours per Day</Label>
                <Input
                  id="operatingHours"
                  type="number"
                  value={inputs.operatingHours}
                  onChange={(e) => setInputs({...inputs, operatingHours: Number(e.target.value)})}
                  placeholder="e.g., 8"
                  min="1"
                  max="24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="electricityCost">Electricity Cost ($/kWh)</Label>
                <Input
                  id="electricityCost"
                  type="number"
                  step="0.01"
                  value={inputs.electricityCost}
                  onChange={(e) => setInputs({...inputs, electricityCost: Number(e.target.value)})}
                  placeholder="e.g., 0.12"
                  min="0.01"
                  max="1.00"
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
                Power & Energy Analysis
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
                        {results.status === 'optimal' ? 'Optimal Power Rating' :
                         results.status === 'acceptable' ? 'Acceptable Power Rating' :
                         results.status === 'oversized' ? 'High Power Required' :
                         'Consider Larger Unit'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      Recommended power: <strong>{results.recommendedPower} kW</strong>
                    </p>
                  </div>

                  {/* Main Results */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-arzir-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-arzir-primary mb-2">
                        {results.shredderModel}
                      </div>
                      <div className="text-sm text-arzir-gray-600">Recommended Model</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.motorSize}</div>
                        <div className="text-sm text-arzir-gray-600">Motor Size</div>
                      </div>
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.efficiency}%</div>
                        <div className="text-sm text-arzir-gray-600">Efficiency</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Daily Energy Consumption:</span>
                        <span className="font-semibold text-black">{results.energyConsumption} kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Daily Energy Cost:</span>
                        <span className="font-semibold text-black">${results.dailyEnergyCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Annual Energy Cost:</span>
                        <span className="font-semibold text-black">${results.annualEnergyCost}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="shredder_power_calculator">
                    <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                      Get Detailed Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteDialog>
                </>
              ) : (
                <div className="text-center py-8 text-arzir-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter parameters to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How accurate are the power calculations?",
                answer: "Power estimates are based on industry standards and ARZIR's engineering experience. Actual power requirements may vary ±15% depending on material preparation and operating conditions."
              },
              {
                question: "What factors affect shredder power requirements?",
                answer: "Material hardness, feed size, target output size, throughput rate, and material moisture content are the primary factors affecting power requirements."
              },
              {
                question: "Can I process different materials with the same shredder?",
                answer: "Yes, most shredders can handle various materials, but power requirements and throughput will vary. Consider the most demanding material for sizing."
              },
              {
                question: "How do I reduce energy costs?",
                answer: "Optimize feed preparation, maintain proper blade clearances, operate during off-peak hours, and consider variable frequency drives for motor control."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-arzir-gray-200 pb-4">
                <h3 className="text-lg font-heading font-semibold text-black mb-2">
                  {faq.question}
                </h3>
                <p className="text-arzir-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}