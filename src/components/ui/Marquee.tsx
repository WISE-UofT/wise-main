import {motion} from "motion/react";
import {MARQUEE_ITEMS} from "@/data/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden py-3.5">
      <motion.div className="flex gap-10 whitespace-nowrap" animate={{x: ["0%", "-50%"]}} transition={{duration: 32, repeat: Infinity, ease: "linear"}}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest flex-shrink-0" style={{color: "rgba(26,10,61,0.38)"}}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: "rgba(91,33,182,0.3)"}} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
