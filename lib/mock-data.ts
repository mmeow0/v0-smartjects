import type { SmartjectType } from "./types";

export const mockSmartjects: SmartjectType[] = [
  {
    id: "smartject-1",
    title: "ReflectiveReasoning AI",
    votes: {
      believe: 95,
      need: 42,
      provide: 15,
    },
    comments: 26,
    createdAt: "2025-04-14",
    image: "/placeholder.svg",
    mission:
      "Advance the capabilities of large language models (LLMs) by incorporating reflective reasoning into their architecture during pre-training, enhancing their ability to perform complex reasoning tasks effectively.",
    problematics:
      "Current language models often lack the ability to self-correct or identify logical inconsistencies in their outputs until after post-training optimizations. This limits their utility in real-world applications that require accurate reasoning and decision-making.",
    scope:
      "Development of frameworks and datasets to assess and enhance reflective reasoning in LLMs. Implement adversarial datasets to train models, allowing reflection to emerge naturally as part of pre-training.",
    audience:
      "AI researchers and developers focusing on natural language processing, organizations needing advanced AI for reasoning tasks in sectors like finance, healthcare, and education, and technologists developing real-time AI decision-making tools.",
    howItWorks:
      "The tool uses adversarial datasets to introduce subtle errors in logical reasoning, encouraging models to reflect on their responses, self-correct, and improve outputs autonomously through explicit and implicit reflection.",
    architecture: `The architecture includes:
1. Input Layer: Takes user prompts.
2. Dataset Preprocessing: Applies adversarial datasets to introduce reasoning errors.
3. Reflection Mechanism: Triggers reflection during output generation.
4. Self-Assessment Module: Measures performance based on correction abilities.
5. Output Module: Delivers finalized output with reflections for transparency.`,
    innovation:
      "Integrates reflective reasoning during pre-training instead of post-training, using adversarial datasets and novel prompting techniques that refine model self-awareness and performance during the training process.",
    useCase:
      "AI-powered educational tools that help students correct misunderstandings in real-time, financial models that self-evaluate investment recommendations, and AI-driven coding assistants that self-correct code suggestions and logic errors.",
    industries: ["Healthcare", "Education", "Finance", "Technology"],
    businessFunctions: [
      "Research and Development",
      "Quality Assurance",
      "Customer Support",
      "Product Engineering",
    ],
    relevantLinks: [
      {
        title:
          "Research Article: Early Emergence of Reflective Reasoning in LLMs",
        url: "https://www.marktechpost.com/2025/04/14/reflection-begins-in-pre-training-essential-ai-researchers-demonstrate-early-emergence-of-reflective-reasoning-in-llms-using-adversarial-datasets/",
      },
    ],
  },
  {
    id: "smartject-2",
    title: "RoPE-ND: Multidimensional Rotary Position Embeddings",
    votes: {
      believe: 87,
      need: 34,
      provide: 12,
    },
    comments: 21,
    createdAt: "2025-04-14",
    image: "/placeholder.svg",
    mission:
      "Enhance the dimensional flexibility and expressiveness of positional embeddings in Transformer architectures for improved performance in multidimensional data applications.",
    problematics:
      "Current positional embedding methods in Transformers struggle to encode relationships across multiple dimensions effectively, limiting their utility in complex spatial and multimodal tasks.",
    scope:
      "Implementation of a unified Lie algebra framework for N-dimensional rotary position embedding across various data formats. Applicable to both existing and new Transformer architectures.",
    audience:
      "AI researchers, ML engineers working on multimodal systems, businesses implementing advanced AI, and academic institutions researching mathematical ML foundations.",
    howItWorks:
      "Applies Lie group and Lie algebra theory to generate N-dimensional rotary position embeddings using matrices that capture multi-dimensional transformations, maintaining both relative awareness and reversibility.",
    architecture: `The system includes:
1. Input Layer for multidimensional data.
2. Position Encoding Module using Lie algebra-based rotary transformations.
3. Transformer Layer enhanced with RoPE-ND.
4. Output Layer with optional inverse transformation.`,
    innovation:
      "Expands traditional rotary position encoding into N dimensions using a mathematically grounded Lie algebra approach, maintaining theoretical rigor while enhancing adaptability.",
    useCase:
      "Improves language models, spatial reasoning in computer vision, and multimodal analysis by capturing complex inter-dimensional relationships.",
    industries: ["Healthcare", "FMCG", "Retail", "Education"],
    businessFunctions: [
      "Data Analysis",
      "AI Development",
      "Product Development",
      "Marketing",
    ],
    relevantLinks: [
      {
        title: "RoPE-ND Research Article",
        url: "https://www.marktechpost.com/2025/04/14/transformers-gain-robust-multidimensional-positional-understanding-university-of-manchester-researchers-introduce-a-unified-lie-algebra-framework-for-n-dimensional-rotary-position-embedding-rope/",
      },
    ],
  },
  {
    id: "smartject-3",
    title: "O3 Agentic AI",
    votes: {
      believe: 110,
      need: 52,
      provide: 20,
    },
    comments: 45,
    createdAt: "2025-04-16",
    image: "/placeholder.svg",
    mission:
      "To enhance AI reasoning capabilities by integrating multimodal inputs for complex task processing across various domains.",
    problematics:
      "Current AI models struggle to effectively utilize and reason with diverse input types (text, images, etc.), which limits their ability to provide context-aware and nuanced responses during complex tasks.",
    scope:
      "Multi-domain reasoning capabilities including mathematics, coding, and scientific analysis, with support for visual inputs such as images and diagrams. Integration with various tools within AI systems to enable autonomous execution of multi-step tasks.",
    audience:
      "Businesses looking to integrate advanced AI reasoning in fields such as education, tech development, research, and data analysis. This includes software developers, educators, researchers, and enterprises requiring enhanced AI functionalities in applications.",
    howItWorks:
      "Users can input a combination of text and images into the O3 model. The model processes textual instructions while analyzing the visual data through integrated tools for image manipulation and analysis. It combines this information in its reasoning processes to generate responses and insights that reflect both text and visuals, enhancing the contextual understanding of tasks.",
    architecture: `The system includes:
1. User Interface: Receives text and image inputs.
2. Processing Module: Integrates text processing with image analysis.
3. Reasoning Engine: Executes multimodal reasoning.
4. Tool Integration Layer: Incorporates tools for web browsing, coding execution, and image processing.
5. Output Generation Module: Produces user-facing responses, reports, or insights.`,
    innovation:
      "Multimodal Integration: The first AI model capable of contextualized reasoning using both textual and visual data simultaneously. Autonomous Tool Execution: The AI can autonomously utilize various integrated tools within its operation without user intervention. High-Throughput Efficiency: The O4-mini variant is optimized for faster, more cost-effective reasoning suitable for real-time applications.",
    useCase:
      "Educational Platforms: Providing nuanced explanations of complex topics by integrating visual aids within learning experiences. Data Analysis Tools: Analyzing data visualizations alongside textual data to provide comprehensive insights. Development Environments: Assisting developers by reasoning with both code and accompanying design diagrams to suggest improvements or identify issues.",
    industries: ["Healthcare", "Education", "Technology", "Finance", "Retail"],
    businessFunctions: [
      "Research",
      "Development",
      "Analytics",
      "Customer Support",
    ],
    relevantLinks: [
      {
        title:
          "OpenAI Introduces O3 and O4-Mini: Advancing Towards Agentic AI with Enhanced Multimodal Reasoning",
        url: "https://www.marktechpost.com/2025/04/16/openai-introduces-o3-and-o4-mini-progressing-towards-agentic-ai-with-enhanced-multimodal-reasoning/",
      },
    ],
  },
  {
    id: "smartject-4",
    title: "AI-Enhanced Fraud Detection System",
    votes: {
      believe: 187,
      need: 42,
      provide: 15,
    },
    comments: 53,
    createdAt: "2023-09-18",
    image: "/placeholder.svg",
    mission:
      "Protect financial systems from fraud through intelligent pattern detection.",
    problematics:
      "Current fraud detection systems fail to adapt to new patterns quickly.",
    scope: "Banking, insurance, and e-commerce platforms.",
    audience: "Risk officers, fraud analysts, security engineers.",
    howItWorks:
      "Real-time transaction streams are monitored by ML models trained on historical fraud cases.",
    architecture:
      "Stream processing engine, model scoring API, alerting & case management platform.",
    innovation: "Dynamic model retraining based on live incident data.",
    useCase:
      "Fraudulent transaction detection, suspicious activity alerts, risk scoring.",
    industries: ["Finance", "Insurance", "E-commerce"],
    businessFunctions: ["Risk Management", "Compliance", "Security"],
    relevantLinks: [
      {
        title: "AI in Fraud Detection - McKinsey",
        url: "https://example.com/fraud-ai",
      },
      {
        title: "Stripe Radar Overview",
        url: "https://example.com/stripe-radar",
      },
    ],
  },
  {
    id: "smartject-5",
    title: "Personalized Learning Platform",
    votes: {
      believe: 112,
      need: 19,
      provide: 8,
    },
    comments: 29,
    createdAt: "2023-11-30",
    image: "/placeholder.svg",
    mission: "Empower every learner with a tailored educational journey.",
    problematics: "Standardized education doesn't fit all students' needs.",
    scope: "K-12, higher education, corporate training.",
    audience: "Educators, instructional designers, edtech startups.",
    howItWorks:
      "Learner interactions are tracked to adjust content difficulty and format dynamically.",
    architecture:
      "LMS integration, user behavior tracking, AI content recommendation engine.",
    innovation: "Adapts in real time using performance-based personalization.",
    useCase:
      "Custom lesson paths, performance-based quizzes, AI learning assistants.",
    industries: ["Education", "Corporate Training"],
    businessFunctions: ["L&D", "HR", "Teaching"],
    relevantLinks: [
      { title: "Khan Academy AI", url: "https://example.com/khan-ai" },
      { title: "EdTech Trends 2024", url: "https://example.com/edtech-trends" },
    ],
  },
  {
    id: "smartject-6",
    title: "Computer Vision for Quality Control",
    votes: {
      believe: 143,
      need: 27,
      provide: 11,
    },
    comments: 38,
    createdAt: "2023-10-05",
    image: "/placeholder.svg",
    mission:
      "Enhance product quality and reduce waste through automated visual inspection.",
    problematics: "Manual inspection is time-consuming and error-prone.",
    scope: "Electronics, automotive, and food production lines.",
    audience:
      "Quality assurance managers, manufacturing engineers, production supervisors.",
    howItWorks:
      "Cameras capture product images in real time, analyzed by AI models trained to detect defects.",
    architecture:
      "On-site edge devices for real-time image capture, cloud backend for analytics and reporting.",
    innovation:
      "Combines high-speed visual data with deep learning to detect micro-defects.",
    useCase:
      "Defect classification, anomaly detection, real-time inspection dashboards.",
    industries: ["Manufacturing", "Automotive", "Food & Beverage"],
    businessFunctions: ["Quality Assurance", "Operations", "Production"],
    relevantLinks: [
      {
        title: "AI in Visual Inspection",
        url: "https://example.com/visual-inspection-ai",
      },
      {
        title: "NVIDIA Metropolis Case Study",
        url: "https://example.com/nvidia-metropolis",
      },
    ],
  },
  {
    id: "smartject-7",
    title: "Smart Energy Management System",
    votes: {
      believe: 92,
      need: 16,
      provide: 5,
    },
    comments: 21,
    createdAt: "2023-12-15",
    image: "/placeholder.svg",
    mission:
      "Reduce energy waste and operational costs through smart automation.",
    problematics:
      "Inefficient energy consumption leads to high operational costs.",
    scope: "Office buildings, hotels, malls, and industrial parks.",
    audience: "Facility managers, building owners, energy consultants.",
    howItWorks:
      "AI analyzes historical usage and environmental data to forecast demand and automate energy controls.",
    architecture:
      "IoT sensors, cloud-based analytics, control system integration.",
    innovation:
      "Uses real-time occupancy and weather data to optimize energy dynamically.",
    useCase:
      "Peak load balancing, predictive HVAC control, automated lighting systems.",
    industries: ["Real Estate", "Hospitality", "Energy"],
    businessFunctions: [
      "Facilities Management",
      "Sustainability",
      "Operations",
    ],
    relevantLinks: [
      {
        title: "Siemens Desigo CC Overview",
        url: "https://example.com/siemens-energy",
      },
      {
        title: "Energy Optimization with AI",
        url: "https://example.com/ai-energy",
      },
    ],
  },
  {
    id: "smartject-8",
    title: "Sentiment Analysis for Brand Monitoring",
    votes: {
      believe: 108,
      need: 22,
      provide: 9,
    },
    comments: 34,
    createdAt: "2023-11-08",
    image: "/placeholder.svg",
    mission: "Empower brands with real-time insights into public perception.",
    problematics: "Brands lack real-time visibility into public perception.",
    scope: "Consumer brands, PR agencies, and marketing teams.",
    audience: "Brand managers, PR specialists, digital marketers.",
    howItWorks:
      "Monitors public data streams and uses NLP models to classify and quantify sentiment.",
    architecture:
      "Data pipeline for social feeds, NLP engine, real-time dashboards.",
    innovation: "Context-aware sentiment scoring and influencer detection.",
    useCase:
      "Crisis management alerts, brand sentiment dashboards, competitor tracking.",
    industries: ["Marketing", "Media", "Consumer Goods"],
    businessFunctions: ["Brand Management", "PR", "Market Research"],
    relevantLinks: [
      {
        title: "Brandwatch Sentiment Report",
        url: "https://example.com/brandwatch",
      },
      {
        title: "Real-Time Social Listening Tools",
        url: "https://example.com/social-listening",
      },
    ],
  },
  {
    id: "smartject-9",
    title: "Autonomous Inventory Management",
    votes: {
      believe: 131,
      need: 25,
      provide: 7,
    },
    comments: 41,
    createdAt: "2023-10-12",
    image: "/placeholder.svg",
    mission:
      "Streamline warehouse operations with autonomous, real-time inventory tracking.",
    problematics: "Inventory errors lead to stockouts or overstocking.",
    scope: "Warehouses, logistics hubs, and retail storage facilities.",
    audience:
      "Warehouse managers, logistics coordinators, supply chain analysts.",
    howItWorks:
      "Robots with vision systems scan inventory, feeding data into inventory management software.",
    architecture:
      "Autonomous mobile robots, cloud-based inventory platform, CV-based object recognition.",
    innovation: "Combines robotics with AI to eliminate manual stocktaking.",
    useCase:
      "Automated stock auditing, inventory drones, real-time shelf tracking.",
    industries: ["Logistics", "Retail", "E-commerce"],
    businessFunctions: ["Inventory Management", "Logistics", "Warehousing"],
    relevantLinks: [
      {
        title: "Amazon Robotics Case Study",
        url: "https://example.com/amazon-robots",
      },
      {
        title: "Vision AI for Warehouses",
        url: "https://example.com/warehouse-vision",
      },
    ],
  },
];
