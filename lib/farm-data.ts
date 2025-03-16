// This file contains mock data for plant diseases and common farming questions

export interface PlantDisease {
    id: string
    name: string
    crops: string[]
    symptoms: string[]
    images: string[]
    description: string
    severity: "low" | "medium" | "high"
    confidence: number
    treatment: string[]
    preventionTips: string[]
  }
  
  export interface FarmingQuestion {
    id: string
    question: string
    category: string
    answer: string
    relatedQuestions: string[]
  }
  
  // Mock database of common plant diseases
  export const plantDiseases: PlantDisease[] = [
    {
      id: "disease-001",
      name: "Tomato Late Blight",
      crops: ["Tomato", "Potato"],
      symptoms: ["Dark brown spots on leaves", "White fuzzy growth on undersides", "Rotting fruit"],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Late blight is a potentially serious disease of potato and tomato, caused by the fungus Phytophthora infestans. It spreads quickly in wet weather with temperatures between 10-20°C.",
      severity: "high",
      confidence: 92,
      treatment: [
        "Remove and destroy all infected plant parts",
        "Apply copper-based fungicides as a preventative measure",
        "Ensure good air circulation around plants",
        "Water at the base of plants to keep foliage dry",
      ],
      preventionTips: [
        "Plant resistant varieties",
        "Rotate crops annually",
        "Avoid overhead irrigation",
        "Space plants properly for good airflow",
      ],
    },
    {
      id: "disease-002",
      name: "Powdery Mildew",
      crops: ["Cucumber", "Squash", "Melon", "Zucchini"],
      symptoms: ["White powdery spots on leaves and stems", "Yellowing leaves", "Stunted growth"],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to grayish powdery growth on leaf surfaces, stems, and sometimes fruit.",
      severity: "medium",
      confidence: 88,
      treatment: [
        "Apply sulfur-based fungicide",
        "Use neem oil spray weekly",
        "Remove severely infected leaves",
        "Apply potassium bicarbonate solution",
      ],
      preventionTips: [
        "Plant resistant varieties",
        "Provide good air circulation",
        "Avoid overhead watering",
        "Apply preventative fungicides during humid weather",
      ],
    },
    {
      id: "disease-003",
      name: "Bacterial Leaf Spot",
      crops: ["Pepper", "Tomato", "Lettuce"],
      symptoms: ["Dark, water-soaked spots on leaves", "Yellow halos around spots", "Spots may merge forming blotches"],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Bacterial leaf spot is caused by various species of bacteria. It thrives in warm, wet conditions and can spread rapidly during rainy periods.",
      severity: "medium",
      confidence: 85,
      treatment: [
        "Remove infected plant parts",
        "Apply copper-based bactericide",
        "Avoid working with plants when wet",
        "Improve air circulation",
      ],
      preventionTips: [
        "Use disease-free seeds and transplants",
        "Practice crop rotation",
        "Avoid overhead irrigation",
        "Sanitize garden tools regularly",
      ],
    },
    {
      id: "disease-004",
      name: "Downy Mildew",
      crops: ["Grape", "Cucumber", "Basil", "Spinach"],
      symptoms: [
        "Yellow or pale green spots on leaf surfaces",
        "Fuzzy gray-purple growth on undersides",
        "Leaf curling and browning",
      ],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Downy mildew is caused by fungus-like organisms and thrives in cool, moist conditions. It can spread rapidly and cause significant crop damage if not controlled.",
      severity: "high",
      confidence: 90,
      treatment: [
        "Apply fungicides containing mancozeb or chlorothalonil",
        "Remove infected leaves immediately",
        "Improve air circulation",
        "Reduce humidity around plants",
      ],
      preventionTips: [
        "Plant resistant varieties",
        "Space plants properly",
        "Water at the base in the morning",
        "Apply preventative fungicides during high-risk periods",
      ],
    },
    {
      id: "disease-005",
      name: "Aphid Infestation",
      crops: ["Most vegetables and fruits"],
      symptoms: [
        "Clusters of small insects on stems and leaves",
        "Curled or distorted leaves",
        "Sticky honeydew on leaves",
        "Sooty mold growth",
      ],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Aphids are small sap-sucking insects that can quickly colonize plants. They weaken plants by extracting sap and can transmit viral diseases.",
      severity: "medium",
      confidence: 95,
      treatment: [
        "Spray with strong water jet to dislodge aphids",
        "Apply insecticidal soap or neem oil",
        "Introduce natural predators like ladybugs",
        "For severe cases, use organic or synthetic insecticides",
      ],
      preventionTips: [
        "Monitor plants regularly for early detection",
        "Encourage beneficial insects",
        "Use reflective mulch to repel aphids",
        "Avoid excessive nitrogen fertilization",
      ],
    },
    {
      id: "disease-006",
      name: "Root Rot",
      crops: ["Most plants"],
      symptoms: ["Wilting despite adequate soil moisture", "Yellowing leaves", "Stunted growth", "Brown, mushy roots"],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Root rot is caused by various fungi that thrive in wet, poorly drained soils. It attacks the roots, preventing the plant from absorbing water and nutrients.",
      severity: "high",
      confidence: 82,
      treatment: [
        "Improve drainage immediately",
        "Remove affected plants to prevent spread",
        "Apply fungicide drenches for valuable plants",
        "Reduce watering frequency",
      ],
      preventionTips: [
        "Ensure good soil drainage",
        "Avoid overwatering",
        "Use raised beds in heavy soils",
        "Add organic matter to improve soil structure",
      ],
    },
    {
      id: "disease-007",
      name: "Corn Smut",
      crops: ["Corn", "Maize"],
      symptoms: ["Grayish-white galls on ears, tassels, or stems", "Galls turn black and powdery when mature"],
      images: ["/placeholder.svg?height=200&width=200"],
      description:
        "Corn smut is caused by the fungus Ustilago maydis. While considered a disease, the galls are edible and known as 'huitlacoche' in Mexican cuisine, where they're considered a delicacy.",
      severity: "medium",
      confidence: 89,
      treatment: [
        "Remove and destroy galls before they rupture",
        "No effective chemical controls for home gardens",
        "Consider harvesting as a delicacy if desired",
      ],
      preventionTips: [
        "Plant resistant varieties",
        "Practice crop rotation",
        "Avoid injuring plants during cultivation",
        "Maintain balanced soil fertility",
      ],
    },
  ]
  
  // Mock database of common farming questions and answers
  export const farmingQuestions: FarmingQuestion[] = [
    {
      id: "question-001",
      question: "How do I deal with aphids on my tomato plants?",
      category: "Pest Management",
      answer:
        "For aphids on tomato plants, I recommend a few organic solutions:\n\n1. Spray plants with a mixture of water and mild soap (2 tablespoons of soap per gallon of water)\n\n2. Introduce natural predators like ladybugs\n\n3. Apply neem oil spray every 7-14 days\n\n4. For severe infestations, consider an organic insecticidal soap",
      relatedQuestions: ["question-002", "question-007"],
    },
    {
      id: "question-002",
      question: "What's the best way to water my vegetable garden?",
      category: "Irrigation",
      answer:
        "For optimal irrigation:\n\n1. Water deeply but infrequently to encourage deep root growth\n\n2. Water early in the morning to reduce evaporation\n\n3. Consider drip irrigation to deliver water directly to the roots\n\n4. Most vegetables need about 1-1.5 inches of water per week\n\n5. Adjust based on soil type - sandy soils need more frequent watering than clay soils",
      relatedQuestions: ["question-003", "question-008"],
    },
    {
      id: "question-003",
      question: "When should I fertilize my crops?",
      category: "Soil & Fertilization",
      answer:
        "For fertilizing crops:\n\n1. Test your soil before applying fertilizers\n\n2. Use organic compost as a base fertilizer\n\n3. Apply nitrogen-rich fertilizers for leafy growth\n\n4. Use phosphorus-rich fertilizers for root development and flowering\n\n5. Apply potassium-rich fertilizers for overall plant health and disease resistance\n\n6. Time applications based on crop growth stage - many crops need more nutrients during their growth phase and flowering/fruiting stages",
      relatedQuestions: ["question-004", "question-009"],
    },
    {
      id: "question-004",
      question: "How do I improve my soil quality?",
      category: "Soil & Fertilization",
      answer:
        "To improve soil quality:\n\n1. Add organic matter like compost, aged manure, or leaf mold\n\n2. Use cover crops during off-seasons to add nutrients and prevent erosion\n\n3. Practice crop rotation to prevent nutrient depletion\n\n4. Consider adding specific amendments based on soil tests (lime for acidic soil, sulfur for alkaline soil)\n\n5. Minimize tilling to preserve soil structure and beneficial organisms\n\n6. Use mulch to conserve moisture, suppress weeds, and add organic matter as it breaks down",
      relatedQuestions: ["question-003", "question-010"],
    },
    {
      id: "question-005",
      question: "When is the best time to plant tomatoes?",
      category: "Planting & Harvesting",
      answer:
        "The best time to plant tomatoes depends on your climate:\n\n1. Plant after all danger of frost has passed\n\n2. Soil temperature should be at least 60°F (16°C)\n\n3. In most temperate regions, this is 1-2 weeks after the last spring frost\n\n4. In warm climates, you can plant in early spring and again in late summer for a fall crop\n\n5. Start seeds indoors 6-8 weeks before your planned transplant date\n\n6. Harden off seedlings by gradually exposing them to outdoor conditions for 7-10 days before transplanting",
      relatedQuestions: ["question-006", "question-011"],
    },
    {
      id: "question-006",
      question: "How do I control weeds organically?",
      category: "Pest Management",
      answer:
        "For organic weed control:\n\n1. Use mulch (straw, wood chips, or compost) to suppress weed growth\n\n2. Hand pull or hoe weeds when they're small\n\n3. Use flame weeding for paths and non-planted areas\n\n4. Try vinegar-based herbicides for spot treatment\n\n5. Use landscape fabric in pathways\n\n6. Practice dense planting to shade out weeds\n\n7. Use cover crops during fallow periods\n\n8. Consider sheet mulching (lasagna gardening) to convert weedy areas to garden beds",
      relatedQuestions: ["question-001", "question-012"],
    },
    {
      id: "question-007",
      question: "How do I prevent tomato blight?",
      category: "Disease Management",
      answer:
        "To prevent tomato blight:\n\n1. Plant resistant varieties when available\n\n2. Space plants properly for good air circulation\n\n3. Use mulch to prevent soil splash onto leaves\n\n4. Water at the base of plants, avoiding wet foliage\n\n5. Remove and destroy lower leaves as plants grow\n\n6. Apply preventative fungicides like copper or Bacillus subtilis during humid weather\n\n7. Practice crop rotation - don't plant tomatoes, potatoes, or related crops in the same spot for 3-4 years\n\n8. Remove and destroy all plant debris at the end of the season",
      relatedQuestions: ["question-001", "question-013"],
    },
    {
      id: "question-008",
      question: "What's causing my cucumber leaves to turn yellow?",
      category: "Disease Management",
      answer:
        "Yellowing cucumber leaves can be caused by several factors:\n\n1. Nutrient deficiencies - especially nitrogen or magnesium\n\n2. Overwatering or poor drainage leading to root problems\n\n3. Cucumber mosaic virus - look for mottled yellow patterns\n\n4. Downy mildew - check for angular yellow spots with fuzzy growth underneath\n\n5. Spider mites - look for fine webbing and stippling on leaves\n\n6. Natural aging of older leaves\n\nTo address the issue:\n\n1. Test soil and correct deficiencies\n\n2. Improve drainage if needed\n\n3. Remove severely affected leaves\n\n4. Apply appropriate treatments based on the specific cause\n\n5. Ensure consistent watering - about 1-2 inches per week",
      relatedQuestions: ["question-002", "question-014"],
    },
    {
      id: "question-009",
      question: "How do I start a compost pile?",
      category: "Soil & Fertilization",
      answer:
        "To start a compost pile:\n\n1. Choose a location - partial shade is ideal\n\n2. Start with a layer of brown materials (dried leaves, straw, cardboard)\n\n3. Add a layer of green materials (kitchen scraps, fresh grass clippings)\n\n4. Add a thin layer of soil or finished compost to introduce microorganisms\n\n5. Continue alternating brown and green layers\n\n6. Keep the pile as moist as a wrung-out sponge\n\n7. Turn the pile every few weeks to aerate it\n\n8. The pile should heat up as decomposition occurs\n\n9. Compost is ready when it's dark, crumbly, and earthy-smelling (usually 3-12 months)\n\nMaintain a ratio of roughly 3 parts brown to 1 part green materials for optimal decomposition.",
      relatedQuestions: ["question-003", "question-004"],
    },
    {
      id: "question-010",
      question: "What crops grow well in partial shade?",
      category: "Planting & Harvesting",
      answer:
        "Crops that grow well in partial shade (3-6 hours of direct sun):\n\n1. Leafy greens - lettuce, spinach, kale, arugula, Swiss chard\n\n2. Herbs - mint, parsley, cilantro, chives, oregano\n\n3. Root vegetables - radishes, beets, carrots, turnips\n\n4. Brassicas - broccoli, cauliflower, cabbage\n\n5. Peas and beans (though they'll produce less than in full sun)\n\n6. Fruits - currants, gooseberries, raspberries, blackberries\n\nThese plants will grow more slowly and produce less than they would in full sun, but can still provide a good harvest. Avoid planting tomatoes, peppers, eggplants, melons, and squash in shade as they need full sun to produce well.",
      relatedQuestions: ["question-005", "question-015"],
    },
    {
      id: "question-011",
      question: "How do I save seeds from my garden?",
      category: "Planting & Harvesting",
      answer:
        "To save seeds from your garden:\n\n1. Choose open-pollinated or heirloom varieties, not hybrids\n\n2. For dry seeds (beans, peas, corn, lettuce):\n   - Allow to fully mature and dry on the plant\n   - Harvest when pods or seed heads are completely dry\n   - Remove seeds and dry further indoors if needed\n\n3. For wet seeds (tomatoes, cucumbers, melons):\n   - Choose fully ripe fruits\n   - Scoop out seeds with pulp\n   - Ferment in water for 2-3 days to remove gel coating\n   - Rinse and dry thoroughly\n\n4. Store dried seeds in paper envelopes or glass jars\n\n5. Keep in a cool, dry, dark place\n\n6. Label with variety name and date\n\n7. Most seeds remain viable for 2-5 years if stored properly",
      relatedQuestions: ["question-005", "question-010"],
    },
    {
      id: "question-012",
      question: "How do I deal with tomato hornworms?",
      category: "Pest Management",
      answer:
        "To manage tomato hornworms:\n\n1. Handpick - Check plants regularly and remove hornworms by hand (they're well-camouflaged, so look carefully)\n\n2. Look for their dark droppings on leaves and the ground\n\n3. If you see hornworms with white rice-like protrusions, leave them be - these are parasitic wasp cocoons that will help control the population\n\n4. Apply Bacillus thuringiensis (Bt) spray, which is organic and specifically targets caterpillars\n\n5. Encourage natural predators like birds, predatory wasps, and ladybugs\n\n6. Till soil in fall and spring to destroy overwintering pupae\n\n7. Practice crop rotation\n\n8. Plant companion plants like basil, marigold, and borage to repel or confuse the adult moths",
      relatedQuestions: ["question-001", "question-006"],
    },
    {
      id: "question-013",
      question: "What's the best way to store harvested vegetables?",
      category: "Planting & Harvesting",
      answer:
        "Storage recommendations for common vegetables:\n\n1. Root vegetables (carrots, beets, turnips):\n   - Remove tops, brush off soil, don't wash\n   - Store in damp sand or sawdust at 32-40°F with high humidity\n   - Can last 2-6 months\n\n2. Potatoes:\n   - Cure in warm, humid place for 1-2 weeks\n   - Store in cool (40-50°F), dark place\n   - Don't refrigerate\n\n3. Onions and garlic:\n   - Cure until outer skins are papery\n   - Store in cool, dry place with good ventilation\n   - Don't refrigerate\n\n4. Tomatoes:\n   - Store at room temperature away from direct sun\n   - Never refrigerate unless fully ripe\n\n5. Leafy greens:\n   - Refrigerate in plastic bags with some air holes\n   - Wash just before use\n\n6. Winter squash:\n   - Cure in warm place for 10 days\n   - Store in cool (50-55°F), dry place\n   - Can last 2-6 months depending on variety",
      relatedQuestions: ["question-005", "question-011"],
    },
    {
      id: "question-014",
      question: "How do I test my soil pH?",
      category: "Soil & Fertilization",
      answer:
        "Methods to test soil pH:\n\n1. Professional soil test - Most accurate, send sample to local extension office or lab\n\n2. Home test kits - Reasonably accurate, available at garden centers\n\n3. Digital pH meters - Quick results but need proper calibration\n\n4. DIY vinegar and baking soda test (less accurate):\n   - Mix soil with distilled water\n   - Add vinegar - if it fizzes, soil is alkaline (pH > 7)\n   - Or add baking soda - if it fizzes, soil is acidic (pH < 7)\n\nTo adjust pH:\n\n1. To lower pH (make more acidic):\n   - Add sulfur, aluminum sulfate, or acidic organic matter like pine needles\n\n2. To raise pH (make more alkaline):\n   - Add limestone, wood ash, or dolomite lime\n\n3. Make gradual adjustments over time, not all at once\n\nMost vegetables prefer a slightly acidic to neutral pH (6.0-7.0).",
      relatedQuestions: ["question-003", "question-004"],
    },
    {
      id: "question-015",
      question: "How do I grow vegetables in containers?",
      category: "Planting & Harvesting",
      answer:
        "Tips for container vegetable gardening:\n\n1. Choose appropriate containers:\n   - At least 12 inches deep for most vegetables\n   - Larger is better - 5 gallons minimum for tomatoes, peppers, eggplants\n   - Ensure drainage holes\n\n2. Use high-quality potting mix, not garden soil\n\n3. Best vegetables for containers:\n   - Tomatoes (determinate varieties)\n   - Peppers and chilis\n   - Lettuce and greens\n   - Herbs\n   - Bush beans\n   - Radishes\n   - Carrots (in deep containers)\n\n4. Watering is critical:\n   - Check daily in hot weather\n   - Water when top inch of soil is dry\n   - Apply until water runs from drainage holes\n\n5. Fertilize regularly:\n   - Use liquid fertilizer every 2-3 weeks\n   - Or slow-release fertilizer according to package directions\n\n6. Place in appropriate light:\n   - Most vegetables need 6+ hours of sun\n   - Consider mobility for moving containers to follow sun\n\n7. Consider vertical supports for vining plants",
      relatedQuestions: ["question-002", "question-010"],
    },
  ]
  
  // Function to find a disease by ID
  export function findDiseaseById(id: string): PlantDisease | undefined {
    return plantDiseases.find((disease) => disease.id === id)
  }
  
  // Function to find a random disease (simulating AI detection)
  export function detectDisease(cropType?: string): PlantDisease {
    if (cropType) {
      const matchingDiseases = plantDiseases.filter((disease) =>
        disease.crops.some((crop) => crop.toLowerCase().includes(cropType.toLowerCase())),
      )
  
      if (matchingDiseases.length > 0) {
        return matchingDiseases[Math.floor(Math.random() * matchingDiseases.length)]
      }
    }
  
    // If no crop type specified or no matches, return random disease
    return plantDiseases[Math.floor(Math.random() * plantDiseases.length)]
  }
  
  // Function to find a question by ID
  export function findQuestionById(id: string): FarmingQuestion | undefined {
    return farmingQuestions.find((question) => question.id === id)
  }
  
  // Function to find related questions
  export function findRelatedQuestions(questionId: string): FarmingQuestion[] {
    const question = findQuestionById(questionId)
    if (!question) return []
  
    return question.relatedQuestions.map((id) => findQuestionById(id)).filter((q) => q !== undefined) as FarmingQuestion[]
  }
  
  // Function to search questions by keyword
  export function searchQuestions(keyword: string): FarmingQuestion[] {
    const lowerKeyword = keyword.toLowerCase()
    return farmingQuestions.filter(
      (q) =>
        q.question.toLowerCase().includes(lowerKeyword) ||
        q.answer.toLowerCase().includes(lowerKeyword) ||
        q.category.toLowerCase().includes(lowerKeyword),
    )
  }
  
  // Function to get questions by category
  export function getQuestionsByCategory(category: string): FarmingQuestion[] {
    return farmingQuestions.filter((q) => q.category === category)
  }
  
  // Function to generate a response based on user input
  export function generateResponse(input: string): string {
    // Search for matching questions
    const matchingQuestions = searchQuestions(input)
  
    if (matchingQuestions.length > 0) {
      // Return the answer from the best matching question
      return matchingQuestions[0].answer
    }
  
    // Check for specific keywords
    if (input.toLowerCase().includes("disease") || input.toLowerCase().includes("sick plant")) {
      return "To diagnose a plant disease, I recommend uploading a photo in the Plant Diagnosis section. Common signs of plant diseases include spots on leaves, wilting, yellowing, or unusual growth patterns. Without a photo, it's difficult to provide a specific diagnosis."
    }
  
    if (input.toLowerCase().includes("fertilizer") || input.toLowerCase().includes("nutrient")) {
      return "For fertilizing crops:\n\n1. Test your soil before applying fertilizers\n\n2. Use organic compost as a base fertilizer\n\n3. Apply nitrogen-rich fertilizers for leafy growth\n\n4. Use phosphorus-rich fertilizers for root development and flowering\n\n5. Apply potassium-rich fertilizers for overall plant health and disease resistance"
    }
  
    if (input.toLowerCase().includes("water") || input.toLowerCase().includes("irrigation")) {
      return "For optimal irrigation:\n\n1. Water deeply but infrequently to encourage deep root growth\n\n2. Water early in the morning to reduce evaporation\n\n3. Consider drip irrigation to deliver water directly to the roots\n\n4. Most vegetables need about 1-1.5 inches of water per week"
    }
  
    // Default response
    return "Thank you for your question. As a farming assistant, I can help with plant diseases, pest management, irrigation techniques, crop rotation, soil health, and sustainable farming practices. Could you provide more details about your specific farming challenge?"
  }
  
  