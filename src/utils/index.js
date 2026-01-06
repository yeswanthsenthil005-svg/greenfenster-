export function createPageUrl(pageName) {
  const routes = {
    Home: '/',
    Services: '/services',
    ServiceDetail: '/service-detail',
    Portfolio: '/portfolio',
    Contact: '/contact',
    ColorSelection: '/color-selection',
  }
  return routes[pageName] || '/'
}

export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
