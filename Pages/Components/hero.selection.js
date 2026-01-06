import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Premium Interior Design
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-yellow-300">Dream Space</span>
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-lg">
              Professional interior design services that bring luxury, comfort, and style to every corner of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-amber-200 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-amber-200 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-amber-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
                alt="Beautiful interior design"
                className="w-full h-96 object-cover"
              />
            </Card>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}