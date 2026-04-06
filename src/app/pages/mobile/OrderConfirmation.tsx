import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CheckCircle2, Package, MapPin, Calendar, Phone } from "lucide-react";

export function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-primary text-white px-6 py-8 text-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-white/90">Your package is being prepared</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        <Card className="p-6 bg-white shadow-md">
          <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Soybean Starter Package</p>
                <p className="text-sm text-gray-600">For 1 acre land</p>
              </div>
              <p className="font-bold">₹7,500</p>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Delivery Address</p>
                <p className="text-sm text-gray-600">Village: Satara, Dist: Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
              <Calendar className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Expected Delivery</p>
                <p className="text-sm text-gray-600">Within 2 working days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Contact Number</p>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-amber-50 border-amber-200">
          <h4 className="font-bold text-gray-900 mb-2">📅 Repayment Details</h4>
          <p className="text-sm text-gray-700">Amount Due: <span className="font-bold">₹7,500</span></p>
          <p className="text-sm text-gray-700">Due Date: <span className="font-bold">Oct 15, 2026</span></p>
          <p className="text-xs text-gray-600 mt-2">Pay after harvest using UPI or AEPS</p>
        </Card>

        <Card className="p-5 bg-blue-50 border-blue-200">
          <h4 className="font-bold text-gray-900 mb-2">💡 What's Next?</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Dealer will contact you within 24 hours</li>
            <li>✓ Products will be delivered to your address</li>
            <li>✓ Start farming with quality inputs</li>
            <li>✓ Repay after successful harvest</li>
          </ul>
        </Card>

        <div className="flex gap-3">
          <Button 
            size="lg" 
            variant="outline"
            className="flex-1 h-14"
            onClick={() => navigate("/mobile/orders")}
          >
            View Orders
          </Button>
          <Button 
            size="lg" 
            className="flex-1 h-14"
            onClick={() => navigate("/mobile/dashboard")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
