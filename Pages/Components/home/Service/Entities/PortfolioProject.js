const PortfolioProject = {
  name: "PortfolioProject",
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Project title"
    },
    image_url: {
      type: "string",
      description: "Main project image"
    },
    category: {
      type: "string",
      enum: ["kitchen", "bedroom", "living_room", "hall", "bathroom", "office"],
      description: "Project category"
    },
    description: {
      type: "string",
      description: "Project description"
    }
  },
  required: ["title", "image_url", "category"]
};

export default PortfolioProject;
