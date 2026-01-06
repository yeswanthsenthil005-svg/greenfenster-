const ColorScheme = {
  name: "ColorScheme",
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Color scheme name"
    },
    primary_color: {
      type: "string",
      description: "Primary color hex code"
    },
    secondary_color: {
      type: "string",
      description: "Secondary color hex code"
    },
    accent_color: {
      type: "string",
      description: "Accent color hex code"
    },
    category: {
      type: "string",
      enum: ["warm", "cool", "neutral", "bold", "earth_tones", "pastels"],
      description: "Color scheme category"
    },
    description: {
      type: "string",
      description: "Description of the color scheme"
    },
    room_types: {
      type: "array",
      items: {
        type: "string",
        enum: ["living_room", "bedroom", "kitchen", "bathroom", "office", "dining_room"]
      },
      description: "Recommended room types for this color scheme"
    }
  },
  required: ["name", "primary_color", "secondary_color", "category"]
};

export default ColorScheme;
