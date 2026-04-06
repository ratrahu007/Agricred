import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CheckCircle2, Download, Share2 } from "lucide-react";

export function SuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/20 flex flex-col">
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-20 h-20 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Payment Successful! 🎉</h1>
        <p className="text-gray-600 text-center mb-8 max-w-md">
          Thank you, Ramesh Kumar! Your payment has been received successfully.
        </p>

        <Card className="w-full max-w-md p-6 bg-white shadow-lg space-y-4 mb-8">
          <div className="text-center pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
            <p className="text-4xl font-bold text-green-600">₹7,500</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID</span>
              <span className="font-semibold">TXN123456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-semibold">UPI</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time</span>
              <span className="font-semibold">Apr 6, 2026, 10:30 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number</span>
              <span className="font-semibold">#1001</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button variant="outline" className="flex-1 h-12" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 h-12" size="lg">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>
        </Card>

        <Card className="w-full max-w-md p-5 bg-gradient-to-r from-primary to-primary/80 text-white mb-6">
          <h4 className="font-bold mb-2">🎁 Congratulations!</h4>
          <p className="text-sm text-white/90">
            Your credit limit has been increased to <span className="font-bold">₹15,000</span> for the next season!
          </p>
        </Card>

        <Button 
          size="lg" 
          className="w-full max-w-md h-14 text-lg"
          onClick={() => navigate("/mobile/dashboard")}
        >
          Go to Dashboard
        </Button>

        <p className="text-sm text-gray-600 text-center mt-4 max-w-md">
          A receipt has been sent to your registered mobile number
        </p>
      </div>
    </div>
  );
}
