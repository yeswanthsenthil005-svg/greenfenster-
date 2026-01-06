
import { Phone, Mail, Globe, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const handleWhatsApp = () => {
    const phoneNumber = "916379743525"; // Remove + and spaces
    const message = "Hi! I'm interested in your window and door solutions. Could you please provide more information?"; // Updated message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+916379743525', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:contact@greenfenster.com?subject=Window and Door Inquiry', '_self'); // Updated email and subject
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your interior design project 
            and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Company Logo */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-amber-600">GFI</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Green Fenster Industry</h2>
                  <p className="text-amber-100">Design Excellence - UPVC solutions</p>
                </div>
              </div>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Phone</p>
                      <p className="text-amber-700">+91 6379743525</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Email</p>
                      <p className="text-amber-700">contact@greenfenster.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Website</p>
                      <p className="text-amber-700">www.greenfenster.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Business Hours</p>
                      <p className="text-amber-700">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700 text-white h-14"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white h-14"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                onClick={handleEmail}
                className="bg-amber-600 hover:bg-amber-700 text-white h-14"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-200 relative overflow-hidden rounded-t-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7471386958436!2d78.16713631534924!3d11.221166953742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0d%3A0x52d9c7b1b1b9c1c3!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2">Our Location</h3>
                      <p className="text-amber-700">
                        123 Interior Design Street<br />
                        Namakkal, Tamil Nadu<br />
                        India - 637001
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Why Choose Green Fenster Industry?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <p className="text-amber-700">15+ years of design experience</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <p className="text-amber-700">500+ satisfied customers</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <p className="text-amber-700">Premium quality materials</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <p className="text-amber-700">On-time project completion</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <p className="text-amber-700">Competitive pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-none text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-amber-100 mb-4">
                  Contact us today for a free consultation and quote
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-amber-50 font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}