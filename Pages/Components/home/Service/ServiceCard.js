
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Hammer, Camera, Wrench, Home, PaintBucket } from "lucide-react";

const iconMap = {
  '3d': Camera,
  'kitchen': Hammer,
  'furniture': Home,
  'ceiling': Wrench,
  'color': Palette,
  'cupboard': Home,
  'upvc': PaintBucket
};

export default function ServiceCard({ service, onClick }) {
  const getServiceIcon = (title) => {
    const key = title?.toLowerCase();
    if (key?.includes('3d')) return iconMap['3d'];
    if (key?.includes('kitchen')) return iconMap['kitchen'];
    if (key?.includes('furniture')) return iconMap['furniture'];
    if (key?.includes('ceiling')) return iconMap['ceiling'];
    if (key?.includes('color')) return iconMap['color'];
    if (key?.includes('cupboard')) return iconMap['cupboard'];
    if (key?.includes('upvc') || key?.includes('wood')) return iconMap['upvc'];
    return Wrench;
  };

  const IconComponent = getServiceIcon(service.title);

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-white border-amber-100"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
        </div>
        
        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-amber-600 mb-4 line-clamp-2">
          {service.subtitle}
        </p>
        
        <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-semibold">
          {service.price_range}
        </Badge>
        
        <div className="mt-4 pt-4 border-t border-amber-100">
          <div className="flex items-center text-sm text-amber-600">
            <span>Click to view details</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
