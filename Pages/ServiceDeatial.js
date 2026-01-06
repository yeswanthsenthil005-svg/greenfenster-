import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Service } from "@/entities/all";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceDetail() {
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    
    if (!serviceId) {
      navigate(createPageUrl("Services"));
      return;
    }

    const loadService = async (serviceId) => {
      try {
        const services = await Service.list();
        const foundService = services.find(s => s.id === serviceId);
        if (foundService) {
          setService(foundService);
        } else {
          navigate(createPageUrl("Services"));
        }
      } catch (error) {
        console.error('Error loading service:', error);
        navigate(createPageUrl("Services"));
      } finally {
        setIsLoading(false);
      }
    };

    loadService(serviceId);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4 animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4" />
          <div className="h-64 bg-gray-200 rounded mb-6" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(createPageUrl("Services"))}
          className="mb-8 border-amber-200 text-amber-700 hover:bg-amber-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        {/* Service Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">{service.title}</h1>
          <p className="text-xl text-amber-700 mb-4">{service.subtitle}</p>
          <Badge size="lg" className="bg-amber-600 text-white px-4 py-2 text-lg">
            {service.price_range}
          </Badge>
        </div>

        {/* Service Description */}
        {service.detailed_description && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Service Details</h2>
              <p className="text-gray-700 leading-relaxed">{service.detailed_description}</p>
            </CardContent>
          </Card>
        )}

        {/* Image Gallery */}
        {service.images && service.images.length > 0 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={image}
                      alt={`${service.title} example ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in This Service?</h3>
            <p className="text-amber-100 mb-6 text-lg">
              Get in touch with our design experts to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 font-semibold"
                onClick={() => navigate(createPageUrl("Contact"))}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}