import { useNavigate } from "react-router";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Wheat, Sprout } from "lucide-react";

export function CropSelection() {
  const navigate = useNavigate();

  const crops = [
    { name: "Wheat", icon: Wheat, season: "Rabi Season", color: "bg-amber-100", iconColor: "text-amber-600" },
    { name: "Soybean", icon: Sprout, season: "Kharif Season", color: "bg-green-100", iconColor: "text-green-600" },
    { name: "Rice", icon: Sprout, season: "Kharif Season", color: "bg-emerald-100", iconColor: "text-emerald-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-xl font-bold">Select Crop</h2>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        <p className="text-gray-600">Choose the crop you want to grow this season</p>

        {crops.map((crop) => (
          <Card 
            key={crop.name}
            className="p-6 bg-white shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
            onClick={() => navigate("/mobile/package", { state: { crop: crop.name } })}
          >
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full ${crop.color} flex items-center justify-center`}>
                <crop.icon className={`w-8 h-8 ${crop.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{crop.name}</h3>
                <p className="text-sm text-gray-600">{crop.season}</p>
              </div>
              <div className="text-primary">→</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Image */}
      <div className="px-6 py-4">
        <img 
          src="https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwc2VlZHMlMjB3aGVhdHxlbnwxfHx8fDE3NzU1MDQ1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Crops"
          className="rounded-2xl w-full h-48 object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
