import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { INITIATIVES, STORIES, OPPORTUNITY_CARDS, SOCIALS } from "@/data/content";
import {
  logoGradient,
  storiesLogo,
  socialPhoto,
  nvidiaPhoto,
  mentorshipPhoto,
  networkingPhoto,
  conf0,
} from "@/data/assets";
import Marquee from "@/components/ui/Marquee";
import MultiOrbCluster from "@/components/ui/MultiOrbCluster";
import StatCounter from "@/components/ui/StatCounter";
import PhotoStack from "@/components/ui/PhotoStack";
import BubbleCard from "@/components/ui/BubbleCard";


// ==== HOME LANDING PAGE ====
export default function HomePage() {
  const [activeStory, setActiveStory] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <motion.div className="absolute pointer-events-none rounded-full" style={{ width: 480, height: 480, top: "-120px", right: "-80px", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute pointer-events-none rounded-full" style={{ width: 320, height: 320, bottom: "80px", left: "-60px", background: "radial-gradient(circle, rgba(91,33,182,0.14) 0%, transparent 70%)", filter: "blur(48px)" }} animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex-1 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center pt-28 pb-8">
          <div className="space-y-7">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full" style={{ background: "rgba(91,33,182,0.08)", border: "1px solid rgba(91,33,182,0.22)", color: "#4c1d95" }}>
                <motion.span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ background: "#7c3aed" }} animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2.2, repeat: Infinity }} />
                University of Toronto
              </span>
            </motion.div>

            <div>
              <h1 className="leading-[1.06] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a3d" }}>
                <motion.span className="block text-[clamp(40px,6vw,72px)] font-normal italic" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}>Women in</motion.span>
                <motion.span className="block text-[clamp(48px,7.5vw,92px)] font-bold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(125deg, #3b0764 10%, #7c3aed 55%, #c084fc 100%)" }} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>Science &amp;</motion.span>
                <motion.span className="block text-[clamp(48px,7.5vw,92px)] font-bold" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>Engineering</motion.span>
              </h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-4 text-base leading-relaxed max-w-sm" style={{ color: "rgba(26,10,61,0.58)", fontStyle: "italic" }}>
                Empowering women, 2-spirit, and non-binary individuals in STEM to break through barriers and achieve their full potential.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex flex-wrap gap-3">
              <motion.a href="#about-section" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-white group" style={{ background: "linear-gradient(135deg, #5b21b6, #7c3aed)", boxShadow: "0 6px 28px rgba(91,33,182,0.38)" }}>
                Explore WISE <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex flex-wrap gap-2 pt-1">
              {["Professional Dev", "Mentorship", "HS Outreach", "Annual Conference"].map((tag, i) => (
                <motion.span key={tag} animate={{ y: [0, -4, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }} className="text-[11px] font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(91,33,182,0.15)", color: "#4c1d95", backdropFilter: "blur(6px)" }}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 32, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute inset-0 rounded-3xl -z-10" style={{ transform: "rotate(3deg) scale(0.98)", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(91,33,182,0.18)" }} />
            <PhotoStack />
            <motion.div className="absolute -top-4 -left-4 rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(91,33,182,0.15)", boxShadow: "0 8px 24px rgba(91,33,182,0.15)", zIndex: 20 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <p className="text-xs font-semibold" style={{ color: "#4c1d95" }}>Est. 1999</p>
              <p className="text-[10px]" style={{ color: "rgba(76,29,149,0.55)" }}>20+ years of impact</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full mt-2" style={{ borderTop: "1px solid rgba(91,33,182,0.15)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
          <Marquee />
        </div>
      </section>

      {/* stats */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MultiOrbCluster />
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-10 lg:gap-12">
              <StatCounter value={90} suffix="+" label="Active Members" />
              <StatCounter value={20} suffix="+" label="Events / Year" />
              <StatCounter value={20} suffix="+" label="Years of Impact" />
              <StatCounter value={4} label="Core Programs" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about-section" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7c3aed" }}>About WISE</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#3b0764" }}>
              A community that believes in each other
            </h2>
            <p style={{ color: "rgba(76,29,149,0.65)", lineHeight: 1.75 }}>
              WISE is a group of future engineers, scientists, doctors, leaders, programmers, and researchers who share a{" "}
              <strong style={{ color: "#5b21b6" }} className="font-semibold">commitment to supporting women in STEM</strong>.
            </p>
            <p style={{ color: "rgba(76,29,149,0.65)", lineHeight: 1.75 }}>
              From <span style={{ color: "#5b21b6" }} className="font-medium">Spilling the Tea on Research</span> to{" "}
              <span style={{ color: "#5b21b6" }} className="font-medium">Plastisol Bracelet Workshops</span>, every initiative exists because we are passionate about our commitment to one another.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Inclusive", "Empowering", "Community-driven", "Impact-focused"].map((tag, i) => (
                <motion.span key={tag} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} whileHover={{ scale: 1.06, y: -1 }} className="text-xs font-semibold px-3 py-1.5 rounded-full cursor-default" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "#7c3aed" }}>
                  {tag}
                </motion.span>
              ))}
            </div>
            <a href="#opportunities" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#7c3aed" }}>
              Become a member <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="relative group">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(0,0,0,0.35)" }}>
              <img src={mentorshipPhoto} alt="WISE mentorship dinner" loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,6,82,0.4) 0%, transparent 55%)" }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
          </motion.div>
        </div>
      </section>

      {/* initiatives */}
      <section id="initiatives" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7c3aed" }}>Our Initiatives</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#3b0764" }}>Four ways we create impact</h2>
            <p className="text-base max-w-md mx-auto" style={{ color: "rgba(76,29,149,0.65)", lineHeight: 1.7 }}>
              Building women&apos;s leadership, confidence, and involvement in STEM through community-driven initiatives.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 place-items-center pb-16">
            {INITIATIVES.map((item, i) => <BubbleCard key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>

      {/* events */}
      <section id="events" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 flex-wrap">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.42)" }}>Upcoming</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>WISE Events</h2>
            </div>
            <button onClick={() => navigate("/events")} className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
              View all <ArrowUpRight size={14} />
            </button>
          </motion.div>
          <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(139,92,246,0.35)", backdropFilter: "blur(12px)", padding: 8, boxShadow: "0 20px 56px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)" }}
            >
              <iframe
                src="https://luma.com/embed/calendar/cal-HkwfI7SX1257oT0/events"
                title="WISE events calendar"
                width="100%"
                height="520"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                style={{ border: "1px solid rgba(139,92,246,0.45)", borderRadius: "12px", display: "block", background: "transparent" }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="hidden lg:block relative rounded-2xl overflow-hidden h-full" style={{ minHeight: 536, border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 20px 56px rgba(0,0,0,0.3)" }}>
              <img src={networkingPhoto} alt="WISE networking event" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,6,82,0.5) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(91,33,182,0.6)", backdropFilter: "blur(8px)" }}>Industry Networking</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* conference */}
      <section id="conference" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden" style={{ minHeight: 400 }}>
            <img src={conf0} alt="WISE Annual Conference" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,2,50,0.92) 0%, rgba(40,15,100,0.78) 50%, rgba(14,2,50,0.65) 100%)" }} />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">
              <div className="space-y-5">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }}>Flagship Event · 2025</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>WISE Annual Conference</h2>
                <p className="leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Our signature event bringing students, industry leaders, and researchers together to celebrate women in STEM.</p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                {[{ label: "Date", value: "Coming Soon!" }, { label: "Location", value: "Westin Harbour Castle, Toronto" }].map(({ label, value }) => (
                  <div key={label} className="rounded-xl px-6 py-4 space-y-1 flex-1 lg:flex-none" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                    <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </div>
                ))}
                <motion.button onClick={() => navigate("/conference")} whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold group" style={{ background: "white", color: "#5b21b6" }}>
                  Registeration Coming Soon
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* stories */}
      <section id="stories" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div whileHover={{ scale: 1.04, rotate: -1 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
              <img src={storiesLogo} alt="Stories of WISE" loading="lazy" className="w-44 lg:w-56 h-auto object-contain" />
            </motion.div>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.42)" }}>Testimonials</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Stories from our community</h2>
              <p className="text-base" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>Hear from students, alumni, and industry leaders shaping the WISE experience.</p>
            </div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="flex gap-2">
                {[{ fn: () => setActiveStory((s) => (s - 1 + STORIES.length) % STORIES.length), icon: <ChevronLeft size={17} /> }, { fn: () => setActiveStory((s) => (s + 1) % STORIES.length), icon: <ChevronRight size={17} /> }].map(({ fn, icon }, i) => (
                  <motion.button key={i} onClick={fn} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }}>{icon}</motion.button>
                ))}
              </div>
              <div className="flex gap-2">
                {STORIES.map((_, i) => (<motion.button key={i} onClick={() => setActiveStory(i)} animate={{ width: i === activeStory ? 28 : 8, backgroundColor: i === activeStory ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)" }} transition={{ duration: 0.3 }} className="h-1.5 rounded-full" />))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={socialPhoto} alt="WISE members at social event" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={nvidiaPhoto} alt="WISE members at NVIDIA visit" loading="lazy" className="w-full h-full object-cover" style={{ transform: "rotate(90deg) scale(1.45)", transformOrigin: "center" }} />
                </div>
              </div>
              <div className="pt-2">
                <button onClick={() => navigate("/stories")} className="inline-flex items-center gap-1.5 text-sm font-semibold group" style={{ color: "rgba(255,255,255,0.55)" }}>
                  View all stories <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div key={activeStory} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -22 }} transition={{ duration: 0.35 }} className="rounded-2xl p-8 lg:p-10 space-y-6" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(24px)" }}>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" style={{ opacity: 0.2 }}>
                  <path d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.76 7.76 0 11.52 0L13.44 2.88C11.12 3.36 9.2 4.48 7.68 6.24C6.24 7.92 5.52 9.84 5.52 12H9.6V24H0ZM18.56 24V14.4C18.56 10.56 19.52 7.28 21.44 4.56C23.44 1.76 26.32 0 30.08 0L32 2.88C29.68 3.36 27.76 4.48 26.24 6.24C24.8 7.92 24.08 9.84 24.08 12H28.16V24H18.56Z" fill="white" />
                </svg>
                <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{STORIES[activeStory].quote}</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #a855f7, #5b21b6)" }}>{STORIES[activeStory].initials}</div>
                  <div>
                    <p className="font-semibold text-white text-sm">{STORIES[activeStory].name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{STORIES[activeStory].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* opportunities */}
      <section id="opportunities" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.42)" }}>Opportunities</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Grow with WISE</h2>
            <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>Membership, executive roles, mentorship, and industry visits — WISE is your launchpad in STEM.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OPPORTUNITY_CARDS.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="rounded-2xl p-7 space-y-4 cursor-default"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", transition: "background 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(91,33,182,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{card.desc}</p>
                {card.cta && (
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold group" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {card.cta} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="py-10 px-6 lg:px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.28)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logoGradient} alt="WISE UofT" loading="lazy" className="h-8 w-auto object-contain" style={{ filter: "brightness(10) saturate(0) opacity(0.5)" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.32)" }}>Women in Science &amp; Engineering</span>
          </div>
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"}
              >{s.name}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>© {new Date().getFullYear()} WISE UofT</p>
        </div>
      </footer>
    </>
  );
}

