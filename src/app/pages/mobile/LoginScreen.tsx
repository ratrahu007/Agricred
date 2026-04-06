import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Sprout, Phone } from "lucide-react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      navigate("/mobile/otp");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Sprout className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-primary">AgriFlow</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Enter your mobile number to continue</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="pl-10 h-14 text-lg border-gray-300"
                maxLength={10}
              />
            </div>

            <Button 
              size="lg" 
              className="w-full h-14 text-lg"
              onClick={handleSendOtp}
              disabled={mobile.length !== 10}
            >
              Send OTP
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              🔒 Trusted by <span className="font-semibold text-primary">10,000+</span> farmers
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="px-6 pb-8">
        <img 
          src="https://images.unsplash.com/photo-1708975477074-71e2907b699f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRyYWN0b3IlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTUwNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Agriculture"
          className="rounded-2xl w-full h-48 object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
