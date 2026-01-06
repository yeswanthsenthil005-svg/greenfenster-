// Mock data entities for the application

const mockTestimonials = [
  { id: '1', client_name: 'Priya Sharma', review: 'Amazing work on our living room! The team was professional and delivered beyond expectations.', rating: 5, project_type: 'Living Room Design' },
  { id: '2', client_name: 'Rajesh Kumar', review: 'Excellent kitchen renovation. Modern design with great functionality.', rating: 5, project_type: 'Kitchen Renovation' },
  { id: '3', client_name: 'Anita Patel', review: 'Beautiful bedroom makeover. Love the color scheme they suggested!', rating: 4, project_type: 'Bedroom Design' },
]

const mockProjects = [
  { id: '1', title: 'Modern Kitchen', image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400', category: 'kitchen', description: 'Contemporary kitchen with sleek finishes' },
  { id: '2', title: 'Cozy Bedroom', image_url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400', category: 'bedroom', description: 'Warm and inviting bedroom design' },
  { id: '3', title: 'Elegant Living Room', image_url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400', category: 'living_room', description: 'Spacious living area with modern touches' },
  { id: '4', title: 'Home Office', image_url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400', category: 'office', description: 'Productive workspace design' },
  { id: '5', title: 'Grand Entrance Hall', image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400', category: 'hall', description: 'Stunning entrance hall with elegant lighting' },
  { id: '6', title: 'Luxury Bathroom', image_url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400', category: 'bathroom', description: 'Spa-like bathroom with premium fixtures' },
  { id: '7', title: 'Modern Hall Design', image_url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400', category: 'hall', description: 'Contemporary hallway with artistic touches' },
  { id: '8', title: 'Minimalist Bathroom', image_url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400', category: 'bathroom', description: 'Clean and modern bathroom design' },
]

const mockServices = [
  { id: '1', title: '3D Design Visualization', subtitle: 'Realistic 3D interior renders to visualize your space', price_range: '₹5,000 - ₹25,000', detailed_description: 'High-quality 3D renders of your space before construction begins', icon: '3d' },
  { id: '2', title: 'Modular Kitchen Design', subtitle: 'Custom modern kitchens tailored to your lifestyle', price_range: '₹80,000 - ₹3,50,000', detailed_description: 'Complete modular kitchen design and installation', icon: 'kitchen' },
  { id: '3', title: 'Premium Furniture Selection', subtitle: 'Curated furniture pieces that complement your style', price_range: '₹10,000 - ₹1,00,000', detailed_description: 'Expert furniture curation and placement services', icon: 'furniture' },
  { id: '4', title: 'False Ceiling Solutions', subtitle: 'Modern ceiling designs with integrated lighting', price_range: '₹25,000 - ₹1,50,000', detailed_description: 'Designer false ceilings with LED integration', icon: 'ceiling' },
  { id: '5', title: 'Color Consultation', subtitle: 'Professional color schemes for harmonious interiors', price_range: '₹5,000 - ₹15,000', detailed_description: 'Expert color palette selection for your space', icon: 'color' },
  { id: '6', title: 'Custom Wardrobe & Storage', subtitle: 'Bespoke storage solutions for organized living', price_range: '₹30,000 - ₹1,50,000', detailed_description: 'Custom-built wardrobes and storage units', icon: 'cupboard' },
  { id: '7', title: 'UPVC & Wood Fixing', subtitle: 'Durable UPVC & Wooden fixtures and installations', price_range: '₹20,000 - ₹1,20,000', detailed_description: 'Premium UPVC windows, doors and wood work', icon: 'upvc' },
]

const mockColorSchemes = [
  // Warm Colors
  { id: '1', name: 'Sunset Warmth', primary_color: '#E07A5F', secondary_color: '#F2CC8F', accent_color: '#81B29A', category: 'warm', description: 'Warm sunset-inspired palette', room_types: ['living_room', 'bedroom'] },
  { id: '2', name: 'Terracotta Dreams', primary_color: '#C1666B', secondary_color: '#D4B483', accent_color: '#E8D5B7', category: 'warm', description: 'Rich terracotta with golden accents', room_types: ['living_room', 'dining_room'] },
  { id: '3', name: 'Autumn Harvest', primary_color: '#BC6C25', secondary_color: '#DDA15E', accent_color: '#FEFAE0', category: 'warm', description: 'Cozy autumn-inspired warmth', room_types: ['kitchen', 'dining_room'] },
  { id: '4', name: 'Coral Sunset', primary_color: '#FF6B6B', secondary_color: '#FFA07A', accent_color: '#FFE4B5', category: 'warm', description: 'Vibrant coral with peachy tones', room_types: ['bedroom', 'living_room'] },
  { id: '5', name: 'Golden Hour', primary_color: '#D4A373', secondary_color: '#E9C46A', accent_color: '#F4E285', category: 'warm', description: 'Luxurious golden warmth', room_types: ['living_room', 'office'] },
  
  // Cool Colors
  { id: '6', name: 'Ocean Breeze', primary_color: '#3D5A80', secondary_color: '#98C1D9', accent_color: '#E0FBFC', category: 'cool', description: 'Cool ocean-inspired colors', room_types: ['bathroom', 'office'] },
  { id: '7', name: 'Arctic Frost', primary_color: '#457B9D', secondary_color: '#A8DADC', accent_color: '#F1FAEE', category: 'cool', description: 'Crisp and refreshing arctic tones', room_types: ['bathroom', 'bedroom'] },
  { id: '8', name: 'Midnight Blue', primary_color: '#1D3557', secondary_color: '#457B9D', accent_color: '#A8DADC', category: 'cool', description: 'Deep sophisticated blues', room_types: ['bedroom', 'office'] },
  { id: '9', name: 'Teal Serenity', primary_color: '#006D77', secondary_color: '#83C5BE', accent_color: '#EDF6F9', category: 'cool', description: 'Calming teal and aqua blend', room_types: ['bathroom', 'living_room'] },
  { id: '10', name: 'Lavender Mist', primary_color: '#7B68EE', secondary_color: '#B8B8FF', accent_color: '#E8E8FF', category: 'cool', description: 'Soft lavender tranquility', room_types: ['bedroom', 'bathroom'] },
  
  // Neutral Colors
  { id: '11', name: 'Modern Minimalist', primary_color: '#2D3436', secondary_color: '#636E72', accent_color: '#DFE6E9', category: 'neutral', description: 'Clean contemporary neutrals', room_types: ['office', 'living_room'] },
  { id: '12', name: 'Warm Gray', primary_color: '#5D5C61', secondary_color: '#938E94', accent_color: '#E8E8E8', category: 'neutral', description: 'Sophisticated warm grays', room_types: ['bedroom', 'office'] },
  { id: '13', name: 'Greige Elegance', primary_color: '#8D8468', secondary_color: '#B5B09A', accent_color: '#E5E1D8', category: 'neutral', description: 'Perfect gray-beige blend', room_types: ['living_room', 'bedroom'] },
  { id: '14', name: 'Charcoal & Cream', primary_color: '#36454F', secondary_color: '#708090', accent_color: '#FFFDD0', category: 'neutral', description: 'Classic charcoal contrast', room_types: ['kitchen', 'dining_room'] },
  { id: '15', name: 'Soft Taupe', primary_color: '#8B7355', secondary_color: '#C4A77D', accent_color: '#F5F5DC', category: 'neutral', description: 'Gentle taupe sophistication', room_types: ['bedroom', 'living_room'] },
  
  // Bold Colors
  { id: '16', name: 'Electric Vibes', primary_color: '#7400B8', secondary_color: '#5E60CE', accent_color: '#48BFE3', category: 'bold', description: 'Energetic purple to blue gradient', room_types: ['office', 'living_room'] },
  { id: '17', name: 'Tropical Paradise', primary_color: '#FF006E', secondary_color: '#FB5607', accent_color: '#FFBE0B', category: 'bold', description: 'Vibrant tropical explosion', room_types: ['kitchen', 'dining_room'] },
  { id: '18', name: 'Emerald Luxe', primary_color: '#065F46', secondary_color: '#10B981', accent_color: '#D1FAE5', category: 'bold', description: 'Rich emerald sophistication', room_types: ['living_room', 'dining_room'] },
  { id: '19', name: 'Royal Purple', primary_color: '#4C1D95', secondary_color: '#7C3AED', accent_color: '#DDD6FE', category: 'bold', description: 'Majestic purple royalty', room_types: ['bedroom', 'living_room'] },
  { id: '20', name: 'Cherry Pop', primary_color: '#DC2626', secondary_color: '#F87171', accent_color: '#FEE2E2', category: 'bold', description: 'Bold cherry red statement', room_types: ['kitchen', 'dining_room'] },
  
  // Earth Tones
  { id: '21', name: 'Earth Tones', primary_color: '#6B705C', secondary_color: '#A5A58D', accent_color: '#B7B7A4', category: 'earth_tones', description: 'Natural earthy palette', room_types: ['living_room', 'kitchen'] },
  { id: '22', name: 'Forest Floor', primary_color: '#344E41', secondary_color: '#588157', accent_color: '#A3B18A', category: 'earth_tones', description: 'Deep forest greens', room_types: ['bedroom', 'office'] },
  { id: '23', name: 'Desert Sand', primary_color: '#A0522D', secondary_color: '#D2B48C', accent_color: '#F5DEB3', category: 'earth_tones', description: 'Warm desert inspiration', room_types: ['living_room', 'bedroom'] },
  { id: '24', name: 'Olive Grove', primary_color: '#556B2F', secondary_color: '#8FBC8F', accent_color: '#F0FFF0', category: 'earth_tones', description: 'Mediterranean olive tones', room_types: ['kitchen', 'dining_room'] },
  { id: '25', name: 'Clay & Moss', primary_color: '#8B4513', secondary_color: '#9ACD32', accent_color: '#FAFAD2', category: 'earth_tones', description: 'Organic clay and moss blend', room_types: ['bathroom', 'bedroom'] },
  
  // Pastels
  { id: '26', name: 'Cotton Candy', primary_color: '#FFB6C1', secondary_color: '#E6E6FA', accent_color: '#F0FFFF', category: 'pastels', description: 'Sweet pink and lavender', room_types: ['bedroom', 'bathroom'] },
  { id: '27', name: 'Mint Fresh', primary_color: '#98FB98', secondary_color: '#E0FFFF', accent_color: '#FFFACD', category: 'pastels', description: 'Fresh minty pastels', room_types: ['bathroom', 'kitchen'] },
  { id: '28', name: 'Peach Blossom', primary_color: '#FFDAB9', secondary_color: '#FFE4E1', accent_color: '#FFF0F5', category: 'pastels', description: 'Delicate peach florals', room_types: ['bedroom', 'living_room'] },
  { id: '29', name: 'Sky Dreams', primary_color: '#87CEEB', secondary_color: '#B0E0E6', accent_color: '#F0F8FF', category: 'pastels', description: 'Soft sky blue dreams', room_types: ['bedroom', 'bathroom'] },
  { id: '30', name: 'Lemon Sorbet', primary_color: '#FFFACD', secondary_color: '#FAFAD2', accent_color: '#FFFFE0', category: 'pastels', description: 'Light lemony freshness', room_types: ['kitchen', 'dining_room'] },
  { id: '31', name: 'Lilac Garden', primary_color: '#DDA0DD', secondary_color: '#E6E6FA', accent_color: '#FFF0F5', category: 'pastels', description: 'Gentle lilac blooms', room_types: ['bedroom', 'bathroom'] },
  { id: '32', name: 'Seafoam Mist', primary_color: '#7FFFD4', secondary_color: '#AFEEEE', accent_color: '#F5FFFA', category: 'pastels', description: 'Soft seafoam tranquility', room_types: ['bathroom', 'bedroom'] },
]

export const Testimonial = {
  list: async () => mockTestimonials,
}

export const PortfolioProject = {
  list: async () => mockProjects,
}

export const Service = {
  list: async () => mockServices,
}

export const ColorScheme = {
  list: async () => mockColorSchemes,
}
