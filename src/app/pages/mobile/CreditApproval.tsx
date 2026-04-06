import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CheckCircle2, Building2, Shield } from "lucide-react";

export function CreditApproval() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Credit Approved! 🎉</h1>
        <p className="text-gray-600 text-center mb-8">Your loan has been approved by our NBFC partner</p>

        <Card className="w-full max-w-md p-6 bg-white shadow-lg space-y-4">
          <div className="text-center pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Approved Credit Limit</p>
            <p className="text-4xl font-bold text-primary">₹10,000</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Package Amount</span>
              <span className="font-semibold">₹7,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Available Balance</span>
              <span className="font-semibold text-primary">₹2,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Repayment Date</span>
              <span className="font-semibold">Oct 15, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interest Rate</span>
              <span className="font-semibold text-green-600">12% p.a.</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
            <Building2 className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Powered by NBFC Partner</p>
              <p className="text-xs text-gray-500">Registered with RBI</p>
            </div>
            <Shield className="w-5 h-5 text-green-600" />
          </div>
        </Card>

        <Button 
          size="lg" 
          className="w-full max-w-md h-14 text-lg mt-8"
          onClick={() => navigate("/mobile/order-confirmation")}
        >
          Confirm Order
        </Button>

        <p className="text-xs text-center text-gray-500 mt-4 max-w-md">
          Your order will be processed and delivered within 2 working days
        </p>
      </div>
    </div>
  );
}
