import { useState, useEffect } from "react";
import { ColorScheme } from "@/entities/all";
import { ArrowLeft, Palette, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ColorSelection() {
  const navigate = useNavigate();
  const [colorSchemes, setColorSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadColorSchemes();
  }, []);

  const loadColorSchemes = async () => {
    try {
      const schemes = await ColorScheme.list('-created_date');
      setColorSchemes(schemes);
      setFilteredSchemes(schemes);
    } catch (error) {
      console.error('Error loading color schemes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ["all", "warm", "cool", "neutral", "bold", "earth_tones", "pastels"];

  const filterSchemes = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredSchemes(colorSchemes);
    } else {
      setFilteredSchemes(colorSchemes.filter(scheme => scheme.category === category));
    }
  };

  const categoryColors = {
    warm: "bg-red-100 text-red-800",
    cool: "bg-blue-100 text-blue-800",
    neutral: "bg-gray-100 text-gray-800",
    bold: "bg-purple-100 text-purple-800",
    earth_tones: "bg-amber-100 text-amber-800",
    pastels: "bg-pink-100 text-pink-800"
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "916379743525";
    const message = `Hi! I'm interested in the ${selectedScheme?.name} color scheme for my interior design project. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(createPageUrl("Services"))}
          className="mb-8 border-amber-200 text-amber-700 hover:bg-amber-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-amber-600" />
            <h1 className="text-4xl font-bold text-amber-900">Color Selection</h1>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Choose from our curated collection of color schemes designed to create the perfect ambiance for your space.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => filterSchemes(category)}
              className={`${
                activeFilter === category 
                  ? "bg-amber-600 text-white hover:bg-amber-700" 
                  : "border-amber-200 text-amber-700 hover:bg-amber-50"
              }`}
            >
              {category === "all" ? "All Colors" : category.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Button>
          ))}
        </div>

        {/* Color Schemes Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-32 bg-gray-200" />
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredSchemes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card 
                key={scheme.id} 
                className={`group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-white border-amber-100 ${
                  selectedScheme?.id === scheme.id ? 'ring-2 ring-amber-500' : ''
                }`}
                onClick={() => setSelectedScheme(scheme)}
              >
                {/* Color Palette Display */}
                <div className="h-32 flex">
                  <div 
                    className="flex-1 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: scheme.primary_color }}
                  />
                  <div 
                    className="flex-1 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: scheme.secondary_color }}
                  />
                  <div 
                    className="flex-1 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: scheme.accent_color }}
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                      {scheme.name}
                    </h3>
                    {selectedScheme?.id === scheme.id && (
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    )}
                  </div>
                  
                  <p className="text-amber-600 text-sm mb-4 line-clamp-2">
                    {scheme.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={categoryColors[scheme.category] || 'bg-gray-100 text-gray-800'}>
                      {scheme.category?.replace('_', ' ')}
                    </Badge>
                    {scheme.room_types && scheme.room_types.slice(0, 2).map((room) => (
                      <Badge key={room} variant="outline" className="text-xs">
                        {room.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-1 text-xs text-amber-600">
                    <span style={{ backgroundColor: scheme.primary_color }} className="w-4 h-4 rounded border" />
                    <span style={{ backgroundColor: scheme.secondary_color }} className="w-4 h-4 rounded border" />
                    <span style={{ backgroundColor: scheme.accent_color }} className="w-4 h-4 rounded border" />
                    <span className="ml-2">Click to select</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-amber-600 text-lg">
              {activeFilter === "all" 
                ? "No color schemes available yet." 
                : `No ${activeFilter.replace("_", " ")} color schemes found.`
              }
            </p>
          </div>
        )}

        {/* Selected Color Scheme Details */}
        {selectedScheme && (
          <Card className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Selected: {selectedScheme.name}</h3>
                  <p className="text-amber-100 mb-6 text-lg">
                    {selectedScheme.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedScheme.room_types?.map((room) => (
                      <Badge key={room} variant="secondary" className="bg-white/20 text-white">
                        Perfect for {room.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-2 mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl shadow-lg"
                      style={{ backgroundColor: selectedScheme.primary_color }}
                    />
                    <div 
                      className="w-16 h-16 rounded-xl shadow-lg"
                      style={{ backgroundColor: selectedScheme.secondary_color }}
                    />
                    <div 
                      className="w-16 h-16 rounded-xl shadow-lg"
                      style={{ backgroundColor: selectedScheme.accent_color }}
                    />
                  </div>
                  <Button 
                    onClick={handleWhatsAppContact}
                    size="lg"
                    className="bg-white text-amber-600 hover:bg-amber-50 font-semibold"
                  >
                    Discuss This Color Scheme
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}