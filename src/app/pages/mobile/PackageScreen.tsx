import { useNavigate, useLocation } from "react-router";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";

export function PackageScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const crop = location.state?.crop || "Soybean";

  const packageItems = [
    "Premium Quality Seeds (5kg)",
    "NPK Fertilizer (25kg)",
    "Urea (10kg)",
    "Pesticide Spray (500ml)",
    "Expert Guidance Support"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-xl font-bold">{crop} Package</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/30 border-2 border-primary/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{crop} Starter Package</h3>
              <p className="text-sm text-gray-600 mt-1">For 1 acre land</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {packageItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Value</span>
              <span className="text-3xl font-bold text-gray-900">₹7,500</span>
            </div>
            <p className="text-sm text-primary font-semibold mt-2">Pay after harvest • No collateral needed</p>
          </div>
        </Card>

        <Card className="p-5 bg-blue-50 border-blue-200">
          <h4 className="font-bold text-gray-900 mb-2">💰 Estimated Harvest Value</h4>
          <p className="text-sm text-gray-700">Expected income from 1 acre: <span className="font-bold">₹40,000 - ₹60,000</span></p>
          <p className="text-xs text-gray-600 mt-1">After repayment, you keep the profit</p>
        </Card>

        <Button 
          size="lg" 
          className="w-full h-14 text-lg"
          onClick={() => navigate("/mobile/credit-approval")}
        >
          Apply for Credit
        </Button>

        <p className="text-xs text-center text-gray-500">
          By proceeding, you agree to our terms and NBFC partner verification
        </p>
      </div>
    </div>
  );
}
