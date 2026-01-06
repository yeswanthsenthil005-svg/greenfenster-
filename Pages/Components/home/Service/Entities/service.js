const Service = {
  name: "Service",
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Service name"
    },
    subtitle: {
      type: "string",
      description: "Service description"
    },
    price_range: {
      type: "string",
      description: "Price range for the service"
    },
    icon: {
      type: "string",
      description: "Icon name for the service"
    },
    images: {
      type: "array",
      items: {
        type: "string"
      },
      description: "Gallery images for the service"
    },
    detailed_description: {
      type: "string",
      description: "Detailed service description"
    }
  },
  required: ["title", "subtitle", "price_range"]
};

export default Service;
