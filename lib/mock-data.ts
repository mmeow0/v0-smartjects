import type { SmartjectType } from "./types";

export const mockSmartjects: SmartjectType[] = [
  {
    id: "smartject-1",
    title: "EduVisAgent",
    votes: {
      believe: 95,
      need: 42,
      provide: 15,
    },
    comments: 26,
    createdAt: "2025-04-14",
    image: "/berkeley.jpeg",
    mission:
      "Enhance the effectiveness of educational visualization through a multi-agent framework that leverages diverse reasoning and instructional strategies.",
    problematics:
      "Existing foundation models in education underperform in generating pedagogically effective visualizations, struggling with complex reasoning and the alignment of visual aids with educational goals.",
    scope:
      "Development of a multi-agent system to facilitate reasoning-driven pedagogical visualizations across diverse STEM subjects. Integration with learning management systems and educational content tools for real-time feedback and visualization support.",
    audience:
      "K-12 educators and administrators, educational technology companies, instructional designers, and learners seeking interactive STEM learning experiences.",
    howItWorks:
      "EduVisAgent utilizes a multi-agent approach, where a central planning agent coordinates specialized agents for task structuring, reasoning decomposition, visual representation generation, and metacognitive support. The system generates personalized visual learning experiences through interactive web pages tailored to each learner's needs.",
    architecture: `The architecture comprises a central Task Planning Agent, Conceptual Mapping Agent, Reasoning Decomposition Agent, Metacognitive Reviewer, and Visualization Agent that collaboratively create coherent instructional outputs. These agents operate in phases: first constructing the learning flow and then generating solutions collaboratively.`,
    innovation:
      "The introduction of a multi-agent framework that diversifies instructional roles enhances coherence in pedagogical content. This approach exceeds the capabilities of traditional single-model systems in generating interactive, visually grounded learning materials.",
    useCase:
      "Execution of personalized learning pathways in STEM education, stimulating learner engagement through structured problem solving, and offering immediate visualization feedback during instructional activities.",
    industries: ["Education", "EdTech"],
    businessFunctions: [
      "Instructional Design",
      "Learning Technologies",
    ],
    relevantLinks: [
      {
        title:
          "From EduVisBench to EduVisAgent: A Benchmark and Multi-Agent Framework for Reasoning-Driven Pedagogical Visualization",
        url: "https://arxiv.org/abs/2505.16832",
      },
    ],
  },
  {
    id: "smartject-2",
    title: "ATMO-Trans",
    votes: {
      believe: 87,
      need: 34,
      provide: 12,
    },
    comments: 21,
    createdAt: "2025-04-14",
    image: "/massachusetts.jpeg",
    mission:
      "Enable seamless transitions between flying and driving modes for robots, improving operational efficiency in various environments.",
    problematics:
      "Existing robots that can fly and drive require a stable landing to transform, which can be problematic in uneven terrains, causing operational failures. There is a need for a robust system that can transform mid-air and continue functioning without interruptions.",
    scope:
      "Development of autonomous robots that can transition between flying and rolling modes, suitable for diverse terrains. Focus on commercial applications like delivery systems, search and rescue missions, and exploration in difficult terrains.",
    audience:
      "Logistics and delivery companies, disaster response organizations, research institutions in robotics, and technological firms interested in autonomous systems.",
    howItWorks:
      "The ATMO-Trans robot uses a control algorithm that enables it to morph mid-air from a flying drone to a wheeled rolling robot. It features four thrusters for flight and uses a central joint powered by a motor to shift between modes, allowing it to land and immediately drive away without needing to stop for transformation.",
    architecture: `Input Module: Receives environmental data and flight instructions. Thruster Control Module: Manages thrust based on flight mode and terrain data. Transformation Mechanism: A central joint driven by a motor adjusts the robot's configuration. Control Algorithm: Utilizes model predictive control for adjusting operations dynamically during flight and transformation. Output Module: Provides data on current mode and environmental feedback.`,
    innovation:
      "Mid-air morphing ability: The primary innovation lies in its capability to transform during flight, allowing uninterrupted operations. The sophisticated control system leverages model predictive control to adapt in real-time to the changing dynamics as the robot morphs, ensuring stability and operational efficiency.",
    useCase:
      "Delivery system where a robot can fly over obstacles to reach a destination and land directly on the ground to deliver parcels. Search and rescue missions in challenging terrains where the robot can navigate by air and quickly resume land operations without pause.",
    industries: ["Logistics", "Aerospace", "Robotics", "Telecommunications"],
    businessFunctions: [
      "Operations",
      "Supply Chain Management",
      "Research and Development",
      "Engineering",
    ],
    relevantLinks: [
      {
        title: "Mid-air transformation helps flying, rolling robot to transition smoothly",
        url: "https://www.sciencedaily.com/releases/2025/05/250528150829.htm",
      },
    ],
  },
  {
    id: "smartject-3",
    title: "DataViz Pro",
    votes: {
      believe: 110,
      need: 52,
      provide: 20,
    },
    comments: 45,
    createdAt: "2025-04-16",
    image: "/massachusetts.jpeg",
    mission:
      "Empower businesses to harness their data effectively by providing an interactive analytics platform that simplifies data visualization and decision-making processes.",
    problematics:
      "Many businesses struggle with interpreting their data due to complex data sources and lack of visualization tools, resulting in underutilization of valuable insights and slower decision-making processes.",
    scope:
      "Data visualization and analytics solutions for businesses across various sectors, enabling connection to multiple data sources, creating interactive dashboards, and sharing insights across teams.",
    audience:
      "Small to medium-sized enterprises (SMEs), data analysts, business intelligence teams, product managers, and decision-makers looking for accessible data insights.",
    howItWorks:
      "DataViz Pro allows users to connect various data sources such as databases and spreadsheets. Users can create and customize their visualizations and dashboards using a drag-and-drop interface, run SQL queries, and share insights with team members through built-in sharing capabilities.",
    architecture: `The platform is built on a microservices architecture. It consists of an API service that connects with data sources, a visualization engine for rendering charts and graphs, a user interface service for dashboard creation, and a database for storing user configurations and visualization states.`,
    innovation:
      "Simplified user interface that requires no coding knowledge, integration with multiple data sources, real-time data updates, and a community-driven library of visualization templates for rapid deployment.",
    useCase:
      "A retail company can use DataViz Pro to analyze sales data across different regions and product categories, create interactive dashboards to visualize trends, and share insights with stakeholders for informed decision-making.",
    industries: ["Retail", "Healthcare", "Finance", "Education", "Marketing"],
    businessFunctions: [
      "Marketing",
      "Sales",
      "Operations",
      "Finance",
      "Research and Development",
    ],
    relevantLinks: [
      {
        title:
          "Make Your Company Data Driven with Redash",
        url: "https://www.kdnuggets.com/make-your-company-data-driven-with-redash",
      },
    ],
  },
  {
    id: "smartject-4",
    title: "Magnesium Green",
    votes: {
      believe: 187,
      need: 42,
      provide: 15,
    },
    comments: 53,
    createdAt: "2023-09-18",
    image: "/oxford.jpeg",
    mission:
      "To revolutionize magnesium production in the U.S. by utilizing a low-emission electrolyzer process that transforms seawater into magnesium, thus making the automotive and industrial sectors more environmentally sustainable.",
    problematics:
      "Current magnesium production methods are energy-intensive and contribute significantly to greenhouse gas emissions. China dominates the market, and the existing processes are not environmentally friendly, posing a challenge for U.S. companies looking to enter the field.",
    scope: "Production of magnesium metal using an electrolyzer that processes seawater. Aiming for a sustainable and scalable methodology that can eventually meet the needs of automotive and defense industries in the United States.",
    audience: "Automotive manufacturers, defense contractors, industrial application industries, and investors interested in sustainable materials technology.",
    howItWorks:
      "The process starts with extracting magnesium chloride from seawater. This chloride is then introduced into an electrolyzer which operates at high temperatures and uses electricity to separate magnesium from chlorine. The reactor is run flexibly to optimize power costs and reduce emissions, and the process also generates magnesium oxide as a by-product that can assist in carbon capture.",
    architecture:
      "Input Module: Takes in seawater or brine and filters for magnesium. Concentration Module: Removes impurities and concentrates magnesium chloride. Electrolyzer: Operates at 700 °C and uses electricity to convert magnesium chloride into magnesium metal and chlorine gas. Co-Product Handling: Captures magnesium oxide for carbon dioxide sequestration. Output Module: Packages and creates reports on production metrics.",
    innovation: "Use of a high-temperature electrolyzer that improves the efficiency of magnesium extraction from seawater while minimizing carbon emissions. Adopting flexible energy management in the process to utilize renewable energy sources efficiently.",
    useCase:
      "Supply magnesium for automotive components, lightweight structures in aerospace applications, and production processes for various alloys, contributing to the reduction of carbon footprint in these industries.",
    industries: ["Automotive", "Aerospace", "Defense", "Manufacturing"],
    businessFunctions: ["Production", "Supply Chain Management", "Sustainability Operations", "Research and Development"],
    relevantLinks: [
      {
        title: "This startup wants to make more climate-friendly metal in the US",
        url: "https://www.technologyreview.com/2025/05/28/1117481/metal-magrathea/",
      },
    ],
  },
  {
    id: "smartject-5",
    title: "Orion Anomaly Detection Framework",
    votes: {
      believe: 112,
      need: 19,
      provide: 8,
    },
    comments: 29,
    createdAt: "2023-11-30",
    image: "/oxford.jpeg",
    mission: "To make machine learning anomaly detection tools accessible, transparent, and trustworthy for users without a deep technical background.",
    problematics: "Many existing anomaly detection tools require extensive machine learning expertise and are not user-friendly. This limits their adoption in industries that could greatly benefit from anomaly detection, such as manufacturing, cybersecurity, and healthcare.",
    scope: "Offers a user-friendly library for time series anomaly detection that is open-source. It allows users to easily analyze data, implement anomaly detection models, and understand the processes behind the detection without needing machine learning expertise.",
    audience: "Industries relying on operational data, such as manufacturing, IT operations, cybersecurity, healthcare, and academic research.",
    howItWorks:
      "Orion allows users to input their time series data and utilizes statistical and machine learning-based methods to detect anomalies. Users can initiate the detection using simple commands ('Fit' to train the model and 'Detect' to find anomalies).",
    architecture:
      "User interacts with the Orion framework via a straightforward interface. Data is processed through standardized abstractions, which facilitates model fitting and anomaly detection. The system integrates pre-trained models for efficiency and utilizes a large language model (LLM) to simplify user interactions.",
    innovation: "Orion combines accessibility and transparency with pre-trained models that require no in-depth understanding of machine learning. It utilizes abstractions for model compatibility and provides an easy command interface. The open-source nature encourages community involvement and trust in the models' outputs.",
    useCase:
      "Manufacturing plants can monitor equipment sensor data to identify any unexpected behaviors that may signal impending failures.",
    industries: ["Manufacturing", "Cybersecurity", "Healthcare", "Information Technology", "Finance"],
    businessFunctions: ["Operations", "Risk Management", "Quality Control", "Research and Development", "IT Support"],
    relevantLinks: [
      { title: "An anomaly detection framework anyone can use", url: "https://news.mit.edu/2025/anomaly-detection-framework-anyone-can-use-sarah-alnegheimish-0528" },
    ],
  },
  {
    id: "smartject-6",
    title: "Cognitive Map Communicator (CMC)",
    votes: {
      believe: 143,
      need: 27,
      provide: 11,
    },
    comments: 38,
    createdAt: "2023-10-05",
    image: "/berkeley.jpeg",
    mission:
      "Enhance navigation experience for visually impaired individuals using a cognitively inspired communication framework that utilizes knowledge graphs.",
    problematics: "Current assistive systems for the visually impaired either provide slow responses with high detail or quick responses lacking semantic depth. This trade-off limits their effectiveness. There is a pressing need for a solution that balances speed and clarity in communication to support safer navigation.",
    scope: "Develop a communication framework that transforms visual scenes into knowledge graphs, prioritizing task-relevant information through emergent communication protocols for real-time assistance.",
    audience:
      "Visually impaired individuals, assistive technology developers, rehabilitation professionals, caregivers, and organizations focused on enhancing accessibility.",
    howItWorks:
      "The CMC system captures visual scenes, constructs knowledge graphs representing objects and their relationships using advanced segmentation techniques. It employs attention mechanisms to filter out relevant entities, allowing agents to communicate essential information quickly through a compact symbolic language tailored for tactile feedback systems.",
    architecture:
      "Visual Input Processing: Segments scenes to identify objects. Knowledge Graph Construction: Encodes objects and relationships into graphs. Attention Mechanism Integration: Filters relevant information in real-time. Emergent Communication Module: Facilitates interaction using discrete symbolic messages to convey important navigation cues. Feedback Loop: Incorporates human feedback for continuous learning and improvement.",
    innovation:
      "Utilizes knowledge graphs for structured semantic representation and integrates attention mechanisms for prioritizing critical information in navigation. This approach enhances clarity in communication while maintaining a rapid response time, tailored specifically for situations faced by visually impaired individuals.",
    useCase:
      "Real-time navigation assistance for visually impaired individuals in dynamic environments, such as crossing streets or avoiding obstacles. Facilitating independent movement in public spaces through seamless communication of nearby hazards or guidance.",
    industries: ["Healthcare", "Assistive Technology", "Transportation", "Urban Planning"],
    businessFunctions: ["Product Development", "User Experience Design", "Research and Development", "Customer Support"],
    relevantLinks: [
      {
        title: "Cognitively-Inspired Emergent Communication via Knowledge Graphs for Assisting the Visually Impaired",
        url: "https://arxiv.org/abs/2505.22087",
      },
    ],
  },
  {
    id: "smartject-7",
    title: "Cycle Time Reduction Agents (CTRA)",
    votes: {
      believe: 92,
      need: 16,
      provide: 5,
    },
    comments: 21,
    createdAt: "2023-12-15",
    image: "/berkeley.jpeg",
    mission:
      "Automate the analysis of lab operational metrics to uncover bottlenecks and optimize workflows in scientific laboratories, particularly in pharmaceutical and biotechnology sectors.",
    problematics:
      "Scientific laboratories face significant challenges in optimizing complex workflows manually, leading to inefficiencies and delays in processes such as compound screening and assay execution. Traditional methods require extensive time for data analysis and do not scale well.",
    scope: "Provide automated solutions for identifying bottlenecks in laboratory workflows through the analysis of operational metrics. This includes generating SQL queries, validating data, and reporting insights with visualizations.",
    audience: "Pharmaceutical and biotechnology companies that manage scientific laboratories, lab managers, operations analysts, and automation engineers.",
    howItWorks:
      "CTRA employs a LangGraph-based architecture that consists of three main components: a Question Creation Agent generates analytical questions regarding lab operations; Operational Metrics Agents process these questions into SQL queries and validate their execution; Insights Agents compile the results into human-readable reports and visualizations for actionable insights.",
    architecture:
      "CTRA’s architecture comprises multiple agents: a Question Creation Agent that generates queries, Operational Metrics Agents (including Query Builder, Query Validator, Error Analyst, Question Navigator) that ensure accurate data extraction and validation, and Insights Agents (Summarization Agent, Charting Agent) that produce reports and visualizations based on the findings.",
    innovation:
      "Utilizes large language models (LLMs) for intelligent question generation and SQL query production, thereby automating workflow analytics in scientific labs. Innovations include dynamic routing based on query outcomes and the use of structured operational metrics to enhance lab performance.",
    useCase:
      "Pharmaceutical companies employ CTRA for identifying bottlenecks in their compound screening processes, improving operational efficiency and reducing experimental cycles. Insights can direct resources to troubled workflows and procedures in real-time.",
    industries: ["Pharmaceutical", "Biotechnology", "Research and Development"],
    businessFunctions: [
      "Operations",
      "Data Analytics",
      "Quality Assurance",
    ],
    relevantLinks: [
      {
        title: "Uncovering Bottlenecks and Optimizing Scientific Lab Workflows with Cycle Time Reduction Agents",
        url: "https://arxiv.org/abs/2505.21534",
      },
    
    ],
  },
  {
    id: "smartject-8",
    title: "WhisperD",
    votes: {
      believe: 108,
      need: 22,
      provide: 9,
    },
    comments: 34,
    createdAt: "2023-11-08",
    image: "/oxford.jpeg",
    mission: "Enhance the transcription accuracy of dementia-related speech while detecting filler words, supporting clinical assessments and assistive technology development.",
    problematics: "Traditional speech recognition systems struggle to accurately transcribe the irregular speech patterns of persons with dementia (PwDs). Given their unique communication challenges, including disfluencies and filler word usage, these systems often fail to deliver reliable results vital for diagnosis and treatment planning.",
    scope: "Transcription of dementia-affected speech, particularly focusing on filler word detection. Integration with healthcare assistive technologies and cognitive assessment tools.",
    audience: "Healthcare providers, dementia care facilities, cognitive assessment professionals, and developers of assistive technology.",
    howItWorks:
      "WhisperD is a fine-tuned version of the Whisper automatic speech recognition (ASR) system. It is trained on speech datasets from PwDs, incorporating both regular speech and filler words (e.g., 'uh', 'um') to improve accuracy. The model processes short audio segments and provides transcriptions that reflect the unique speech patterns of PwDs, including disfluencies.",
    architecture:
      "WhisperD consists of a transformer-based architecture featuring an encoder and decoder optimized for shorter audio inputs. It employs specialized training to process and recognize filler words, enhancing its transcription capabilities for dementia speech, which often includes pauses and irregularities.",
    innovation: "Fine-tuning Whisper for dementia speech transcription significantly improves performance over standard models. The ability to include and recognize filler words provides a richer understanding of cognitive status, allowing for more tailored interactions and assessments.",
    useCase:
      "Clinical interviews and assessments of PwDs benefit from accurate transcription that includes filler word detection, aiding caregivers and professionals in understanding cognitive function and speech patterns.",
    industries: ["Healthcare", "Assisted Living", "Medical Research", "Telemedicine"],
    businessFunctions: ["Clinical Assessment", "Patient Monitoring", "Data Analysis", "Healthcare Technology Development"],
    relevantLinks: [
      {
        title: "WhisperD: Dementia Speech Recognition and Filler Word Detection with Whisper",
        url: "https://arxiv.org/abs/2505.21551",
      },

    ],
  },
  {
    id: "smartject-9",
    title: "BrassicaSeedNet",
    votes: {
      believe: 131,
      need: 25,
      provide: 7,
    },
    comments: 41,
    createdAt: "2023-10-12",
    image: "/massachusetts.jpeg",
    mission:
      "Enhance seed quality control and efficiency in agricultural practices by providing a state-of-the-art solution for Brassica seed classification using deep learning.",
    problematics: "Farmers often struggle with accurately identifying and classifying Brassica seeds due to high texture similarity and morphological variations. The lack of an efficient automated solution can lead to poor crop yield and increased management costs.",
    scope: "Development of a deep learning-based convolutional neural network (CNN) model specifically focused on classifying ten different classes of Brassica seeds, along with dataset creation and performance evaluation.",
    audience:
      "Agricultural researchers, farmers, seed producers, agritech companies, and agricultural extension services.",
    howItWorks:
      "The model employs a custom CNN architecture with multiple convolutional and pooling layers to extract intricate features from Brassica seed images. It ingests images resized to 128x128 pixels, applies various filter sizes during convolution, and outputs classification probabilities across ten seed classes through a softmax function after passing through dense layers.",
    architecture:
      "The CNN architecture consists of 23 layers that include convolutional layers (with 5x5 and 3x3 filters), max pooling layers to reduce dimensionality while preserving critical features, and fully connected layers leading to a softmax output layer for classification. Spatial dimensions are preserved throughout the network using identity mappings instead of traditional pooling.",
    innovation: "The model introduces unique filter sizes and multiple convolution stages to improve feature extraction and classification accuracy. It also utilizes a specifically collected comprehensive dataset of Brassica seeds to train and validate the model, achieving consistent accuracy superior to pre-trained models.",
    useCase:
      "Automated classification of Brassica seeds in agricultural settings to streamline seed quality control processes and enhance accuracy in yield estimation, thereby supporting decision-making in crop management strategies.",
    industries: ["Agriculture", "Seed Production", "Agritech"],
    businessFunctions: ["Quality Control", "Research and Development", "Supply Chain Management"],
    relevantLinks: [
      {
        title: "A Novel Convolutional Neural Network-Based Framework for Complex Multiclass Brassica Seed Classification",
        url: "https://arxiv.org/abs/2505.21558",
      },

    ],
  },
   {
    id: "smartject-10",
    title: "ClimaTech AI Evaluator",
    votes: {
      believe: 102,
      need: 19,
      provide: 8,
    },
    comments: 25,
    createdAt: "2023-10-12",
    image: "/massachusetts.jpeg",
    mission:
      "Enhance the selection process of climate tech startups by integrating human expertise with artificial intelligence, ensuring a more equitable, efficient, and comprehensive evaluation.",
    problematics: "Traditional startup selection processes can be biased and inefficient, relying solely on human evaluators, which may overlook potential high-impact innovations. AI can streamline evaluations, but integrating it with human assessments ensures better reliability and reduces bias.",
    scope: "A hybrid evaluation model for startup competitions, focusing on climate tech initiatives. The solution encompasses initial AI screening, human reviews in semi-finals, and final evaluations that weigh human input more heavily while still incorporating AI insights.",
    audience:
      "Venture capital firms, startup accelerators, climate tech innovation competitions, and organizations interested in identifying impactful climate solutions.",
    howItWorks:
      "The system utilizes an AI tool trained with natural language processing to analyze startup applications based on criteria such as potential climate impact and solution feasibility. Initially, it scores applications and selects a subset for human judges, who then assess them. Finalists receive balanced evaluations with AI providing supplemental insights during their pitches.",
    architecture:
      "Input Layer: Integrates startup applications. AI Evaluation Module: Processes applications using machine learning models to score various dimensions. Human Review Module: Receives scores and feedback from human judges. Final Evaluation Module: Computes composite scores based on human and AI evaluations.",
    innovation: "The integration of AI as both an initial scorer and an interactive judge in the final stages adds a new layer to evaluations, blending swift analysis with human insight. The model allows for real-time AI assessment of pitches, enhancing decision-making.",
    useCase:
      "Startup competitions and innovation challenges can employ this model to streamline their evaluation process, ensuring a thorough and balanced approach to selecting impactful climate tech solutions.",
    industries: ["Venture Capital", "Sustainability & Climate Tech", "Startup Incubation", "Investment"],
    businessFunctions: ["Talent Evaluation", "Investment Decision Making", "Innovation Management", "Strategic Planning"],
    relevantLinks: [
      {
        title: "Enhancing Selection of Climate Tech Startups with AI -- A Case Study on Integrating Human and AI Evaluations in the ClimaTech Great Global Innovation Challenge",
        url: "https://arxiv.org/abs/2505.21562",
      },

    ],
  },
  {
  id: "smartject-11",
  title: "ChemHAS",
  votes: {
    believe: 87,
    need: 21,
    provide: 10,
  },
  comments: 14,
  createdAt: "2024-11-05",
  image: "/oxford.jpeg",
  mission:
    "Enhance the accuracy and performance of chemistry tools by utilizing hierarchical agent stacking to reduce prediction errors.",
  problematics:
    "Existing chemistry tools have significant prediction errors that can propagate through processes. Current large language models (LLMs) focus on tool selection but do not optimize the effectiveness of the tools themselves.",
  scope:
    "Hierarchical agent stacking for various chemistry tasks, including molecular design, property prediction, reaction prediction, and molecular description. It aims to improve tool performance through better integration and combination.",
  audience:
    "Researchers in computational chemistry, chemical industry professionals, educational institutions teaching chemistry and AI applications, and companies developing AI-driven solutions for chemistry.",
  howItWorks:
    "ChemHAS involves two stages. Stage 1 continuously stacks and evaluates individual tools to create enhanced agent tools, developing a global tool library. Stage 2 merges the top performers from the library into more complex agent stacks for optimized outputs through iterative validation.",
  architecture:
    "The system consists of a tool library, agent tools, a hierarchical stacking structure, and a performance evaluation loop. Agent tools can either operate independently or use tools available in the library to complete tasks. The processes are organized in layers to optimize the output successively.",
  innovation:
    "The hierarchical agent stacking approach systematically improves tool effectiveness by enabling dynamic stacking configurations. This facilitates automatic optimization of agent interactions to address individual and emergent errors, enhancing overall task performance.",
  useCase:
    "In academic research and industry projects involving chemical synthesis, AI-driven analysis of chemical reactions, and instructional help in software supporting chemical design and environments.",
  industries: ["Chemicals", "Pharmaceuticals", "Biotechnology", "Academic Research"],
  businessFunctions: ["Research & Development", "Quality Assurance", "Product Development", "Educational Tools"],
  relevantLinks: [
    {
      title: "ChemHAS: Hierarchical Agent Stacking for Enhancing Chemistry Tools",
      url: "https://arxiv.org/abs/2505.21569",
    },
  ],
},
{
  id: "smartject-12",
  title: "AITEE: Agentic Tutor for Electrical Engineering",
  votes: {
    believe: 74,
    need: 33,
    provide: 12,
  },
  comments: 18,
  createdAt: "2024-11-10",
  image: "/berkeley.jpeg",
  mission:
    "To provide personalized, interactive support in electrical engineering education, enhancing students' self-efficacy and supporting their learning processes through an intelligent tutoring system that incorporates large language models.",
  problematics:
    "Traditional educational methods in electrical engineering often lack scalable and effective means to support students, leading to a reliance on insufficient human resources for personalized feedback. Standard intelligent tutoring systems do not adequately provide context-specific knowledge for solving electrical circuit questions, especially for beginners, resulting in confusion and a lack of confidence.",
  scope:
    "An intelligent tutoring system for electrical engineering that can process both hand-drawn and digital circuits, provide contextualized knowledge retrieval, support Socratic dialogue for active learning, and deliver accurate computational feedback through circuit simulations.",
  audience:
    "First-semester electrical engineering students, educators in electrical engineering, educational institutions offering electrical engineering programs, and edtech developers focused on engineering education.",
  howItWorks:
    "AITEE employs a combination of image processing for circuit recognition, a graph neural network for context retrieval, and large language models for conversational tutoring. It engages students in a Socratic manner, asking guiding questions, while leveraging circuit simulations through Spice to verify the accuracy of responses.",
  architecture:
    "The system architecture consists of several components including: 1) Circuit Detection Module for recognizing components in drawings; 2) Graph Neural Network for similarity calculations between circuits; 3) Retrieval-Augmented Generation (RAG) system for extracting relevant information; 4) Large Language Models to engage in Socratic dialogue; 5) Spice Simulation Engine for validating circuit analysis.",
  innovation:
    "AITEE utilizes a graph-based similarity measure for more accurate context retrieval, integrated circuit simulations for real-time feedback, and a Socratic dialogue approach to foster student autonomy and critical thinking, making the system adaptable for varying levels of student knowledge.",
  useCase:
    "Students can use AITEE for homework help, clarification on circuit analysis concepts, and step-by-step guidance on problem-solving for electrical engineering tasks, significantly enhancing their learning experience and confidence.",
  industries: ["Education", "EdTech", "Engineering"],
  businessFunctions: ["Teaching", "Technology Support", "Training"],
  relevantLinks: [
    {
      title: "AITEE -- Agentic Tutor for Electrical Engineering",
      url: "https://arxiv.org/abs/2505.21582",
    },
  ],
},
{
  id: "smartject-13",
  title: "HypoTreat AI: Real-Time Intraoperative Decision Support",
  votes: {
    believe: 88,
    need: 41,
    provide: 17,
  },
  comments: 22,
  createdAt: "2024-12-01",
  image: "/oxford.jpeg",
  mission:
    "To enhance perioperative decision-making by providing real-time treatment recommendations for managing intraoperative hypotension and reducing the risk of postoperative acute kidney injury using deep reinforcement learning.",
  problematics:
    "Current methods for managing intraoperative hypotension rely heavily on physician judgment and experience, which may lead to inconsistencies and suboptimal treatment responses. A lack of data-driven insights can cause varying outcomes for patients undergoing surgery, particularly during critical moments that lead to complications such as acute kidney injury.",
  scope:
    "Utilization of a deep reinforcement learning model to analyze intraoperative data and suggest appropriate dosages of intravenous fluids and vasopressors in real-time during surgical procedures. The system provides insights based on continuous monitoring of patient vital signs and medication administration practices.",
  audience:
    "Hospitals and surgical centers, anesthesiology departments, surgeons, and healthcare professionals involved in perioperative care.",
  howItWorks:
    "The system integrates with existing electronic health records to gather patient data like baseline characteristics and real-time physiological metrics. It utilizes a deep reinforcement learning algorithm to analyze the data at 15-minute intervals, recommending fluid and vasopressor dosages tailored to individual patient states. The agent's output is aligned with physician actions, and performance is evaluated based on historical decisions.",
  architecture:
    "The architecture consists of an input layer gathering patient data, a data processing module for transforming and resampling the data, a reinforcement learning module utilizing Dueling Double Deep Q Networks (D3QN) for suggesting actions, and an output layer that provides recommendations and visualizations for healthcare providers.",
  innovation:
    "The integration of a reinforcement learning approach that dynamically adapts treatment recommendations based on real-time patient data synthesis. Establishes a feedback loop where performance is evaluated against physician decisions and historical outcomes, potentially increasing the safety and effectiveness of intraoperative care.",
  useCase:
    "Assist anesthesiologists and surgical teams in dynamically managing fluid and vasopressor requirements during surgery, thereby minimizing the incidence of hypotension and reducing postoperative acute kidney injury risk. The model’s successful implementation could also act as a benchmark for future AI-driven clinical applications.",
  industries: ["Healthcare", "Surgery", "Anesthesiology"],
  businessFunctions: ["Clinical Operations", "Patient Safety", "Data Analysis"],
  relevantLinks: [
    {
      title: "Learning optimal treatment strategies for intraoperative hypotension using deep reinforcement learning",
      url: "https://arxiv.org/abs/2505.21596",
    },
  ],
},
{
  id: "smartject-14",
  title: "DFCR Maritime Security: Resilient AI for Autonomous Navigation",
  votes: {
    believe: 74,
    need: 36,
    provide: 12,
  },
  comments: 18,
  createdAt: "2024-11-20",
  image: "/oxford.jpeg",
  mission:
    "Enhance the resilience and security of AI systems in maritime autonomous operations against adversarial machine learning attacks through a novel data fusion approach.",
  problematics:
    "Maritime autonomous systems face significant vulnerabilities to adversarial attacks that can manipulate AI decision-making. Traditional defences often fail to address multiple attack types, lack comprehensive security metrics, and do not maintain system functionality during an attack. There is a pressing need for robust solutions that provide multi-faceted security in real-time environments.",
  scope:
    "Implementation of multi-input data fusion techniques to protect maritime autonomous systems from adversarial attacks on perception and decision-making. The system will also include metrics for measuring AI confidence and security during operations.",
  audience:
    "Developers and operators of maritime autonomous systems, cybersecurity professionals in defense and transportation sectors, maritime regulatory bodies, and AI research institutions focused on applied machine learning in high-risk environments.",
  howItWorks:
    "The DFCR system integrates multiple data sources (e.g., AIS, radar, and optical sensors) to improve situational awareness in maritime operations. It employs validation and anomaly detection components to authenticate inputs, adjust confidence scores based on validated data, and enhance decision-making resilience against adversarial manipulation.",
  architecture:
    "The DFCR system architecture includes three primary components: 1) Data Inputs—collects data from multiple sensors (AIS, radar, optical); 2) Validation Component—includes multisensor and metadata validation checks for verifying inputs; 3) Decision-Making Module—generates a DFCR confidence score that reflects the security and reliability of inputs, displayed on an operation console for real-time assessments.",
  innovation:
    "The DFCR method introduces an integrated defence strategy utilizing multiple sensor inputs to create a comprehensive resilience framework against adversarial attacks. Unlike traditional models which rely on single inputs or specific defences, DFCR enhances overall system integrity by applying multiple validation levels and dynamic confidence assessments.",
  useCase:
    "Maritime operators utilize DFCR for securing navigation and detection systems of autonomous vessels against adversarial attacks such as sensor spoofing, perturbations, and adversarial patches, maintaining reliable situational awareness despite potential threats.",
  industries: ["Maritime", "Transportation", "Cybersecurity", "Defense"],
  businessFunctions: ["Operations", "Engineering", "Risk Management"],
  relevantLinks: [
    {
      title: "Preventing Adversarial AI Attacks Against Autonomous Situational Awareness: A Maritime Case Study",
      url: "https://arxiv.org/abs/2505.21609",
    },
  ],
},
{
  id: "smartject-15",
  title: "TokenTrack: Transparent Pay-Per-Character Pricing for LLMs",
  votes: {
    believe: 88,
    need: 42,
    provide: 16,
  },
  comments: 11,
  createdAt: "2024-11-24",
  image: "/massachusetts.jpeg",
  mission:
    "Ensure fair pricing and transparency in the realm of large language models by implementing an innovative pay-per-character pricing mechanism that eliminates the potential for misreporting outputs and builds trust between providers and users.",
  problematics:
    "Cloud-based large language model services often use a pay-per-token pricing model which incentivizes providers to misreport the number of tokens generated, leading to potential overcharging of users. Users lack access to information about the tokenization process, making it difficult to verify and contest charges.",
  scope:
    "Implementation of a pay-per-character pricing model that applies to large language models in cloud services. Integration with existing API structures to facilitate smooth transitions for users and providers towards a more transparent pricing system.",
  audience:
    "Cloud service providers offering LLM access. Enterprises relying on LLMs for various applications. Developers building tools for cost management in AI services. Regulatory bodies interested in ensuring fair practices in technology.",
  howItWorks:
    "TokenTrack monitors the output of LLMs and counts characters instead of tokens, ensuring accurate charging based on actual text length produced. The system gathers and presents data about token generation processes and provides users with insights, allowing them to verify charges against outputs.",
  architecture:
    "Input Layer: Receives user prompts to be processed by LLMs. LLM Processing: Generates outputs using existing LLMs (e.g., Llama, Gemma). Token Monitoring Module: Monitors token generation and provides detailed insights into character lengths. Pricing Calculation Module: Calculates pricing based on character count instead of token count. User Interface: Displays generated outputs, pricing data, and verification mechanisms. API Integration Layer: Connects with existing LLM services for seamless operation.",
  innovation:
    "Introduction of the pay-per-character pricing model eliminates the financial incentive for misreporting token numbers. User access to detailed insights about LLM generative processes enhances trust and transparency. Reduction of users’ risk of financial discrepancies related to output charges.",
  useCase:
    "A cloud service provider adopts TokenTrack to transition from a pay-per-token to a pay-per-character model, thereby reducing instances of overcharging. Enterprises leverage the service to audit their expenses on LLM usage, confidence of fair billing increases, which helps retain clients.",
  industries: ["Cloud Computing", "AI and Machine Learning", "Business Services", "Healthcare", "Finance"],
  businessFunctions: ["Finance", "Customer Support", "Software Development", "Compliance", "Marketing"],
  relevantLinks: [
    {
      title: "Is Your LLM Overcharging You? Tokenization, Transparency, and Incentives",
      url: "https://arxiv.org/abs/2505.21627",
    },
  ],
}
];
