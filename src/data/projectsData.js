// Internal Assets
import wisReportGeneratorImage from "@/assets/wis_report_generator.png";
import auctionHouseImage from "@/assets/auction_house.png";
import knowledgeHubImage from "@/assets/knowledge_hub.png";
import taskManagementImage from "@/assets/task-management.png";
import eventManagementImage from "@/assets/event_management.png";
import jobPortalImage from "@/assets/job_portal.jpg";

export const projectsData = [
    {
        id: "wis-accuracy-report-generator",
        title: "WIS Accuracy Report Generator",
        tagline: "Windows desktop application solving real business problems through automated accuracy reporting and data analytics",
        image: wisReportGeneratorImage,
        repository: "https://github.com/Hauh4444/WIS-Accuracy-Data-Analytics",
        overview: "A professional Windows desktop application born from identifying real operational gaps while working as an inventory counter at WIS International. Despite being in a non-technical counting role, I consistently worked closely with managers and assisted teams during the inventory process. Together, we identified critical limitations in available tools, managers lacked access to individual employee accuracy metrics, team statistics by zone, and clear service miscount visibility. I leveraged my software engineering skills to build this solution, which now actively supports day-to-day operations and management decision-making.",
        context: "Created while working as an inventory counter who demonstrated exceptional performance, leading to close collaboration with management. Recognized operational inefficiencies and missing analytics that managers needed but couldn't access. Built this tool to solve real business problems, providing the visibility and metrics that improve operational efficiency and team performance.",
        features: [
            {
                title: "Individual Employee Accuracy Metrics",
                description: "Provides detailed accuracy reports for each employee with UPH calculations and discrepancy tracking, filling a critical gap managers previously couldn't access."
            },
            {
                title: "Team Statistics by Zone/Department",
                description: "Delivers comprehensive zone-based analytics showing team performance across different warehouse areas, enabling targeted improvements and resource allocation."
            },
            {
                title: "Service Miscount Visibility",
                description: "Clearly identifies and tracks service miscounts with discrepancy reports, making it easy to spot patterns and address recurring issues."
            },
            {
                title: "Two-Step Database Loading",
                description: "Smart database connection with job number auto-resolution and manual fallback, designed for real-world operational flexibility."
            },
            {
                title: "Professional PDF Reports",
                description: "Generates three integrated reports (Employee, Team, Discrepancy) with store headers as browser-ready PDFs for immediate printing and distribution."
            }
        ],
        technicalStack: [
            {
                category: "Frontend/Desktop",
                items: [
                    {
                        name: "PyQt6",
                        icon: "application",
                        description: "Modern Python binding for Qt6 framework, providing a native-looking desktop application with rich UI components and excellent cross-platform support."
                    }
                ]
            },
            {
                category: "Backend/Logic",
                items: [
                    {
                        name: "Python",
                        icon: "python",
                        description: "Core programming language leveraging its powerful data processing libraries and ease of database integration."
                    },
                    {
                        name: "Jinja2",
                        icon: "template",
                        description: "Template engine used for generating dynamic PDF reports with complex layouts and conditional formatting."
                    }
                ]
            },
            {
                category: "Database",
                items: [
                    {
                        name: "Access",
                        icon: "access",
                        description: "Source database system containing warehouse inventory data, accessed through ODBC connections."
                    },
                    {
                        name: "SQL",
                        icon: "sql",
                        description: "Used for complex data queries, joins, and aggregations to calculate accuracy metrics and statistics."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "Problem Identification & Solution Design",
                description: "Identified critical business gaps while working operationally, then designed and implemented a technical solution that directly addresses real workflow inefficiencies."
            },
            {
                title: "Production-Ready Desktop Application",
                description: "Built a robust Windows application used in daily operations by managers, demonstrating ability to deliver production software that solves real business problems."
            },
            {
                title: "Complex Data Analytics",
                description: "Engineered multi-table SQL queries across 8+ database tables to calculate accuracy metrics, UPH statistics, and zone-based analytics from raw inventory data."
            },
            {
                title: "Comprehensive Testing",
                description: "Implemented 98+ test cases covering all functionality to ensure reliability in a production environment where accuracy is critical."
            }
        ],
        challenges: [
            {
                challenge: "Understanding and accessing proprietary database structure",
                solution: "Reverse-engineered the Microsoft Access database schema through hands-on exploration and documentation, mapping relationships between 8+ tables to extract meaningful business metrics."
            },
            {
                challenge: "Building for non-technical users in fast-paced operations",
                solution: "Designed an intuitive PyQt6 interface with clear workflows and fallback options, ensuring managers could generate reports quickly during active inventory counts without technical support."
            },
            {
                challenge: "Ensuring production reliability with limited testing environment",
                solution: "Developed 98+ comprehensive test cases with mocked database connections to ensure bulletproof reliability before deploying to real operational use."
            }
        ],
        tags: ["Python", "PyQt6", "Desktop Application", "SQL", "Data Analytics", "Problem Solving", "Production Software", "Business Intelligence", "Windows"]
    },
    {
        id: "knowledge-hub",
        title: "Knowledge Hub",
        tagline: "Professional collaborative knowledge platform combining the best of Notion, GitHub Wiki, and LinkedIn",
        image: knowledgeHubImage,
        repository: "https://github.com/Hauh4444/knowledge-hub",
        demo: "https://www.knowledgehubpro.org/",
        overview: "A comprehensive knowledge management and collaboration platform that seamlessly blends the best aspects of Notion's structured content, GitHub Wiki's knowledge sharing, and LinkedIn's professional networking. Built with React, TypeScript, and Supabase, it provides real-time collaboration, smart search, project management, and professional profiles. all in a fully responsive, production-ready application.",
        context: "Created to solve knowledge silos and fragmented collaboration tools in professional environments. Provides a unified platform where teams can create structured knowledge resources, collaborate on projects, track expertise, and build professional connections, all while maintaining real-time synchronization and intelligent search capabilities.",
        features: [
            {
                title: "Knowledge Resources & Project Management",
                description: "Create, share, and discover structured knowledge articles while organizing them into collaborative projects with team members."
            },
            {
                title: "Real-time Collaboration & Messaging",
                description: "Work together with team members in real-time with live updates, direct messaging, and instant notifications on project activities."
            },
            {
                title: "Smart Search & Discovery",
                description: "Intelligent search capabilities to quickly find relevant content across resources, projects, and collaborators."
            },
            {
                title: "Professional Profiles & Collaboration Scoring",
                description: "Build professional profiles showcasing skills and expertise, with collaboration quality ratings to foster meaningful connections."
            },
            {
                title: "Advanced Features Suite",
                description: "Bookmarking system for organizing content, analytics dashboard for tracking engagement, help center, and customizable dark/light mode themes."
            }
        ],
        technicalStack: [
            {
                category: "Frontend",
                items: [
                    {
                        name: "React",
                        icon: "react",
                        description: "Latest React version with concurrent features, automatic batching, and improved performance for building a responsive, modern UI."
                    },
                    {
                        name: "TypeScript",
                        icon: "typescript",
                        description: "Full TypeScript implementation ensuring type safety across the entire codebase, reducing bugs and improving maintainability."
                    },
                    {
                        name: "Vite",
                        icon: "vite",
                        description: "Next-generation frontend tooling providing lightning-fast HMR, optimized builds, and excellent developer experience."
                    },
                    {
                        name: "Tailwind CSS",
                        icon: "tailwindcss",
                        description: "Utility-first CSS framework combined with shadcn/ui components for building a consistent, beautiful, and accessible interface."
                    }
                ]
            },
            {
                category: "Backend/Infrastructure",
                items: [
                    {
                        name: "Supabase",
                        icon: "supabase",
                        description: "Complete backend platform providing PostgreSQL database, authentication, real-time subscriptions, row-level security, and RESTful APIs."
                    },
                    {
                        name: "PostgreSQL",
                        icon: "postgresql",
                        description: "Production-grade relational database with advanced features including full-text search, JSON support, and sophisticated query capabilities."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "Modern Tech Stack Integration",
                description: "Successfully integrated React, TypeScript, Vite, Tailwind CSS, and shadcn/ui into a cohesive, production-ready application with excellent performance."
            },
            {
                title: "Real-time Architecture",
                description: "Implemented comprehensive real-time features using Supabase subscriptions for live collaboration, messaging, and notifications across the platform."
            },
            {
                title: "Full-Stack Type Safety",
                description: "End-to-end TypeScript implementation with Supabase-generated types ensuring type safety from database to UI components."
            },
            {
                title: "Production Deployment",
                description: "Deployed live at knowledgehubpro.org with authentication, row-level security, and responsive design optimized for desktop, tablet, and mobile devices."
            }
        ],
        challenges: [
            {
                challenge: "Building a multi-feature platform with cohesive UX",
                solution: "Designed a unified component system using shadcn/ui and Tailwind CSS, creating consistent interactions across knowledge resources, projects, messaging, profiles, and analytics features."
            },
            {
                challenge: "Managing complex real-time state across multiple features",
                solution: "Leveraged TanStack Query for efficient data caching and synchronization, combined with Supabase real-time subscriptions to maintain consistent state across collaboration, messaging, and notifications."
            },
            {
                challenge: "Ensuring security and data access control",
                solution: "Implemented PostgreSQL row-level security policies in Supabase, ensuring users can only access authorized resources while maintaining seamless real-time updates."
            }
        ],
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Real-time", "Full Stack", "Production", "Responsive Design"]
    },
    {
        id: "auction-house",
        title: "Auction House/E-commerce System",
        tagline: "Full-stack e-commerce platform developed through professional Scrum methodology with team leadership",
        image: auctionHouseImage,
        repository: "https://github.com/Hauh4444/Auction-House",
        overview: "A comprehensive e-commerce and auction platform developed over a full semester using professional Scrum methodology. Served as Scrum Master leading a team of developers through 6 complete sprints, managing the full development lifecycle from planning to deployment. Successfully delivered a production-ready application featuring real-time bidding, payment processing, and user management while mentoring team members and ensuring code quality through systematic refactoring and technical guidance.",
        context: "Semester-long software engineering project where I took on dual roles as Scrum Master and lead developer. Worked directly with a professor acting as the client, conducting sprint planning, daily standups, retrospectives, and demos. Led a team with varying skill levels, providing technical mentorship and significantly improving code quality through refactoring efforts. Successfully delivered a complex full-stack application while developing professional Agile project management skills.",
        features: [
            {
                title: "Complete E-commerce & Auction System",
                description: "Dual-mode platform supporting both traditional fixed-price purchases and real-time auction bidding with Socket.IO-powered live updates and countdown timers."
            },
            {
                title: "Stripe Payment Integration",
                description: "Secure payment processing with Stripe API integration, handling transactions, cart management, and order fulfillment with proper error handling."
            },
            {
                title: "User Management & Authentication",
                description: "Comprehensive authentication system with account management, user profiles, bid history tracking, and email notifications via MailerSend."
            },
            {
                title: "Search & Discovery",
                description: "Advanced search functionality with filtering, sorting, and product categorization enabling efficient product discovery."
            },
            {
                title: "Analytics & Monitoring",
                description: "Integrated PostHog analytics for tracking user behavior, monitoring application performance, and making data-driven improvements."
            }
        ],
        technicalStack: [
            {
                category: "Frontend",
                items: [
                    {
                        name: "React",
                        icon: "react",
                        description: "Component-based UI framework with Material UI integration for building a consistent, professional e-commerce interface."
                    },
                    {
                        name: "SASS",
                        icon: "sass",
                        description: "CSS preprocessor used for organized, maintainable styling with variables, mixins, and modular architecture."
                    },
                    {
                        name: "Socket.IO",
                        icon: "nodejs",
                        description: "Real-time bidirectional communication enabling live auction updates, bid notifications, and instant synchronization across users."
                    }
                ]
            },
            {
                category: "Backend & Infrastructure",
                items: [
                    {
                        name: "Flask",
                        icon: "flask",
                        description: "Python web framework powering RESTful API with authentication, rate limiting, and integration with Stripe, MailerSend, and PostHog services."
                    },
                    {
                        name: "MySQL",
                        icon: "mysql",
                        description: "Production database managing complex relationships between users, products, auctions, bids, transactions, and order data with optimized queries."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "Scrum Master Leadership",
                description: "Led team through 6 complete sprints with sprint planning, daily standups, retrospectives, and demos. Managed backlog prioritization and stakeholder communication with professor/client."
            },
            {
                title: "Technical Mentorship & Code Quality",
                description: "Provided technical guidance to team members with varying skill levels. Conducted code reviews and performed systematic refactoring to improve code quality, maintainability, and adherence to best practices."
            },
            {
                title: "Full-Stack Architecture",
                description: "Designed and implemented complete architecture integrating React frontend, Flask REST API, MySQL database, and third-party services (Stripe, MailerSend, Socket.IO, PostHog)."
            },
            {
                title: "Professional Development Practices",
                description: "Established testing frameworks for both frontend and backend, implemented environment configuration management, and maintained comprehensive documentation throughout development."
            }
        ],
        challenges: [
            {
                challenge: "Leading a team with varying technical skill levels",
                solution: "Implemented pair programming sessions, conducted thorough code reviews, and created documentation. Refactored code to maintain quality standards while providing constructive feedback that elevated team skills throughout the semester."
            },
            {
                challenge: "Managing scope and deadlines across 6 sprints",
                solution: "Applied Agile principles to break down complex features into manageable user stories, conducted regular sprint planning and retrospectives, and adapted priorities based on client feedback and team velocity."
            },
            {
                challenge: "Integrating multiple third-party services cohesively",
                solution: "Designed a modular architecture that cleanly integrated Stripe payments, MailerSend notifications, Socket.IO real-time features, and PostHog analytics while maintaining separation of concerns and testability."
            }
        ],
        tags: ["React", "Flask", "MySQL", "Scrum Master", "Team Leadership", "Agile", "E-commerce", "Socket.IO", "Stripe", "Full Stack"]
    },
    {
        id: "job-portal",
        title: "Job Portal Mobile Application",
        tagline: "Full-stack mobile job portal with React Native frontend and Java backend",
        image: jobPortalImage,
        repository: "https://github.com/Hauh4444/Job-Portal",
        overview: "A comprehensive full-stack job portal featuring a React Native mobile application powered by a custom Java REST API backend. Job seekers can browse listings, manage applications, and maintain professional profiles, while employers can post and manage job openings. Built with MongoDB for data persistence, session-based authentication, and a Dockerized development environment for streamlined deployment.",
        context: "Developed to demonstrate full-stack mobile development capabilities, showcasing proficiency in building scalable REST APIs from scratch with Java, implementing secure mobile authentication, and managing NoSQL databases. Emphasizes modern development practices including containerization, secure storage, and clean API design.",
        features: [
            {
                title: "Job Browsing & Discovery",
                description: "Browse comprehensive job listings with detailed job descriptions, requirements, and company information. Seamless navigation between job listings and detailed views."
            },
            {
                title: "Application Management System",
                description: "Apply to jobs directly through the app, track application status, and view complete application history with timestamps and job details."
            },
            {
                title: "Profile Management",
                description: "Create and maintain professional profiles with resume uploads, contact information editing, and secure credential storage using SecureStorage."
            },
            {
                title: "Session-Based Authentication",
                description: "Secure user authentication and authorization system with session management, protecting user data and controlling access to features."
            },
            {
                title: "Employer Job Posting",
                description: "Employers can create and manage job postings through dedicated endpoints, handling job descriptions, requirements, and application tracking."
            }
        ],
        technicalStack: [
            {
                category: "Mobile Frontend",
                items: [
                    {
                        name: "React Native",
                        icon: "react",
                        description: "Cross-platform mobile framework built with Expo, enabling deployment to both iOS and Android from a single JavaScript codebase."
                    },
                    {
                        name: "JavaScript",
                        icon: "javascript",
                        description: "Core language for mobile app development with Context API for global state management and Axios for API communication."
                    }
                ]
            },
            {
                category: "Backend",
                items: [
                    {
                        name: "Java",
                        icon: "java",
                        description: "Custom REST API built from scratch using Java with NanoHTTPD server, handling authentication, job management, and application processing."
                    },
                    {
                        name: "MongoDB",
                        icon: "mongodb",
                        description: "NoSQL database with MongoDB Java Driver for flexible document storage, supporting jobs, users, profiles, and applications with Dockerized setup."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "Custom Java REST API",
                description: "Built RESTful API from scratch using Java with NanoHTTPD, implementing proper HTTP methods, endpoint routing, and JSON serialization with Gson."
            },
            {
                title: "Mobile-First Architecture",
                description: "Developed with React Native and Expo for true cross-platform deployment, utilizing Context API for state management and SecureStorage for credential security."
            },
            {
                title: "Dockerized Development Environment",
                description: "Implemented containerized MongoDB setup for consistent development and testing environments, with configurable connections for local or remote instances."
            },
            {
                title: "Session-Based Security",
                description: "Implemented secure authentication and authorization system with session management, protecting routes and controlling access to employer and job seeker features."
            }
        ],
        challenges: [
            {
                challenge: "Building RESTful API from scratch in Java",
                solution: "Designed clean API architecture using NanoHTTPD server with proper routing, implemented RESTful conventions with appropriate HTTP methods, and structured response handling with Gson for JSON serialization."
            },
            {
                challenge: "Managing mobile-backend communication securely",
                solution: "Implemented session-based authentication with secure token storage using SecureStorage, configured Axios instance with proper headers and error handling, and validated all API requests on the backend."
            },
            {
                challenge: "Ensuring consistent development environments",
                solution: "Containerized MongoDB with Docker for reproducible setups, created configurable connection strings for local/remote instances, and documented setup procedures for both frontend and backend components."
            }
        ],
        tags: ["React Native", "Expo", "Java", "MongoDB", "REST API", "Docker", "Mobile Development", "Full Stack", "NoSQL", "Authentication"]
    },
    {
        id: "task-management",
        title: "Task Management System",
        tagline: "Beautiful full-stack task management application with TypeScript, real-time sync, and modern design",
        image: taskManagementImage,
        repository: "https://github.com/Hauh4444/task-management",
        demo: "https://main.dk2nrxxcpt5un.amplifyapp.com/",
        overview: "A comprehensive full-stack task management application showcasing modern web development best practices. Built with React, TypeScript, Supabase, and Tailwind CSS, featuring secure authentication, real-time database synchronization, row-level security, and a fully responsive design system. Demonstrates end-to-end development skills including component architecture, state management, database design, and production deployment.",
        context: "Created as a portfolio piece to demonstrate proficiency in modern full-stack development. Implements production-grade features including secure authentication flows, real-time data synchronization, comprehensive TypeScript implementation, custom design system, and database-level security with PostgreSQL Row Level Security policies.",
        features: [
            {
                title: "Complete Task Management System",
                description: "Create, edit, delete, and organize tasks with status tracking (Todo, In Progress, Completed), priority system (Low, Medium, High), and real-time search and filtering capabilities."
            },
            {
                title: "Secure Authentication & User Management",
                description: "Email/password authentication with Supabase Auth, individual user profiles, automatic session persistence, and secure logout with password validation and security requirements."
            },
            {
                title: "Real-time Database Synchronization",
                description: "Changes update instantly across browser tabs using Supabase real-time subscriptions. All data persisted to secure cloud PostgreSQL database with automatic syncing."
            },
            {
                title: "Dashboard Analytics & Insights",
                description: "Visual statistics and progress tracking with dashboard analytics displaying task distribution, completion rates, and priority breakdowns for productivity insights."
            },
            {
                title: "Modern UX & Design System",
                description: "Clean professional interface with custom design system, fully responsive across all devices, smooth animations and micro-interactions, dark/light mode support, WCAG accessibility compliance, and protected routes."
            }
        ],
        technicalStack: [
            {
                category: "Frontend",
                items: [
                    {
                        name: "React",
                        icon: "react",
                        description: "Modern React with hooks, Context API for auth state, custom hooks for task management, and component composition patterns for modular architecture."
                    },
                    {
                        name: "TypeScript",
                        icon: "typescript",
                        description: "Full TypeScript implementation with interfaces for complete type safety, enhanced developer experience, and compile-time error catching throughout the application."
                    },
                    {
                        name: "Vite",
                        icon: "vite",
                        description: "Next-generation build tool providing lightning-fast HMR, optimized production builds with tree shaking, and modern development workflow."
                    },
                    {
                        name: "Tailwind CSS",
                        icon: "tailwindcss",
                        description: "Utility-first CSS framework with Radix UI primitives, custom design system using CSS custom properties, and semantic color tokens for maintainable styling."
                    }
                ]
            },
            {
                category: "Backend & Database",
                items: [
                    {
                        name: "Supabase",
                        icon: "supabase",
                        description: "Complete BaaS platform providing PostgreSQL database, JWT authentication with automatic token refresh, real-time subscriptions, and auto-generated REST API."
                    },
                    {
                        name: "PostgreSQL",
                        icon: "postgresql",
                        description: "Production PostgreSQL database with Row Level Security (RLS) policies for user data isolation, optimized indexes, and real-time capabilities."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "Complete Design System Implementation",
                description: "Built custom design system with CSS custom properties, semantic color tokens, typography scale, component variants using class-variance-authority, and comprehensive animation library."
            },
            {
                title: "Database-Level Security Architecture",
                description: "Implemented PostgreSQL Row Level Security (RLS) with policies ensuring users can only access their own tasks, automatic user_id enforcement, and SQL injection protection via Supabase client."
            },
            {
                title: "Production-Ready Authentication Flow",
                description: "Complete auth system with protected routes, session management, automatic token refresh, secure logout, form validation using React Hook Form and Zod, and password security requirements."
            },
            {
                title: "Performance & Developer Experience",
                description: "Optimized with lazy loading, tree shaking for small bundles, efficient re-rendering with React hooks, ESLint for code quality, and full TypeScript for enhanced DX."
            }
        ],
        challenges: [
            {
                challenge: "Implementing secure, user-isolated data access",
                solution: "Designed and implemented PostgreSQL Row Level Security policies that automatically filter data by user_id, ensuring complete data isolation while maintaining real-time sync capabilities across authenticated sessions."
            },
            {
                challenge: "Building a scalable design system from scratch",
                solution: "Created a comprehensive design system using CSS custom properties for theming, Tailwind CSS for utilities, and class-variance-authority for component variants, enabling consistent styling and easy theme customization."
            },
            {
                challenge: "Ensuring type safety across frontend and database",
                solution: "Leveraged TypeScript throughout with custom interfaces for all data models, integrated Supabase-generated types for database schema, and used Zod for runtime validation ensuring end-to-end type safety."
            }
        ],
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Authentication", "Real-time", "Design System", "Production"]
    },
    {
        id: "event-management",
        title: "Event Management System",
        tagline: "Full-stack event management platform with React frontend and high-performance Rust backend",
        image: eventManagementImage,
        repository: "https://github.com/Hauh4444/Event-Management",
        overview: "A comprehensive full-stack event management platform combining React's dynamic UI with Rust's blazing-fast performance. Features secure authentication, event creation and management, attendee tracking, interactive dashboards, and a RESTful API built with Actix Web and SQLite. Demonstrates proficiency in systems programming with Rust while delivering practical functionality for event organizers and attendees through an intuitive Material UI interface.",
        context: "Developed to showcase systems programming capabilities with Rust alongside modern frontend development. Built with Actix Web for high-performance REST API handling, SQLite for efficient data storage, and React for a responsive user interface. Project actively evolving with ongoing feature development and UI/UX improvements.",
        features: [
            {
                title: "Secure Authentication System",
                description: "User authentication with secure login, session management, and protected routes ensuring data privacy and access control for event management."
            },
            {
                title: "Event Creation & Management",
                description: "Create, edit, and manage events with comprehensive details including descriptions, schedules, categories, speaker information, and image uploads for visual appeal."
            },
            {
                title: "Attendee Tracking & Management",
                description: "Track event attendees, manage attendance lists, view ticket sales information, and monitor registration status through dedicated attendee management interfaces."
            },
            {
                title: "Interactive Dashboards",
                description: "Intuitive dashboards providing overview of events and attendees with visual data representation, quick access to key metrics, and streamlined navigation."
            },
            {
                title: "Modern Responsive UI",
                description: "Built with Material UI components featuring both light and dark theme support, responsive design across all devices, and polished user experience with consistent styling."
            }
        ],
        technicalStack: [
            {
                category: "Frontend",
                items: [
                    {
                        name: "React",
                        icon: "react",
                        description: "Component-based UI framework with Material UI integration for consistent, professional interface components and responsive layouts."
                    },
                    {
                        name: "JavaScript",
                        icon: "javascript",
                        description: "Modern ES6+ JavaScript for interactive features, form handling, API communication, and dynamic content rendering."
                    },
                    {
                        name: "CSS3",
                        icon: "css3",
                        description: "Custom styling with Material UI theming, supporting both light and dark modes with responsive design patterns."
                    }
                ]
            },
            {
                category: "Backend",
                items: [
                    {
                        name: "Rust",
                        icon: "rust",
                        description: "High-performance backend using Actix Web framework for RESTful API with memory safety guarantees, async/await patterns, and zero-cost abstractions."
                    },
                    {
                        name: "SQLite",
                        icon: "sqlite",
                        description: "Embedded SQL database providing efficient data storage for events, attendees, and user data with straightforward migration system."
                    }
                ]
            }
        ],
        technicalHighlights: [
            {
                title: "High-Performance Rust Backend",
                description: "Built RESTful API with Actix Web framework leveraging Rust's zero-cost abstractions, memory safety without garbage collection, and async/await for concurrent request handling."
            },
            {
                title: "Systems Programming Skills",
                description: "Demonstrated proficiency in Rust's ownership system preventing memory leaks and data races, implementing proper error handling, and managing database connections efficiently."
            },
            {
                title: "Full-Stack Integration",
                description: "Successfully integrated React frontend with Rust backend using RESTful API design, proper CORS configuration, environment-based configuration, and secure authentication flow."
            },
            {
                title: "Modern UI Implementation",
                description: "Implemented Material UI component library with custom theming supporting light/dark modes, responsive layouts, and consistent design patterns across application."
            }
        ],
        challenges: [
            {
                challenge: "Mastering Rust's ownership and borrowing while building REST API",
                solution: "Embraced Rust's learning curve by leveraging compiler error messages as teaching tools, understanding lifetime annotations, and implementing proper error handling with Result types for production-ready code."
            },
            {
                challenge: "Integrating React frontend with Rust backend ecosystem",
                solution: "Configured Actix Web with proper CORS middleware, implemented environment-based configuration for frontend/database URLs, and designed RESTful API following standard conventions for seamless integration."
            },
            {
                challenge: "Managing evolving feature set and UI improvements",
                solution: "Structured project with clear separation of concerns, documented TODO items for planned features, and implemented modular component architecture allowing iterative improvements without major refactoring."
            }
        ],
        tags: ["React", "Rust", "Actix Web", "SQLite", "Material UI", "RESTful API", "Systems Programming", "Full Stack", "Event Management"]
    }
];

// Export basic project info for use in the Projects component
export const projects = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    background: project.image,
    technologies: project.technicalStack.flatMap(category => 
        category.items
            // Exclude build tools and styling frameworks from main page - focus on core stack
            .filter(item => !["Vite", "Tailwind CSS"].includes(item.name))
            .map(item => ({
                iconName: item.icon,
                title: item.name
            }))
    ).slice(0, 4), // Limit to 4 key technologies for clean display
    repository: project.repository,
    demo: project.demo
}));

