import {motion} from "motion/react";
import {ArrowRight, Mail} from "lucide-react";
import {SPONSORS, SPONSOR_STATS} from "@/data/content";

export default function OurSponsorsPage() {
  const tierColors = {Gold: "#d97706", Silver: "#64748b", Bronze: "#92400e"} as const;
  const tierBgs = {Gold: "rgba(217,119,6,0.12)", Silver: "rgba(100,116,139,0.12)", Bronze: "rgba(146,64,14,0.12)"} as const;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-24">
        <div className="text-center space-y-4">
          <motion.p initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{delay: 0.05}} className="text-xs font-semibold tracking-widest uppercase" style={{color: "#5b21b6"}}>
            2025 – 2026 Partners
          </motion.p>
          <motion.h1 initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
            className="text-5xl lg:text-6xl font-bold tracking-tight"
            style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}
          >
            Our Sponsors
          </motion.h1>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.18}}
            className="text-base max-w-lg mx-auto font-medium"
            style={{color: "rgba(26,10,61,0.62)", lineHeight: 1.75}}
          >
            We&apos;re grateful to the organizations who invest in the future of women in STEM.
          </motion.p>
        </div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.25}}>
          <div className="relative w-full rounded-3xl overflow-hidden" style={{height: "440px", background: "radial-gradient(ellipse at 50% 50%, rgba(91,33,182,0.18), rgba(10,2,30,0.5))", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(8px)"}}>
            <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "36px 36px"}} />
            {SPONSORS.map((s, i) => (
              <motion.div key={s.name} className="absolute" style={{left: s.x, top: s.y}}
                animate={{y: [0, -14, 2, -8, 0]}} transition={{duration: 5 + i * 0.55, repeat: Infinity, ease: "easeInOut", delay: s.delay}}
              >
                <motion.div whileHover={{scale: 1.12, rotate: 2}} transition={{type: "spring", stiffness: 300}}
                  className="rounded-2xl px-4 py-3 flex flex-col items-center gap-0.5 cursor-default select-none"
                  style={{background: s.bg, border: "1.5px solid rgba(255,255,255,0.4)", boxShadow: "0 8px 28px rgba(0,0,0,0.10)", minWidth: s.tier === "Gold" ? 96 : 80}}
                >
                  <span className="text-xl font-black leading-none" style={{color: s.color, fontFamily: "'Bricolage Grotesque', sans-serif"}}>{s.letter}</span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider mt-0.5" style={{color: `${s.color}99`}}>{s.name}</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest mt-1 px-1.5 py-0.5 rounded-full" style={{background: tierBgs[s.tier], color: tierColors[s.tier]}}>{s.tier}</span>
                </motion.div>
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div className="rounded-full" style={{width: 120, height: 120, background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)"}} animate={{scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5]}} transition={{duration: 4, repeat: Infinity}} />
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-5">
            {(["Gold", "Silver", "Bronze"] as const).map((tier) => (
              <div key={tier} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{background: tierColors[tier]}} />
                <span className="text-xs font-semibold" style={{color: "rgba(26,10,61,0.55)"}}>{tier} Sponsor</span>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SPONSOR_STATS.map((s, i) => (
            <motion.div key={s.label} initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: i * 0.08}}
              className="rounded-2xl p-6 text-center"
              style={{background: "rgba(255,255,255,0.55)", border: "1px solid rgba(91,33,182,0.15)"}}
            >
              <p className="text-3xl font-bold" style={{fontFamily: "'Bricolage Grotesque', sans-serif", color: "#1a0a3d"}}>{s.value}</p>
              <p className="text-xs font-medium mt-1.5 leading-snug" style={{color: "rgba(26,10,61,0.55)"}}>{s.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity: 0, y: 24}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(91,33,182,0.35) 0%, rgba(168,85,247,0.18) 50%, rgba(91,33,182,0.28) 100%)"}} />
          <div className="absolute inset-0 rounded-3xl" style={{border: "1px solid rgba(255,255,255,0.18)"}} />
          <div className="relative z-10 px-8 py-12 lg:px-14 lg:py-16 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)"}}>
                Become a Partner
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug" style={{fontFamily: "'Playfair Display', serif"}}>
                Thinking of Sponsoring WISE UofT?
              </h2>
              <p className="leading-relaxed max-w-lg" style={{color: "rgba(255,255,255,0.72)"}}>
                If you would like to sponsor WISE UofT for the <strong className="text-white">2025–2026 school year</strong>, or want more information about the sponsorship process, please send an email to <strong className="text-white">president@wise.skule.ca</strong> for our sponsorship package.
              </p>
              <p className="font-semibold text-white">We look forward to working with you!</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.a href="mailto:president@wise.skule.ca?subject=WISE UofT Sponsorship Inquiry"
                  whileHover={{scale: 1.04, y: -2}} whileTap={{scale: 0.97}}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold group"
                  style={{background: "white", color: "#5b21b6", boxShadow: "0 8px 32px rgba(255,255,255,0.18)"}}
                >
                  Sponsor Today! <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
                <motion.a href="mailto:president@wise.skule.ca"
                  whileHover={{scale: 1.04, y: -2}} whileTap={{scale: 0.97}}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                  style={{background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "white"}}
                >
                  <Mail size={15} /> president@wise.skule.ca
                </motion.a>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0">
              <motion.div className="w-36 h-36 rounded-full flex items-center justify-center" style={{background: "radial-gradient(circle at 38% 38%, rgba(255,255,255,0.22), rgba(255,255,255,0.05))", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 16px 48px rgba(91,33,182,0.35)"}} animate={{rotate: [0, 360]}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
                <span className="text-4xl font-black text-white" style={{fontFamily: "'Playfair Display', serif"}}>W</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
