import {motion} from "motion/react";
import {ArrowUpRight, BookOpen, Mail} from "lucide-react";
import {STORIES} from "@/data/content";
import {storiesLogo, mentorshipPhoto, socialPhoto} from "@/data/assets";

export default function StoriesPage() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{delay: 0.05}}>
            <img src={storiesLogo} alt="Stories of WISE" loading="lazy" className="w-44 h-auto object-contain" />
          </motion.div>
          <motion.h1 initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
            className="text-5xl lg:text-6xl font-bold tracking-tight"
            style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}
          >
            Stories of WISE
          </motion.h1>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.18}}
            className="text-base max-w-xl font-medium leading-relaxed"
            style={{color: "rgba(76,29,149,0.65)"}}
          >
            Empowering women in STEM fields by sharing their achievements, challenges, and life stories — told by the people who lived them.
          </motion.p>
        </div>

        {/* Articles + Podcasts - two big cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Articles */}
          <motion.a
            href="https://tr.ee/LJdvb70RAu" target="_blank" rel="noopener noreferrer"
            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.22}}
            whileHover={{y: -6}} whileTap={{scale: 0.97}}
            className="group relative rounded-3xl overflow-hidden flex flex-col justify-end cursor-pointer"
            style={{minHeight: 320, boxShadow: "0 16px 48px rgba(91,33,182,0.18)", border: "1px solid rgba(139,92,246,0.22)"}}
          >
            <img src={mentorshipPhoto} alt="WISE articles" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(26,10,61,0.85) 0%, rgba(91,33,182,0.25) 55%, transparent 100%)"}} />
            <div className="relative z-10 p-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold" style={{background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "white"}}>
                <BookOpen size={11} /> Articles
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug" style={{fontFamily: "'Playfair Display', serif"}}>Read Their Stories</h3>
              <p className="text-sm text-white/70 leading-relaxed">In-depth articles written by and about women navigating STEM at UofT and beyond.</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-white/90 pt-1">
                Read now <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Podcasts */}
          <motion.a
            href="https://tr.ee/k63mcVN6jb" target="_blank" rel="noopener noreferrer"
            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.32}}
            whileHover={{y: -6}} whileTap={{scale: 0.97}}
            className="group relative rounded-3xl overflow-hidden flex flex-col justify-end cursor-pointer"
            style={{minHeight: 320, boxShadow: "0 16px 48px rgba(91,33,182,0.18)", border: "1px solid rgba(139,92,246,0.22)"}}
          >
            <img src={socialPhoto} alt="WISE podcasts" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(26,10,61,0.85) 0%, rgba(124,58,237,0.2) 55%, transparent 100%)"}} />
            <div className="relative z-10 p-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold" style={{background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "white"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 1a11 11 0 1 0 0 22A11 11 0 0 0 12 1Zm0 2a9 9 0 1 1 0 18A9 9 0 0 1 12 3Zm-1 4v10l7-5-7-5Z"/></svg>
                Podcasts
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug" style={{fontFamily: "'Playfair Display', serif"}}>Listen to Their Voices</h3>
              <p className="text-sm text-white/70 leading-relaxed">Candid conversations with women in STEM — their journeys, challenges, and victories.</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-white/90 pt-1">
                Listen now <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* Mission strip */}
        <motion.div initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.42}}
          className="rounded-2xl px-8 py-8 text-center space-y-3"
          style={{background: "rgba(255,255,255,0.5)", border: "1px solid rgba(139,92,246,0.18)", backdropFilter: "blur(12px)"}}
        >
          <p className="text-xs font-semibold tracking-widest uppercase" style={{color: "#7c3aed"}}>Our Mission</p>
          <p className="text-lg font-medium leading-relaxed max-w-2xl mx-auto" style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}>
            &quot;To empower women in STEM fields by sharing their achievements, challenges, and life stories.&quot;
          </p>
        </motion.div>

        {/* Featured voices */}
        <div className="space-y-4">
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}
            className="text-xs font-semibold tracking-widest uppercase" style={{color: "#7c3aed"}}
          >Featured Voices</motion.p>
          {STORIES.map((story, i) => (
            <motion.a key={i} initial={{opacity: 0, x: -16}} animate={{opacity: 1, x: 0}} transition={{delay: 0.55 + i * 0.08}}
              className="rounded-2xl p-6 lg:p-8 space-y-4 block"
              href={story.link || undefined}
              target={story.link ? "_blank" : undefined}
              rel={story.link ? "noopener noreferrer" : undefined}
              style={{background: "rgba(255,255,255,0.52)", border: "1px solid rgba(91,33,182,0.13)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(91,33,182,0.07)", cursor: story.link ? "pointer" : "default"}}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5" style={{background: "linear-gradient(135deg, #a855f7, #5b21b6)"}}>{story.initials}</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{color: "#1a0a3d"}}>{story.name}</p>
                  <p className="text-xs mt-0.5" style={{color: "rgba(76,29,149,0.6)"}}>{story.role}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed" style={{color: "rgba(26,10,61,0.72)", fontStyle: "italic"}}>&ldquo;{story.quote}&rdquo;</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.8}}
          className="rounded-2xl p-8 text-center space-y-4"
          style={{background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.07))", border: "1px solid rgba(139,92,246,0.2)"}}
        >
          <p className="text-lg font-bold" style={{fontFamily: "'Playfair Display', serif", color: "#3b0764"}}>Have a story to share?</p>
          <p className="text-sm" style={{color: "rgba(76,29,149,0.65)"}}>We&apos;re always looking for new voices — reach out to the Stories of WISE team.</p>
          <motion.a href="mailto:wise.stories@utoronto.ca" whileHover={{scale: 1.04, y: -2}} whileTap={{scale: 0.97}}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{background: "linear-gradient(135deg, #5b21b6, #7c3aed)", boxShadow: "0 8px 24px rgba(91,33,182,0.28)"}}
          >
            <Mail size={14} /> Get in touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
