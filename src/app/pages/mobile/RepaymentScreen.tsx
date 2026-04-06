import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CreditCard, Smartphone, Wallet, Info } from "lucide-react";

export function RepaymentScreen() {
  const navigate = useNavigate();

  const paymentMethods = [
    { icon: Smartphone, name: "UPI", desc: "PhonePe, GPay, Paytm" },
    { icon: CreditCard, name: "AEPS", desc: "Aadhaar Enabled Payment" },
    { icon: Wallet, name: "Bank Transfer", desc: "NEFT/IMPS/RTGS" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-xl font-bold">Repayment</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30">
          <p className="text-sm text-gray-600 mb-2">Amount Due</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">₹7,500</h1>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order #1001</span>
              <span className="font-semibold">Soybean Package</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Due Date</span>
              <span className="font-semibold text-orange-600">Oct 15, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Days Remaining</span>
              <span className="font-semibold text-green-600">192 days</span>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <h3 className="font-bold text-gray-900">Select Payment Method</h3>
          {paymentMethods.map((method) => (
            <Card 
              key={method.name}
              className="p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => navigate("/mobile/success")}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.desc}</p>
                </div>
                <div className="text-primary">→</div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-5 bg-amber-50 border-amber-200">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Early Payment Benefits</h4>
              <p className="text-sm text-gray-700">
                Pay before the due date and get bonus credit limit for next season!
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-blue-50 border-blue-200">
          <h4 className="font-bold text-gray-900 mb-2">💡 Payment Tips</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Keep your UPI app ready</li>
            <li>• Ensure sufficient balance</li>
            <li>• Save payment receipt</li>
            <li>• Contact support for any issues</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
