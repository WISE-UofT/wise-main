import {motion} from "motion/react";
import {ArrowRight} from "lucide-react";
import {INITIATIVE_DETAILS} from "@/data/content";

export default function InitiativesPage() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <motion.p initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{delay: 0.05}}
            className="text-xs font-semibold tracking-widest uppercase" style={{color: "#7c3aed"}}
          >
            What We Do
          </motion.p>
          <motion.h1 initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
            className="text-5xl lg:text-6xl font-bold tracking-tight"
            style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}
          >
            Our Initiatives
          </motion.h1>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.18}}
            className="text-base max-w-lg mx-auto font-medium"
            style={{color: "rgba(76,29,149,0.65)", lineHeight: 1.75}}
          >
            Four focused areas where WISE builds community, opportunity, and leadership for women in STEM.
          </motion.p>
        </div>

        <div className="space-y-8">
          {INITIATIVE_DETAILS.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div key={i} initial={{opacity: 0, y: 24}} animate={{opacity: 1, y: 0}} transition={{delay: 0.15 + i * 0.1}}
                className="rounded-3xl overflow-hidden"
                style={{background: "rgba(255,255,255,0.58)", border: "1px solid rgba(139,92,246,0.18)", backdropFilter: "blur(14px)", boxShadow: "0 8px 40px rgba(91,33,182,0.1)"}}
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Photo */}
                  <div className="lg:w-2/5 flex-shrink-0" style={{minHeight: 240}}>
                    <img src={item.photo} alt={item.photoAlt} loading="lazy" className="w-full h-full object-cover" style={{minHeight: 240}} />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-10 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.22)"}}>
                        <Icon size={19} style={{color: "#7c3aed"}} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{color: "#7c3aed"}}>{item.id}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1" style={{fontFamily: "'Bricolage Grotesque', sans-serif", color: "#3b0764"}}>{item.title}</h3>
                      <p className="text-sm font-semibold italic mb-4" style={{color: "#7c3aed"}}>{item.tagline}</p>
                      <p className="text-sm leading-relaxed" style={{color: "rgba(76,29,149,0.68)"}}>{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.highlights.map((h) => (
                        <span key={h} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.22)", color: "#5b21b6"}}>{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
         })}
        </div>

        {/* CTA */}
        <motion.div initial={{opacity: 0, y: 24}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
          className="rounded-3xl px-8 py-14 text-center space-y-5"
          style={{background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.08))", border: "1px solid rgba(139,92,246,0.25)"}}
        >
          <h3 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif", color: "#3b0764"}}>
            Interested in getting involved?
          </h3>
          <p style={{color: "rgba(76,29,149,0.65)"}}>Join WISE and become part of a community that lifts you up.</p>
          <motion.a href="#" whileHover={{scale: 1.04, y: -2}} whileTap={{scale: 0.97}}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
            style={{background: "linear-gradient(135deg, #5b21b6, #7c3aed)", boxShadow: "0 8px 28px rgba(91,33,182,0.3)"}}
          >
            Join WISE <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
