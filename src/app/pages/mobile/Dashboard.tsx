import { useNavigate } from "react-router";
import { Card } from "../../components/ui/card";
import { Sprout, ShoppingBag, FileText, Menu } from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Sprout className="w-8 h-8" />
            <span className="text-2xl font-bold">AgriFlow</span>
          </div>
          <button>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div>
          <p className="text-sm text-white/80">Good Morning</p>
          <h1 className="text-2xl font-bold mt-1">Ramesh Kumar</h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-6 -mt-4 space-y-4 pb-6">
        <Card 
          className="p-6 bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => navigate("/mobile/crop-selection")}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">Select Crop</h3>
              <p className="text-sm text-gray-600">Choose your crop and get credit</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
              <FileText className="w-7 h-7 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">Active Loan</h3>
              <p className="text-sm text-gray-600">₹7,500 due after harvest</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => navigate("/mobile/orders")}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">My Orders</h3>
              <p className="text-sm text-gray-600">View your order history</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Info Section */}
      <div className="px-6 py-6 bg-accent/30 mt-4">
        <h3 className="font-bold text-gray-900 mb-3">How AgriFlow Works</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>✅ Select your crop package</p>
          <p>✅ Get instant NBFC approval</p>
          <p>✅ Receive products at your doorstep</p>
          <p>✅ Pay after harvest via UPI/AEPS</p>
        </div>
      </div>
    </div>
  );
}
