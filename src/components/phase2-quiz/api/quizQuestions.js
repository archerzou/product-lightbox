var quizQuestions = [
  {
    question:
      "How much does your current difficulty interfere with your normal usage? (This response helps us gauge the severity)",
    answers: [
      { type: "high", content: "High", letter: "A" },
      { type: "medium", content: "Medium", letter: "B" },
      { type: "low", content: "Low", letter: "C" },
    ],
  },
  {
    question: "What type of issues are you experiencing?",
    answers: [
      { type: "waterProof", content: "Water Proof", letter: "A" },
      { type: "battery", content: "Battery", letter: "B" },
      { type: "durability", content: "Durability", letter: "C" },
      { type: "noise", content: "Noise", letter: "D" },
      { type: "general", content: "General Concern", letter: "E" },
      { type: "hardware", content: "Hardware", letter: "F" },
      { type: "software", content: "Software", letter: "G" },
      { type: "portability", content: "Portability", letter: "H" },
      { type: "battery", content: "Battery", letter: "I" },
      { type: "disability", content: "Disability", letter: "J" },
      { type: "operability", content: "Operability", letter: "K" },
      { type: "security", content: "Security", letter: "L" },
      { type: "performance", content: "Performance", letter: "M" },
    ],
  },
  {
    question: "What's your product concerned?",
    answers: [
      { type: "mobile", content: "Mobile", letter: "A" },
      { type: "scanner", content: "Scanner", letter: "B" },
      { type: "printer", content: "Printer", letter: "C" },
      { type: "rfid", content: "RFID", letter: "D" },
      { type: "others", content: "Others", letter: "E" },
    ],
  },

  {
    question: "Do you prefer a special resource or product support?",
    answers: [
      { type: "special", content: "special", letter: "A" },
      { type: "productSupport", content: "Product Support", letter: "B" },
      { type: "generalHelp", content: "General Help", letter: "C" },
      { type: "events", content: "Events", letter: "D" },
    ],
  },
  {
    question:
      "What kind of scenario do you prefer to use our product?",
    answers: [
      { type: "logistics", content: "Logistics", letter: "A" },
      { type: "online", content: "Online Support", letter: "B" },
      { type: "hospital", content: "Hospital", letter: "C" },
      { type: "client", content: "Personal Use", letter: "D" },
      { type: "supermarket", content: "Supermarket", letter: "E" },
      { type: "warehouse", content: "Warehouse", letter: "F" },
    ],
  },
];

export default quizQuestions;
