
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES, LanguageCode, RESOURCES } from './constants';
import { CpuIcon, LayersIcon, ExternalLinkIcon, ToolIcon } from './components/Icons';
import Card from './components/Card';
import { PDKOption, Tool, FlowStep } from './types';

type Page = 'home' | 'pdk' | 'tools' | 'flow' | 'resources';

interface NavbarProps {
  currentLang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang, currentPage, setCurrentPage }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3 group">
          <div className="brazil-gradient p-2 rounded-xl text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
            <CpuIcon />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-emerald-900">OpenIC <span className="text-emerald-500">Brasil</span></span>
        </button>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-emerald-900/70">
          {(['pdk', 'tools', 'flow', 'resources'] as Page[]).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`transition-all hover:scale-105 ${currentPage === page ? 'text-emerald-600 border-b-2 border-emerald-500' : 'hover:text-emerald-600'}`}
            >
              {t.nav[page]}
            </button>
          ))}
        </div>

        <div className="flex items-center bg-emerald-50 p-1.5 rounded-full border border-emerald-100">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLang(lang.code)}
              className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all ${
                currentLang === lang.code 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-emerald-700 hover:text-emerald-900'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const LandingPage: React.FC<{ t: any; setCurrentPage: (p: Page) => void }> = ({ t, setCurrentPage }) => (
  <>
    {/* Hero Section */}
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-emerald-200">
            Latin American Silicon Innovation
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-900 leading-[1] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl text-emerald-800/70 leading-relaxed font-medium max-w-2xl mb-10">
            {t.hero.description}
          </p>
          <button 
            onClick={() => setCurrentPage('flow')}
            className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all hover:scale-105"
          >
            {t.hero.cta}
          </button>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square brazil-gradient rounded-[40px] shadow-2xl shadow-emerald-200 rotate-3 flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 organic-pattern opacity-20" />
            <div className="relative z-10 text-white transform -rotate-3 scale-150">
              <CpuIcon />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PDK Summary Section */}
    <section className="py-24 px-6 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 organic-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-white mb-6">{t.pdkSection.title}</h2>
            <p className="text-emerald-100/70 text-lg font-medium">{t.pdkSection.description}</p>
          </div>
          <button onClick={() => setCurrentPage('pdk')} className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors hidden sm:block">
            {t.pdkSection.viewDetails} →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.pdkSection.options.map((pdk: PDKOption) => (
            <div key={pdk.id} className="bg-emerald-800/40 backdrop-blur-md border border-emerald-700/50 p-8 rounded-[32px] hover:bg-emerald-800/60 transition-all">
              <h3 className="text-2xl font-extrabold text-white mb-4">{pdk.name}</h3>
              <p className="text-emerald-100/80 mb-6 leading-relaxed font-medium text-sm">{pdk.description}</p>
              <button onClick={() => setCurrentPage('pdk')} className="text-amber-400 text-xs font-black uppercase tracking-widest hover:text-amber-300 transition-colors">
                {t.pdkSection.viewDetails}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const PDKPage: React.FC<{ t: any }> = ({ t }) => (
  <div className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-emerald-900 mb-12">{t.pdkSection.title}</h2>
    <div className="space-y-12">
      {t.pdkSection.options.map((pdk: PDKOption) => (
        <div key={pdk.id} className="bg-white rounded-[40px] p-8 md:p-12 border border-emerald-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 text-emerald-50 opacity-10">
            <LayersIcon />
          </div>
          <div className="grid lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-7">
              <h3 className="text-3xl font-black text-emerald-900 mb-6">{pdk.name}</h3>
              <p className="text-lg text-emerald-800/70 font-medium mb-8 leading-relaxed">{pdk.techSummary}</p>
              <h4 className="font-bold text-emerald-900 mb-4">Typical Use Cases:</h4>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {pdk.useCases.map((uc, i) => (
                  <li key={i} className="flex items-center gap-2 text-emerald-700 font-medium">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <a href={pdk.docsLink} target="_blank" className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between hover:bg-emerald-100 transition-colors group">
                <span className="font-bold text-emerald-900">Documentation</span>
                <ExternalLinkIcon />
              </a>
              <a href={pdk.mpwLink} target="_blank" className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-between hover:bg-amber-100 transition-colors group">
                <span className="font-bold text-amber-900">MPW Programs</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ToolsPage: React.FC<{ t: any }> = ({ t }) => (
  <div className="py-20 px-6 max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-4xl font-black text-emerald-900 mb-6">{t.toolsSection.title}</h2>
      <p className="text-emerald-800/60 text-lg font-medium">{t.toolsSection.description}</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.toolsSection.tools.map((tool: Tool) => (
        <div key={tool.id} className="group p-8 border-2 border-emerald-50 rounded-[32px] bg-white hover:border-emerald-200 transition-all hover:shadow-2xl hover:shadow-emerald-100/50">
          <div className="flex justify-between items-start mb-6">
            <h4 className="font-black text-xl text-emerald-900">{tool.name}</h4>
            <span className="text-[10px] mono font-black bg-emerald-100 px-3 py-1 rounded-full text-emerald-700 uppercase tracking-widest">{tool.category}</span>
          </div>
          <p className="text-emerald-800/70 leading-relaxed font-medium mb-6">{tool.description}</p>
          <div className="mb-6">
            <p className="text-[10px] font-black uppercase text-amber-600 mb-2">Installation Tip:</p>
            <p className="text-xs text-stone-500 font-medium bg-stone-50 p-3 rounded-xl">{tool.installTip}</p>
          </div>
          <a href={tool.website} target="_blank" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline">
            {t.toolsSection.visitSite} <ExternalLinkIcon />
          </a>
        </div>
      ))}
    </div>
  </div>
);

const FlowPage: React.FC<{ t: any }> = ({ t }) => (
  <div className="py-20 px-6 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black text-emerald-900 mb-6">{t.flowSection.title}</h2>
      <p className="text-emerald-800/60 text-lg font-medium">{t.flowSection.description}</p>
    </div>
    <div className="space-y-12">
      {t.flowSection.steps.map((step: FlowStep) => (
        <div key={step.id} className="flex gap-8 group">
          <div className="h-16 w-16 shrink-0 brazil-gradient rounded-3xl flex items-center justify-center font-black text-white text-2xl shadow-lg">
            {step.id}
          </div>
          <div className="pt-2">
            <h4 className="text-2xl font-black text-emerald-900 mb-4">{step.label}</h4>
            <p className="text-lg text-emerald-800/70 font-medium leading-relaxed max-w-3xl">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResourcesPage: React.FC<{ t: any }> = ({ t }) => (
  <div className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-emerald-900 mb-12">{t.resourcesSection.title}</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {RESOURCES.map((link, idx) => (
        <a 
          key={idx} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-8 rounded-[32px] bg-white border border-emerald-50 hover:border-emerald-200 hover:shadow-xl transition-all group"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="warm-accent-gradient p-3 rounded-2xl shadow-sm text-amber-900 group-hover:scale-110 transition-transform">
              {link.type === 'github' ? <ToolIcon /> : <ExternalLinkIcon />}
            </div>
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-black">{link.type}</span>
          </div>
          <h4 className="text-xl font-black text-emerald-900 mb-3">{link.title}</h4>
          <p className="text-emerald-800/60 font-medium leading-relaxed">{link.description}</p>
        </a>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>('pt');
  const [page, setPage] = useState<Page>('home');
  const t = TRANSLATIONS[lang];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderContent = () => {
    switch (page) {
      case 'home': return <LandingPage t={t} setCurrentPage={setPage} />;
      case 'pdk': return <PDKPage t={t} />;
      case 'tools': return <ToolsPage t={t} />;
      case 'flow': return <FlowPage t={t} />;
      case 'resources': return <ResourcesPage t={t} />;
      default: return <LandingPage t={t} setCurrentPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Navbar currentLang={lang} setLang={setLang} currentPage={page} setCurrentPage={setPage} />

      {renderContent()}

      {/* Footer */}
      <footer className="py-16 bg-emerald-950 text-emerald-100/50 text-sm font-medium">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <CpuIcon />
              </div>
              <span className="font-black text-xl tracking-tight text-white">OpenIC Hub</span>
            </div>
            <p className="text-center md:text-left">
              Fostering silicon innovation across Latin America.
            </p>
          </div>
          
          <div className="text-center">
            &copy; {new Date().getFullYear()} OpenSource IC Ecosystem. <br />
            {t.footer.rights}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 text-emerald-100/30">
              <a href="https://github.com/IHP-GmbH/IHP-Open-PDK" target="_blank" className="hover:text-emerald-400">GitHub</a>
              <a href="https://www.ufrgs.br/cadmicro/ciaberto/" target="_blank" className="hover:text-emerald-400">CI Aberto</a>
            </div>
            <p className="text-[10px] opacity-50 uppercase tracking-widest">{t.footer.contact}: info@openpdk-brasil.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
