import civicVideo from './assets/civic_execution.mp4';
import campusVideo from './assets/campus_execution.mp4';
import iotVideo from './assets/iot_execution.mp4';
import newsNodes from './assets/news_nodes.png';
import newsNode2 from './assets/news_node2.png';
import mcpCursor from './assets/mcp_cursor.png';
import mcpJob from './assets/mcp_job.png';
import mcpTrain from './assets/mcp_train.png';
import mcpLearn1 from './assets/mcp_learn1.png';
import mcpLearn2 from './assets/mcp_learn2.png';

// Purplle Store Intelligence screenshots
import purplleDashboardMain from './assets/purplle_dashboard_main.png';
import purplleDashboardFull from './assets/purplle_dashboard_full.png';
import purplleHeatmapZones from './assets/purplle_heatmap_zones.png';
import purplleHeatmapLayout from './assets/purplle_heatmap_layout.png';
import purplleAnomaliesPanel from './assets/purplle_anomalies_panel.png';
import purplleAnomalyCritical from './assets/purplle_anomaly_critical.png';
import purplleEventStream from './assets/purplle_event_stream.png';

// UIDAI Dark Zone Analyzer charts
import uidaiDemoVsBio from './assets/uidai_demo_vs_bio.png';
import uidaiAgewise from './assets/uidai_agewise_gap.png';
import uidaiMonthly from './assets/uidai_monthly_risk.png';
import uidaiDistricts from './assets/uidai_top10_districts.png';
import uidaiRiskDist from './assets/uidai_risk_distribution.png';

// Realtime Lecture Analytics (Kafka + Spark) screenshots
import kafkaStudentView from './assets/kafka_student_view.png';
import kafkaTeacherDashboard from './assets/kafka_teacher_dashboard.png';

/* ==========================================================================
   Main JavaScript Controller
   ========================================================================== */

// 1. Data Definitions
const SKILLS_DATA = [
  // Languages
  { name: "Python", percentage: 90, category: "languages", meta: "Advanced scripting, OOP, AI models, FastAPI/Flask" },
  { name: "JavaScript (ES6+)", percentage: 85, category: "languages", meta: "Asynchronous patterns, DOM manipulation, React/Node logic" },
  { name: "SQL", percentage: 80, category: "languages", meta: "Complex queries, indexing, joins, database schema design" },
  
  // Web Dev
  { name: "React.js", percentage: 85, category: "web", meta: "Hooks, state management, component architecture, responsive UI" },
  { name: "Node.js & Express.js", percentage: 80, category: "web", meta: "RESTful API construction, middleware, authentication (JWT)" },
  { name: "HTML5 & CSS3", percentage: 90, category: "web", meta: "Semantic layouts, Flexbox/Grid, transitions & variables, responsive design" },
  { name: "Flutter", percentage: 75, category: "web", meta: "Cross-platform mobile apps, widget trees, state management" },
  
  // AI/ML
  { name: "Machine Learning", percentage: 85, category: "aiml", meta: "Supervised/Unsupervised models, regression, classification, clustering" },
  { name: "Deep Learning & NLP", percentage: 80, category: "aiml", meta: "CNNs (MobileNetV2), Transformers, embeddings, PyTorch" },
  { name: "Gemini API & LLMs", percentage: 90, category: "aiml", meta: "Prompt engineering, function calling, agentic flows, text-generation" },
  
  // Tools & Platforms
  { name: "n8n Automation", percentage: 80, category: "tools", meta: "Workflow automation, node integration, RSS feeds, Gmail APIs" },
  { name: "MCP (Model Context Protocol)", percentage: 90, category: "tools", meta: "Agentic MCP servers, workspace integrations, filesystem tools" },
  { name: "Git & GitHub", percentage: 85, category: "tools", meta: "Version control, branching, PR workflows, profile customization" },
  { name: "Databases (MongoDB/MySQL)", percentage: 80, category: "tools", meta: "NoSQL document stores, relational indexing, aggregation pipelines" },
  { name: "Data Science (Pandas/NumPy)", percentage: 85, category: "tools", meta: "Data preprocessing, manipulation, statistical analysis, Matplotlib" }
];

