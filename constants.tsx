
import React from 'react';
import { ContentTranslation, ResourceLink } from './types';

export const LANGUAGES = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const TRANSLATIONS: Record<LanguageCode, ContentTranslation> = {
  pt: {
    nav: { pdk: 'Opções PDK', tools: 'Ferramentas', flow: 'Fluxo', resources: 'Recursos' },
    hero: {
      title: <>Prototipagem de CIs com Ferramentas de <span className="text-blue-600">Código Aberto</span>.</>,
      description: 'A era do design de semicondutores proprietários está em evolução. Os OpenPDKs e fluxos académicos democratizam a investigação nesta área, permitindo que investigadores e engenheiros criem e simulem circuitos integrados utilizando kits de processo gratuitos e de nível industrial.'
    },
    intro: {
      title: 'Porquê utilizar OpenPDK?',
      description: 'Um Process Design Kit (PDK) é o elo fundamental entre o projetista e a unidade de fabrico (fab). Os OpenPDKs tornam esta documentação técnica acessível a toda a comunidade, eliminando a burocracia dos acordos de confidencialidade (NDAs).',
      bullets: [
        'Acesso livre a parâmetros tecnológicos avançados.',
        'Desenvolvimento de hardware colaborativo via GitHub.',
        'Curva de aprendizagem acelerada em microelectrónica.',
        'Resultados de investigação transparentes e reprodutíveis.'
      ],
      illustration: 'Diagrama de Empilhamento de Camadas'
    },
    pdkSection: {
      title: 'Opções de PDK Suportadas',
      description: 'Processos industriais optimizados para experimentação técnica e académica.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: 'PDK de código aberto BiCMOS de 130nm.', details: 'Tecnologia alemã de alta performance, ideal para frequências elevadas e projectos analógicos.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: 'Tecnologia CMOS de 180nm.', details: 'Integrado no programa Open MPW para prototipagem académica e soluções IoT.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'O primeiro PDK open-source da indústria.', details: 'Processo híbrido de 130nm que serviu de base para o movimento moderno de hardware aberto.' }
      ]
    },
    toolsSection: {
      title: 'Ecossistema de Ferramentas',
      description: 'A suíte de software EDA necessária para transformar conceitos em silício.',
      tools: [
        { id: 'xschem', name: 'Xschem', category: 'Front-end', description: 'Editor de esquemáticos focado em VLSI e simulação de circuitos.' },
        { id: 'ngspice', name: 'Ngspice', category: 'Simulação', description: 'Simulador de sinal misto para validação eléctrica rigorosa.' },
        { id: 'magic', name: 'Magic', category: 'Layout', description: 'Ferramenta interactiva de layout com verificação DRC em tempo real.' },
        { id: 'klayout', name: 'KLayout', category: 'Layout/Vista', description: 'Visualizador de máscaras de alta performance compatível com Python.' },
        { id: 'openlane', name: 'OpenLane', category: 'RTL-to-GDS', description: 'Fluxo digital automatizado para implementação completa de sistemas.' },
        { id: 'netgen', name: 'Netgen', category: 'Verificação', description: 'Ferramenta de comparação LVS para garantir a integridade do design.' }
      ]
    },
    flowSection: {
      title: 'Fluxo de Trabalho de Prototipagem',
      description: 'O percurso padrão para o desenvolvimento de um circuito integrado customizado.',
      steps: [
        { id: 1, label: 'Captura de Esquemático', description: 'Definição da lógica e parâmetros fundamentais.' },
        { id: 2, label: 'Simulação SPICE', description: 'Validação do comportamento e performance eléctrica.' },
        { id: 3, label: 'Layout Físico', description: 'Desenho das máscaras e geometria física do chip.' },
        { id: 4, label: 'DRC & LVS', description: 'Verificação de regras físicas e consistência lógica.' },
        { id: 5, label: 'Exportação GDSII', description: 'Geração dos ficheiros finais para fabricação.' }
      ]
    },
    resourcesSection: {
      title: 'Recursos e Comunidade',
      description: 'Documentação técnica e redes de colaboração que sustentam este ecossistema.',
      roadmapTitle: 'Roteiro de Desenvolvimento',
      roadmapDescription: 'Este movimento está em constante expansão. No futuro, planeamos integrar:',
      roadmapFeatures: [
        'Automação de Layout Analógico via IA',
        'Revisões de Design Colaborativas em Tempo Real',
        'Bibliotecas de IPs Abertas e Caracterizadas',
        'Sistemas Cloud para Verificação Automática'
      ]
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: { pdk: 'PDK Options', tools: 'Tools', flow: 'Workflow', resources: 'Resources' },
    hero: {
      title: <>Prototyping ICs with <span className="text-blue-600">Open-Source</span> Tools.</>,
      description: 'The era of closed-source silicon design is evolving. OpenPDKs and academic flows are democratizing semiconductor research, allowing anyone to design and simulate integrated circuits using free, industrial-grade process kits.'
    },
    intro: {
      title: 'Why OpenPDK?',
      description: 'A Process Design Kit (PDK) provides the essential link between a designer and the fab. OpenPDKs make this information accessible to researchers, hobbyists, and students without the friction of NDAs.',
      bullets: [
        'Zero-cost access to technology parameters.',
        'Collaborative hardware design on GitHub.',
        'Accelerated learning for semiconductor engineering.',
        'Transparent and reproducible research results.'
      ],
      illustration: 'Illustration of Layer Stacking'
    },
    pdkSection: {
      title: 'Supported PDK Options',
      description: 'Industrial processes now available for open-source and academic experimentation.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: '130nm BiCMOS Open Source PDK.', details: 'A high-performance technology from Germany focused on high-frequency and analog designs.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: '180nm CMOS technology.', details: 'Part of the Google-sponsored Open MPW program for academic and IoT-focused prototyping.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'The industry-first open-source PDK.', details: 'A 130nm hybrid process that sparked the modern open-source IC movement.' }
      ]
    },
    toolsSection: {
      title: 'Open-Source Toolchain',
      description: 'The EDA suite required to go from concept to silicon.',
      tools: [
        { id: 'xschem', name: 'Xschem', category: 'Front-end', description: 'Schematic editor for VLSI design and simulation setup.' },
        { id: 'ngspice', name: 'Ngspice', category: 'Simulation', description: 'Mixed-level/mixed-signal circuit simulator for analog verification.' },
        { id: 'magic', name: 'Magic', category: 'Layout', description: 'Interactive VLSI layout tool with real-time DRC checking.' },
        { id: 'klayout', name: 'KLayout', category: 'Layout/Viewing', description: 'High-performance layout viewer and editor with Python scripting.' },
        { id: 'openlane', name: 'OpenLane', category: 'RTL-to-GDS', description: 'Automated digital flow implementing a complete silicon synthesis.' },
        { id: 'netgen', name: 'Netgen', category: 'Verification', description: 'LVS (Layout vs Schematic) verification tool for silicon accuracy.' }
      ]
    },
    flowSection: {
      title: 'Example Prototyping Flow',
      description: 'The typical journey of a custom IC designer.',
      steps: [
        { id: 1, label: 'Schematic Capture', description: 'Designing circuit logic and parameters.' },
        { id: 2, label: 'SPICE Simulation', description: 'Verifying electrical behavior.' },
        { id: 3, label: 'Physical Layout', description: 'Creating the geometric representation.' },
        { id: 4, label: 'DRC & LVS', description: 'Checking design rules and consistency.' },
        { id: 5, label: 'GDSII Export', description: 'Generating final stream for fabrication.' }
      ]
    },
    resourcesSection: {
      title: 'Resources & Links',
      description: 'Connect with the community and explore the documentation that powers the ecosystem.',
      roadmapTitle: 'Future Work / Roadmap',
      roadmapDescription: 'The open-source IC movement is just getting started. We are working towards an integrated hub that features:',
      roadmapFeatures: [
        'AI-Assisted Analog Layout Generation',
        'Collaborative Design Reviews',
        'Shared IP Libraries & Characterization',
        'Cloud-based CI/CD for GDSII Verification'
      ]
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: { pdk: 'Opciones PDK', tools: 'Herramientas', flow: 'Flujo', resources: 'Recursos' },
    hero: {
      title: <>Prototipado de CIs con Herramientas de <span className="text-blue-600">Código Abierto</span>.</>,
      description: 'La era del diseño de silicio propietario está evolucionando. Los OpenPDKs y los flujos académicos democratizan la investigación de semiconductores, permitiendo el diseño y simulación de circuitos integrados con kits profesionales gratuitos.'
    },
    intro: {
      title: '¿Por qué usar OpenPDK?',
      description: 'Un Process Design Kit (PDK) es el vínculo esencial entre el diseñador y la fábrica. Los OpenPDKs hacen que esta información sea accesible sin las barreras legales de los contratos de confidencialidad (NDA).',
      bullets: [
        'Acceso gratuito a parámetros tecnológicos de vanguardia.',
        'Desarrollo de hardware colaborativo mediante GitHub.',
        'Curva de aprendizaje acelerada en microelectrónica.',
        'Resultados de investigación transparentes y verificables.'
      ],
      illustration: 'Ilustración de Capas de Proceso'
    },
    pdkSection: {
      title: 'Opciones de PDK Disponibles',
      description: 'Procesos industriales listos para la experimentación académica y el prototipado rápido.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: 'PDK open-source BiCMOS de 130nm.', details: 'Tecnología alemana de alto rendimiento enfocada en radiofrecuencia y señales analógicas.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: 'Tecnología CMOS de 180nm.', details: 'Parte del ecosistema Google Open MPW para prototipado académico y dispositivos IoT.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'El primer PDK open-source comercial del mundo.', details: 'Proceso híbrido de 130nm que impulsó el ecosistema actual de hardware libre.' }
      ]
    },
    toolsSection: {
      title: 'Suite de Herramientas EDA',
      description: 'El conjunto de software necesario para llevar un diseño desde la idea hasta el silicio.',
      tools: [
        { id: 'xschem', name: 'Xschem', category: 'Front-end', description: 'Editor de esquemas optimizado para diseño VLSI y simulación.' },
        { id: 'ngspice', name: 'Ngspice', category: 'Simulación', description: 'Simulador de circuitos para validación eléctrica y funcional.' },
        { id: 'magic', name: 'Magic', category: 'Layout', description: 'Herramienta interactiva de layout con chequeo DRC en tiempo real.' },
        { id: 'klayout', name: 'KLayout', category: 'Layout/Vista', description: 'Potente visor y editor de máscaras compatible con scripts de Python.' },
        { id: 'openlane', name: 'OpenLane', category: 'RTL-to-GDS', description: 'Flujo digital automatizado que realiza la síntesis completa del chip.' },
        { id: 'netgen', name: 'Netgen', category: 'Verificación', description: 'Herramienta de comparación LVS para asegurar la integridad física.' }
      ]
    },
    flowSection: {
      title: 'Flujo de Diseño Recomendado',
      description: 'El estándar de la industria para el desarrollo de circuitos integrados personalizados.',
      steps: [
        { id: 1, label: 'Captura de Esquema', description: 'Definición de la lógica y los parámetros del circuito.' },
        { id: 2, label: 'Simulación SPICE', description: 'Validación del comportamiento eléctrico esperado.' },
        { id: 3, label: 'Layout Físico', description: 'Creación de la representación geométrica de las máscaras.' },
        { id: 4, label: 'DRC & LVS', description: 'Verificación de reglas de diseño y consistencia física.' },
        { id: 5, label: 'Exportación GDSII', description: 'Generación del archivo final listo para la fabricación.' }
      ]
    },
    resourcesSection: {
      title: 'Recursos y Comunidad',
      description: 'Conéctese con expertos y acceda a la documentación técnica del ecosistema.',
      roadmapTitle: 'Hoja de Ruta / Futuro',
      roadmapDescription: 'El ecosistema de código abierto sigue creciendo. Próximamente incluiremos:',
      roadmapFeatures: [
        'Generación de Layout Analógico con IA',
        'Revisiones de Diseño Colaborativas en la Nube',
        'Librerías de IP Abiertas y Caracterizadas',
        'Flujos de CI/CD para Validación GDSII'
      ]
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  }
};

export const RESOURCES: ResourceLink[] = [
  { title: 'Open_PDKs Installer', url: 'https://github.com/RTimothyEdwards/open_pdks', type: 'github' },
  { title: 'Efabless Platform', url: 'https://efabless.com/', type: 'community' },
  { title: 'The IHP Open PDK Docs', url: 'https://github.com/IHP-GmbH/IHP-Open-PDK', type: 'docs' },
  { title: 'SkyWater Documentation', url: 'https://skywater-pdk.readthedocs.io/', type: 'docs' }
];
