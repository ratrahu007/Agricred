import { useNavigate } from "react-router";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Package, CheckCircle2, Calendar } from "lucide-react";

export function MyOrders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-xl font-bold">My Orders</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        <Card className="p-6 bg-white shadow-md">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Soybean Starter Package</h3>
                  <p className="text-sm text-gray-600">Order #1001</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  Delivered
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package className="w-4 h-4" />
                  <span>For 1 acre land</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Delivered on Apr 3, 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Package Amount</span>
              <span className="font-bold">₹7,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Status</span>
              <span className="font-semibold text-orange-600">Pending</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Due Date</span>
              <span className="font-semibold text-gray-900">Oct 15, 2026</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full mt-4 h-12"
            onClick={() => navigate("/mobile/repayment")}
          >
            Pay Now
          </Button>
        </Card>

        <Card className="p-5 bg-blue-50 border-blue-200">
          <h4 className="font-bold text-gray-900 mb-2">📝 Payment Reminder</h4>
          <p className="text-sm text-gray-700">
            Your payment of ₹7,500 is due after harvest. We'll send you a reminder closer to the due date.
          </p>
        </Card>
      </div>
    </div>
  );
}