const PROJECTS_DATA = [
  {
    id: "civicvision",
    title: "CivicVision - AI Civic Issue Detection & Management System",
    shortDesc: "An end-to-end mobile & backend platform for civic complaints, featuring TensorFlow/MobileNetV2 classification, CLIP image duplicate detection, automated PDF reporting, and SMTP emergency alerts.",
    longDesc: "CivicVision is a unified city administration portal that bridges citizens and department authorities. Using a Flutter mobile client and FastAPI backend, it processes reports, auto-detects visual duplicates, routes complaints to departments, localizes interfaces in multiple languages, and scores priority for municipal response teams.",
    techStack: ["Flutter", "FastAPI", "TensorFlow/Keras", "MobileNetV2", "CLIP", "MongoDB", "Cloudinary", "MyMemory API", "SMTP", "Python"],
    bannerEmoji: "🏙️",
    category: "aiml",
    video: civicVideo,
    usp: "Unlike traditional complaint portals, CivicVision uniquely combines AI-based issue classification, duplicate complaint prevention via CLIP embeddings, smart spam filtering, intelligent priority scoring, automated formal complaint generation, multilingual support, and SOS emergency reporting — all in one integrated platform.",
    featureGroups: [
      {
        groupTitle: "📱 Mobile Application",
        groupColor: "#6C63FF",
        features: [
          { label: "User Auth", detail: "Citizen and Admin roles with secure login & registration" },
          { label: "Issue Reporting", detail: "Camera capture for real-time photo submission of civic issues" },
          { label: "GPS Tagging", detail: "Automatic GPS location tagging with nearby issues within ~10 km" },
          { label: "Status Tracking", detail: "Real-time complaint status tracking for citizens" },
          { label: "Multilingual UI", detail: "English, Telugu, Hindi, Urdu via MyMemory Translation API" },
          { label: "SOS Module", detail: "Emergency SOS reporting with instant photo + location alerts" }
        ]
      },
      {
        groupTitle: "🤖 AI Classification Engine",
        groupColor: "#FF6584",
        features: [
          { label: "Deep Learning Model", detail: "TensorFlow/Keras with MobileNetV2 pretrained on ImageNet" },
          { label: "Issue Categories", detail: "Classifies: Pothole, Garbage, Road Crack, No Issue" },
          { label: "Model Output", detail: "Returns predicted category + confidence score per report" }
        ]
      },
      {
        groupTitle: "🧠 Smart Validation System",
        groupColor: "#43E97B",
        features: [
          { label: "Auto-Rejection", detail: "No Issue + High Confidence → automatically rejected" },
          { label: "Admin Review", detail: "Low confidence reports → routed for manual admin verification" },
          { label: "Spam Filtering", detail: "Reduces invalid reports, improving overall data quality" }
        ]
      },
      {
        groupTitle: "🔍 Duplicate Detection",
        groupColor: "#F7971E",
        features: [
          { label: "GPS Filtering", detail: "Checks nearby complaints within a configurable radius" },
          { label: "CLIP Similarity", detail: "Compares image embeddings to identify visually similar issues" },
          { label: "Upvote Redirect", detail: "Duplicates are redirected to upvote the existing complaint" }
        ]
      },
      {
        groupTitle: "📊 Priority Scoring Engine",
        groupColor: "#A18CD1",
        features: [
          { label: "Multi-Factor Score", detail: "Calculated from issue category, AI confidence, population density & upvotes" },
          { label: "Purpose", detail: "Ensures faster handling of critical issues & better resource allocation" }
        ]
      },
      {
        groupTitle: "👨‍💼 Admin Verification System",
        groupColor: "#4FACFE",
        features: [
          { label: "Admin Actions", detail: "Approve issue, Reject issue, Change category" },
          { label: "Status Management", detail: "Updates complaint status: In Review → In Progress → Resolved" }
        ]
      },
      {
        groupTitle: "📋 Automated Complaint Generation",
        groupColor: "#F093FB",
        features: [
          { label: "PDF Reports", detail: "Auto-generates formal complaint letters as PDF documents" },
          { label: "Report Contents", detail: "Includes issue details, GPS location, timestamp & Complaint ID" }
        ]
      },
      {
        groupTitle: "🏛️ Authority Routing",
        groupColor: "#43E97B",
        features: [
          { label: "Auto-Mapping", detail: "Routes issues to correct department based on category" },
          { label: "Examples", detail: "Garbage → Sanitation Dept | Road Crack → Public Works | Streetlight → Electrical Wing" }
        ]
      },
      {
        groupTitle: "☁️ Backend & Database",
        groupColor: "#667EEA",
        features: [
          { label: "FastAPI Backend", detail: "Async REST APIs: Auth, Issue Management, AI Prediction, Priority Calculation" },
          { label: "MongoDB", detail: "Stores users, complaints, GPS coordinates, status updates & upvotes" },
          { label: "Cloudinary", detail: "Scalable CDN-backed image & attachment storage" },
          { label: "Security", detail: "Role-based access control (RBAC) for Citizens & Admins with backend token validation" }
        ]
      }
    ],
    highlights: [
      "<strong>📱 Mobile Application (Flutter)</strong>: User registration, camera capture, GPS tagging, nearby complaints (~10km radius feed), and SOS triggers.",
      "<strong>🤖 AI-Based Issue Classification</strong>: Trained MobileNetV2 in TensorFlow/Keras on ImageNet to classify Potholes, Garbage, Road Cracks, and No Issues.",
      "<strong>🧠 Smart Validation System</strong>: Rejects high-confidence 'No Issue' reports automatically, and routes low-confidence files for admin review.",
      "<strong>🔍 Duplicate Issue Detection</strong>: GPS proximity + CLIP embedding similarity to redirect duplicates into upvotes.",
      "<strong>📊 Priority Scoring Engine</strong>: Computed from complaint severity, AI accuracy, population density, and vote counts.",
      "<strong>👨‍💼 Admin Verification System</strong>: Dashboard for approvals, category changes, and status management.",
      "<strong>📋 Automated Complaint Generation</strong>: Formal PDF complaint letters with GPS, timestamps, and IDs.",
      "<strong>🏛️ Authority Routing</strong>: Auto-maps issues to departments (Sanitation, Public Works, Electrical).",
      "<strong>🚨 SOS Emergency Module</strong>: Instant alerts with GPS + photo over SMTP email pipelines.",
      "<strong>🌍 Multilingual Support</strong>: English, Telugu, Hindi, Urdu via MyMemory API.",
      "<strong>☁️ Backend (FastAPI)</strong>: Async REST APIs for auth, AI predictions, issue management & priority queues.",
      "<strong>🗄️ Database (MongoDB)</strong>: Stores users, complaints, coordinates, status & upvotes.",
      "<strong>🖼️ Image Storage (Cloudinary)</strong>: Scalable CDN storage for complaint images & PDFs.",
      "<strong>🔐 Auth & Security</strong>: Citizen/Admin RBAC with secure backend token validation."
    ],
    links: {
      github: "https://github.com/SudheeHacakthon/CivicVision",
      demo: "#"
    }
  },
  {
    id: "campusconnect",
    title: "Campus Connect – Student-Driven Donation Platform",
    shortDesc: "A student-led donation platform enabling books, clothes & essentials donations to verified NGOs, powered by AI chatbot recommendations, gamified leaderboards, and real-time NGO mapping.",
    longDesc: "Campus Connect bridges students and verified NGOs/orphanages within and beyond the campus community. Donors submit items, track their social impact in real time, and earn recognition via a gamified badge system. NGO admins post requirements, manage donation flows, and upload media proofs. An AI chatbot recommends the best-matched NGOs based on needs, past performance, and user behavior.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "OpenAI API", "NodeMailer", "Google Maps API"],
    bannerEmoji: "🎓",
    category: "aiml",
    video: campusVideo,
    usp: "Unlike generic donation portals, Campus Connect combines AI-powered NGO matching, real-time inventory tracking, gamified contribution leaderboards, map-based NGO discovery, and role-split dashboards (Donor vs. NGO Admin) in one campus-focused platform — built to drive sustained social impact.",
    featureGroups: [
      {
        groupTitle: "👥 Dual Login System",
        groupColor: "#6C63FF",
        features: [
          { label: "Student / Donor", detail: "Donate items, track donation impact, and earn badges on the leaderboard" },
          { label: "NGO / Admin", detail: "Post requirements, manage incoming donations, and upload proof media" }
        ]
      },
      {
        groupTitle: "📦 Smart Donation Flow",
        groupColor: "#43E97B",
        features: [
          { label: "Need-Based Donation", detail: "Donate items matched to real NGO posted requirements and ratings" },
          { label: "Real-Time Tracking", detail: "Live inventory tracking with instant NGO suggestions" }
        ]
      },
      {
        groupTitle: "💬 AI-Powered Chatbot",
        groupColor: "#FF6584",
        features: [
          { label: "FAQ Handling", detail: "Answers platform queries and guides new donors through the process" },
          { label: "Smart NGO Recommendations", detail: "Suggests NGOs based on item needs, past performance, and user behavior via OpenAI API" }
        ]
      },
      {
        groupTitle: "🏅 Rewards & Leaderboard",
        groupColor: "#F7971E",
        features: [
          { label: "Badge System", detail: "Students earn milestone badges based on contribution volume and type" },
          { label: "Leaderboard", detail: "Public ranking encourages friendly competition and sustained engagement" }
        ]
      },
      {
        groupTitle: "🌍 Map & Media Support",
        groupColor: "#4FACFE",
        features: [
          { label: "NGO Map View", detail: "Browse NGOs on an interactive Google Maps interface with location-based filtering" },
          { label: "Media Uploads", detail: "NGOs upload donation proofs and photos for full transparency" }
        ]
      },
      {
        groupTitle: "🛠️ Backend & Auth",
        groupColor: "#A18CD1",
        features: [
          { label: "Node.js + Express", detail: "REST APIs for auth, donations, NGO management, and notifications" },
          { label: "MongoDB", detail: "Stores user profiles, donation records, NGO data, and requirements" },
          { label: "Firebase", detail: "Handles authentication and email/SMS notification triggers" },
          { label: "JWT Sessions", detail: "Secure, role-based session management for Donors and Admins" }
        ]
      },
      {
        groupTitle: "✨ Key Pages (Frontend)",
        groupColor: "#F093FB",
        features: [
          { label: "Dashboard", detail: "Stats overview showing user impact, donated items, and earned badges" },
          { label: "DonateNow", detail: "Submission form to donate items matched to current NGO requirements" },
          { label: "NGO Browser", detail: "Browse NGOs, view requirements, ratings, and location on map" },
          { label: "Rewards Page", detail: "Gamification hub — badges earned, leaderboard rank, contribution history" },
          { label: "Admin Panel", detail: "NGO admins post requirements, upload media, and track donations" }
        ]
      }
    ],
    highlights: [
      "<strong>👥 Dual Login System</strong>: Separate roles for Student Donors and NGO Admins with distinct dashboards.",
      "<strong>📦 Smart Donation Flow</strong>: Need-based item matching with real-time inventory tracking.",
      "<strong>💬 AI Chatbot</strong>: OpenAI-powered assistant for FAQs and intelligent NGO recommendations.",
      "<strong>🏅 Rewards & Leaderboard</strong>: Badge system and public rankings to drive engagement.",
      "<strong>🌍 Map Support</strong>: Google Maps integration for location-based NGO discovery.",
      "<strong>🛠️ Full-Stack MERN</strong>: React + Tailwind frontend, Node/Express backend, MongoDB database.",
      "<strong>🔐 Auth</strong>: Firebase auth with JWT role-based session management.",
      "<strong>📧 Notifications</strong>: NodeMailer SMS/Email alerts for donation updates."
    ],
    links: {
      github: "https://github.com/RithwikMohan/STUDENT-DONATION",
      demo: "#"
    }
  },
  {
    id: "exambridge",
    title: "Virtual Exam Bridge",
    shortDesc: "Secure lab-internal examination system with real-time tracking and role-based evaluation structures.",
    longDesc: "Virtual Exam Bridge is a secure web-based testing platform designed specifically for the IT department at CBIT. It streamlines exam scheduling, answer sheet submissions, and real-time student activity tracking for proctors.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    bannerEmoji: "📝",
    category: "fullstack",
    highlights: [
      "Designed secure database schemas and REST APIs for multi-role operations (Admin, Proctor, Student).",
      "Created real-time submission tracking and structured verification mechanisms for platform reliability.",
      "Implemented automated question-bank sorting and scheduling queues.",
      "Adopted by the IT department, supporting concurrent execution for student assessment cohorts."
    ],
    links: {
      github: "https://github.com/RithwikMohan/ead_a2",
      demo: "https://virtualexam-bridge-frontend.onrender.com/login"
    }
  },
  {
    id: "newssummarizer",
    title: "AI News Summarizer & Newsletter",
    shortDesc: "n8n-driven newsletter workflow that fetches AI & tech news from multiple RSS feeds, summarizes them with Gemini AI, and delivers a personalized daily email — turning 30+ minutes of browsing into a 2-minute digest.",
    longDesc: "Every morning professionals spend 30–45 minutes browsing 10+ websites just to stay updated. This project eliminates that friction entirely. Built with n8n, it runs a fully automated pipeline: a scheduled trigger fires daily at 10 AM, parallel RSS nodes fetch AI and technology news from multiple sources, all content is merged and aggregated, Gemini 2.5 Flash synthesizes it into a structured newsletter, and Gmail delivers it automatically — zero manual effort, zero missed news.",
    techStack: ["n8n", "Gemini 2.5 Flash", "RSS Feeds", "Gmail API", "Google Account"],
    bannerEmoji: "📰",
    category: "aiml",
    workflowImages: [newsNodes, newsNode2],
    usp: "Unlike generic news apps, this is a fully automated, zero-maintenance personal newsletter pipeline. It uniquely combines parallel multi-source RSS fetching, AI-powered summarization via Gemini 2.5 Flash, and direct Gmail delivery — reducing 30+ minutes of daily news browsing to a single 2-minute personalized email.",
    featureGroups: [
      {
        groupTitle: "⏰ Step 1 — Schedule Trigger",
        groupColor: "#6C63FF",
        features: [
          { label: "Daily Automation", detail: "Triggers workflow automatically at 10 AM every day — no manual execution needed" },
          { label: "Manual Testing", detail: "'Execute Workflow' button allows instant manual test runs during development" }
        ]
      },
      {
        groupTitle: "📡 Step 2 — RSS Feed Fetching",
        groupColor: "#00C9FF",
        features: [
          { label: "What is RSS?", detail: "RSS is a news delivery system — instead of visiting websites, updates come directly to you, like subscribing to a digital newspaper" },
          { label: "AI News Source", detail: "Fetches from feeds like aibusiness.com/rss.xml, thehackernews.com, techcrunch.com/AI feed" },
          { label: "Tech News Source", detail: "Fetches from technology feeds like reddit.com/r/technology/.rss and The Verge RSS" },
          { label: "Parallel Execution", detail: "Two RSS nodes run simultaneously (AI news + Tech news) for faster pipeline throughput" }
        ]
      },
      {
        groupTitle: "🔀 Step 3 — Merge & Aggregate",
        groupColor: "#43E97B",
        features: [
          { label: "Merge Node", detail: "Combines outputs from both RSS feed nodes into a single unified dataset" },
          { label: "Aggregate Node", detail: "Collects all individual news items into one consolidated list for AI processing" }
        ]
      },
      {
        groupTitle: "🤖 Step 4 — Gemini AI Summarization",
        groupColor: "#FF6584",
        features: [
          { label: "Gemini 2.5 Flash", detail: "Synthesizes all aggregated articles into a structured, high-quality newsletter summary" },
          { label: "Smart Prompt", detail: "AI prompt instructs Gemini to categorize news, extract key takeaways, and format output for email readability" },
          { label: "Multi-Source Synthesis", detail: "Combines context from multiple feeds into one coherent narrative instead of raw article dumps" }
        ]
      },
      {
        groupTitle: "📧 Step 5 — Gmail Delivery",
        groupColor: "#F7971E",
        features: [
          { label: "Gmail Node", detail: "Sends the formatted AI-generated newsletter directly to subscriber inboxes via Gmail API" },
          { label: "Secure Auth", detail: "Uses Google OAuth — no API key exposure, fully secure credential management inside n8n" },
          { label: "Email Formatting", detail: "Output is structured for clean email rendering with sections, bullet points, and source attribution" }
        ]
      },
      {
        groupTitle: "📊 Key Benefits & Impact",
        groupColor: "#A18CD1",
        features: [
          { label: "Time Saved", detail: "Eliminates 30–45 minutes of daily browsing → delivers a 2-minute personalized digest at 10 AM" },
          { label: "Multi-Source Coverage", detail: "Consolidates 30+ RSS feeds from AI, tech, and industry sources into one email" },
          { label: "Zero Maintenance", detail: "Fully automated pipeline — once deployed, runs indefinitely without manual intervention" },
          { label: "Scalable Design", detail: "Easily extend with more RSS feed nodes for new categories (Finance, Science, Sports) without restructuring" }
        ]
      }
    ],
    highlights: [
      "Created zero-maintenance automated workflow sequences inside the n8n visual flow developer.",
      "Utilized Gemini 2.5 Flash to synthesize multiple news sources, categorizing and generating summaries.",
      "Interfaced with Gmail API to automate bulk email deliveries securely without API key exposures.",
      "Reduced reading overhead for target subscribers by consolidating 30+ feeds into a single daily digest."
    ],
    links: {
      github: null,
      demo: "#"
    }
  },
  {
    id: "productivityassistant",
    title: "AI Productivity Assistant using MCP",
    shortDesc: "5 real-world agentic workflows built with Model Context Protocol (MCP) in Cursor IDE — from auto-applying to jobs via Gmail to fetching live train schedules and generating personalized learning paths.",
    longDesc: "The MCP (Model Context Protocol) Mega Workshop bridges LLMs running in Cursor IDE directly to real external APIs via Pipedream-authenticated MCP servers. Instead of writing code, you simply describe what you want in plain English — the AI agent reads your context, calls the right tool, and takes action. Built 5 complete real-world workflows covering job applications, LinkedIn posting, live railway data, and AI-powered learning paths.",
    techStack: ["Cursor IDE", "MCP", "Pipedream", "Gmail API", "LinkedIn API", "Indian Railway API", "Gemini API", "Streamlit", "Python"],
    bannerEmoji: "⚙️",
    category: "aiml",
    workflowImages: [mcpCursor],
    projectGalleries: [
      { label: "Cursor + MCP Setup",  images: [mcpCursor] },
      { label: "Job Application",     images: [mcpJob] },
      { label: "Train Info",          images: [mcpTrain] },
      { label: "Learning Path",       images: [mcpLearn1, mcpLearn2] }
    ],
    usp: "Unlike traditional automation scripts, MCP lets the LLM itself decide which tool to call, in what order, and with what parameters — based purely on natural language intent. Every workflow here is zero-code: just a prompt in Cursor IDE and real actions happen in Gmail, LinkedIn, Railway APIs, and more.",
    featureGroups: [
      {
        groupTitle: "🖥️ Project 0 — Cursor + MCP Setup",
        groupColor: "#6C63FF",
        features: [
          { label: "Cursor IDE", detail: "AI-native code editor where you chat with the agent — it reads your project files and calls MCP tools" },
          { label: "MCP Servers via Pipedream", detail: "Authenticate Gmail, LinkedIn, YouTube, Drive, Notion on Pipedream and get secure MCP URLs" },
          { label: "Config Format", detail: "Add servers to Cursor's MCP tab: { \"Gmail\": { \"url\": \"https://mcp.pipedream.net/...\" } }" },
          { label: "How It Works", detail: "Agent reads your intent → selects the right MCP tool → calls the API → returns real results, all in one chat" }
        ]
      },
      {
        groupTitle: "📎 Project 1 — LinkedIn Post Creator",
        groupColor: "#00C9FF",
        features: [
          { label: "What It Does", detail: "Creates a LinkedIn image post with custom text and image URL in one prompt" },
          { label: "MCP Tools Used", detail: "LinkedIn MCP server (via Pipedream) + Cloudinary for image hosting" },
          { label: "Example Prompt", detail: "\"Create an image post on LinkedIn with this text: [text] and image: [Cloudinary URL]\"" },
          { label: "Result", detail: "Agent calls the LinkedIn API, constructs the post, and publishes it directly to your profile" }
        ]
      },
      {
        groupTitle: "📧 Project 2 — Job Application via Gmail",
        groupColor: "#FF6584",
        features: [
          { label: "What It Does", detail: "Extracts your professional details from LinkedIn profile, writes a cover letter, and sends a job application email" },
          { label: "MCP Tools Used", detail: "LinkedIn MCP (fetch profile) + Gmail MCP (send application email)" },
          { label: "Example Prompt", detail: "\"Get my details from LinkedIn, apply for a job at Google, write a cover letter, and send to careers@google.com\"" },
          { label: "Result", detail: "Complete job application email with auto-generated cover letter sent without writing a single line of code" }
        ]
      },
      {
        groupTitle: "🚂 Project 3 — Live Railway Info",
        groupColor: "#43E97B",
        features: [
          { label: "What It Does", detail: "Fetches live Indian Railway data — train schedules, seat availability, and real-time running status" },
          { label: "MCP Config", detail: "{ \"Indian Railway\": { \"url\": \"https://railway-mcp.amithv.xyz/mcp\" } }" },
          { label: "Use Cases", detail: "'Hyderabad to Tirupati trains on 2025-07-21' | 'Seat availability of KRISHNA EXP' | 'Live status of train 17230'" },
          { label: "Result", detail: "Structured train schedule, seat class availability, and live location returned in seconds via natural language" }
        ]
      },
      {
        groupTitle: "📚 Project 5 — Personalized Learning Path Generator",
        groupColor: "#F7971E",
        features: [
          { label: "What It Does", detail: "Generates a personalized AI-curated learning path using Gemini API, pulls YouTube resources, saves to Google Drive & Notion" },
          { label: "Stack", detail: "Python + Streamlit frontend, Gemini API for path generation, YouTube/Drive/Notion MCP servers" },
          { label: "Setup", detail: "Clone repo → create venv → pip install -r requirements.txt → streamlit run app.py" },
          { label: "Result", detail: "Enter your goal topic, get a structured multi-week plan with YouTube links auto-saved to Drive and Notion" }
        ]
      }
    ],
    highlights: [
      "Configured custom MCP servers connecting workspace contexts directly to external triggers.",
      "Automated LinkedIn posting workflows and Gmail job application generation using LLM function calling.",
      "Fetched live Indian Railway schedules, seat availability, and train running status via railway MCP.",
      "Built personalized learning path generator using Gemini API, YouTube, Google Drive, and Notion MCP servers."
    ],
    links: {
      github: null,
      demo: "#"
    }
  },
  {
    id: "iotenergy",
    title: "Smart Energy Monitoring & Remote Appliance Control System",
    shortDesc: "A smart socket system that monitors real-time power consumption of household appliances and enables both automatic and user-controlled power cut-off via a Kafka-streamed Streamlit dashboard.",
    longDesc: "We developed a smart socket system using ESP32, ACS712 current sensor, and a relay module to monitor and control real household appliances. Power readings are streamed through a Python–Kafka pipeline to a Streamlit dashboard that displays live consumption, energy cost, budget tracking, and enables remote appliance shutdown — automatically cutting power when the user-defined budget limit is exceeded.",
    techStack: ["ESP32", "ACS712 Sensor", "Relay Module", "Apache Kafka", "Python", "Streamlit", "C++"],
    bannerEmoji: "⚡",
    category: "iot",
    video: iotVideo,
    usp: "Unlike generic IoT demos, this system monitors real household appliances plugged into a modified smart socket — combining physical hardware (ESP32 + ACS712 + Relay), real-time Kafka streaming, budget-aware cost tracking, and both manual and automatic power cut-off in one integrated solution.",
    featureGroups: [
      {
        groupTitle: "🔌 Hardware Setup",
        groupColor: "#F7971E",
        features: [
          { label: "ESP32 Microcontroller", detail: "Reads ACS712 sensor output, calculates current & power, controls relay" },
          { label: "ACS712 Current Sensor", detail: "Connected in series with the socket's live line — measures real current draw" },
          { label: "Relay Module", detail: "Physically disconnects power to the socket on command or budget breach" },
          { label: "Smart Socket", detail: "Modified extension socket where real appliances (charger, lamp, laptop) are plugged in" }
        ]
      },
      {
        groupTitle: "⚙️ How It Works",
        groupColor: "#6C63FF",
        features: [
          { label: "1. Appliance Connection", detail: "Phone charger, laptop charger, LED lamp, or table lamp plugged into smart socket" },
          { label: "2. Power Monitoring", detail: "ACS712 measures current continuously; ESP32 calculates Current (A) & Power (W)" },
          { label: "3. Data Streaming", detail: "ESP32 → Python app → Kafka → calculates energy consumption, cost & budget alerts" },
          { label: "4. Dashboard", detail: "Streamlit shows live power, energy used, cost incurred, budget remaining & appliance status" },
          { label: "5. Remote Control", detail: "User presses STOP APPLIANCE → command sent to ESP32 → relay disconnects socket" },
          { label: "6. Auto Protection", detail: "If Power Usage > Threshold, ESP32 auto switches OFF relay to protect budget" }
        ]
      },
      {
        groupTitle: "📊 Dashboard Features",
        groupColor: "#43E97B",
        features: [
          { label: "Live Power Consumption", detail: "Real-time wattage display updated from Kafka stream" },
          { label: "Energy & Cost Tracking", detail: "Cumulative kWh usage and electricity cost calculation" },
          { label: "Budget Monitor", detail: "Remaining budget displayed with alert when limit is near" },
          { label: "Appliance Status", detail: "Live ON/OFF status with remote control button" }
        ]
      },
      {
        groupTitle: "🏗️ System Architecture",
        groupColor: "#4FACFE",
        features: [
          { label: "Data Pipeline", detail: "AC Supply → Smart Socket → Relay → ACS712 → ESP32 → Python → Kafka → Streamlit" },
          { label: "Kafka Streaming", detail: "Buffers real-time high-velocity sensor events for reliable processing" },
          { label: "Python Engine", detail: "Handles energy calculation, cost tracking, budget alerts, and Kafka producer logic" }
        ]
      }
    ],
    highlights: [
      "<strong>🔌 Smart Socket Hardware</strong>: ESP32 + ACS712 + Relay + modified extension socket for real appliance monitoring.",
      "<strong>⚡ Real-Time Measurement</strong>: Continuously measures Current (A) and Power (W) of live household appliances.",
      "<strong>📡 Kafka Streaming Pipeline</strong>: Python app streams sensor data via Kafka for scalable, reliable ingestion.",
      "<strong>📊 Streamlit Dashboard</strong>: Displays live power, energy usage, cost, budget remaining, and appliance status.",
      "<strong>🎮 Remote Control</strong>: User can remotely disconnect appliance via dashboard STOP button → relay cuts power.",
      "<strong>🛡️ Auto Protection</strong>: ESP32 automatically cuts relay when power usage exceeds configured budget threshold."
    ],
    links: {
      github: "https://github.com/RithwikMohan/IoT-Smart-Energy-Predictor",
      demo: "#"
    }
  },
  {
    id: "purpllelens",
    title: "Purplle Store Intelligence System",
    shortDesc: "Real-time retail analytics platform for Purplle hackathon (Tech Challenge PS3) — processes CCTV video + POS transactions to surface live KPIs, conversion funnels, zone heatmaps, and anomaly alerts via a live dashboard.",
    longDesc: "An end-to-end retail intelligence system built for the Purplle hackathon. CCTV footage from two physical stores is processed through a YOLOv8 detection and cross-camera Re-ID pipeline that emits structured JSONL events. A FastAPI backend with SQLite stores these alongside POS CSV imports and serves computed metrics — visitor counts, conversion funnels, dwell time, queue depth, and anomaly detection — to a live polling dashboard refreshed every 5 seconds. Supports two physical stores (ST1008 & ST1076) simultaneously.",
    techStack: ["Python", "FastAPI", "YOLOv8", "SQLite", "SQLAlchemy", "Chart.js", "HTML/CSS/JS", "Docker", "Apache Kafka", "Pandas", "Pydantic"],
    bannerEmoji: "🛍️",
    category: "aiml",
    usp: "Unlike generic retail dashboards, this system processes raw CCTV video through a full CV pipeline (YOLOv8 detection → cross-camera Re-ID tracker → JSONL event emitter), correlates it with POS transaction data, and surfaces anomalies in real time — all live-polled from a FastAPI + SQLite backend with offline demo fallback. Built end-to-end in under 48 hours for a national hackathon.",
    projectGalleries: [
      { label: "Live Dashboard",    images: [purplleDashboardFull, purplleDashboardMain] },
      { label: "Zone Heatmap",      images: [purplleHeatmapLayout, purplleHeatmapZones] },
      { label: "Anomaly Alerts",    images: [purplleAnomaliesPanel, purplleAnomalyCritical] },
      { label: "Event Stream",      images: [purplleEventStream] }
    ],
    featureGroups: [
      {
        groupTitle: "🎥 CCTV Processing Pipeline",
        groupColor: "#7C3AED",
        features: [
          { label: "YOLOv8 Detection", detail: "Person detection with zone assignment extracted directly from raw CCTV video frames" },
          { label: "Cross-Camera Re-ID", detail: "Tracker maintains unique visitor identities across multiple camera feeds per store" },
          { label: "JSONL Event Emitter", detail: "Structured events (ENTRY, ZONE_ENTER/EXIT, BILLING_QUEUE_JOIN, PURCHASE) written to JSONL files" },
          { label: "Store Normalizer", detail: "Handles variant store IDs (store_1076, STORE_BLR_1076) and maps to canonical store codes" },
          { label: "Real-Time Replay", detail: "replay_realtime.py feeds events to the API with configurable speed multipliers + time alignment" }
        ]
      },
      {
        groupTitle: "⚡ FastAPI Backend",
        groupColor: "#0EA5E9",
        features: [
          { label: "Bulk Ingestion", detail: "POST /events/ingest accepts up to 500 events per call with automatic POS CSV import" },
          { label: "Live KPI Metrics", detail: "GET /stores/{id}/metrics — unique visitors, conversion rate, avg dwell time, queue depth" },
          { label: "Conversion Funnel", detail: "4-stage funnel: Entry → Zone Visit → Billing Queue → Purchase with drop-off rates" },
          { label: "Zone Heatmap API", detail: "GET /stores/{id}/heatmap — visit frequency per zone, driving the color-coded store layout view" },
          { label: "Anomaly Detection", detail: "Detects queue spikes, dead zones, and conversion drops; returns severity + recommended action" },
          { label: "Health Check", detail: "GET /health monitors feed freshness and system status across both store feeds" }
        ]
      },
      {
        groupTitle: "📊 Live Dashboard Features",
        groupColor: "#10B981",
        features: [
          { label: "Store Toggle", detail: "Switch between Store 1 (ST1008) and Store 2 (ST1076) in real time" },
          { label: "KPI Cards", detail: "Animated live cards: Unique Visitors, Conversion %, Queue Depth, Abandonment Rate" },
          { label: "Rolling Time-Series Chart", detail: "20-point live Chart.js visualization — Unique Visitors + Queue Depth overlaid" },
          { label: "Conversion Funnel Panel", detail: "4-stage horizontal bar funnel showing Entry→Zone→Queue→Purchase with % drop-off annotations" },
          { label: "Zone Heatmap", detail: "Color-coded store floor plan (Low/Med/High) showing visit frequency per product zone" },
          { label: "Anomaly Alert Panel", detail: "Real-time critical/warning alerts (e.g. CONVERSION DROP) with recommended actions" },
          { label: "Event Stream Feed", detail: "Live scrolling log of CCTV events — ENTRY, ZONE ENTER/EXIT, BILLING QUEUE JOIN per visitor ID" },
          { label: "Offline Demo Mode", detail: "Dashboard falls back gracefully to realistic demo data when API is unreachable" }
        ]
      },
      {
        groupTitle: "🗄️ Data & Storage Layer",
        groupColor: "#F59E0B",
        features: [
          { label: "SQLite + SQLAlchemy", detail: "Lightweight embedded DB for event storage, metrics aggregation, and POS correlation" },
          { label: "POS CSV Integration", detail: "Auto-imports point-of-sale transaction CSV on startup for cross-referencing purchase conversions" },
          { label: "Store 1 & 2 Events", detail: "Pre-generated events_store1.jsonl and events_store2.jsonl included for instant demo replay" },
          { label: "Dwell Time Tracking", detail: "Computed per visitor per zone from ZONE_ENTER / ZONE_EXIT event timestamps" }
        ]
      },
      {
        groupTitle: "🧪 Engineering & DevOps",
        groupColor: "#EC4899",
        features: [
          { label: "Docker + Compose", detail: "Containerized full stack — FastAPI + pipeline runner — with a single docker-compose up" },
          { label: "pytest Coverage", detail: "Unit tests for metrics calculations and error handling via pytest tests/ -v --cov=app" },
          { label: "CORS Middleware", detail: "FastAPI configured with CORS for seamless browser-to-API dashboard communication" },
          { label: "PowerShell / Bash Scripts", detail: "run.ps1 / run.sh for one-click pipeline execution on Windows and Unix" },
          { label: "Architecture", detail: "CCTV Video → YOLOv8 → Re-ID Tracker → JSONL → FastAPI + SQLite → Live Dashboard (poll 5s)" }
        ]
      }
    ],
    highlights: [
      "<strong>🎥 CV Pipeline</strong>: YOLOv8 person detection → cross-camera Re-ID tracker → JSONL event emission per store.",
      "<strong>⚡ FastAPI Backend</strong>: Bulk ingest (500 events/call), KPI metrics, funnel, heatmap, anomaly APIs.",
      "<strong>📊 Live Dashboard</strong>: 5-second polling with Chart.js time-series, conversion funnel, and zone heatmap.",
      "<strong>🚨 Anomaly Engine</strong>: Real-time detection of queue spikes, dead zones, and conversion drops with action recommendations.",
      "<strong>📡 Event Stream</strong>: Live scrolling feed of CCTV events per visitor ID (ENTRY, ZONE, BILLING QUEUE JOIN).",
      "<strong>🗄️ SQLite + POS</strong>: Lightweight embedded storage with automatic POS CSV correlation on startup.",
      "<strong>🐳 Docker</strong>: Fully containerized pipeline + API for one-command deployment.",
      "<strong>🧪 Tested</strong>: pytest suite covering metrics calculations and error handling with coverage reports."
    ],
    links: {
      github: "https://github.com/RithwikMohan/Purplle-Lens---Retail-Intelligence-Platform",
      demo: "#"
    }
  },
  {
    id: "kafkalecture",
    title: "Realtime Lecture Analytics — Kafka + Spark Streaming",
    shortDesc: "End-to-end real-time classroom engagement system: students signal understanding live, PySpark processes confusion metrics over a 60-second sliding window, and teachers get an instant WebSocket-powered dashboard — built on a full Kafka + Spark big data pipeline.",
    longDesc: "A complete Big Data Assignment project showcasing a production-grade streaming architecture. Students click \"I've Got It\", \"A Bit Confused\", or \"Completely Lost\" in their browser. FastAPI publishes each click to a Kafka topic. PySpark Structured Streaming consumes the topic, computes a weighted confusion percentage over a 60-second sliding window, extracts confused-topic keywords against a Big Data syllabus keyword list, and writes aggregated results back to Kafka every 0.5 seconds. A Kafka consumer thread in FastAPI broadcasts updates to the teacher dashboard and student view via WebSocket — zero-latency, max 10 updates/second.",
    techStack: ["Apache Kafka", "PySpark Structured Streaming", "FastAPI", "WebSockets", "Python", "HTML/CSS/JS", "Zookeeper"],
    bannerEmoji: "📡",
    category: "iot",
    usp: "Unlike static polling systems, this project implements a true end-to-end Big Data pipeline — Kafka producer → PySpark Structured Streaming (60s sliding window) → Kafka consumer → WebSocket broadcast — giving teachers a real-time confusion heatmap and topic-aware word cloud, all in a single cohesive system.",
    projectGalleries: [
      { label: "Student View",       images: [kafkaStudentView] },
      { label: "Teacher Dashboard",  images: [kafkaTeacherDashboard] }
    ],
    featureGroups: [
      {
        groupTitle: "🎓 Student Interface (index.html)",
        groupColor: "#6C63FF",
        features: [
          { label: "Class Pulse Buttons", detail: "Three one-click signals: \"I've Got It\", \"A Bit Confused\", \"Completely Lost\" — REST POST to FastAPI on each click" },
          { label: "Lesson Plan Sidebar", detail: "Displays the current active lecture topic (Kafka, BDA, etc.) pushed by the teacher in real time via WebSocket" },
          { label: "Live Q&A Board", detail: "Students submit anonymous questions; others can upvote — sorted live by vote count" },
          { label: "WebSocket Updates", detail: "Student view subscribes to /ws/student and re-renders lesson plan and Q&A on every server broadcast" }
        ]
      },
      {
        groupTitle: "🖥️ Teacher Dashboard (dashboard.html)",
        groupColor: "#00C9FF",
        features: [
          { label: "Live Pulse Panel", detail: "Displays real-time confusion % computed by Spark, plus Got It / Confused / Lost counts for the past 60 seconds" },
          { label: "Pulse Refresh Bar", detail: "Animated countdown timer showing seconds until the next Spark window result (refreshes every 0.5s)" },
          { label: "Lesson Plan Manager", detail: "Teacher can add, start, complete, and delete lecture topics — active topic is broadcast to all students instantly" },
          { label: "Live Q&A Management", detail: "Full Q&A board with student question count badge; teacher can dismiss answered questions" },
          { label: "Spark Topic Buzz", detail: "Shows top confused syllabus keywords extracted by PySpark from confused/lost student messages" }
        ]
      },
      {
        groupTitle: "⚡ FastAPI Backend (app.py)",
        groupColor: "#43E97B",
        features: [
          { label: "REST /api/click", detail: "Students POST a status (got_it / confused / lost) — FastAPI produces the event to the student_clicks Kafka topic" },
          { label: "Topic Management APIs", detail: "CRUD endpoints for lecture topics: add, activate, complete, delete — changes are broadcast over WebSocket" },
          { label: "Q&A APIs", detail: "Students submit questions and upvote; ranked by upvote count and served over WebSocket" },
          { label: "WebSocket /ws/dashboard & /ws/student", detail: "Two separate WebSocket endpoints; throttled to max 10 broadcasts/second to prevent client flooding" },
          { label: "Kafka Consumer Thread", detail: "Background thread reads confusion_metrics and topic_metrics topics and merges them into the broadcast payload" }
        ]
      },
      {
        groupTitle: "🔥 PySpark Streaming Pipeline (spark_analytics.py)",
        groupColor: "#FF6584",
        features: [
          { label: "Kafka Source", detail: "Reads from student_clicks topic in real time using Spark Structured Streaming's Kafka connector" },
          { label: "Confusion Metric", detail: "60-second sliding window: confusion% = (confused × 0.5 + lost × 1.0) / total × 100 — written to confusion_metrics topic" },
          { label: "Topic Word Cloud", detail: "Extracts syllabus keywords (hadoop, spark, kafka, ML terms) from confused/lost messages; top keywords → topic_metrics topic" },
          { label: "High-Frequency Output", detail: "Writes aggregated results back to Kafka every 0.5 seconds for near-realtime teacher visibility" }
        ]
      },
      {
        groupTitle: "🏗️ Kafka Architecture",
        groupColor: "#F7971E",
        features: [
          { label: "student_clicks Topic", detail: "Every student click event is published here by FastAPI — acts as the raw event stream input for Spark" },
          { label: "confusion_metrics Topic", detail: "Spark writes sliding-window confusion scores here; FastAPI consumer reads and broadcasts to teacher" },
          { label: "topic_metrics Topic", detail: "Spark writes top confused syllabus keywords here; powers the Spark Topic Buzz word cloud on the dashboard" },
          { label: "start_kafka.bat", detail: "One-click batch script: kills existing Java processes, starts Zookeeper and Kafka broker in separate terminal windows" },
          { label: "hard_reset.bat", detail: "Emergency reset: kills all Java processes and wipes Kafka state for a clean restart" }
        ]
      }
    ],
    highlights: [
      "<strong>📡 Full Kafka Pipeline</strong>: FastAPI producer → student_clicks topic → PySpark consumer → confusion_metrics + topic_metrics → FastAPI consumer thread.",
      "<strong>🔥 PySpark Structured Streaming</strong>: 60-second sliding window computes weighted confusion% and extracts Big Data syllabus keywords from student messages.",
      "<strong>🎓 Student View</strong>: One-click \"I've Got It / Confused / Lost\" signals with live Q&A board and lesson plan sidebar updated in real time.",
      "<strong>🖥️ Teacher Dashboard</strong>: Live confusion%, Spark Topic Buzz keyword cloud, lesson plan manager, and Q&A moderator — all WebSocket-powered.",
      "<strong>⚡ FastAPI Backend</strong>: REST click API, topic CRUD, Q&A APIs, WebSocket broadcaster (throttled to 10 updates/sec), and background Kafka consumer thread.",
      "<strong>🛡️ Zero-Latency UX</strong>: WebSocket push from server to all connected clients — no polling, instant updates for both teacher and students."
    ],
    links: {
      github: "https://github.com/RithwikMohan/realtime-lecture-analytics-kafka-.git",
      demo: null
    }
  },
  {
    id: "uidaihackathon",
    title: "Aadhaar Dark Zones — UIDAI Authentication Risk Analyzer",
    shortDesc: "National hackathon data science project that uncovered a hidden risk in India's identity ecosystem: Aadhaar holders update demographics but skip biometrics, creating millions of authentication-failure-prone records — the 'Dark Zone' phenomenon.",
    longDesc: "Instead of analyzing just enrolment counts, we identified a hidden systemic risk: Aadhaar holders who update demographic information (address corrections, name changes) but do not perform corresponding biometric updates. These records appear valid in UIDAI systems but can face authentication failures at the point of service. Using all three UIDAI open datasets (Enrolment + Biometric + Demographic) merged at the date/state/district/pincode level, we quantified this 'Dark Zone' phenomenon across age groups, states, districts, and time — producing five visualizations and a normalized risk score per region.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Google Colab", "Jupyter Notebook", "ZIP Data Engineering"],
    bannerEmoji: "🆔",
    category: "iot",
    usp: "Unlike standard Aadhaar coverage dashboards that show enrolment counts, this analysis introduces the concept of 'Dark Zones' — regions where biometric compliance lags far behind demographic update activity. We invented three flag types (Strict, Soft, Gap-Based), a population-normalized risk score, and validated the hypothesis with five charts showing the risk is adult-driven, geographically concentrated, and accumulates month-over-month.",
    projectGalleries: [
      { label: "Demo vs Bio Volume",  images: [uidaiDemoVsBio] },
      { label: "Age-wise Gap",         images: [uidaiAgewise] },
      { label: "Monthly Risk Trend",   images: [uidaiMonthly] },
      { label: "Top 10 Districts",     images: [uidaiDistricts] },
      { label: "Risk Distribution",    images: [uidaiRiskDist] }
    ],
    featureGroups: [
      {
        groupTitle: "🔍 Core Problem: The Dark Zone Hypothesis",
        groupColor: "#DC2626",
        features: [
          { label: "Hidden Risk Identified", detail: "Aadhaar holders update demographic info (address, corrections) but skip corresponding biometric updates — creating records that appear valid but fail at authentication" },
          { label: "Dark Zone Definition", detail: "A region/record where Demographic Updates > Biometric Updates, creating a biometric compliance gap" },
          { label: "Why It Matters", detail: "Enrollment coverage alone does not guarantee Aadhaar usability — the gap is invisible in standard UIDAI dashboards" },
          { label: "Scale of Risk", detail: "18+ adult population contributes ~17.5M update gap vs ~1M for the 5–17 age group — overwhelming adult dominance" }
        ]
      },
      {
        groupTitle: "⚙️ Data Engineering Pipeline",
        groupColor: "#0EA5E9",
        features: [
          { label: "3 UIDAI Datasets", detail: "Loaded Enrolment (age groups + population), Biometric (bio update counts), Demographic (demo update counts) from ZIP archives" },
          { label: "ZIP Extraction", detail: "Programmatically extracted nested ZIPs uploaded to Google Colab, flattened all CSVs into unified dataframes" },
          { label: "Data Cleaning", detail: "Datetime parsing, schema standardization, missing value handling via fillna(0), duplicate resolution" },
          { label: "Master Dataset", detail: "Merged all 3 datasets on [date, state, district, pincode] — grouped to eliminate duplicate records before merge" }
        ]
      },
      {
        groupTitle: "🧠 Dark Zone Logic (3 Flag Types)",
        groupColor: "#7C3AED",
        features: [
          { label: "Strict Dark Zone", detail: "Flag raised when demo > 0 AND bio == 0 — demographic updates happened but zero biometric compliance" },
          { label: "Soft Dark Zone", detail: "Flag raised when demo > bio — demographic activity growing faster than biometric compliance" },
          { label: "Gap-Based Dark Zone (Primary)", detail: "Dark Zone Gap = Demographic Updates − Biometric Updates — the primary metric used across all analyses" },
          { label: "Risk Score", detail: "risk_score = (demo updates − bio updates) / population — normalizes risk across regions of different sizes" }
        ]
      },
      {
        groupTitle: "📊 Analyses & Visualizations",
        groupColor: "#F59E0B",
        features: [
          { label: "Demo vs Bio Update Volume", detail: "Bar chart confirming demographic updates massively exceed biometric updates — especially in adults (demo_age_17_ >> bio_age_17_)" },
          { label: "Age-wise Dark Zone Gap", detail: "18+ adults account for ~17.5M unit gap vs ~1M for 5–17 group — risk is adult-driven" },
          { label: "Month-wise Risk Accumulation", detail: "Line chart across 2025 months shows spike at month 9 for adults (5.2M gap) — risk is volatile and accumulates" },
          { label: "State & District Analysis", detail: "State-wise gap calculation; Top 10 districts: Thane #1 (>225K), South 24 Parganas, Murshidabad, Pune, Surat" },
          { label: "Risk Score Histogram", detail: "Distribution shows spike at ~0 with long positive tail — most regions stable, small subset drives disproportionate risk" }
        ]
      },
      {
        groupTitle: "🏆 Final Findings",
        groupColor: "#10B981",
        features: [
          { label: "Finding 1", detail: "Demographic updates consistently and significantly exceed biometric updates across all regions" },
          { label: "Finding 2", detail: "Adults (18+) are the primary contributor to Dark Zone risk, dwarfing the 5–17 age group" },
          { label: "Finding 3", detail: "Risk is geographically concentrated — Thane, South 24 Parganas, Murshidabad, Pune, Surat are top hotspots" },
          { label: "Finding 4", detail: "Dark Zone risk is not static — it accumulates month-over-month with observable volatility peaks" },
          { label: "Finding 5", detail: "Enrollment coverage alone does not guarantee Aadhaar usability — the Dark Zone is a systemic blind spot in current reporting" }
        ]
      }
    ],
    highlights: [
      "<strong>🔍 Dark Zone Discovery</strong>: Invented the concept of Aadhaar Dark Zones — regions where demographic updates far outpace biometric compliance.",
      "<strong>⚙️ Data Engineering</strong>: Merged 3 UIDAI ZIP datasets (Enrolment + Biometric + Demographic) at date/state/district/pincode granularity.",
      "<strong>🧠 Triple Flag System</strong>: Built Strict, Soft, and Gap-Based dark zone flags plus a population-normalized risk score per region.",
      "<strong>📊 5 Visualizations</strong>: Demo vs Bio volume, Age-wise gap, Month-wise accumulation, Top 10 districts, Risk score histogram.",
      "<strong>🗺️ Geo-Risk Mapping</strong>: Identified Thane, South 24 Parganas, Murshidabad, Pune, Surat as highest-risk districts nationally.",
      "<strong>📈 Time-Series Insight</strong>: September 2025 spike (5.2M adult gap) revealed the accumulative and volatile nature of risk.",
      "<strong>🏆 Key Conclusion</strong>: Enrollment coverage ≠ Aadhaar usability — a systemic blind spot in standard UIDAI reporting."
    ],
    links: {
      github: "https://github.com/RithwikMohan/UIDAI-Hackathon",
      demo: "https://colab.research.google.com/drive/1hMyHYzDTDAx-jVoPNyrHONGaEUj1oQ_5?usp=sharing"
    }
  }
];

