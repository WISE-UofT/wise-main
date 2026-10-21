import {useState} from "react";
import {motion} from "motion/react";
import {heroGroupPhoto, networkingPhoto, socialPhoto} from "@/data/assets";

// ─── Photo Stack ─────────────────────────────────────────────────────────────

export default function PhotoStack() {
  const photos = [
    {src: heroGroupPhoto, pos: "center 15%"},
    {src: networkingPhoto, pos: "center center"},
    {src: socialPhoto, pos: "center center"},
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const cycle = () => setActiveIdx(i => (i + 1) % photos.length);

  const main = photos[activeIdx];
  const peek = photos[(activeIdx + 1) % photos.length];

  return (
    <div
      style={{position: "relative", aspectRatio: "3/4", overflow: "visible"}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Clip wrapper: allows right overflow, clips left/top/bottom */}
      <div style={{position: "absolute", inset: 0, zIndex: 1, clipPath: "inset(0 -200% 0 0)"}}>
        <motion.div
          onClick={cycle}
          className="absolute rounded-3xl overflow-hidden cursor-pointer"
          animate={{rotate: hovered ? 14 : 8}}
          transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
          style={{
            top: 0, left: 0, right: 0, height: "75%",
            transformOrigin: "bottom left",
            border: "1px solid rgba(255,255,255,0.42)",
            boxShadow: "0 16px 48px rgba(91,33,182,0.22)",
         }}
        >
          <img src={peek.src} alt="" loading="lazy" className="w-full h-full object-cover" style={{opacity: 0.88, objectPosition: "center center"}} />
          <div style={{position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.22) 0%, transparent 60%)", pointerEvents: "none"}} />
          <motion.div animate={{opacity: hovered ? 1 : 0}} transition={{duration: 0.3}}
            style={{position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(255,255,255,0.18) 0%, transparent 50%)", pointerEvents: "none"}} />
        </motion.div>
      </div>

      {/* Main card */}
      <motion.div
        onClick={cycle}
        className="absolute inset-0 rounded-3xl overflow-hidden cursor-pointer"
        style={{
          zIndex: 3,
          boxShadow: "0 32px 80px rgba(91,33,182,0.28), 0 8px 24px rgba(0,0,0,0.12)",
          border: "1px solid rgba(255,255,255,0.45)",
       }}
      >
        <img src={main.src} alt="WISE members" loading="lazy" className="w-full h-full object-cover" style={{objectPosition: main.pos}} />
        <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(30,6,82,0.62) 0%, rgba(91,33,182,0.08) 38%, transparent 58%)"}} />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.22)"}}>
            <div className="flex -space-x-1.5 flex-shrink-0">
              {["#5b21b6", "#7c3aed", "#a855f7", "#c084fc"].map((c, i) => (<div key={i} className="w-6 h-6 rounded-full border-2 border-white/50 flex-shrink-0" style={{backgroundColor: c}} />))}
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight">90+ members</p>
              <p className="text-[10px]" style={{color: "rgba(255,255,255,0.6)"}}>across UofT Engineering</p>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full"
          animate={{opacity: hovered ? 1 : 0}}
          transition={{duration: 0.2}}
          style={{background: "rgba(91,33,182,0.65)", backdropFilter: "blur(8px)", color: "white", pointerEvents: "none"}}
        >
          tap to browse ✦
        </motion.div>
      </motion.div>
    </div>
  );
}
