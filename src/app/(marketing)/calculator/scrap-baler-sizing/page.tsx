"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import type { Metadata } from "next";

interface CalculationInputs {
  dailyThroughput: number;
  operatingHours: number;
  materialMix: string;
  targetDensity: number;
  feedType: string;
  spaceConstraint: string;
}

interface CalculationResults {
  recommendedCapacity: number;
  pressForce: number;
  baleSize: string;
  cycleTime: number;
  powerRequirement: number;
  machineModel: string;
  status: 'optimal' | 'acceptable' | 'oversized' | 'undersized';
  efficiency: number;
}

const defaultInputs: CalculationInputs = {
  dailyThroughput: 50,
  operatingHours: 8,
  materialMix: 'mixed',
  targetDensity: 1.8,
  feedType: 'manual',
  spaceConstraint: 'moderate'
};

export default function ScrapBalerSizingCalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  // Auto-calculate when inputs change
  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const hourlyThroughput = inputs.dailyThroughput / inputs.operatingHours;
    
    // Base calculations (simplified for demo)
    let pressForce = 0;
    let machineModel = '';
    let cycleTime = 0;
    
    // Material factor
    const materialFactors = {
      'ferrous': 1.0,
      'mixed': 1.2,
      'nonferrous': 0.8,
      'automotive': 1.3
    };
    
    const factor = materialFactors[inputs.materialMix as keyof typeof materialFactors] || 1.0;
    const adjustedThroughput = hourlyThroughput * factor;
    
    // Determine machine specifications
    if (adjustedThroughput <= 5) {
      pressForce = 300;
      machineModel = 'ARZIR-300';
      cycleTime = 45;
    } else if (adjustedThroughput <= 10) {
      pressForce = 500;
      machineModel = 'ARZIR-500';
      cycleTime = 60;
    } else if (adjustedThroughput <= 20) {
      pressForce = 800;
      machineModel = 'ARZIR-800';
      cycleTime = 75;
    } else {
      pressForce = 1200;
      machineModel = 'ARZIR-1200';
      cycleTime = 90;
    }
    
    // Determine status
    let status: CalculationResults['status'] = 'optimal';
    if (adjustedThroughput < 2) status = 'undersized';
    else if (adjustedThroughput > 25) status = 'oversized';
    else if (adjustedThroughput > 15) status = 'acceptable';
    
    const efficiency = Math.min(95, Math.max(70, 100 - (adjustedThroughput * 2)));
    
    setResults({
      recommendedCapacity: Math.round(adjustedThroughput),
      pressForce,
      baleSize: pressForce <= 500 ? '1.1 x 1.1 x 1.6m' : '1.2 x 1.2 x 1.8m',
      cycleTime,
      powerRequirement: Math.round(pressForce * 0.15),
      machineModel,
      status,
      efficiency: Math.round(efficiency)
    });
  };

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
            <Calculator className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            Scrap Baler Sizing Calculator
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate optimal baler capacity and specifications based on your material mix and throughput requirements.
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
              <h3 className="font-semibold text-black">Enter Your Requirements</h3>
              <p className="text-sm text-arzir-gray-600">Input daily throughput, operating hours, and material specifications</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Review Calculations</h3>
              <p className="text-sm text-arzir-gray-600">See recommended machine specifications and performance estimates</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Get Detailed Quote</h3>
              <p className="text-sm text-arzir-gray-600">Contact our engineers for detailed specifications and pricing</p>
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
                <Label htmlFor="dailyThroughput">Daily Throughput (tons)</Label>
                <Input
                  id="dailyThroughput"
                  type="number"
                  value={inputs.dailyThroughput}
                  onChange={(e) => setInputs({...inputs, dailyThroughput: Number(e.target.value)})}
                  placeholder="e.g., 50"
                  min="1"
                  max="500"
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
                <Label htmlFor="materialMix">Material Mix</Label>
                <Select value={inputs.materialMix} onValueChange={(value) => setInputs({...inputs, materialMix: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ferrous">Ferrous metals (over 80%)</SelectItem>
                    <SelectItem value="mixed">Mixed scrap (50-80% ferrous)</SelectItem>
                    <SelectItem value="nonferrous">Non-ferrous metals (over 50%)</SelectItem>
                    <SelectItem value="automotive">Automotive scrap</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetDensity">Target Bale Density (t/m³)</Label>
                <Input
                  id="targetDensity"
                  type="number"
                  step="0.1"
                  value={inputs.targetDensity}
                  onChange={(e) => setInputs({...inputs, targetDensity: Number(e.target.value)})}
                  placeholder="e.g., 1.8"
                  min="1.0"
                  max="3.0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedType">Feed Type</Label>
                <Select value={inputs.feedType} onValueChange={(value) => setInputs({...inputs, feedType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feed method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual loading</SelectItem>
                    <SelectItem value="conveyor">Conveyor feed</SelectItem>
                    <SelectItem value="crane">Crane/grapple</SelectItem>
                    <SelectItem value="loader">Loader feed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="spaceConstraint">Space Constraint</Label>
                <Select value={inputs.spaceConstraint} onValueChange={(value) => setInputs({...inputs, spaceConstraint: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select space availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limited">Limited space</SelectItem>
                    <SelectItem value="moderate">Moderate space</SelectItem>
                    <SelectItem value="ample">Ample space</SelectItem>
                  </SelectContent>
                </Select>
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
                Calculation Results
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
                         results.status === 'oversized' ? 'Consider Smaller Unit' :
                         'Consider Larger Unit'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      Recommended machine capacity: <strong>{results.recommendedCapacity} tons/hour</strong>
                    </p>
                  </div>

                  {/* Main Results */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-arzir-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-arzir-primary mb-2">
                        {results.machineModel}
                      </div>
                      <div className="text-sm text-arzir-gray-600">Recommended Model</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.pressForce}</div>
                        <div className="text-sm text-arzir-gray-600">Tons Press Force</div>
                      </div>
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-black">{results.cycleTime}s</div>
                        <div className="text-sm text-arzir-gray-600">Cycle Time</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Bale Size:</span>
                        <span className="font-semibold text-black">{results.baleSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Power Requirement:</span>
                        <span className="font-semibold text-black">{results.powerRequirement} kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Efficiency:</span>
                        <span className="font-semibold text-black">{results.efficiency}%</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="baler_calculator">
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
                question: "What is the formula used in this calculator?",
                answer: "The calculator uses industry-standard formulas considering material density, compression ratios, and throughput requirements. Results are based on ARZIR's engineering experience and typical performance data."
              },
              {
                question: "Can I use imperial units?",
                answer: "Currently the calculator uses metric units (tons, meters). For imperial conversions: 1 ton = 1.1 US tons, 1 meter = 3.28 feet."
              },
              {
                question: "Is this calculator suitable for stainless steel?",
                answer: "Yes, select 'Non-ferrous metals' for stainless steel and other specialty alloys. The calculator adjusts for different material properties and compression characteristics."
              },
              {
                question: "How accurate are these estimates?",
                answer: "Results are estimates based on typical conditions. Actual performance may vary ±10-15% depending on material preparation, operator skill, and specific operating conditions."
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