
export interface PDKOption {
  id: string;
  name: string;
  description: string;
  details: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface FlowStep {
  id: number;
  label: string;
  description: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'github' | 'docs' | 'community';
}

export interface ContentTranslation {
  nav: {
    pdk: string;
    tools: string;
    flow: string;
    resources: string;
  };
  hero: {
    title: React.ReactNode;
    description: string;
  };
  intro: {
    title: string;
    description: string;
    bullets: string[];
    illustration: string;
  };
  pdkSection: {
    title: string;
    description: string;
    options: PDKOption[];
  };
  toolsSection: {
    title: string;
    description: string;
    tools: Tool[];
  };
  flowSection: {
    title: string;
    description: string;
    steps: FlowStep[];
  };
  resourcesSection: {
    title: string;
    description: string;
    roadmapTitle: string;
    roadmapDescription: string;
    roadmapFeatures: string[];
  };
  footer: {
    rights: string;
  };
}
