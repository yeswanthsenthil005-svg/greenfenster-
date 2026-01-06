import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Palette, Hammer, Camera, Wrench, Home, PaintBucket, Layers } from 'lucide-react'

const iconConfig = {
  '3d': { icon: Camera, bg: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  'kitchen': { icon: Hammer, bg: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  'furniture': { icon: Home, bg: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  'ceiling': { icon: Layers, bg: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  'color': { icon: Palette, bg: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  'cupboard': { icon: Home, bg: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  'upvc': { icon: PaintBucket, bg: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  'default': { icon: Wrench, bg: 'bg-gradient-to-br from-amber-400 to-orange-500' }
}

export default function ServiceCard({ service, onClick }) {
  const getIconConfig = (iconType) => {
    return iconConfig[iconType] || iconConfig['default']
  }

  const config = getIconConfig(service.icon)
  const IconComponent = config.icon

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-white border-amber-100"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${config.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
        </div>
        
        <h3 className="text-lg font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-amber-600 text-sm mb-4 line-clamp-2">
          {service.subtitle}
        </p>
        
        <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-semibold text-xs">
          {service.price_range}
        </Badge>
        
        <div className="mt-4 pt-4 border-t border-amber-100">
          <p className="text-xs text-amber-500">Click to view details</p>
        </div>
      </CardContent>
    </Card>
  )
}