const CHAT_PROMPTS = [
  { text: "What is Rithwik's tech stack?", key: "stack" },
  { text: "Tell me about his AI projects.", key: "projects" },
  { text: "What are his credentials/GPA?", key: "credentials" },
  { text: "Is he open to internships?", key: "internships" }
];

const CHAT_RESPONSES = {
  stack: "Rithwik works primarily with Python, JavaScript (React.js, Node.js), and SQL. He also has solid skills in Flutter for mobile apps. On the AI front, he is highly skilled in TensorFlow, PyTorch, Gemini API integrations, n8n automations, and custom MCP (Model Context Protocol) setups.",
  projects: "His notable AI projects include **CivicVision** (which uses a CNN classifier for pothole detection with 90% accuracy and CLIP embeddings for deduplication), **Campus Connect** (which uses the Gemini API for smart chatbot recommendations), and **AI Productivity Assistant** utilizing MCP to automate tasks via Pipedream.",
  credentials: "Rithwik Mohan is currently pursuing his Bachelor of Technology (B.Tech) in IT at CBIT, Hyderabad. He holds a strong CGPA of **9.18**. He also competed in the prestigious **Smart India Hackathon (SIH) 2025** at the national level and holds Azure AI-900 & Oracle Cloud certifications.",
  internships: "Yes, Rithwik is actively seeking internships and software engineering roles starting in 2026. He is interested in Full-Stack Developer, AI Engineer, or GenAI Integrator roles. You can contact him at rizwik475@gmail.com!"
};

