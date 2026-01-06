
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialsSection({ testimonials, isLoading }) {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">What Our Clients Say</h2>
        <p className="text-amber-700 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients about their experience with SMA Interior
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => (
            <Card key={i} className="border-amber-200">
              <CardContent className="p-6">
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-16 mb-4" />
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">{testimonial.client_name}</p>
                    {testimonial.project_type && (
                      <p className="text-sm text-amber-600">{testimonial.project_type}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-amber-600">No testimonials available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}