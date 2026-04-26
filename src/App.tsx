import { motion } from 'framer-motion';

const WhatsAppLink = "https://wa.me/917069703963";

const AnimatedLogo = ({ textSize = "text-xl", trackingClass = "tracking-[0.15em]", iconSize = "w-[2em] h-[1em]", marginClass = "-mx-[0.05em]" }) => (
  <div className={`flex items-center text-white font-bold ${trackingClass} ${textSize}`}>
    <span>AUT</span>
    <motion.svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`${iconSize} ${marginClass}`}
    >
      <motion.path 
        d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
    <span>ZAPP</span>
  </div>
);

const BackgroundPaths = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <g>
          {[...Array(50)].map((_, i) => {
            const startY = -400 + i * 15; // Clustered tightly at top-left
            const endY = 500 + i * 25;    // Spread out at bottom-right
            const curveDrop = startY + 500 + (i * 5);
            return (
              <motion.path
                key={`g1-${i}`}
                d={`M -200 ${startY} Q 700 ${curveDrop} 1600 ${endY}`}
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth={1 + (i % 4) * 0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.4 + (i % 5) * 0.1, 0] }}
                transition={{
                  duration: 8 + (i % 10),
                  repeat: Infinity,
                  ease: "linear",
                  delay: (i % 10) * 0.5
                }}
              />
            );
          })}
        </g>
        <g>
          {[...Array(30)].map((_, i) => {
            const startY = -300 + i * 20; // Clustered at top-left
            const endY = 700 + i * 30;    // Spread out at bottom-right
            const curveDrop = startY + 400 + (i * 8);
            return (
              <motion.path
                key={`g2-${i}`}
                d={`M -200 ${startY} Q 600 ${curveDrop} 1600 ${endY}`}
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth={0.5 + (i % 3) * 0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.2 + (i % 4) * 0.1, 0] }}
                transition={{
                  duration: 10 + (i % 8),
                  repeat: Infinity,
                  ease: "linear",
                  delay: (i % 8) * 0.8
                }}
              />
            );
          })}
        </g>
      </svg>
      {/* Edge fading gradient for premium cinematic look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_100%)]"></div>
    </div>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
    <div className="flex items-center gap-2">
      <AnimatedLogo />
    </div>
    <nav className="hidden md:flex items-center gap-8">
      <a className="text-white font-semibold font-manrope text-sm tracking-wide transition-colors duration-300" href="#">Home</a>
      <a className="text-neutral-400 font-manrope text-sm tracking-wide hover:text-white transition-colors duration-300" href="#services">Services</a>
      <a className="text-neutral-400 font-manrope text-sm tracking-wide hover:text-white transition-colors duration-300" href="#work">Work</a>
      <a className="text-neutral-400 font-manrope text-sm tracking-wide hover:text-white transition-colors duration-300" href="#about">About</a>
    </nav>
    <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-sm uppercase tracking-widest text-[10px] hover:scale-95 duration-200">
      Contact
    </a>
  </header>
);

const Hero = () => {
  return (
    <section className="relative min-h-[751px] flex flex-col justify-center items-center text-center px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Animated Background SVG */}
      <BackgroundPaths />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="mb-stack-sm flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-label-sm text-outline uppercase tracking-widest">Automation for Elite Teams</span>
        </div>
        <h1 className="font-display text-display md:text-[72px] mb-stack-md max-w-4xl text-white">
          Automate Your Business Without the Chaos.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
          We design and deploy bespoke AI architectures that eliminate manual bottlenecks, allowing your team to focus on high-leverage growth.
        </p>
        <div className="flex flex-col md:flex-row gap-gutter">
          <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-h2 text-body-md hover:opacity-90 transition-opacity">
            Get Your System
          </a>
          <a href="#work" className="border border-[#262626] text-white px-10 py-4 rounded-lg font-h2 text-body-md hover:bg-white/5 transition-colors text-center">
            View Work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => (
  <section className="px-8 py-stack-xl max-w-7xl mx-auto" id="services">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-stack-lg"
    >
      <h2 className="font-h1 text-h1 mb-stack-xs text-white">What We Build</h2>
      <p className="text-outline font-body-md">Precision-engineered tools for high-performance operations.</p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
      {/* CRM */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
      >
        <div>
          <span className="material-symbols-outlined text-outline mb-stack-md group-hover:text-white transition-colors">database</span>
          <h3 className="font-h2 text-h2 mb-stack-sm text-white">Unified CRM</h3>
          <p className="text-outline text-body-md leading-relaxed">Centralized client data flows with automated lead scoring and nurturing.</p>
        </div>
      </motion.div>

      {/* WhatsApp */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
      >
        <div>
          <span className="material-symbols-outlined text-outline mb-stack-md group-hover:text-white transition-colors">chat</span>
          <h3 className="font-h2 text-h2 mb-stack-sm text-white">WhatsApp AI</h3>
          <p className="text-outline text-body-md leading-relaxed">Smart conversational bots that handle inquiries and bookings 24/7.</p>
        </div>
      </motion.div>

      {/* Websites */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
      >
        <div>
          <span className="material-symbols-outlined text-outline mb-stack-md group-hover:text-white transition-colors">web</span>
          <h3 className="font-h2 text-h2 mb-stack-sm text-white">Performance Web</h3>
          <p className="text-outline text-body-md leading-relaxed">Conversion-optimized landing pages integrated directly into your backend.</p>
        </div>
      </motion.div>

      {/* Full System */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 rounded-xl flex flex-col justify-between shadow-2xl shadow-white/5 transform md:scale-105"
      >
        <div>
          <span className="material-symbols-outlined text-on-primary-fixed-variant mb-stack-md">hub</span>
          <h3 className="font-h2 text-h2 text-on-primary-fixed mb-stack-sm">Full System</h3>
          <p className="text-on-primary-container text-body-md leading-relaxed">Our flagship end-to-end automation engine. The "unseen hand" of your business.</p>
        </div>
        <div className="mt-stack-md">
          <span className="text-label-sm font-bold text-on-primary-fixed uppercase tracking-tighter">Most Selected</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Process = () => (
  <section className="bg-surface-container-lowest py-stack-xl">
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-stack-lg text-center md:text-left">
        <h2 className="font-h1 text-h1 text-white">The Process</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {['Discovery', 'Blueprint', 'Integration', 'Optimization'].map((step, index) => (
          <motion.div 
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <span className="text-[64px] font-black text-white/5 absolute -top-8 -left-2 select-none">0{index + 1}</span>
            <h4 className="font-h2 text-body-lg text-white mb-stack-sm relative z-10">{step}</h4>
            <p className="text-outline text-body-md">
              {index === 0 && "We audit your existing manual workflows and identify efficiency leaks."}
              {index === 1 && "Architecture design of your custom automation ecosystem."}
              {index === 2 && "Clean, non-disruptive deployment of your new digital workforce."}
              {index === 3 && "Continuous monitoring and scaling as your business expands."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="px-8 py-stack-xl max-w-7xl mx-auto" id="work">
    <div className="mb-stack-lg flex justify-between items-end">
      <div>
        <h2 className="font-h1 text-h1 text-white">Featured Work</h2>
        <p className="text-outline font-body-md">Results-driven automation projects.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {[
        { title: "FinTech Operations", desc: "Complete backend synchronization for a London-based VC firm.", result: "50% Efficiency Increase", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOPbdidwhIsa_DfqIVtJlvsu8RssJSLCVYEKi6CoDHdntomzxb0lhHKF8YAMFbRj1ThefbzkTBj3TRlWt4iJPGo5yxM9oNDq2tZgLucRqeeP0kmzKVGY8REWIZFUoGFqhKfQhQmzZ5a9S3Wa4d6VmCpSIVrST6i0VZf16A5DopygR5SISyhzJAtoUCbfqq9v-ItXzr7Ic3LbTfttdPDgGbJxamiAzdGfzvqT-T_eoyHVJL8Kco_zeZMUTynrYHP2M3TD4DCF9AjSHd" },
        { title: "Luxe Realty Bot", desc: "WhatsApp AI agent handling high-ticket property inquiries.", result: "2.4k Leads Automated", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zhd0jzHGdq2U_KDfkxSDm40hQOgHgtUSLcegeUxMAponliswhEkWBG4HBj2nsvVCnOOu-N8M3fZO8NCztpOo62_TSEykzHqG1an0pZY5ircOtUuOO8NWrPICtAqOfuQaKKMhYG_G-bWwG6yv7mg68Ii10OLdF6bIcawnC4qIBsdG7UEt5tHGCmxCCKUm4Gpdbm0rLidxyQnHw0WgFmcTZvWse7qA8F4Aembi2ZQnUpoBl6NfnZdR12YvK7KzO9iOY92NI9p-c3BD" },
        { title: "ScaleSaaS CRM", desc: "Custom CRM infrastructure for a rapidly scaling startup.", result: "40h Saved Weekly", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMFAvChPjI6Y2z4RrGE6JUP0Pn-3IASmDg617gUFegCI9AvP1EI0yGPMVcCw3msaw6zEiFG7X79vEz3R5Rqbf38AhYyDLEN7e0jr78kcpLBHDDNGWw-6UZHqHRLZR1bSSBbquBdi2Dhtt8IvGfbLLIw-MeFCVAloM3NIagpsgPXKB9jI5UhJ_B01IFOKCiiRTW4W6dnBaDUhYg8yuD0EfzIi7_tjPYRQ6LOCtJj_NWtbDvgmegKL5jZEi7R739j3ylTaGQZ5UjpdMn" }
      ].map((project, index) => (
        <motion.div 
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="aspect-video mb-stack-sm overflow-hidden rounded-lg bg-surface-container relative">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <h3 className="font-h2 text-h2 mb-2 text-white">{project.title}</h3>
          <p className="text-outline text-body-md mb-4">{project.desc}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-label-sm text-white">{project.result}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const WhyAutoZapp = () => (
  <section className="bg-surface-container-low py-stack-xl" id="about">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-h1 mb-stack-md text-white">Why AutoZapp?</h2>
        <p className="text-on-surface-variant font-body-lg mb-stack-lg">
          We don't just build scripts; we build the engine of your future growth. Our philosophy is rooted in extreme reduction—removing noise so you can hear the signal.
        </p>
        <div className="space-y-stack-md">
          {[
            { title: "Simplicity First", desc: "Complex problems solved with elegant, invisible solutions." },
            { title: "True Automation", desc: "Systems that actually work without manual babysitting." },
            { title: "Unlimited Scaling", desc: "Infrastructure designed to grow as fast as your ambition." },
            { title: "Measurable Results", desc: "Tangible data points showing hours saved and revenue gained." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-2 h-2 mt-2 bg-white rounded-full shadow-[0_0_8px_white]"></span>
              <div>
                <h4 className="font-h2 text-body-lg text-white">{item.title}</h4>
                <p className="text-outline text-body-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative glass-card aspect-square rounded-2xl flex items-center justify-center border-white/5 overflow-hidden">
          <AnimatedLogo textSize="text-4xl md:text-5xl" trackingClass="tracking-[0.2em]" iconSize="w-[1.8em] h-[1em]" marginClass="-mx-[0.15em]" />
        </div>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 px-8 text-center max-w-4xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="font-display text-display mb-stack-md text-white">Ready to automate your business?</h2>
      <p className="text-on-surface-variant font-body-lg mb-stack-lg max-w-xl mx-auto">
        Book a consultation today and discover how much human potential you're currently wasting on manual tasks.
      </p>
      <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary px-12 py-5 rounded-lg font-h2 text-body-md hover:scale-105 transition-transform">
        Get Your System
      </a>
    </motion.div>
  </section>
);

function App() {
  return (
    <div className="font-body-md subtle-lines w-full overflow-x-hidden text-white bg-[#050505]">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <WhyAutoZapp />
        <CTA />
      </main>
    </div>
  );
}

export default App;
