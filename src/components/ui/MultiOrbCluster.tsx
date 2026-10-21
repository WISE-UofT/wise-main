import {useRef} from "react";
import {motion, useScroll, useTransform} from "motion/react";
import {
  heroGroupPhoto,
  conf1,
  networkingPhoto,
  socialPhoto,
  mentorshipPhoto,
  nvidiaPhoto,
} from "@/data/assets";

export default function MultiOrbCluster() {
  const containerRef = useRef<HTMLDivElement>(null);

  // parallax without re-rendering on scroll (small orbs drift more)
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
 });
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const y5 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y6 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const glassOrb = (size: number, src: string, blur: number, opacity: number, extraShadow?: string) => (
    <div style={{
      width: size, height: size, borderRadius: "50%", overflow: "hidden", position: "relative",
      border: "1.5px solid rgba(255,255,255,0.65)",
      boxShadow: extraShadow ?? `inset 0 2px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.08), 0 ${Math.round(size * 0.09)}px ${Math.round(size * 0.2)}px rgba(91,33,182,${(0.15 + blur * 0.015).toFixed(2)})`,
      filter: blur > 0 ? `blur(${blur}px)` : undefined,
      transform: "translateZ(0)",
   }}>
      <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" style={{opacity}} />
      {/* Top highlight sheen */}
      <div style={{position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.12) 38%, transparent 62%)", pointerEvents: "none"}} />
      {/* Bottom rim shadow */}
      <div style={{position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(ellipse at 72% 88%, rgba(10,2,40,0.22) 0%, transparent 55%)", pointerEvents: "none"}} />
    </div>
  );

  return (
    <div ref={containerRef} className="hidden lg:flex items-center justify-center">
      <motion.div
        initial={{opacity: 0, scale: 0.85}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
      >
        <div className="relative" style={{width: 440, height: 420}}>
          {/* Glow blob */}
          <div className="absolute pointer-events-none" style={{
            width: 340, height: 340, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.24) 0%, rgba(139,92,246,0.07) 55%, transparent 100%)",
            filter: "blur(52px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
         }} />

          {/* Orb F - tiny, bottom-right, deepest */}
          <motion.div className="absolute will-change-transform" style={{bottom: 14, right: 22, y: y4}}>
            {glassOrb(62, conf1, 4, 0.72)}
          </motion.div>

          {/* Orb D - small, top-left */}
          <motion.div className="absolute will-change-transform" style={{top: 20, left: 20, y: y3}}>
            {glassOrb(78, mentorshipPhoto, 3, 0.76)}
          </motion.div>

          {/* Orb C - small-medium, bottom-left */}
          <motion.div className="absolute will-change-transform" style={{bottom: 42, left: 34, y: y3}}>
            {glassOrb(96, socialPhoto, 2, 0.82)}
          </motion.div>

          {/* Orb E - medium, middle-right */}
          <motion.div className="absolute will-change-transform" style={{top: 132, right: 16, y: y5}}>
            {glassOrb(112, nvidiaPhoto, 1.2, 0.87)}
          </motion.div>

          {/* Orb B - medium-large, top-right */}
          <motion.div className="absolute will-change-transform" style={{top: 10, right: 62, y: y2}}>
            {glassOrb(138, networkingPhoto, 0.8, 0.92)}
          </motion.div>

          {/* Rotating dashed ring (behind Orb A) */}
          <motion.div className="absolute will-change-transform" style={{top: 92, left: 88, y: y1, pointerEvents: "none", zIndex: 0}}>
            <motion.div
              style={{width: 244, height: 244, borderRadius: "50%", border: "1.5px dashed rgba(168,85,247,0.38)"}}
              animate={{rotate: [0, 360]}}
              transition={{duration: 22, repeat: Infinity, ease: "linear"}}
            />
          </motion.div>

          {/* Orb A - largest, sharp foreground */}
          <motion.div className="absolute will-change-transform" style={{top: 104, left: 100, y: y6, zIndex: 10}}>
            {glassOrb(220, heroGroupPhoto, 0, 1, "inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(0,0,0,0.1), 0 28px 72px rgba(91,33,182,0.42)")}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
