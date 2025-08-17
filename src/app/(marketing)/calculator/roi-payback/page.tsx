"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface CalculationInputs {
  equipmentCost: number;
  installationCost: number;
  annualRevenue: number;
  operatingCosts: number;
  maintenanceCosts: number;
  energyCosts: number;
  laborCosts: number;
  materialCosts: number;
  discountRate: number;
}

interface CalculationResults {
  totalInvestment: number;
  netAnnualProfit: number;
  simplePayback: number;
  roi: number;
  npv5Year: number;
  irr: number;
  breakEvenPoint: number;
  status: 'excellent' | 'good' | 'acceptable' | 'poor';
}

const defaultInputs: CalculationInputs = {
  equipmentCost: 500000,
  installationCost: 50000,
  annualRevenue: 800000,
  operatingCosts: 200000,
  maintenanceCosts: 25000,
  energyCosts: 80000,
  laborCosts: 120000,
  materialCosts: 150000,
  discountRate: 8
};

export default function ROIPaybackCalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = useCallback(() => {
    const totalInvestment = inputs.equipmentCost + inputs.installationCost;
    const totalOperatingCosts = inputs.operatingCosts + inputs.maintenanceCosts + 
                               inputs.energyCosts + inputs.laborCosts + inputs.materialCosts;
    const netAnnualProfit = inputs.annualRevenue - totalOperatingCosts;
    
    // Simple payback period
    const simplePayback = totalInvestment / netAnnualProfit;
    
    // ROI calculation
    const roi = (netAnnualProfit / totalInvestment) * 100;
    
    // NPV calculation (5 years)
    let npv5Year = -totalInvestment;
    for (let year = 1; year <= 5; year++) {
      npv5Year += netAnnualProfit / Math.pow(1 + inputs.discountRate / 100, year);
    }
    
    // IRR approximation (simplified)
    let irr = 0;
    for (let rate = 0; rate <= 100; rate += 0.1) {
      let npvTest = -totalInvestment;
      for (let year = 1; year <= 5; year++) {
        npvTest += netAnnualProfit / Math.pow(1 + rate / 100, year);
      }
      if (npvTest <= 0) {
        irr = rate;
        break;
      }
    }
    
    // Break-even point (months)
    const breakEvenPoint = simplePayback * 12;
    
    // Status determination
    let status: CalculationResults['status'];
    if (roi >= 30 && simplePayback <= 2) status = 'excellent';
    else if (roi >= 20 && simplePayback <= 3) status = 'good';
    else if (roi >= 10 && simplePayback <= 5) status = 'acceptable';
    else status = 'poor';
    
    setResults({
      totalInvestment: Math.round(totalInvestment),
      netAnnualProfit: Math.round(netAnnualProfit),
      simplePayback: Math.round(simplePayback * 10) / 10,
      roi: Math.round(roi * 10) / 10,
      npv5Year: Math.round(npv5Year),
      irr: Math.round(irr * 10) / 10,
      breakEvenPoint: Math.round(breakEvenPoint * 10) / 10,
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
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'acceptable': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: CalculationResults['status']) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="h-5 w-5 text-green-600" />;
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
            <TrendingUp className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            ROI & Payback Calculator
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate return on investment and payback period for recycling equipment installations and upgrades.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
            Financial Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">1</div>
              <h3 className="font-semibold text-black">Investment Costs</h3>
              <p className="text-sm text-arzir-gray-600">Equipment and installation costs</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Revenue</h3>
              <p className="text-sm text-arzir-gray-600">Expected annual revenue</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Operating Costs</h3>
              <p className="text-sm text-arzir-gray-600">Annual operating expenses</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">4</div>
              <h3 className="font-semibold text-black">Analysis</h3>
              <p className="text-sm text-arzir-gray-600">ROI, payback, and NPV results</p>
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
                Financial Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-black">Investment Costs</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="equipmentCost">Equipment Cost ($)</Label>
                    <Input
                      id="equipmentCost"
                      type="number"
                      value={inputs.equipmentCost}
                      onChange={(e) => setInputs({...inputs, equipmentCost: Number(e.target.value)})}
                      placeholder="e.g., 500000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="installationCost">Installation Cost ($)</Label>
                    <Input
                      id="installationCost"
                      type="number"
                      value={inputs.installationCost}
                      onChange={(e) => setInputs({...inputs, installationCost: Number(e.target.value)})}
                      placeholder="e.g., 50000"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-black">Annual Revenue</h3>
                <div className="space-y-2">
                  <Label htmlFor="annualRevenue">Expected Annual Revenue ($)</Label>
                  <Input
                    id="annualRevenue"
                    type="number"
                    value={inputs.annualRevenue}
                    onChange={(e) => setInputs({...inputs, annualRevenue: Number(e.target.value)})}
                    placeholder="e.g., 800000"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-black">Annual Operating Costs</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="operatingCosts">General Operating Costs ($)</Label>
                    <Input
                      id="operatingCosts"
                      type="number"
                      value={inputs.operatingCosts}
                      onChange={(e) => setInputs({...inputs, operatingCosts: Number(e.target.value)})}
                      placeholder="e.g., 200000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maintenanceCosts">Maintenance Costs ($)</Label>
                    <Input
                      id="maintenanceCosts"
                      type="number"
                      value={inputs.maintenanceCosts}
                      onChange={(e) => setInputs({...inputs, maintenanceCosts: Number(e.target.value)})}
                      placeholder="e.g., 25000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="energyCosts">Energy Costs ($)</Label>
                    <Input
                      id="energyCosts"
                      type="number"
                      value={inputs.energyCosts}
                      onChange={(e) => setInputs({...inputs, energyCosts: Number(e.target.value)})}
                      placeholder="e.g., 80000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="laborCosts">Labor Costs ($)</Label>
                    <Input
                      id="laborCosts"
                      type="number"
                      value={inputs.laborCosts}
                      onChange={(e) => setInputs({...inputs, laborCosts: Number(e.target.value)})}
                      placeholder="e.g., 120000"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="discountRate">Discount Rate (%)</Label>
                <Input
                  id="discountRate"
                  type="number"
                  step="0.1"
                  value={inputs.discountRate}
                  onChange={(e) => setInputs({...inputs, discountRate: Number(e.target.value)})}
                  placeholder="e.g., 8"
                  min="0"
                  max="30"
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
                Financial Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {results ? (
                <>
                  {/* Status Indicator */}
                  <div className={`p-4 rounded-lg border-2 ${
                    results.status === 'excellent' ? 'border-green-200 bg-green-50' :
                    results.status === 'good' ? 'border-blue-200 bg-blue-50' :
                    results.status === 'acceptable' ? 'border-yellow-200 bg-yellow-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(results.status)}
                      <span className={`font-semibold ${getStatusColor(results.status)}`}>
                        {results.status === 'excellent' ? 'Excellent Investment' :
                         results.status === 'good' ? 'Good Investment' :
                         results.status === 'acceptable' ? 'Acceptable Investment' :
                         'Consider Alternatives'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      ROI: <strong>{results.roi}%</strong> | Payback: <strong>{results.simplePayback} years</strong>
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-arzir-primary">{results.roi}%</div>
                      <div className="text-sm text-arzir-gray-600">Annual ROI</div>
                    </div>
                    <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-arzir-primary">{results.simplePayback}</div>
                      <div className="text-sm text-arzir-gray-600">Years Payback</div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Total Investment:</span>
                      <span className="font-semibold text-black">${results.totalInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Net Annual Profit:</span>
                      <span className="font-semibold text-black">${results.netAnnualProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">Break-even Point:</span>
                      <span className="font-semibold text-black">{results.breakEvenPoint} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">5-Year NPV:</span>
                      <span className="font-semibold text-black">${results.npv5Year.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-arzir-gray-600">IRR:</span>
                      <span className="font-semibold text-black">{results.irr}%</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="roi_payback_calculator">
                    <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                      Get Investment Analysis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteDialog>
                </>
              ) : (
                <div className="text-center py-8 text-arzir-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter financial data to see analysis</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}