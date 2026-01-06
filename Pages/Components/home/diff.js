
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedProjects({ projects, isLoading }) {
  const categoryColors = {
    kitchen: "bg-red-100 text-red-800",
    bedroom: "bg-blue-100 text-blue-800", 
    living_room: "bg-green-100 text-green-800",
    hall: "bg-purple-100 text-purple-800",
    bathroom: "bg-yellow-100 text-yellow-800",
    office: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Featured Projects</h2>
          <p className="text-amber-700">Our latest and most impressive interior design work</p>
        </div>
        <Link 
          to={createPageUrl("Portfolio")}
          className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-16" />
              </CardContent>
            </Card>
          ))
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className={`absolute top-3 left-3 ${categoryColors[project.category] || 'bg-gray-100 text-gray-800'}`}>
                  {project.category?.replace('_', ' ')}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-amber-900 mb-1">{project.title}</h3>
                {project.description && (
                  <p className="text-sm text-amber-600 line-clamp-2">{project.description}</p>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-4 text-center py-12">
            <p className="text-amber-600">No featured projects available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}