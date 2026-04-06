import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Sprout } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/mobile/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <Sprout className="w-14 h-14 text-primary" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white">AgriFlow</h1>
        <p className="text-xl text-white/90">Buy Now, Pay at Harvest</p>
        <div className="flex justify-center pt-8">
          <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
