import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Sparkles, Languages, ChevronRight, ChevronLeft, Volume2, VolumeX } from 'lucide-react';

const images = [
  '/images/IMG_20260515_220747_899.jpg',
  '/images/IMG_20260516_083817_469.jpg',
  '/images/IMG_20260516_083828_443.jpg',
  '/images/Screenshot_20260516_083758_Telegram.jpg'
];

const content = {
  en: {
    title: "Expression of Radiance",
    subtitle: "A tribute to a soul that shines from within",
    intro: "In a world of noise, her silence is a symphony. In a world of pride, her humility is a throne.",
    behaviorTitle: "The Art of Humility",
    behaviorDesc: "Her beauty is not just in the way she looks, but in the way she makes others feel. A humble heart that touches everyone with kindness, carrying a grace that words can barely capture. She is a masterpiece of kindness and a beacon of pure light.",
    galleryTitle: "Moments of Pure Grace",
    revealBtn: "Unveil the Beauty",
    loadingText: "Gathering her radiance...",
    footer: "Dedicated to the one who defines 'Gorgeous'",
    traits: ["Pure Heart", "Elegant Soul", "Humble Spirit", "Natural Glow", "Kindness", "Radiance", "Incomparable", "Breathtaking", "Gentle Spirit"],
    personalNote: "To the most beautiful soul: Your presence is a gift, and your heart is a treasure. Never forget how much light you bring into this world.",
    personalTitle: "Abenezer's Message from the Heart",
    behaviorSections: [
      {
        title: "The Art of Humility",
        desc: "Her beauty is not just in the way she looks, but in the way she makes others feel. A humble heart that touches everyone with kindness, carrying a grace that words can barely capture. She is a masterpiece of kindness and a beacon of pure light.",
        image: images[3]
      },
      {
        title: "The Light of Her Soul",
        desc: "Beyond the physical beauty lies a radiance that never dims. Her spirit shines with a purity that inspires everyone around her to be better, kinder, and more loving.",
        image: images[0]
      },
      {
        title: "Strength in Gentleness",
        desc: "There is a quiet strength in her soft words and gentle actions. She doesn't need to shout to be heard; her presence speaks volumes of her character and depth.",
        image: images[1]
      }
    ],
    storySections: [
      {
        title: "Her Presence",
        desc: "When she enters a room, time seems to slow down. It's not just her beauty—it's the aura of peace she carries with her.",
        icon: "Stars"
      },
      {
        title: "Inner Radiance",
        desc: "Her soul is like a hidden garden, full of kindness and flowers that never fade. She gives without expecting, and loves without conditions.",
        icon: "Sparkles"
      },
      {
        title: "The Definition of Grace",
        desc: "Grace is not just how she moves, but how she handles the world. With strength and a gentle heart, she is a walking masterpiece.",
        icon: "Heart"
      },
      {
        title: "The Heart of Gold",
        desc: "Her kindness is like a quiet stream that nourishes everything it touches. She sees the best in everyone, reflecting a soul that is truly pure and golden.",
        icon: "Sparkles"
      },
      {
        title: "A Radiant Smile",
        desc: "Her smile doesn't just light up her face; it lights up the world around her. It is the signature of a happy and humble spirit.",
        icon: "Stars"
      }
    ]
  },
  am: {
    title: "የብርሃን መገለጫ",
    subtitle: "ከውስጥ ለሚፈነጥቅ ነፍስ የተሰጠ ምስጋና",
    intro: "በጩኸት በሞላው ዓለም ውስጥ ዝምታዋ ዜማ ነው። በትዕቢት በሞላው ዓለም ውስጥ ትህትናዋ ንግሥና ነው።",
    behaviorTitle: "የትህትና ጥበብ",
    behaviorDesc: "ውበቷ በገጽታዋ ብቻ ሳይሆን ሌሎችን በምታከብርበት መንገድ ጭምር ነው። በደግነት ሁሉንም የምትነካ ትሑት ልብ፤ በቃላት ሊገለጽ የማይችል ግርማ የተላበሰች። እሷ የደግነት ጥበብ እና የንጹህ ብርሃን ምንጭ ናት።",
    galleryTitle: "የንጹህ ግርማ ጊዜያት",
    revealBtn: "ውበቱን ግለጥ",
    loadingText: "ግርማዋን በመሰብሰብ ላይ...",
    footer: "ለግርማዊቷ የተሰጠ",
    traits: ["ንፁህ ልብ", "የረቀቀች ነፍስ", "ትሑት መንፈስ", "ተፈጥर्याዊ ወጋገን", "ደግነት", "ብሩህነት", "አቻ የሌላት", "አስደናቂ", "ለስላሳ መንፈስ"],
    personalNote: "ለማንም ለማትመስለው ውብ ነፍስ፡ መኖርሽ ስጦታ ነው፣ ልብሽ ደግሞ ውድ ሀብት ነው። ለዚህ ዓለም የምታበረክቺው ብርሃን ምን ያህል ታላቅ እንደሆነ ፈጽሞ አትርሺ።",
    personalTitle: "ከልብ የመነጨ መልእክት",
    behaviorSections: [
      {
        title: "የትህትና ጥበብ",
        desc: "ውበቷ በገጽታዋ ብቻ ሳይሆን ሌሎችን በምታከብርበት መንገድ ጭምር ነው። በደግነት ሁሉንም የምትነካ ትሑት ልብ፤ በቃላት ሊገለጽ የማይችል ግርማ የተላበሰች። እሷ የደግነት ጥበብ እና የንጹህ ብርሃን ምንጭ ናት።",
        image: images[3]
      },
      {
        title: "የነፍሷ ብርሃን",
        desc: "ከአካላዊ ውበት ባሻገር ፈጽሞ የማይደበዝዝ ብሩህነት አለ። መንፈሷ በዙሪያዋ ያሉ ሁሉ የተሻሉ፣ ደግ እና አፍቃሪ እንዲሆኑ በሚያነሳሳ ንፅህና ያበራል።",
        image: images[0]
      },
      {
        title: "ለስላሳ ጥንካሬ",
        desc: "በለስላሳ ቃላቷ እና በረጋ መንፈሷ ውስጥ ታላቅ ጥንካሬ አለ። ለመሰማት መጮህ አያስፈልጋትም፤ መገኘቷ ብቻ ስለ ባህሪዋ እና ስለ ጥልቀቷ ብዙ ይናገራል።",
        image: images[1]
      }
    ],
    storySections: [
      {
        title: "ግርማዋ",
        desc: "ወደ ክፍል ስትገባ ጊዜ የሚቆም ይመስላል። ውበቷ ብቻ ሳይሆን የምትሸከመው የሰላም ድባብ ነው ማራኪ የሚያደርጋት።",
        icon: "Stars"
      },
      {
        title: "የውስጥ ብርሃን",
        desc: "ነፍሷ እንደተደበቀ የአትክልት ስፍራ ናት፤ በደግነት እና ፈጽሞ በማይጠወልጉ አበቦች የተሞላች። ያለ አንዳች ቅድመ ሁኔታ ትሰጣለች፣ ያለ ገደብም ትወዳለች።",
        icon: "Sparkles"
      },
      {
        title: "የግርማዊነት ትርጉም",
        desc: "ግርማዊነት አረማመዷ ብቻ ሳይሆን ዓለምን የምታስተናግድበት መንገድም ጭምር ነው። በጥንካሬ እና በለስላሳ ልብ፣ እሷ በእግር የምትጓዝ ድንቅ የጥበብ ስራ ናት።",
        icon: "Heart"
      },
      {
        title: "የወርቅ ልብ",
        desc: "ደግነቷ የሚነካውን ሁሉ እንደሚያለመልም ጸጥተኛ ምንጭ ነው። በሁሉም ሰው ውስጥ ምርጡን ታያለች፣ ይህም በእውነት ንፁህ እና የወርቅ የሆነ ነፍስ ነጸብራቅ ነው።",
        icon: "Sparkles"
      },
      {
        title: "አንጸባራቂ ፈገግታ",
        desc: "ፈገግታዋ ፊቷን ብቻ ሳይሆን በዙሪያዋ ያለውን ዓለምም ያበራል። የደስተኛ እና የትሑት መንፈስ መለያ ምልክት ነው።",
        icon: "Stars"
      }
    ]
  }
};

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "100vh",
            x: Math.random() * 100 + "vw",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: "-10vh",
            x: (Math.random() * 100 - 50) + "vw"
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className={`absolute ${Math.random() > 0.5 ? 'text-pink-500/20' : 'text-red-600/20'}`}
        >
          <Heart size={Math.random() * 40 + 20} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  const [lang, setLang] = useState('en');
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const t = content[lang];

  const handleStart = () => {
    setLoading(true);
    // Try to play audio when user interacts
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setStarted(true);
        }, 500);
      }
    }, 100);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (started) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [started]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/30 overflow-x-hidden relative">
      <audio 
        ref={audioRef}
        loop
        src="https://www.mfiles.co.uk/mp3-downloads/claude-debussy-clair-de-lune.mp3"
      />
      <div className="vignette" />
      <FloatingHearts />
      {/* Global Controls - Fixed in Top Corner */}
      <div className="fixed top-6 right-6 z-[999] flex flex-col md:flex-row items-end md:items-center gap-3">
        {/* Audio Toggle */}
        <button 
          onClick={() => {
            if (audioRef.current) {
              const nextMuted = !isMuted;
              audioRef.current.muted = nextMuted;
              setIsMuted(nextMuted);
            }
          }}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-all shadow-lg backdrop-blur-md"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <div className="flex gap-2">
          <button 
            onClick={() => setLang('en')}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${lang === 'en' 
              ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
              : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('am')}
            className={`px-5 py-2 rounded-full border text-sm font-semibold amharic transition-all duration-300 ${lang === 'am' 
              ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
              : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            አማርኛ
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="min-h-screen flex items-center justify-center relative p-4"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center z-10 p-12 glass-card max-w-xl w-full"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mb-8 inline-block"
              >
                <Heart size={80} className="text-pink-500 fill-pink-500/20" />
              </motion.div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 gold-text leading-tight ${lang === 'am' ? 'amharic' : ''}`}>
                {t.title}
              </h1>
              <p className={`text-gray-400 mb-12 italic text-xl md:text-2xl ${lang === 'am' ? 'amharic' : ''}`}>{t.subtitle}</p>

              <div className="relative flex justify-center">
                <AnimatePresence mode="wait">
                  {!loading ? (
                    <motion.button
                      key="button"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,175,55,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleStart}
                      className="reveal-btn-pro group"
                    >
                      <span className={`relative z-10 flex items-center gap-3 ${lang === 'am' ? 'amharic' : ''}`}>
                        {t.revealBtn} <Sparkles size={22} className="group-hover:rotate-12 transition-transform" />
                      </span>
                      <div className="shimmer" />
                    </motion.button>
                  ) : (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full max-w-xs"
                    >
                      <p className={`text-primary mb-4 animate-pulse font-medium ${lang === 'am' ? 'amharic' : ''}`}>
                        {t.loadingText}
                      </p>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          className="h-full bg-primary shadow-[0_0_15px_var(--primary)]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* Main Header (Inner) */}
            <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/20">
              <div className="text-2xl font-bold gold-text">Expression</div>
              <div className="w-32" /> {/* Spacer for global toggle */}
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl text-center"
              >
                <Stars size={40} className="text-yellow-500 mb-6 mx-auto animate-spin-slow" />
                <h2 className={`text-4xl md:text-7xl font-bold mb-8 gold-text leading-tight ${lang === 'am' ? 'amharic' : ''}`}>
                  {t.intro}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {t.traits.map((trait, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-300 font-medium ${lang === 'am' ? 'amharic' : ''}`}
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                  <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
              </motion.div>
            </section>

            {/* Story Sections */}
            <section className="py-20 px-4">
              {t.storySections.map((section, idx) => (
                <div key={idx} className="min-h-[50vh] flex items-center justify-center mb-24">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="max-w-3xl glass-card relative group hover:border-pink-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="bg-primary text-black p-4 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                        {section.icon === "Stars" && <Stars size={28} />}
                        {section.icon === "Sparkles" && <Sparkles size={28} />}
                        {section.icon === "Heart" && <Heart size={28} />}
                      </div>
                      <h3 className={`text-3xl md:text-5xl font-bold gold-text ${lang === 'am' ? 'amharic' : ''}`}>
                        {section.title}
                      </h3>
                    </div>
                    <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed ${lang === 'am' ? 'amharic' : ''}`}>
                      {section.desc}
                    </p>
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-50 transition-opacity">
                      <Sparkles className="text-pink-400" size={20} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </section>

            {/* Behavior Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-zinc-900">
              <div className="max-w-6xl mx-auto space-y-32">
                {t.behaviorSections.map((section, i) => (
                  <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className={`glass-card ${i % 2 === 1 ? 'md:order-2' : ''}`}
                    >
                      <Sparkles className="text-pink-400 mb-6" />
                      <h3 className={`text-4xl font-bold mb-6 ${lang === 'am' ? 'amharic' : ''}`}>{section.title}</h3>
                      <p className={`text-xl text-gray-300 leading-relaxed ${lang === 'am' ? 'amharic' : ''}`}>
                        {section.desc}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ x: i % 2 === 0 ? 50 : -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className={`relative group ${i % 2 === 1 ? 'md:order-1' : ''}`}
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all" />
                      <img
                        src={section.image}
                        alt={section.title}
                        className="relative z-10 rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] w-full aspect-[4/5] object-cover"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </section>

            {/* Slideshow Section */}
            <section className="py-32 px-4 bg-zinc-900">
              <div className="max-w-5xl mx-auto">
                <h3 className={`text-4xl font-bold text-center mb-16 gold-text ${lang === 'am' ? 'amharic' : ''}`}>
                  {t.galleryTitle}
                </h3>

                <div className="relative aspect-[4/5] md:aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
                  <AnimatePresence mode="wait">
                    <div key={currentSlide} className="w-full h-full relative flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cover bg-center blur-2xl"
                        style={{ backgroundImage: `url(${images[currentSlide]})` }}
                      />
                      <motion.img
                        src={images[currentSlide]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-full h-full object-contain"
                      />
                    </div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md border border-white/10 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md border border-white/10 transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </section>

            {/* Personal Message */}
            <section className="py-32 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-3xl mx-auto glass-card border-pink-500/30 text-center relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
                <Heart size={48} className="text-pink-500 mx-auto mb-6 animate-bounce" />
                <h3 className={`text-3xl md:text-5xl font-bold mb-6 gold-text ${lang === 'am' ? 'amharic' : ''}`}>{t.personalTitle}</h3>
                <p className={`text-2xl md:text-3xl leading-relaxed font-light italic ${lang === 'am' ? 'amharic' : ''}`}>"{t.personalNote}"</p>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="mt-10">
                  <Sparkles className="text-yellow-400 mx-auto" size={32} />
                </motion.div>
              </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-white/5">
              <p className={`text-gray-500 ${lang === 'am' ? 'amharic' : ''}`}>{t.footer}</p>
              <div className="mt-4 flex justify-center gap-4">
                <Heart size={20} className="text-pink-500 animate-pulse" />
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
