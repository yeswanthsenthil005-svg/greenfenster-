import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Service } from "@/entities/all";
import { Search, Palette } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/services/ServiceCard";

export default function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
    
    // Check for search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, []);

  const loadServices = async () => {
    try {
      const servicesData = await Service.list('-created_date');
      setServices(servicesData);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredServices = services.filter(service =>
    service.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (serviceId) => {
    navigate(`${createPageUrl("ServiceDetail")}?id=${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-3">Our Services</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design services 
            tailored to transform your space into something extraordinary.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our services..."
              className="pl-10 h-11 border-gray-200 focus:border-amber-400 bg-white rounded-full"
            />
          </div>
        </div>

        {/* Special Color Selection Banner */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white overflow-hidden">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Explore Color Options</h3>
                  <p className="text-purple-100 text-sm">
                    Browse our extensive collection of curated color schemes for your interior design
                  </p>
                </div>
              </div>
              <Button 
                onClick={() => navigate(createPageUrl("ColorSelection"))}
                className="bg-white/20 text-white hover:bg-white/30 font-semibold whitespace-nowrap border border-white/30"
              >
                <Palette className="w-4 h-4 mr-2" />
                View Color Schemes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(9).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse">
                <Card className="h-56">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-2xl mb-4" />
                    <div className="h-4 bg-gray-200 rounded mb-3" />
                    <div className="h-3 bg-gray-200 rounded mb-2" />
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                  </CardContent>
                </Card>
              </div>
            ))
          ) : filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceClick(service.id)}
              />
            ))
          ) : services.length === 0 ? (
            <div className="col-span-3 text-center py-16">
              <p className="text-amber-600 text-lg">No services available yet.</p>
            </div>
          ) : (
            <div className="col-span-3 text-center py-16">
              <p className="text-amber-600 text-lg">
                No services found matching "{searchQuery}". Try a different search term.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Don't See What You Need?</h3>
              <p className="text-amber-100 mb-5 text-sm">
                We offer custom design solutions tailored to your specific requirements.
              </p>
              <Button 
                className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
                onClick={() => navigate(createPageUrl("Contact"))}
              >
                Contact Us for Custom Solutions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}