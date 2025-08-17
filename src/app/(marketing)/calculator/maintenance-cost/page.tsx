"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Calculator, RefreshCw, AlertCircle, CheckCircle, Wrench } from "lucide-react";
import { useState, useEffect } from "react";

interface CalculationInputs {
  equipmentType: string;
  equipmentAge: number;
  operatingHours: number;
  equipmentValue: number;
  maintenanceHistory: string;
  operatingConditions: string;
  fleetSize: number;
}

interface CalculationResults {
  annualMaintenanceCost: number;
  plannedMaintenance: number;
  unplannedRepairs: number;
  spareParts: number;
  laborCosts: number;
  downtimeCost: number;
  totalCostPerHour: number;
  recommendedBudget: number;
  maintenanceStrategy: string;
  status: 'low' | 'normal' | 'high' | 'critical';
}

const defaultInputs: CalculationInputs = {
  equipmentType: 'baler',
  equipmentAge: 5,
  operatingHours: 3000,
  equipmentValue: 500000,
  maintenanceHistory: 'average',
  operatingConditions: 'normal',
  fleetSize: 1
};

export default function MaintenanceCostEstimator() {
  const [inputs, setInputs] = useState<CalculationInputs>(defaultInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    // Base maintenance rate as percentage of equipment value
    const baseRates = {
      'baler': 0.06,
      'shear': 0.08,
      'shredder': 0.10,
      'crusher': 0.09,
      'separator': 0.05
    };

    const baseRate = baseRates[inputs.equipmentType as keyof typeof baseRates] || 0.07;
    
    // Age factor
    let ageFactor = 1.0;
    if (inputs.equipmentAge <= 2) ageFactor = 0.7;
    else if (inputs.equipmentAge <= 5) ageFactor = 1.0;
    else if (inputs.equipmentAge <= 10) ageFactor = 1.4;
    else ageFactor = 1.8;
    
    // Operating intensity factor
    const intensityFactor = Math.max(0.5, Math.min(2.0, inputs.operatingHours / 2500));
    
    // Maintenance history factor
    const historyFactors = {
      'excellent': 0.8,
      'good': 0.9,
      'average': 1.0,
      'poor': 1.3,
      'very_poor': 1.6
    };
    const historyFactor = historyFactors[inputs.maintenanceHistory as keyof typeof historyFactors] || 1.0;
    
    // Operating conditions factor
    const conditionFactors = {
      'excellent': 0.8,
      'good': 0.9,
      'normal': 1.0,
      'harsh': 1.3,
      'extreme': 1.6
    };
    const conditionFactor = conditionFactors[inputs.operatingConditions as keyof typeof conditionFactors] || 1.0;
    
    // Fleet size discount
    const fleetDiscount = Math.max(0.8, 1 - (inputs.fleetSize - 1) * 0.05);
    
    // Calculate total maintenance cost
    const totalFactor = ageFactor * intensityFactor * historyFactor * conditionFactor * fleetDiscount;
    const annualMaintenanceCost = Math.round(inputs.equipmentValue * baseRate * totalFactor);
    
    // Break down costs
    const plannedMaintenance = Math.round(annualMaintenanceCost * 0.65);
    const unplannedRepairs = Math.round(annualMaintenanceCost * 0.35);
    const spareParts = Math.round(annualMaintenanceCost * 0.45);
    const laborCosts = Math.round(annualMaintenanceCost * 0.55);
    
    // Downtime cost estimate (assuming $500/hour lost productivity)
    const downtimeHours = Math.round(inputs.operatingHours * 0.02 * totalFactor);
    const downtimeCost = downtimeHours * 500;
    
    // Cost per operating hour
    const totalCostPerHour = Math.round((annualMaintenanceCost + downtimeCost) / inputs.operatingHours * 100) / 100;
    
    // Recommended budget (with 20% contingency)
    const recommendedBudget = Math.round(annualMaintenanceCost * 1.2);
    
    // Maintenance strategy recommendation
    let maintenanceStrategy = '';
    if (totalFactor <= 1.0) {
      maintenanceStrategy = 'Preventive maintenance program';
    } else if (totalFactor <= 1.5) {
      maintenanceStrategy = 'Enhanced preventive + condition monitoring';
    } else {
      maintenanceStrategy = 'Intensive maintenance + replacement planning';
    }
    
    // Status determination
    let status: CalculationResults['status'];
    const costRatio = annualMaintenanceCost / inputs.equipmentValue;
    if (costRatio <= 0.05) status = 'low';
    else if (costRatio <= 0.10) status = 'normal';
    else if (costRatio <= 0.15) status = 'high';
    else status = 'critical';
    
    setResults({
      annualMaintenanceCost,
      plannedMaintenance,
      unplannedRepairs,
      spareParts,
      laborCosts,
      downtimeCost,
      totalCostPerHour,
      recommendedBudget,
      maintenanceStrategy,
      status
    });
  };

  const resetCalculator = () => {
    setInputs(defaultInputs);
  };

  const getStatusColor = (status: CalculationResults['status']) => {
    switch (status) {
      case 'low': return 'text-green-600';
      case 'normal': return 'text-blue-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: CalculationResults['status']) => {
    switch (status) {
      case 'low': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'normal': return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case 'high': return <AlertCircle className="h-5 w-5 text-orange-600" />;
      case 'critical': return <AlertCircle className="h-5 w-5 text-red-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <>
      {/* Page Hero */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-arzir-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Wrench className="h-8 w-8 text-arzir-primary" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black">
            Maintenance Cost Estimator
          </h1>
          <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estimate annual maintenance costs and spare parts requirements for your equipment fleet.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
            Maintenance Planning
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">1</div>
              <h3 className="font-semibold text-black">Equipment Details</h3>
              <p className="text-sm text-arzir-gray-600">Type, age, and operating hours</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">2</div>
              <h3 className="font-semibold text-black">Operating Conditions</h3>
              <p className="text-sm text-arzir-gray-600">Environment and usage patterns</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">3</div>
              <h3 className="font-semibold text-black">Cost Analysis</h3>
              <p className="text-sm text-arzir-gray-600">Planned and unplanned costs</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold mx-auto">4</div>
              <h3 className="font-semibold text-black">Budget Planning</h3>
              <p className="text-sm text-arzir-gray-600">Annual budget recommendations</p>
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
                Equipment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type</Label>
                <Select value={inputs.equipmentType} onValueChange={(value) => setInputs({...inputs, equipmentType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baler">Baler</SelectItem>
                    <SelectItem value="shear">Shear</SelectItem>
                    <SelectItem value="shredder">Shredder</SelectItem>
                    <SelectItem value="crusher">Crusher</SelectItem>
                    <SelectItem value="separator">Separator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="equipmentAge">Equipment Age (years)</Label>
                <Input
                  id="equipmentAge"
                  type="number"
                  value={inputs.equipmentAge}
                  onChange={(e) => setInputs({...inputs, equipmentAge: Number(e.target.value)})}
                  placeholder="e.g., 5"
                  min="0"
                  max="25"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingHours">Annual Operating Hours</Label>
                <Input
                  id="operatingHours"
                  type="number"
                  value={inputs.operatingHours}
                  onChange={(e) => setInputs({...inputs, operatingHours: Number(e.target.value)})}
                  placeholder="e.g., 3000"
                  min="500"
                  max="8000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="equipmentValue">Equipment Value ($)</Label>
                <Input
                  id="equipmentValue"
                  type="number"
                  value={inputs.equipmentValue}
                  onChange={(e) => setInputs({...inputs, equipmentValue: Number(e.target.value)})}
                  placeholder="e.g., 500000"
                  min="50000"
                  max="5000000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maintenanceHistory">Maintenance History</Label>
                <Select value={inputs.maintenanceHistory} onValueChange={(value) => setInputs({...inputs, maintenanceHistory: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select maintenance history" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (always on schedule)</SelectItem>
                    <SelectItem value="good">Good (mostly on schedule)</SelectItem>
                    <SelectItem value="average">Average (some delays)</SelectItem>
                    <SelectItem value="poor">Poor (often delayed)</SelectItem>
                    <SelectItem value="very_poor">Very poor (reactive only)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingConditions">Operating Conditions</Label>
                <Select value={inputs.operatingConditions} onValueChange={(value) => setInputs({...inputs, operatingConditions: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select operating conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (clean, controlled environment)</SelectItem>
                    <SelectItem value="good">Good (indoor, protected)</SelectItem>
                    <SelectItem value="normal">Normal (typical industrial)</SelectItem>
                    <SelectItem value="harsh">Harsh (outdoor, dusty)</SelectItem>
                    <SelectItem value="extreme">Extreme (corrosive, abrasive)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fleetSize">Fleet Size</Label>
                <Input
                  id="fleetSize"
                  type="number"
                  value={inputs.fleetSize}
                  onChange={(e) => setInputs({...inputs, fleetSize: Number(e.target.value)})}
                  placeholder="e.g., 1"
                  min="1"
                  max="50"
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
                Maintenance Cost Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {results ? (
                <>
                  {/* Status Indicator */}
                  <div className={`p-4 rounded-lg border-2 ${
                    results.status === 'low' ? 'border-green-200 bg-green-50' :
                    results.status === 'normal' ? 'border-blue-200 bg-blue-50' :
                    results.status === 'high' ? 'border-orange-200 bg-orange-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(results.status)}
                      <span className={`font-semibold ${getStatusColor(results.status)}`}>
                        {results.status === 'low' ? 'Low Maintenance Cost' :
                         results.status === 'normal' ? 'Normal Maintenance Cost' :
                         results.status === 'high' ? 'High Maintenance Cost' :
                         'Critical Maintenance Required'}
                      </span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">
                      Annual cost: <strong>${results.annualMaintenanceCost.toLocaleString()}</strong>
                    </p>
                  </div>

                  {/* Main Results */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-arzir-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-arzir-primary mb-2">
                        ${results.recommendedBudget.toLocaleString()}
                      </div>
                      <div className="text-sm text-arzir-gray-600">Recommended Annual Budget</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-black">${results.totalCostPerHour}</div>
                        <div className="text-sm text-arzir-gray-600">Cost per Hour</div>
                      </div>
                      <div className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-black">${results.downtimeCost.toLocaleString()}</div>
                        <div className="text-sm text-arzir-gray-600">Downtime Cost</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Planned Maintenance:</span>
                        <span className="font-semibold text-black">${results.plannedMaintenance.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Unplanned Repairs:</span>
                        <span className="font-semibold text-black">${results.unplannedRepairs.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Spare Parts:</span>
                        <span className="font-semibold text-black">${results.spareParts.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Labor Costs:</span>
                        <span className="font-semibold text-black">${results.laborCosts.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Recommended Strategy</h4>
                      <p className="text-sm text-arzir-gray-600">{results.maintenanceStrategy}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <QuoteDialog source="maintenance_cost_calculator">
                    <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                      Get Maintenance Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteDialog>
                </>
              ) : (
                <div className="text-center py-8 text-arzir-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter equipment details to see costs</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}