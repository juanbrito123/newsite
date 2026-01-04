
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
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="brazil-gradient p-2 rounded-xl text-white shadow-lg shadow-emerald-200">
            <CpuIcon />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-emerald-900">OpenIC <span className="text-emerald-500">Brasil</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-emerald-900/70">
          <a href="#pdk" onClick={(e) => handleScroll(e, 'pdk')} className="hover:text-emerald-600 transition-all hover:scale-105">{t.nav.pdk}</a>
          <a href="#tools" onClick={(e) => handleScroll(e, 'tools')} className="hover:text-emerald-600 transition-all hover:scale-105">{t.nav.tools}</a>
          <a href="#flow" onClick={(e) => handleScroll(e, 'flow')} className="hover:text-emerald-600 transition-all hover:scale-105">{t.nav.flow}</a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')} className="hover:text-emerald-600 transition-all hover:scale-105">{t.nav.resources}</a>
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

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>('pt');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Navbar currentLang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Colorful Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-emerald-200">
              Ecosistema de Semicondutores Abertos
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-900 leading-[1] mb-8">
              {t.hero.title}
            </h1>
            <p className="text-xl text-emerald-800/70 leading-relaxed font-medium max-w-2xl">
              {t.hero.description}
            </p>
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

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-emerald-100 rounded-[40px] p-8 md:p-16 shadow-xl shadow-emerald-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-emerald-50 opacity-20 rotate-12">
            <LayersIcon />
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-emerald-900 leading-tight">{t.intro.title}</h2>
              <p className="text-lg text-emerald-800/70 font-medium">
                {t.intro.description}
              </p>
              <ul className="grid gap-4">
                {t.intro.bullets.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-emerald-900 font-semibold group">
                    <div className="h-10 w-10 shrink-0 warm-accent-gradient rounded-full flex items-center justify-center text-amber-900 shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-sm font-black">{idx + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-3xl p-10 border border-stone-200 shadow-inner flex flex-col items-center justify-center text-center">
              <div className="brazil-gradient p-4 rounded-2xl text-white mb-6 shadow-lg">
                <LayersIcon />
              </div>
              <p className="text-emerald-900 font-bold uppercase tracking-widest text-xs mb-6 opacity-60">{t.intro.illustration}</p>
              <div className="w-full space-y-3">
                <div className="h-4 brazil-gradient rounded-full w-full shadow-sm" />
                <div className="h-4 warm-accent-gradient rounded-full w-4/5 mx-auto shadow-sm" />
                <div className="h-4 bg-emerald-900 rounded-full w-3/4 mx-auto shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDK Options */}
      <section id="pdk" className="py-24 px-6 bg-emerald-900 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 organic-pattern opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-6">{t.pdkSection.title}</h2>
            <p className="text-emerald-100/70 text-lg max-w-2xl font-medium">{t.pdkSection.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.pdkSection.options.map((pdk) => (
              <div key={pdk.id} className="bg-emerald-800/40 backdrop-blur-md border border-emerald-700/50 p-8 rounded-[32px] hover:bg-emerald-800/60 transition-all hover:-translate-y-2">
                <div className="h-12 w-12 warm-accent-gradient rounded-2xl mb-6 shadow-lg flex items-center justify-center text-amber-900 font-black">
                  {pdk.name.split(' ')[0][0]}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">{pdk.name}</h3>
                <p className="text-emerald-300 font-bold text-xs uppercase tracking-widest mb-6">Process Tech</p>
                <p className="text-emerald-100/80 mb-6 leading-relaxed font-medium">{pdk.description}</p>
                <div className="pt-6 border-t border-emerald-700 text-emerald-400 text-sm font-bold italic">
                  {pdk.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section id="tools" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-emerald-900 mb-6">{t.toolsSection.title}</h2>
            <p className="text-emerald-800/60 text-lg font-medium">{t.toolsSection.description}</p>
          </div>
          <div className="flex gap-4">
            <div className="h-3 w-12 warm-accent-gradient rounded-full" />
            <div className="h-3 w-3 warm-accent-gradient rounded-full" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.toolsSection.tools.map((tool) => (
            <div key={tool.id} className="group p-8 border-2 border-emerald-50 rounded-[32px] bg-white hover:border-emerald-200 transition-all hover:shadow-2xl hover:shadow-emerald-100/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[100px] -z-10 group-hover:bg-emerald-100 transition-colors" />
               <div className="flex justify-between items-start mb-6">
                <h4 className="font-black text-xl text-emerald-900 group-hover:text-emerald-600 transition-colors">{tool.name}</h4>
                <span className="text-[10px] mono font-black bg-emerald-100 px-3 py-1 rounded-full text-emerald-700 uppercase tracking-widest">
                  {tool.category}
                </span>
              </div>
              <p className="text-emerald-800/70 leading-relaxed font-medium">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prototyping Flow */}
      <section id="flow" className="py-24 px-6 bg-stone-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-emerald-900 mb-6">{t.flowSection.title}</h2>
            <p className="text-emerald-800/60 text-lg max-w-2xl mx-auto font-medium">{t.flowSection.description}</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-emerald-200/50 rounded-full -z-0" />
            {t.flowSection.steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center lg:items-start text-center lg:text-left group relative">
                <div className="h-24 w-24 brazil-gradient rounded-full flex items-center justify-center font-black text-3xl text-white mb-8 z-10 shadow-xl shadow-emerald-200 border-[8px] border-stone-100 group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                <h4 className="font-black text-xl mb-4 text-emerald-900">{step.label}</h4>
                <p className="text-emerald-800/60 text-sm font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-black text-emerald-900 mb-8">{t.resourcesSection.title}</h2>
            <p className="text-emerald-800/60 mb-10 text-lg font-medium">
              {t.resourcesSection.description}
            </p>
            <div className="flex flex-col gap-4">
              {RESOURCES.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-emerald-50 hover:border-emerald-200 hover:shadow-lg transition-all group font-bold text-emerald-900"
                >
                  <div className="warm-accent-gradient p-2 rounded-lg shadow-sm text-amber-900 group-hover:scale-110 transition-transform">
                    <ExternalLinkIcon />
                  </div>
                  {link.title}
                  <span className="ml-auto text-[10px] text-emerald-400 uppercase tracking-widest">{link.type}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-emerald-50 rounded-[40px] p-10 md:p-14 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-4 warm-accent-gradient" />
              <h3 className="text-3xl font-black text-emerald-900 mb-6">{t.resourcesSection.roadmapTitle}</h3>
              <p className="text-emerald-800/70 mb-10 text-lg leading-relaxed font-medium">
                {t.resourcesSection.roadmapDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.resourcesSection.roadmapFeatures.map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-emerald-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="h-3 w-3 rounded-full brazil-gradient shadow-sm" />
                    <span className="text-sm font-extrabold text-emerald-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-emerald-950 text-emerald-100/50 text-sm font-medium">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <CpuIcon />
              </div>
              <span className="font-black text-xl tracking-tight text-white">OpenIC Hub</span>
            </div>
            <p className="max-w-xs text-center md:text-left">
              Fomentando a inovação de silício em toda a América Latina.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} OpenSource IC Ecosystem. <br className="md:hidden" />
            {t.footer.rights}
          </div>
          
          <div className="flex gap-8 text-emerald-100/30">
            <a href="https://github.com/IHP-GmbH/IHP-Open-PDK" target="_blank" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="https://esim.fossee.in/" target="_blank" className="hover:text-emerald-400 transition-colors">eSim</a>
            <a href="https://www.ufrgs.br/cadmicro/ciaberto/" target="_blank" className="hover:text-emerald-400 transition-colors">CI Aberto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
