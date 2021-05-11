import _ from "underscore";
const tags = {
  mobile: {
    category: "products",
    displayName: "Mobile",
    color: "green",
    show: true,
    TopTen: true,
  },
  scanner: {
    category: "products",
    displayName: "Scanner",
    color: "green",
    show: true,
    TopTen: true,
  },
  printer: {
    category: "products",
    displayName: "Printer",
    color: "tomato",
    show: true,
    TopTen: true,
  },
  rfid: {
    category: "products",
    displayName: "RFID",
    color: "brown",
    show: false,
  },
  others: {
    category: "products",
    displayName: "others",
    color: "",
    show: false,
  },
  // end of products category
  software: {
    category: "Type of issue",
    displayName: "Software",
    color: "#1971BD",
    show: true,
    TopTen: true,
  },

  hardware: {
    category: "Type of issue",
    displayName: "Hardware",
    color: "#254F73",
    show: true,
  },
  waterProof: {
    category: "Type of issue",
    displayName: "Water Proof",
    color: "#920110",
    show: true,
  },
  battery: {
    category: "Type of issue",
    displayName: "Battery",
    color: "#B6595B",
    show: true,
    TopTen: true,
  },
  disability: {
    category: "Type of issue",
    displayName: "Disability",
    color: "#1A79A8",
    show: true,
  },

  performance: {
    category: "Type of issue",
    displayName: "Performance",
    color: "#BB7E15",
    show: false,
  },
  durability: {
    category: "Type of issue",
    displayName: "Durability",
    color: "#B6595B",
    show: false,
  },
  operability: {
    category: "Type of issue",
    displayName: "Operability",
    color: "#B6595B",
    show: false,
  },

  noise: {
    category: "Type of issue",
    displayName: "Noise",
    color: "#7640A9",
    show: false,
  },
  security: {
    category: "Type of issue",
    displayName: "Security",
    color: "#BB7E15",
    show: false,
  },
  portability: {
    category: "Type of issue",
    displayName: "Portability",
    color: "#737373",
    show: false,
  },
  general: {
    category: "Type of issue",
    displayName: "General Concern",
    color: "#737373",
    show: false,
  },
  // end of type of issue category
  open: {
    category: "Requirement State",
    displayName: "Open",
    color: "rgba(218, 68, 68, 0.88)",
    show: true,
  },
  
  two3Days: {
    category: "Requirement State",
    displayName: " 2-3 days",
    color: "#2C8551",
    show: true,
  },
  less1Week: {
    category: "Requirement State",
    displayName: " < 1 week",
    color: "#2C8551",
    show: true,
  },
  less1Month: {
    category: "Requirement State",
    displayName: " < 1 month",
    color: "#2C8551",
    show: false,
  },
  more1month: {
    category: "Requirement State",
    displayName: " > 1 month",
    color: "#2C8551",
    show: false,
  },
  // end of wait-time category

  low: {
    category: "Severity",
    displayName: "Low",
    color: "#2C8551",
    show: true,
  },
  medium: {
    category: "Severity",
    displayName: "Medium",
    color: "#1E8843",
    show: false,
  },

  high: {
    category: "Severity",
    displayName: "High",
    color: "#1E8843",
    show: false,
  },

  //end of Severity

  client: {
    category: "Scenario",
    displayName: "Personal-Use",
    color: "#8660C3",
    show: true,
    TopTen: true,
  },
  online: {
    category: "Scenario",
    displayName: "Online",
    color: "#000000",
    show: true,
    TopTen: true,
  },

  hospital: {
    category: "Scenario",
    displayName: "Hospital",
    color: "rgb(251, 196, 32)",
    show: true,
    TopTen: true,
  },

  logistics: {
    category: "Scenario",
    displayName: "Logistics",
    color: "#2D6C42",
    show: false,
  },

  supermarket: {
    category: "Scenario",
    displayName: "Supermarket",
    color: "#067834",
    show: false,
  },
  warehouse: {
    category: "Scenario",
    displayName: "Warehouse",
    color: "#005F36",
    show: false,
  },
  //end of Scenario tag

  special: {
    category: "type of help",
    displayName: "Special",
    color: "#32457D",
    show: true,
    TopTen: true,
  },
  productSupport: {
    category: "type of help",
    displayName: "Product Support",
    color: "#2B7A8A",
    show: true,
    TopTen: true,
  },
  events: {
    category: "type of help",
    displayName: "Events",
    color: "#D47100",
    show: false,
  },
  generalHelp: {
    category: "type of help",
    displayName: "General Help",
    color: "#3A729E",
    show: true,
  },
  // end of type of help
};

export default {
  getAllTags: () => tags,
  getAllTagKeys: () => _.keys(tags),
  getCategories: () => _.uniq(_.map(_.values(tags), (obj) => obj.category)),
  getDisplayNameForTag: (tag) => tags[tag].displayName,
  getTopValue: (tag) => tags[tag].TopTen,
  getColorForTag: (tag) => tags[tag].color || "#aaaaaa",
};
