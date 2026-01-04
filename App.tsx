
import React, { useState } from 'react';
import { TRANSLATIONS, LANGUAGES, LanguageCode, RESOURCES } from './constants';
import { CpuIcon, LayersIcon, ExternalLinkIcon } from './components/Icons';
import Card from './components/Card';

interface NavbarProps {
  currentLang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang }) => {
  const t = TRANSLATIONS[currentLang];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Use offset to account for sticky header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 rounded text-white">
            <CpuIcon />
          </div>
          <span className="font-bold text-lg tracking-tight">OpenIC</span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#pdk" onClick={(e) => handleScroll(e, 'pdk')} className="hover:text-blue-600 transition-colors cursor-pointer">{t.nav.pdk}</a>
          <a href="#tools" onClick={(e) => handleScroll(e, 'tools')} className="hover:text-blue-600 transition-colors cursor-pointer">{t.nav.tools}</a>
          <a href="#flow" onClick={(e) => handleScroll(e, 'flow')} className="hover:text-blue-600 transition-colors cursor-pointer">{t.nav.flow}</a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')} className="hover:text-blue-600 transition-colors cursor-pointer">{t.nav.resources}</a>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLang(lang.code)}
              className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                currentLang === lang.code 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'
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

const App: React.FC = () => {
  // Set Portuguese as the default language
  const [lang, setLang] = useState<LanguageCode>('pt');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen">
      <Navbar currentLang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">{t.intro.title}</h2>
            <p className="text-slate-600">
              {t.intro.description}
            </p>
            <ul className="space-y-3">
              {t.intro.bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-200 rounded-2xl aspect-video flex items-center justify-center p-8">
            <div className="text-center">
              <LayersIcon />
              <p className="text-slate-500 text-sm mt-4 font-medium uppercase">{t.intro.illustration}</p>
              <div className="mt-4 flex flex-col gap-1 w-48 mx-auto">
                <div className="h-4 bg-slate-300 rounded animate-pulse" />
                <div className="h-4 bg-slate-400 rounded animate-pulse" />
                <div className="h-4 bg-slate-500 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDK Options */}
      <section id="pdk" className="py-20 px-6 bg-slate-100/50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.pdkSection.title}</h2>
            <p className="text-slate-600">{t.pdkSection.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.pdkSection.options.map((pdk) => (
              <Card key={pdk.id} title={pdk.name} subtitle="Process Tech">
                <p className="mb-4">{pdk.description}</p>
                <p className="text-slate-500 text-xs italic">{pdk.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section id="tools" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.toolsSection.title}</h2>
          <p className="text-slate-600">{t.toolsSection.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.toolsSection.tools.map((tool) => (
            <div key={tool.id} className="p-5 border border-slate-200 rounded-lg bg-white group hover:border-blue-200 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{tool.name}</h4>
                <span className="text-[10px] mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase tracking-tighter">
                  {tool.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prototyping Flow */}
      <section id="flow" className="py-20 px-6 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.flowSection.title}</h2>
            <p className="text-slate-400">{t.flowSection.description}</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-800" />
            <div className="grid lg:grid-cols-5 gap-12 relative">
              {t.flowSection.steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg mb-6 z-10 shadow-lg shadow-blue-600/20">
                    {step.id}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{step.label}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.resourcesSection.title}</h2>
            <p className="text-slate-600 mb-6 text-sm">
              {t.resourcesSection.description}
            </p>
            <div className="flex flex-col gap-3">
              {RESOURCES.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors group"
                >
                  <ExternalLinkIcon />
                  {link.title}
                  <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ({link.type})
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{t.resourcesSection.roadmapTitle}</h3>
              <p className="text-blue-800/80 mb-6 text-sm leading-relaxed">
                {t.resourcesSection.roadmapDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.resourcesSection.roadmapFeatures.map((feature, i) => (
                  <div key={i} className="bg-white/50 p-4 rounded-lg border border-blue-100 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-sm font-medium text-blue-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <CpuIcon />
            <span className="font-bold tracking-tight">OpenSource IC</span>
          </div>
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} OpenSource IC Ecosystem. {t.footer.rights}
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="https://github.com" className="hover:text-slate-600" target="_blank">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
