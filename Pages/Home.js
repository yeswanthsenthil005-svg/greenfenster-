import { useState, useEffect } from "react";
import { createPageUrl } from "@/utils";
import { Testimonial, PortfolioProject } from "@/entities/all";
import { Search, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [testimonialsData, projectsData] = await Promise.all([
        Testimonial.list('-created_date', 3),
        PortfolioProject.list('-created_date', 4)
      ]);
      setTestimonials(testimonialsData);
      setFeaturedProjects(projectsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `${createPageUrl("Services")}?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Find Your Perfect Design</h2>
            <p className="text-amber-700">Search through our services to create your dream space</p>
          </div>
          <div className="max-w-md mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="pl-10 h-12 border-amber-200 focus:border-amber-400 bg-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="h-12 bg-amber-600 hover:bg-amber-700 px-6"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Featured Projects */}
        <FeaturedProjects projects={featuredProjects} isLoading={isLoading} />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} isLoading={isLoading} />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 mr-2" />
                <h3 className="text-2xl font-bold">Ready to Transform Your Space?</h3>
              </div>
              <p className="text-amber-100 mb-6 text-lg">
                Book a consultation with our design experts and bring your vision to life
              </p>
              <Button 
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 font-semibold h-12 px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}