// 2. DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  // Ambient Glow Follower
  const glow = document.getElementById("ambient-glow");
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
  
  // Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Typing Effect
  const typingText = document.getElementById("typing-text");
  const words = ["AI/ML Integrations", "Generative AI Solutions", "Full-Stack Development", "Agentic Workflows"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before typing next
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // Skills Hub implementation
  const skillsGrid = document.getElementById("skills-grid");
  const tabs = document.querySelectorAll(".skills-tab");

  function renderSkills(category = "all") {
    skillsGrid.innerHTML = "";
    const filtered = category === "all" ? SKILLS_DATA : SKILLS_DATA.filter(s => s.category === category);
    
    filtered.forEach((skill, idx) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.style.opacity = "0";
      card.style.transform = "translateY(15px)";
      
      card.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.percentage}%</span>
        </div>
        <div class="skill-track">
          <div class="skill-bar" data-width="${skill.percentage}%"></div>
        </div>
        <span class="skill-meta">${skill.meta}</span>
      `;
      
      skillsGrid.appendChild(card);
      
      // Staggered fade in
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        const bar = card.querySelector(".skill-bar");
        bar.style.width = bar.getAttribute("data-width");
      }, idx * 45);
    });
  }

  // Bind skills tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderSkills(tab.getAttribute("data-category"));
    });
  });

  // Initial skills render
  renderSkills("all");

  // Projects Rendering
  const projectsGrid = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body-content");

  const projTabs = document.querySelectorAll(".projects-tab");

  function renderProjects(category = "all") {
    projectsGrid.innerHTML = "";
    const filtered = category === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === category);
    
    filtered.forEach((proj, idx) => {
      const card = document.createElement("div");
      card.className = "project-card card-glass";
      card.setAttribute("data-id", proj.id);
      
      card.innerHTML = `
        <div class="project-card-inner">
          <div class="project-banner">
            <span class="project-banner-decor">${proj.bannerEmoji}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>
          <div class="project-tags">
            ${proj.techStack.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join("")}
            ${proj.techStack.length > 3 ? `<span class="project-tag">+${proj.techStack.length - 3} more</span>` : ""}
          </div>
          <div class="project-footer">
            <span class="project-link-label">Explore Details &rarr;</span>
            <span class="project-github-icon">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </span>
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => openProjectModal(proj.id));
      projectsGrid.appendChild(card);
    });
  }

  // Bind projects tabs
  projTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      projTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProjects(tab.getAttribute("data-category"));
    });
  });

  // Initial projects render
  renderProjects("all");

  function openProjectModal(id) {
    const proj = PROJECTS_DATA.find(p => p.id === id);
    if (!proj) return;

    // Special rich layout for CivicVision with feature groups
    if (proj.featureGroups) {
      const groupsHTML = proj.featureGroups.map(g => `
        <div class="cv-feature-group">
          <div class="cv-group-header" style="border-left: 3px solid ${g.groupColor}; padding-left: 0.8rem;">
            <span class="cv-group-title">${g.groupTitle}</span>
          </div>
          <div class="cv-feature-list">
            ${g.features.map(f => `
              <div class="cv-feature-item">
                <span class="cv-feature-label">${f.label}</span>
                <span class="cv-feature-detail">${f.detail}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("");

      modalBody.innerHTML = `
        <h3 class="modal-project-title">${proj.title}</h3>
        <div class="modal-project-meta">
          <span class="meta-item">Type: <strong>AI & Software Engineering</strong></span>
          <span class="meta-item">Status: <strong>Completed</strong></span>
        </div>
        <p class="modal-project-desc">${proj.longDesc}</p>
        ${proj.video ? `
        <div class="modal-project-video" style="margin: 0 auto 2.5rem; max-width: 500px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          <video src="${proj.video}" controls style="width: 100%; display: block;"></video>
        </div>` : ""}
        <div class="modal-project-highlights">
          <h4>${proj.workflowImages ? "Automated Workflow Pipeline" : "System Architecture & Features"}</h4>
        </div>
        <div class="cv-feature-grid">
          ${groupsHTML}
        </div>
        ${proj.projectGalleries ? `
        <div class="modal-project-highlights" style="margin-top: 2.5rem;">
          <h4>📸 Project Screenshots</h4>
        </div>
        <div class="mcp-gallery-tabs" id="mcp-gallery-tabs">
          ${proj.projectGalleries.map((g, i) => `
            <button class="mcp-tab${i === 0 ? ' active' : ''}" data-idx="${i}">${g.label}</button>
          `).join('')}
        </div>
        ${proj.projectGalleries.map((g, i) => `
          <div class="mcp-gallery-panel${i === 0 ? ' active' : ''}" data-panel="${i}">
            <div class="news-workflow-gallery" style="grid-template-columns: repeat(${g.images.length === 1 ? '1' : '2'}, 1fr);">
              ${g.images.map((src, j) => `
                <div class="news-workflow-img-wrap" onclick="openLightbox('${src}', '${g.label} — Screenshot ${j + 1}')">
                  <p class="news-img-label">📷 ${g.label}${g.images.length > 1 ? ' (' + (j + 1) + '/' + g.images.length + ')' : ''}</p>
                  <img src="${src}" alt="${g.label} screenshot" class="news-workflow-img" />
                  <span class="news-zoom-hint">🔍 Click to expand</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}` :
        proj.workflowImages ? `
        <div class="modal-project-highlights" style="margin-top: 2.5rem;">
          <h4>n8n Workflow Snapshots</h4>
        </div>
        <div class="news-workflow-gallery">
          <div class="news-workflow-img-wrap" onclick="openLightbox('${proj.workflowImages[0]}', 'Basic Workflow (Single RSS Feed)')">
            <p class="news-img-label">🔵 Basic Workflow (Single RSS Feed)</p>
            <img src="${proj.workflowImages[0]}" alt="n8n basic workflow nodes" class="news-workflow-img" />
            <span class="news-zoom-hint">🔍 Click to expand</span>
          </div>
          <div class="news-workflow-img-wrap" onclick="openLightbox('${proj.workflowImages[1]}', 'Extended Workflow (Multi-Source + Merge)')">
            <p class="news-img-label">🟢 Extended Workflow (Multi-Source + Merge)</p>
            <img src="${proj.workflowImages[1]}" alt="n8n extended workflow with merge node" class="news-workflow-img" />
            <span class="news-zoom-hint">🔍 Click to expand</span>
          </div>
        </div>` : ""}
        <div class="cv-usp-banner">
          <span class="cv-usp-icon">⭐</span>
          <div>
            <strong>Major USP / Novelty</strong>
            <p>${proj.usp}</p>
          </div>
        </div>
        <div class="modal-project-highlights" style="margin-bottom: 2rem; margin-top: 2rem;">
          <h4>Technologies Leveraged</h4>
          <div class="project-tags">
            ${proj.techStack.map(tag => `<span class="project-tag" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="modal-project-links">
          ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="btn btn-primary">GitHub Repository</a>` : ""}
          ${proj.links.demo && proj.links.demo !== "#" ? `<a href="${proj.links.demo}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ""}
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <h3 class="modal-project-title">${proj.title}</h3>
        <div class="modal-project-meta">
          <span class="meta-item">Type: <strong>AI & Software Engineering</strong></span>
          <span class="meta-item">Status: <strong>Completed</strong></span>
        </div>
        <p class="modal-project-desc">${proj.longDesc}</p>
        ${proj.video ? `
        <div class="modal-project-video" style="margin: 0 auto 2.5rem; max-width: 500px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          <video src="${proj.video}" controls style="width: 100%; display: block;"></video>
        </div>` : ""}
        <div class="modal-project-highlights">
          <h4>Key Technical Highlights</h4>
          <ul>
            ${proj.highlights.map(h => `<li>${h}</li>`).join("")}
          </ul>
        </div>
        <div class="modal-project-highlights" style="margin-bottom: 2rem;">
          <h4>Technologies Leveraged</h4>
          <div class="project-tags">
            ${proj.techStack.map(tag => `<span class="project-tag" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="modal-project-links">
          ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="btn btn-primary">GitHub Repository</a>` : ""}
          ${proj.links.demo && proj.links.demo !== "#" ? `<a href="${proj.links.demo}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ""}
        </div>
      `;
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scroll

    // Wire MCP gallery tabs (rendered inside innerHTML)
    if (proj.projectGalleries) {
      const tabBtns = modal.querySelectorAll(".mcp-tab");
      const panels  = modal.querySelectorAll(".mcp-gallery-panel");
      tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          tabBtns.forEach(b => b.classList.remove("active"));
          panels.forEach(p => p.classList.remove("active"));
          btn.classList.add("active");
          modal.querySelector(`.mcp-gallery-panel[data-panel="${btn.dataset.idx}"]`).classList.add("active");
        });
      });
    }
  }

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside contents
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // ── Image Lightbox ──────────────────────────────────────────────────────────
  const lightbox = document.getElementById("img-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  window.openLightbox = function(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "hidden"; // modal is still open
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) closeLightbox();
  });

  renderProjects();

  // 3. AI Twin Chat Simulator
  const chatBody = document.getElementById("chat-body");
  const quickReplies = document.getElementById("quick-replies");

  function appendChatMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `message ${sender}-message`;
    msg.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "message bot-message typing-indicator-wrapper";
    indicator.id = "chat-typing-indicator";
    indicator.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatBody.appendChild(indicator);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("chat-typing-indicator");
    if (indicator) indicator.remove();
  }

  function handleQuickReply(key, promptText) {
    // Append user query
    appendChatMessage("user", promptText);
    
    // Disable buttons temporarily
    quickReplies.innerHTML = "";

    // Show bot typing
    appendTypingIndicator();

    // Simulate reply
    setTimeout(() => {
      removeTypingIndicator();
      const answer = CHAT_RESPONSES[key];
      appendChatMessage("bot", answer);
      renderQuickReplies(); // Re-render reply options
    }, 1100);
  }

  function renderQuickReplies() {
    quickReplies.innerHTML = "";
    CHAT_PROMPTS.forEach(prompt => {
      const btn = document.createElement("button");
      btn.className = "quick-reply-btn";
      btn.textContent = prompt.text;
      btn.addEventListener("click", () => handleQuickReply(prompt.key, prompt.text));
      quickReplies.appendChild(btn);
    });
  }

  renderQuickReplies();

  // 4. GitHub README Generator
  const readmeCode = document.getElementById("readme-code");
  const btnGenerateReadme = document.getElementById("btn-generate-readme");
  const btnCopyReadme = document.getElementById("btn-copy-readme");

  function getReadmeMarkdown() {
    const name = document.getElementById("readme-name").value.trim() || "Dundigalla Rithwik Mohan";
    const role = document.getElementById("readme-role").value.trim() || "AI/ML & Full-Stack Developer";
    const bannerStyle = document.getElementById("readme-banner").value;
    const aboutStyle = document.getElementById("readme-about-box").value;

    let bannerUrl = "https://capsule-render.vercel.app/api?type=waving&color=0:0b0f19,50:1b263b,100:415a77&height=220&section=header";
    if (bannerStyle === "neon") {
      bannerUrl = "https://capsule-render.vercel.app/api?type=waving&color=0:090b11,100:00f2fe&height=180&section=header";
    } else if (bannerStyle === "classic") {
      bannerUrl = "https://capsule-render.vercel.app/api?type=rect&color=151a26&height=150&section=header";
    }

    let aboutBlock = "";
    if (aboutStyle === "javascript") {
      aboutBlock = `\`\`\`javascript
const rithwik = {
  education: "B.Tech IT - CBIT, Hyderabad",
  cgpa: 9.18,
  focus: ["Generative AI", "Full-Stack Development", "MCP Architectures"],
  hobbies: ["LeetCode Problem Solving", "Hackathons"],
  solved: "350+ LeetCode Challenges"
};
\`\`\``;
    } else if (aboutStyle === "python") {
      aboutBlock = `\`\`\`python
rithwik = {
    "education" : "CBIT Hyderabad (B.Tech IT)",
    "cgpa"      : 9.18,
    "skills"    : ["PyTorch", "FastAPI", "React.js", "n8n", "MCP"],
    "goals"     : "Automating enterprise agentic workflows",
    "leetcode"  : "350+ problems"
}
\`\`\``;
    } else {
      aboutBlock = `* 🎓 Currently pursuing **B.Tech in Information Technology** at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad.
* 📈 Maintaining a cumulative CGPA of **9.18**.
* 🤖 Deeply interested in **Generative AI, AI Agents, and full-stack system architecture**.
* 💡 Actively building integrations using **Model Context Protocol (MCP)** and automated backend flows.
* 🧩 Solved **350+ logical algorithm problems** on LeetCode.`;
    }

    return `<div align="center">

<img width="100%" src="${bannerUrl}&text=${encodeURIComponent(name)}&fontSize=42&fontColor=ffffff&desc=${encodeURIComponent(role)}&descAlignY=62&descColor=a3b18a" alt="Header Banner" />

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithwik-mohan/)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=flat-square&logo=leetcode&logoColor=white)](https://leetcode.com/u/rithwik_475/)
[![Email](https://img.shields.io/badge/Email-rizwik475%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:rizwik475@gmail.com)

</div>

---

## ⚡ About Me

${aboutBlock}

---

## 🛠️ Technology Toolbox

### **AI / ML & Orchestration**
\`\`\`
Python | TensorFlow | PyTorch | Gemini API | n8n workflows | MCP Servers
\`\`\`

### **Full-Stack Development**
\`\`\`
JavaScript | React.js | Node.js | Express.js | Flutter | HTML5 | CSS3
\`\`\`

### **Databases & Cloud**
\`\`\`
MongoDB | MySQL | Cloudinary | Microsoft Azure | Oracle Cloud
\`\`\`

---

## 📊 GitHub Analytics

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=RithwikMohan&show_icons=true&theme=tokyonight&hide_border=true" height="165" alt="GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RithwikMohan&layout=compact&theme=tokyonight&hide_border=true" height="165" alt="Top Languages" />
</div>

<br/>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=RithwikMohan&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</div>

---

<div align="center">
  <strong>🚀 Explore my live projects and full interactive CV at: <a href="https://portfolio-rithwik.vercel.app">My Portfolio</a></strong>
</div>
`;
  }

  function generateReadme() {
    const md = getReadmeMarkdown();
    readmeCode.textContent = md;
  }

  btnGenerateReadme.addEventListener("click", generateReadme);
  
  btnCopyReadme.addEventListener("click", () => {
    const text = readmeCode.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btnCopyReadme.textContent;
      btnCopyReadme.textContent = "Copied!";
      btnCopyReadme.style.borderColor = "#10b981";
      btnCopyReadme.style.color = "#10b981";
      
      setTimeout(() => {
        btnCopyReadme.textContent = originalText;
        btnCopyReadme.style.borderColor = "";
        btnCopyReadme.style.color = "";
      }, 2000);
    });
  });

  // Generate initial README
  generateReadme();

  // 5. Scroll Reveal Intersection Observer
  const reveals = document.querySelectorAll(".scroll-reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // If it's the skills section, animate skills widths specifically
        if (entry.target.id === "skills") {
          document.querySelectorAll(".skill-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => revealObserver.observe(el));
  
  // Submit Contact Form Simulation
  const contactForm = document.getElementById("contact-form");
  const btnSubmit = document.getElementById("btn-submit-contact");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const originalText = btnSubmit.textContent;
    btnSubmit.textContent = "Sending...";
    btnSubmit.disabled = true;
    
    setTimeout(() => {
      btnSubmit.textContent = "Message Sent!";
      btnSubmit.style.background = "#10b981";
      btnSubmit.style.color = "#ffffff";
      contactForm.reset();
      
      setTimeout(() => {
        btnSubmit.textContent = originalText;
        btnSubmit.style.background = "";
        btnSubmit.style.color = "";
        btnSubmit.disabled = false;
      }, 3000);
    }, 1500);
  });
});
