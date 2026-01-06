import { useState, useEffect } from "react";
import { PortfolioProject } from "@/entities/all";
import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const projectsData = await PortfolioProject.list('-created_date');
      setProjects(projectsData);
      setFilteredProjects(projectsData);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ["all", "kitchen", "bedroom", "living_room", "hall", "bathroom", "office"];

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const categoryColors = {
    kitchen: "bg-red-100 text-red-800",
    bedroom: "bg-blue-100 text-blue-800",
    living_room: "bg-green-100 text-green-800",
    hall: "bg-purple-100 text-purple-800",
    bathroom: "bg-yellow-100 text-yellow-800",
    office: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Explore our collection of beautifully designed spaces that showcase our expertise 
            and commitment to creating exceptional interiors.
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => filterProjects(category)}
                className={`${
                  activeFilter === category 
                    ? "bg-amber-600 text-white hover:bg-amber-700" 
                    : "border-amber-200 text-amber-700 hover:bg-amber-50"
                }`}
              >
                {category === "all" ? "All Projects" : category.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-amber-600 text-white" : "border-amber-200 text-amber-700"}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-amber-600 text-white" : "border-amber-200 text-amber-700"}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"} gap-6`}>
            {Array(6).fill(0).map((_, i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200" />
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"} gap-6`}>
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-amber-100 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div className={`relative ${viewMode === "list" ? "w-80" : ""}`}>
                  <img 
                    src={project.image_url}
                    alt={project.title}
                    className={`${viewMode === "list" ? "w-full h-48" : "w-full h-64"} object-cover group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className={`absolute top-3 left-3 ${categoryColors[project.category] || 'bg-gray-100 text-gray-800'}`}>
                    {project.category?.replace('_', ' ')}
                  </Badge>
                </div>
                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                  <h3 className={`font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors ${
                    viewMode === "list" ? "text-xl" : "text-lg"
                  }`}>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className={`text-amber-600 ${viewMode === "list" ? "text-base" : "text-sm"}`}>
                      {project.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-amber-600 text-lg">
              {activeFilter === "all" 
                ? "No projects available yet." 
                : `No ${activeFilter.replace("_", " ")} projects found.`
              }
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Inspired by Our Work?</h3>
              <p className="text-amber-100 mb-6 text-lg">
                Let us create a stunning space for you too. Contact our design team today!
              </p>
              <Button 
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 font-semibold"
              >
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}