export type Locale = 'es' | 'en';

export const content = {
	es: {
		meta: {
			title: 'Enrique Gamboa Hernández | Ingeniero de Software',
			description:
				'Portafolio de Enrique Gamboa Hernández, ingeniero de software y desarrollador full-stack enfocado en productos web, herramientas clínicas y sistemas que escalan.',
		},
		nav: {
			about: 'Sobre mí',
			experience: 'Experiencia',
			projects: 'Proyectos',
			stack: 'Stack',
			resume: 'CV',
			contact: 'Contacto',
			menu: 'Abrir menú',
			language: 'Idioma',
		},
		a11y: {
			skip: 'Saltar al contenido',
			technologies: 'Tecnologías utilizadas',
			navigation: 'Navegación principal',
			home: 'Enrique Gamboa Hernández - inicio',
		},
		loader: {
			label: 'Cargando portafolio',
			eyebrow: 'PORTFOLIO / INICIO',
			role: 'Ingeniero de Software',
			status: 'Preparando la experiencia',
		},
		hero: {
			eyebrow: 'Ingeniero de Software / Desarrollador Full-stack Junior',
			titleLine1: 'Convierto complejidad',
			titleLine2: 'en productos que avanzan.',
			description:
				'Diseño y construyo interfaces, sistemas y herramientas que hacen más claro el trabajo de las personas.',
			primary: 'Ver proyectos',
			secondary: 'Ver CV',
			status: 'Abierto a oportunidades remotas',
			location: 'México / UTC-6',
			scroll: 'Explora el recorrido',
			mapLabel: 'Mapa de capacidades',
			mapFrontend: 'Frontend',
			mapBackend: 'Backend',
			mapSystems: 'Sistemas',
			mapImpact: 'Impacto',
		},
		about: {
			eyebrow: '01 / Perfil',
			title: 'Del requisito ambiguo a una solución que se puede usar.',
			paragraph1:
				'Soy un ingeniero de software con experiencia construyendo productos web full-stack y herramientas especializadas para entornos académicos, administrativos y de salud.',
			paragraph2:
				'Me muevo entre la arquitectura, la interfaz y los detalles que hacen que un producto sea confiable: datos consistentes, estados claros, documentación útil y una experiencia que no estorba.',
			focusLabel: 'Enfoque actual',
			focus:
				'Interfaces con intención, sistemas mantenibles y decisiones técnicas que se pueden explicar.',
			stats: [
				{
					value: '70%',
					label: 'precisión de puntos clave detectados en visión computacional',
				},
				{
					value: '52.4%',
					label: 'menos tiempo en tareas críticas de automatización',
				},
				{
					value: '20+',
					label: 'componentes UI responsivos liderados en Plomb.ai',
				},
			],
		},
		experience: {
			eyebrow: '02 / Experiencia',
			title: 'Construir bien también significa entender el contexto.',
			intro:
				'Tres entornos distintos, una misma forma de trabajar: escuchar el problema, hacer visible la complejidad y entregar una solución que resista el uso real.',
			items: [
				{
					period: 'Oct 2025 - Ago 2026',
					company: 'Axioma Sanitas Fisioterapia',
					role: 'Desarrollador Full-stack / Ingeniero de Software',
					location: 'Xalapa, Veracruz / Freelance',
					summary: 'Mantenimiento de Axioma App y modernización de herramientas clínicas y de escritorio.',
					bullets: [
						'Recuperé y estabilicé desde un instalador el código fuente de PODOS, una aplicación de apoyo a un podoscopio.',
						'Migré la capa de datos de SQL Server a SQLite embebido, eliminando servicios externos y reduciendo el peso del instalador.',
						'Desarrollé algoritmos de visión computacional y un renderizador vectorial con mapa de calor y lupa píxel a píxel, alcanzando hasta 70% de precisión en puntos clave.',
						'Diseñé concurrencia aislada para interactuar con hardware médico sin bloquear la interfaz, y mantuve Axioma App con Laravel, Livewire y TailwindCSS.',
					],
					tags: ['.NET 8', 'WinForms', 'Laravel', 'Livewire', 'SQLite', 'Computer Vision'],
				},
				{
					period: 'Ago 2025 - Dic 2025',
					company: 'Sophinauta Ltd / Plomb.ai',
					role: 'Desarrollador Web Frontend',
					location: 'Londres, Reino Unido / Remoto',
					summary: 'Interfaces de automatización, pruebas y mejoras de usabilidad basadas en evidencia.',
					bullets: [
						'Lideré el diseño e implementación de más de 20 componentes UI responsivos con React, TailwindCSS, TypeScript, Elixir y PostgreSQL.',
						'Reemplacé interacciones de modales por un panel no intrusivo y participé en el refinamiento de flujos de automatización.',
						'Automaticé pruebas E2E con Cypress y ExUnit, usando Faker para generar datos de prueba dinámicos.',
						'Las pruebas A/B elevaron la SUS de 61 a 71, la recomendación de 77% a 90% y el éxito de creación de automatizaciones de 88% a 96%.',
					],
					tags: ['React', 'TypeScript', 'Elixir', 'PostgreSQL', 'Cypress', 'A/B Testing'],
				},
				{
					period: 'Feb 2025 - Jul 2025',
					company: 'Facultad de Estadística e Informática / UV',
					role: 'Desarrollador Web PHP',
					location: 'Xalapa, Veracruz / Universidad Veracruzana',
					summary: 'Sistematización de procesos institucionales con foco en datos, seguridad y continuidad operativa.',
					bullets: [
						'Modernicé el Sistema de Tutorías Institucional y resolví errores críticos en flujos de usuario y acceso a archivos.',
						'Diseñé un módulo de historial con filtros avanzados, validación de usuarios y generación automática de PDF.',
						'Rediseñé la arquitectura central con variables de entorno y normalización de base de datos a tercera forma normal.',
						'Construí desde cero el Sistema de Registro de Asistentes para el 36° Foro Nacional de Estadística y lideré su despliegue local.',
					],
					tags: ['PHP', 'MySQL', 'HTML5', 'Bootstrap', 'TailwindCSS', 'Security'],
				},
			],
		},
		projects: {
			eyebrow: '03 / Proyectos',
			title: 'La prueba está en lo que el sistema permite hacer.',
			intro:
				'Una selección de proyectos donde la interfaz es sólo la superficie de decisiones sobre datos, arquitectura, accesibilidad y colaboración.',
			viewProject: 'Ver repositorio',
			items: [
				{
					number: '01',
					category: 'Healthcare / Desktop',
					title: 'PODOS',
					period: 'Oct 2025 - Ago 2026',
					description:
						'Herramienta de apoyo a un podoscopio reconstruida y modernizada para realizar análisis visual, diagnóstico preliminar y ajustes manuales sobre imágenes médicas.',
					impact: 'Hasta 70% de precisión en puntos clave detectados',
					stack: ['.NET 8', 'WinForms', 'SQLite', 'Computer Vision', 'Hardware'],
					link: 'mailto:egamboa020903@gmail.com',
					linkLabel: 'Consultar caso',
				},
				{
					number: '02',
					category: 'Healthcare / Web application',
					title: 'Axioma App',
					period: 'Oct 2025 - Ago 2026',
					description:
						'Sistema de gestión de pacientes e historias clínicas con formularios enriquecidos, guardado automático y componentes médicos interactivos.',
					impact: 'Datos relacionales escalables e interfaces clínicas con estado',
					stack: ['Laravel', 'Livewire', 'Blade', 'TailwindCSS', 'SQL'],
					link: 'mailto:egamboa020903@gmail.com',
					linkLabel: 'Consultar caso',
				},
				{
					number: '03',
					category: 'Producto web / E-commerce',
					title: 'Shop&Go',
					period: 'Ago 2024 - Ene 2025',
					description:
						'Plataforma de tienda de abarrotes construida alrededor de una API RESTful, un frontend React/Next.js y una experiencia accesible.',
					impact: 'WCAG 2.1 Nivel A + pruebas de integración E2E',
					stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'SQL Server'],
					link: 'https://github.com/adjcg15/shop-and-go',
					linkLabel: 'Ver repositorio',
				},
				{
					number: '04',
					category: 'EdTech / Full-stack',
					title: 'UVemy',
					period: 'Feb 2024 - Jul 2024',
					description:
						'Plataforma de cursos con cliente móvil basado en MVVM, cliente desktop y una API RESTful que conecta autenticación y contenido.',
					impact: 'Autenticación y autorización con JWT',
					stack: ['Java', 'Android Studio', '.NET', 'Node.js', 'Express', 'MySQL'],
					link: 'https://github.com/engaherr/UVemy',
					linkLabel: 'Ver repositorio',
				},
				{
					number: '05',
					category: 'Desktop / Comunicación distribuida',
					title: 'Adivina Quién Dibujando',
					period: 'Ago 2023 - Dic 2023',
					description:
						'Versión digital de un juego de mesa con una interfaz gráfica diseñada desde cero y comunicación cliente-servidor.',
					impact: 'Operaciones simultáneas dentro de un plazo corto',
					stack: ['.NET', 'WPF', 'WCF', 'C#', 'Testing'],
					link: 'https://github.com/engaherr/GuessWho',
					linkLabel: 'Ver repositorio',
				},
				{
					number: '06',
					category: 'Desktop / Gestión de farmacia',
					title: 'PharmaTech',
					period: 'Feb 2023 - Jun 2023',
					description:
						'Sistema académico de gestión de farmacia construido como aplicación de escritorio para organizar operaciones y datos del dominio.',
					impact: 'Aplicación desktop desarrollada con JavaFX y MySQL',
					stack: ['Java', 'JavaFX', 'CSS', 'MySQL'],
					link: 'https://github.com/engaherr/JFXFarmaciaIncremental',
					linkLabel: 'Ver repositorio',
				},
				{
					number: '07',
					category: 'Investigación / Desktop',
					title: 'Academic Research Management System',
					period: 'Ago 2022 - Jun 2023',
					description:
						'Sistema de gestión de proyectos terminales académicos desarrollado durante un ciclo completo de desarrollo de software.',
					impact: 'Liderazgo de equipo, control de versiones y resolución de conflictos complejos',
					stack: ['Java', 'JavaFX', 'CSS', 'MySQL', 'Git'],
					link: 'https://github.com/engaherr/SSPGER',
					linkLabel: 'Ver repositorio',
				},
			],
		},
		stack: {
			eyebrow: '04 / Stack',
			title: 'Herramientas elegidas por el problema, no por la moda.',
			intro:
				'Mi stack cruza producto, frontend, backend y sistemas. La tecnología importa; el criterio con el que se usa importa más.',
			groups: [
				{
					title: 'Interfaces',
					description: 'Componentes, estados y experiencias que se sienten consistentes.',
					items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5 / CSS3'],
				},
				{
					title: 'Servicios y datos',
					description: 'APIs y modelos de datos preparados para crecer con el producto.',
					items: ['Node.js', 'Express', 'Laravel', 'PHP', 'RESTful', 'gRPC', 'SQL Server', 'MySQL', 'PostgreSQL'],
				},
				{
					title: 'Sistemas y calidad',
					description: 'Desktop, pruebas y herramientas para entregar con confianza.',
					items: ['.NET', 'WPF', 'WinForms', 'Java', 'Jest', 'Supertest', 'Cypress', 'Docker', 'SonarQube'],
				},
				{
					title: 'Diseño y documentación',
					description: 'Hacer visibles las decisiones antes de convertirlas en código.',
					items: ['Figma', 'Pencil', 'Mermaid', 'draw.io', 'StarUML', 'Swagger'],
				},
			],
		},
		education: {
			eyebrow: '05 / Formación',
			title: 'Curiosidad técnica con los pies en la realidad.',
			degree: 'Licenciatura en Ingeniería de Software',
			school: 'Universidad Veracruzana',
			period: 'Enero 2026',
			location: 'Xalapa, Veracruz, México',
			gpa: 'Promedio 4.55 / 5.00',
			courses: 'Cursos relevantes: Diseño de UI, Desarrollo Web, Sistemas de Redes, Pentesting, Pruebas de Software y Bases de Datos.',
			research: 'Investigación: Revisión sistemática de literatura sobre evaluación de usabilidad de aplicaciones GenAI en contextos educativos.',
			english: 'Inglés B2',
			englishDetail: 'Intermedio alto',
		},
		resume: {
			eyebrow: '06 / CV',
			title: 'Una vista clara de mi trayectoria.',
			description:
				'El CV completo vive en HTML para que sea accesible, fácil de leer y limpio al imprimir.',
			print: 'Imprimir / guardar PDF',
			documentLabel: 'Currículum profesional',
			profileLabel: 'Perfil',
			experienceLabel: 'Experiencia profesional',
			projectsLabel: 'Proyectos destacados',
			skillsLabel: 'Habilidades',
			educationLabel: 'Educación y cualificaciones',
			contactLabel: 'Contacto',
		},
		contact: {
			eyebrow: '07 / Contacto',
			title: '¿Tienes un problema interesante?',
			body:
				'Cuéntame qué estás construyendo. Si el problema mezcla producto, interfaz y sistemas, probablemente tengamos algo que conversar.',
			cta: 'Escríbeme',
			availability: 'Disponible para oportunidades remotas y proyectos seleccionados.',
			email: 'egamboa020903@gmail.com',
		},
		footer: {
			built: 'Diseñado y construido con Astro, TailwindCSS y GSAP.',
			back: 'Volver arriba',
		},
	},
	en: {
		meta: {
			title: 'Enrique Gamboa Hernández | Software Engineer',
			description:
				'Portfolio of Enrique Gamboa Hernández, software engineer and full-stack developer focused on web products, clinical tools and scalable systems.',
		},
		nav: {
			about: 'About',
			experience: 'Experience',
			projects: 'Projects',
			stack: 'Stack',
			resume: 'Resume',
			contact: 'Contact',
			menu: 'Open menu',
			language: 'Language',
		},
		a11y: {
			skip: 'Skip to content',
			technologies: 'Technologies used',
			navigation: 'Main navigation',
			home: 'Enrique Gamboa Hernández - home',
		},
		loader: {
			label: 'Loading portfolio',
			eyebrow: 'PORTFOLIO / INIT',
			role: 'Software Engineer',
			status: 'Preparing the experience',
		},
		hero: {
			eyebrow: 'Software Engineer / Junior Full-stack Developer',
			titleLine1: 'I turn complexity',
			titleLine2: 'into products that move forward.',
			description:
				'I design and build interfaces, systems and tools that make people\'s work clearer.',
			primary: 'View projects',
			secondary: 'View resume',
			status: 'Open to remote opportunities',
			location: 'Mexico / UTC-6',
			scroll: 'Explore the journey',
			mapLabel: 'Capability map',
			mapFrontend: 'Frontend',
			mapBackend: 'Backend',
			mapSystems: 'Systems',
			mapImpact: 'Impact',
		},
		about: {
			eyebrow: '01 / Profile',
			title: 'From an ambiguous requirement to a solution people can use.',
			paragraph1:
				'I am a software engineer with experience in full-stack web development across academic, administrative and healthcare environments.',
			paragraph2:
				'I focus on requirements analysis, implementing technology solutions, process documentation and continuous improvement while collaborating with academic and administrative stakeholders and cross-functional teams.',
			focusLabel: 'Current focus',
			focus: 'Intentional interfaces, maintainable systems and technical decisions that can be explained.',
			stats: [
				{
					value: '70%',
					label: 'accuracy of key points detected in computer vision',
				},
				{
					value: '52.4%',
					label: 'less time spent on critical automation tasks',
				},
				{
					value: '20+',
					label: 'responsive UI components led at Plomb.ai',
				},
			],
		},
		experience: {
			eyebrow: '02 / Experience',
			title: 'Building well also means understanding the context.',
			intro:
				'Three different environments, the same way of working: listen to the problem, make complexity visible and ship a solution that survives real use.',
			items: [
				{
					period: 'Oct 2025 - Aug 2026',
					company: 'Axioma Sanitas Physiotherapy',
					role: 'Full-stack Web Developer',
					location: 'Xalapa, Veracruz, MX / Freelance',
					summary: 'Maintaining Axioma App while rebuilding and modernizing the PODOS desktop tool.',
					bullets: [
						'Spearheaded the maintenance and development of Axioma App, a patient and clinical history management system using Laravel, Livewire, Blade components and TailwindCSS, with Vite for optimized frontend builds.',
						'Was primarily responsible for rich, stateful UIs with autosave, multi-tab layouts and interactive medical components such as anatomical maps and pain sliders.',
						'Refactored legacy database schemas into scalable relational models and enforced data integrity through validation rules, database transactions and controller whitelisting.',
						'PODOS: Recovered and stabilized the source code from its version 1.0.0 installer through reverse engineering.',
						'PODOS: Migrated SQL Server to embedded SQLite and built computer-vision, vector-rendering and image-analysis features for the podoscope, reaching up to 70% accuracy in detected key points.',
						'Designed isolated concurrency for medical hardware without blocking the UI and leveraged AI tools to manage technical debt, resolve deprecations and upgrade core dependencies.',
					],
					tags: ['.NET 8', 'WinForms', 'Laravel', 'Livewire', 'SQLite', 'Computer Vision'],
				},
				{
					period: 'Aug 2025 - Dec 2025',
					company: 'Sophinauta Ltd / Plomb.ai',
					role: 'Frontend Web Developer',
					location: 'London, United Kingdom / Remote',
					summary: 'Automation interfaces, testing and evidence-based usability improvements.',
					bullets: [
						'Led the design and implementation of more than 20 responsive UI components using React, TailwindCSS, TypeScript, Elixir and PostgreSQL.',
						'Replaced modal interactions with a non-intrusive custom panel and helped refine core automation workflows.',
						'Automated E2E tests with Cypress and ExUnit, using Faker to generate dynamic test data.',
						'A/B testing raised SUS from 61 to 71, recommendation likelihood from 77% to 90% and automation task success from 88% to 96%.',
					],
					tags: ['React', 'TypeScript', 'Elixir', 'PostgreSQL', 'Cypress', 'A/B Testing'],
				},
				{
					period: 'Feb 2025 - Jul 2025',
					company: 'Faculty of Statistics and Computer Science / UV',
					role: 'PHP Web Developer',
					location: 'Xalapa, Veracruz / Universidad Veracruzana',
					summary: 'Institutional process automation focused on data, security and operational continuity.',
					bullets: [
						'Modernized the Institutional Tutoring System and fixed critical issues in user workflows and file access.',
						'Designed a report history module with advanced filters, user validation and automatic PDF generation.',
						'Redesigned the core architecture with environment variables and normalized the database to third normal form.',
						'Built the Attendance Registration System for the 36th National Statistics Forum from scratch and led its local deployment.',
					],
					tags: ['PHP', 'MySQL', 'HTML5', 'Bootstrap', 'TailwindCSS', 'Security'],
				},
			],
		},
		projects: {
			eyebrow: '03 / Projects',
			title: 'The proof is in what the system enables.',
			intro:
				'A selection of projects where the interface is only the surface of decisions about data, architecture, accessibility and collaboration.',
			viewProject: 'View repository',
			items: [
				{
					number: '01',
					category: 'Healthcare / Desktop',
					title: 'PODOS',
					period: 'Oct 2025 - Aug 2026',
					description:
						'Podoscope support tool rebuilt and modernized for visual analysis, preliminary assessment and manual adjustments on medical images.',
					impact: 'Up to 70% accuracy in detected key points',
					stack: ['.NET 8', 'WinForms', 'SQLite', 'Computer Vision', 'Hardware'],
					link: 'mailto:egamboa020903@gmail.com',
					linkLabel: 'Discuss the case',
				},
				{
					number: '02',
					category: 'Healthcare / Web application',
					title: 'Axioma App',
					period: 'Oct 2025 - Aug 2026',
					description:
						'Patient and clinical records system with rich forms, autosave and interactive medical components.',
					impact: 'Scalable relational data and stateful clinical interfaces',
					stack: ['Laravel', 'Livewire', 'Blade', 'TailwindCSS', 'SQL'],
					link: 'mailto:egamboa020903@gmail.com',
					linkLabel: 'Discuss the case',
				},
				{
					number: '03',
					category: 'Web product / E-commerce',
					title: 'Shop&Go',
					period: 'Aug 2024 - Jan 2025',
					description:
						'Grocery store platform built around a RESTful API, a React/Next.js frontend and an accessible user experience.',
					impact: 'WCAG 2.1 Level A + E2E integration testing',
					stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'SQL Server'],
					link: 'https://github.com/adjcg15/shop-and-go',
					linkLabel: 'View repository',
				},
				{
					number: '04',
					category: 'EdTech / Full-stack',
					title: 'UVemy',
					period: 'Feb 2024 - Jul 2024',
					description:
						'Course platform with an MVVM-based mobile client, a desktop client and a RESTful API connecting authentication and content.',
					impact: 'JWT authentication and authorization',
					stack: ['Java', 'Android Studio', '.NET', 'Node.js', 'Express', 'MySQL'],
					link: 'https://github.com/engaherr/UVemy',
					linkLabel: 'View repository',
				},
				{
					number: '05',
					category: 'Desktop / Distributed communication',
					title: 'Drawn Guess Who',
					period: 'Aug 2023 - Dec 2023',
					description:
						'Digital version of a board game with a custom-designed graphical interface and client-server communication.',
					impact: 'Concurrent operations delivered on a short timeline',
					stack: ['.NET', 'WPF', 'WCF', 'C#', 'Testing'],
					link: 'https://github.com/engaherr/GuessWho',
					linkLabel: 'View repository',
				},
				{
					number: '06',
					category: 'Desktop / Pharmacy management',
					title: 'PharmaTech',
					period: 'Feb 2023 - Jun 2023',
					description:
						'Academic pharmacy management system built as a desktop application for organizing domain operations and data.',
					impact: 'Desktop application built with JavaFX and MySQL',
					stack: ['Java', 'JavaFX', 'CSS', 'MySQL'],
					link: 'https://github.com/engaherr/JFXFarmaciaIncremental',
					linkLabel: 'View repository',
				},
				{
					number: '07',
					category: 'Research / Desktop',
					title: 'Academic Research Management System',
					period: 'Aug 2022 - Jun 2023',
					description:
						'Academic terminal-project management system delivered through a complete Software Development Life Cycle.',
					impact: 'Team leadership, version control and complex merge-conflict resolution',
					stack: ['Java', 'JavaFX', 'CSS', 'MySQL', 'Git'],
					link: 'https://github.com/engaherr/SSPGER',
					linkLabel: 'View repository',
				},
			],
		},
		stack: {
			eyebrow: '04 / Stack',
			title: 'Tools chosen for the problem, not the trend.',
			intro:
				'My stack crosses product, frontend, backend and systems. The technology matters; the reasoning behind it matters more.',
			groups: [
				{
					title: 'Interfaces',
					description: 'Components, states and experiences that feel consistent.',
					items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5 / CSS3'],
				},
				{
					title: 'Services and data',
					description: 'APIs and data models prepared to grow with the product.',
					items: ['Node.js', 'Express', 'Laravel', 'PHP', 'RESTful', 'gRPC', 'SQL Server', 'MySQL', 'PostgreSQL'],
				},
				{
					title: 'Systems and quality',
					description: 'Desktop, testing and tools for shipping with confidence.',
					items: ['.NET', 'WPF', 'WinForms', 'Java', 'Jest', 'Supertest', 'Cypress', 'Docker', 'SonarQube'],
				},
				{
					title: 'Design and documentation',
					description: 'Making decisions visible before turning them into code.',
					items: ['Figma', 'Pencil', 'Mermaid', 'draw.io', 'StarUML', 'Swagger'],
				},
			],
		},
		education: {
			eyebrow: '05 / Education',
			title: 'Technical curiosity with both feet in reality.',
			degree: 'Bachelor\'s Degree in Software Engineering',
			school: 'Universidad Veracruzana',
			period: 'January 2026',
			location: 'Xalapa, Veracruz, Mexico',
			gpa: 'GPA 4.55 / 5.00',
			courses: 'Relevant courses: UI Design, Web Development, Network Systems, Pentesting, Software Testing and Databases.',
			research: 'Research: Systematic literature review on usability assessment of GenAI applications in educational contexts.',
			english: 'English B2',
			englishDetail: 'Upper-intermediate',
		},
		resume: {
			eyebrow: '06 / Resume',
			title: 'A clear view of my journey.',
			description:
				'The complete resume lives in HTML so it stays accessible, easy to read and clean when printed.',
			print: 'Print / save PDF',
			documentLabel: 'Professional resume',
			profileLabel: 'Profile',
			experienceLabel: 'Professional experience',
			projectsLabel: 'Selected projects',
			skillsLabel: 'Skills',
			educationLabel: 'Education and qualifications',
			contactLabel: 'Contact',
		},
		contact: {
			eyebrow: '07 / Contact',
			title: 'Have an interesting problem?',
			body:
				'Tell me what you are building. If the problem sits between product, interface and systems, we probably have something to discuss.',
			cta: 'Start a conversation',
			availability: 'Available for remote opportunities and selected projects.',
			email: 'egamboa020903@gmail.com',
		},
		footer: {
			built: 'Designed and built with Astro, TailwindCSS and GSAP.',
			back: 'Back to top',
		},
	},
} as const;

export type PortfolioContent = (typeof content)[Locale];
