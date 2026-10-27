import {useState} from "react";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";
import type {INITIATIVES} from "@/data/content";

type Initiative = (typeof INITIATIVES)[number];

export default function BubbleCard({item, index}: {item: Initiative; index: number}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const Icon = item.icon;
  const yShift = [0, 40, 20, -20][index] ?? 0;
  return (
    <motion.div initial={{opacity: 0, scale: 0.75}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1]}} style={{transform: `translateY(${yShift}px)`}}>
      <motion.div
        onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
        onClick={() => navigate("/initiatives")}
        animate={{scale: hovered ? 1.05 : 1, y: hovered ? -6 : 0}}
        transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
        className="w-full aspect-square rounded-full flex flex-col items-center justify-center text-center px-5 cursor-pointer select-none"
        style={{
          background: hovered ? "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.22), rgba(255,255,255,0.07))" : "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
          border: `1.5px solid ${hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.14)"}`,
          backdropFilter: "blur(24px)",
          boxShadow: hovered ? "0 28px 72px rgba(91,33,182,0.5), inset 0 1px 0 rgba(255,255,255,0.22)" : "0 10px 40px rgba(91,33,182,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
          transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
       }}
      >
        <motion.div className="mb-3 w-11 h-11 rounded-full flex items-center justify-center" animate={{backgroundColor: hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}} transition={{duration: 0.3}}>
          <Icon size={18} color="white" />
        </motion.div>
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{color: "rgba(255,255,255,0.4)"}}>{item.id}</p>
        <h3 className="text-sm font-bold leading-snug text-white mb-2" style={{fontFamily: "'Bricolage Grotesque', sans-serif"}}>{item.title}</h3>
        <p className="text-[11px] leading-relaxed" style={{color: "rgba(255,255,255,0.48)"}}>{item.short}</p>
      </motion.div>
    </motion.div>
  );
}
