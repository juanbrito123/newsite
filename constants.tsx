
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
      description: 'Democratizando o design de semicondutores. Com iniciativas como o IHP OpenPDK e o programa Google Open MPW, pesquisadores e engenheiros podem agora projetar circuitos integrados de alta performance sem barreiras de licenciamento ou NDAs restritivos.'
    },
    intro: {
      title: 'A Necessidade de Talentos',
      description: 'A indústria global enfrenta uma escassez crítica de talentos em microeletrônica. Estima-se um déficit de mais de 100.000 engenheiros na Europa até 2030. Os OpenPDKs surgem como a solução educacional e técnica fundamental para capacitar a próxima geração de designers de chips.',
      bullets: [
        'Acesso total a parâmetros tecnológicos (IHP, SkyWater, GF).',
        'Capacitação técnica através de fluxos "Full-stack" (do RTL ao GDSII).',
        'Iniciativas globais como "One Student One Chip" e o projeto brasileiro "CI Aberto".',
        'Redução drástica dos custos de Tapeout para fins acadêmicos e de P&D.'
      ],
      illustration: 'Diagrama de Processo SG13G2'
    },
    pdkSection: {
      title: 'Opções de PDK e Iniciativas',
      description: 'Processos industriais qualificados disponíveis para a comunidade de hardware aberto.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: '130nm BiCMOS de alto desempenho.', details: 'Oferece f_t/f_max de 350/450 GHz, ideal para RF, mm-Wave e aplicações espaciais ou criogênicas.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'O pioneiro 130nm CMOS open-source.', details: 'Base para o programa Open MPW da Google/Efabless, permitindo fabricação gratuita para projetos abertos.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: 'Tecnologia 180nm CMOS para sinais mistos.', details: 'Focado em IoT e aplicações de baixa potência, suportado por fluxos de design automatizados como OpenLane.' }
      ]
    },
    toolsSection: {
      title: 'Ecossistema EDA Livre',
      description: 'Uma cadeia de ferramentas completa para design analógico, digital e RF.',
      tools: [
        { id: 'xschem', name: 'Xschem / QUCS-S', category: 'Esquema', description: 'Captura de esquemáticos hierárquicos e configuração de simulações SPICE.' },
        { id: 'ngspice', name: 'Ngspice / Xyce', category: 'Simulação', description: 'Simuladores de alto desempenho para validação elétrica e análise de ruído.' },
        { id: 'magic', name: 'Magic VLSI', category: 'Layout', description: 'Ferramenta interativa de layout com DRC em tempo real e extração de parasitas.' },
        { id: 'klayout', name: 'KLayout', category: 'Máscaras', description: 'Visualizador e editor GDSII/OASIS com suporte a scripts Python e Pcell.' },
        { id: 'openems', name: 'OpenEMS', category: 'EM Solver', description: 'Simulador eletromagnético 3D FDTD para modelagem de indutores e antenas.' },
        { id: 'openvaf', name: 'OpenVAF', category: 'Verilog-A', description: 'Compilador Verilog-A de próxima geração para modelos de dispositivos compactos.' }
      ]
    },
    flowSection: {
      title: 'Fluxo Sugerido: Do Código ao Chip',
      description: 'Siga o percurso de design utilizado em universidades líderes como ETH Zürich e Stanford.',
      steps: [
        { id: 1, label: 'Especificação & RTL', description: 'Definição da arquitetura (ex: RISC-V) ou esquema analógico.' },
        { id: 2, label: 'Simulação Funcional', description: 'Validação com Ngspice ou modelos Verilog-A via OpenVAF.' },
        { id: 3, label: 'Síntese & P&R', description: 'Uso de OpenLane ou OpenROAD para automação física digital.' },
        { id: 4, label: 'Verificação Física', description: 'Checagem final de regras (DRC) e consistência (LVS) com Netgen.' },
        { id: 5, label: 'Tapeout MPW', description: 'Submissão do GDSII para fabricação via Efabless ou IHP MPW.' }
      ]
    },
    resourcesSection: {
      title: 'Recursos e Projetos',
      description: 'Links fundamentais para a comunidade luso-brasileira e global de microeletrônica.',
      roadmapTitle: 'Desafios e Oportunidades',
      roadmapDescription: 'O futuro do design de CIs abertos foca na automação de sinais mistos e interoperabilidade entre ferramentas:',
      roadmapFeatures: [
        'Projeto "CI Aberto" (UFRGS) para curadoria em português',
        'Iniciativa "One Student One Chip" (Processadores RISC-V)',
        'Automação de Layout Analógico (Framework ALIGN)',
        'Integração de modelagem criogênica para computação quântica'
      ]
    },
    footer: {
      rights: 'Inspirado na Iniciativa IHP OpenPDK e no esforço global por silício aberto.'
    }
  },
  en: {
    nav: { pdk: 'PDK Options', tools: 'Tools', flow: 'Workflow', resources: 'Resources' },
    hero: {
      title: <>Prototyping ICs with <span className="text-blue-600">Open-Source</span> Tools.</>,
      description: 'Democratizing semiconductor design. With initiatives like the IHP OpenPDK and Google Open MPW, researchers and engineers can now design high-performance integrated circuits without the friction of licensing or restrictive NDAs.'
    },
    intro: {
      title: 'The Talent Gap Challenge',
      description: 'The global semiconductor industry faces a critical talent shortage, with over 100,000 engineering vacancies expected in the EU by 2030. OpenPDKs serve as the essential educational and technical foundation to empower the next generation of chip designers.',
      bullets: [
        'Full-stack access to technology parameters (IHP, SkyWater, GF).',
        'Technical training through "RTL-to-GDSII" workflows.',
        'Global initiatives like "One Student One Chip" and SSCS PICO.',
        'Drastic reduction in tapeout costs for academic R&D.'
      ],
      illustration: 'SG13G2 Process Diagram'
    },
    pdkSection: {
      title: 'PDK Options & Initiatives',
      description: 'Industrial qualified processes available for the open hardware community.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: 'High-performance 130nm BiCMOS.', details: 'Offers f_t/f_max of 350/450 GHz, ideal for RF, mm-Wave, and cryo/space applications.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'Pioneering 130nm CMOS open PDK.', details: 'The foundation for the Google/Efabless Open MPW program, offering free fabrication for open projects.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: '180nm CMOS technology for mixed-signal.', details: 'Focused on IoT and low-power applications, supported by automated flows like OpenLane.' }
      ]
    },
    toolsSection: {
      title: 'Open EDA Toolchain',
      description: 'A complete suite for analog, digital, and RF design from code to chip.',
      tools: [
        { id: 'xschem', name: 'Xschem / QUCS-S', category: 'Schematic', description: 'Hierarchical schematic capture and SPICE simulation setup.' },
        { id: 'ngspice', name: 'Ngspice / Xyce', category: 'Simulation', description: 'High-performance simulators for electrical validation and noise analysis.' },
        { id: 'magic', name: 'Magic VLSI', category: 'Layout', description: 'Interactive VLSI layout tool with real-time DRC checking and extraction.' },
        { id: 'klayout', name: 'KLayout', category: 'Masks', description: 'High-performance GDSII/OASIS viewer/editor with Python scriptable Pcells.' },
        { id: 'openems', name: 'OpenEMS', category: 'EM Solver', description: '3D FDTD electromagnetic simulator for inductor and antenna modeling.' },
        { id: 'openvaf', name: 'OpenVAF', category: 'Verilog-A', description: 'Next-generation Verilog-A compiler for compact device models.' }
      ]
    },
    flowSection: {
      title: 'Workflow: From Code to Silicon',
      description: 'Follow the design journey used by leading research institutions like ETH Zürich and Stanford.',
      steps: [
        { id: 1, label: 'Spec & RTL', description: 'Define architecture (e.g., RISC-V) or analog schematics.' },
        { id: 2, label: 'Functional Simulation', description: 'Verify with Ngspice or Verilog-A models via OpenVAF.' },
        { id: 3, label: 'Synthesis & P&R', description: 'Use OpenLane or OpenROAD for automated physical digital design.' },
        { id: 4, label: 'Physical Verification', description: 'Final DRC rules check and LVS consistency using Netgen.' },
        { id: 5, label: 'MPW Tapeout', description: 'Submit GDSII for fabrication through Efabless or IHP MPW runs.' }
      ]
    },
    resourcesSection: {
      title: 'Resources & Projects',
      description: 'Key documentation and global communities powering the open IC movement.',
      roadmapTitle: 'Challenges & Opportunities',
      roadmapDescription: 'The future of open-source IC design targets mixed-signal automation and tool interoperability:',
      roadmapFeatures: [
        'CI Aberto Project (Brazil) for local curation',
        'One Student One Chip Initiative (China)',
        'Analog Layout Automation (ALIGN Framework)',
        'Cryogenic modeling for Quantum Computing'
      ]
    },
    footer: {
      rights: 'Inspired by the IHP OpenPDK Initiative and the global FOSS silicon movement.'
    }
  },
  es: {
    nav: { pdk: 'Opciones PDK', tools: 'Herramientas', flow: 'Flujo', resources: 'Recursos' },
    hero: {
      title: <>Prototipado de CIs con Herramientas de <span className="text-blue-600">Código Abierto</span>.</>,
      description: 'Democratizando el diseño de semiconductores. Con iniciativas como IHP OpenPDK y Google Open MPW, ingenieros y estudiantes pueden diseñar circuitos integrados de alta performance sin barreras legales o NDAs.'
    },
    intro: {
      title: 'El Reto del Talento',
      description: 'La industria global enfrenta una escasez crítica de ingenieros. Se estima un déficit de 100,000 puestos en Europa para 2030. Los OpenPDKs son la base educativa para capacitar a la próxima generación de diseñadores de chips.',
      bullets: [
        'Acceso total a parámetros tecnológicos avanzados (IHP, SkyWater, GF).',
        'Capacitación técnica en flujos completos "RTL-to-GDSII".',
        'Iniciativas globales como "One Student One Chip" y SSCS PICO.',
        'Reducción drástica de costos de fabricación para I+D académico.'
      ],
      illustration: 'Esquema de Proceso SG13G2'
    },
    pdkSection: {
      title: 'Opciones PDK e Iniciativas',
      description: 'Procesos industriales calificados disponibles para la comunidad de hardware abierto.',
      options: [
        { id: 'ihp', name: 'IHP SG13G2', description: '130nm BiCMOS de alta performance.', details: 'Ofrece f_t/f_max de 350/450 GHz, ideal para RF, mm-Wave y aplicaciones espaciales.' },
        { id: 'sky', name: 'SkyWater SKY130', description: 'Pionero 130nm CMOS open-source.', details: 'Base del programa Open MPW de Google/Efabless, permitiendo fabricación gratuita para proyectos abiertos.' },
        { id: 'gf', name: 'GlobalFoundries 180MCU', description: 'Tecnología 180nm CMOS para señales mixtas.', details: 'Enfocado en IoT y baja potencia, soportado por flujos automatizados como OpenLane.' }
      ]
    },
    toolsSection: {
      title: 'Ecosistema EDA Libre',
      description: 'Suite completa de software para diseño analógico, digital y RF.',
      tools: [
        { id: 'xschem', name: 'Xschem / QUCS-S', category: 'Esquema', description: 'Captura de esquemáticos jerárquicos y configuración de simulaciones.' },
        { id: 'ngspice', name: 'Ngspice / Xyce', category: 'Simulación', description: 'Simuladores de alto rendimiento para validación eléctrica y análisis de ruido.' },
        { id: 'magic', name: 'Magic VLSI', category: 'Layout', description: 'Herramienta interactiva de layout con DRC en tiempo real.' },
        { id: 'klayout', name: 'KLayout', category: 'Máscaras', description: 'Visor y editor GDSII compatible con scripts Python y Pcells.' },
        { id: 'openems', name: 'OpenEMS', category: 'EM Solver', description: 'Simulador electromagnético 3D FDTD para modelado de antenas e inductores.' },
        { id: 'openvaf', name: 'OpenVAF', category: 'Verilog-A', description: 'Compilador Verilog-A de próxima generación para modelos compactos.' }
      ]
    },
    flowSection: {
      title: 'Flujo de Trabajo Sugerido',
      description: 'El camino del diseño utilizado en instituciones líderes como ETH Zürich y Stanford.',
      steps: [
        { id: 1, label: 'Especificación & RTL', description: 'Definición de arquitectura (ej: RISC-V) o esquemas analógicos.' },
        { id: 2, label: 'Simulación Funcional', description: 'Validación con Ngspice o modelos Verilog-A vía OpenVAF.' },
        { id: 3, label: 'Síntesis & P&R', description: 'Uso de OpenLane o OpenROAD para automatización física.' },
        { id: 4, label: 'Verificación Física', description: 'Chequeo de reglas (DRC) y consistencia (LVS) con Netgen.' },
        { id: 5, label: 'Tapeout MPW', description: 'Envío de GDSII para fabricación vía Efabless o IHP MPW.' }
      ]
    },
    resourcesSection: {
      title: 'Recursos y Proyectos',
      description: 'Documentación técnica y comunidades globales que impulsan el hardware abierto.',
      roadmapTitle: 'Hoja de Ruta',
      roadmapDescription: 'El futuro del diseño abierto se centra en la automatización de señales mixtas e interoperabilidad:',
      roadmapFeatures: [
        'Proyecto "CI Aberto" (Brasil) para curaduría local',
        'Iniciativa "One Student One Chip" (Procesadores RISC-V)',
        'Automatización de Layout Analógico (ALIGN)',
        'Modelado criogénico para computación cuántica'
      ]
    },
    footer: {
      rights: 'Inspirado en la iniciativa IHP OpenPDK y el movimiento global de silicio abierto.'
    }
  }
};

export const RESOURCES: ResourceLink[] = [
  { title: 'IHP OpenPDK (GitHub)', url: 'https://github.com/IHP-GmbH/IHP-Open-PDK', type: 'github' },
  { title: 'SkyWater Open PDK', url: 'https://skywater-pdk.readthedocs.io/', type: 'docs' },
  { title: 'CI Aberto (Brazil)', url: 'https://www.ufrgs.br/cadmicro/ciaberto/', type: 'community' },
  { title: 'One Student One Chip (ysyx)', url: 'https://ysyx.org/en/', type: 'community' },
  { title: 'Efabless Open MPW', url: 'https://efabless.com/open_shuttle_program', type: 'community' },
  { title: 'FOSSEE eSim', url: 'https://esim.fossee.in/', type: 'docs' }
];
