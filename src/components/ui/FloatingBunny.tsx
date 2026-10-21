import {motion} from "motion/react";

export default function FloatingBunny({src, bottom = 24, right = 24, size = 72, rotate = 6, delay = 0}: {src: string; bottom?: number; right?: number; size?: number; rotate?: number; delay?: number}) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{bottom, right, zIndex: 20, width: size, height: size}}
      animate={{y: [0, -10, 0], rotate: [rotate - 2, rotate + 3, rotate - 2]}}
      transition={{duration: 4.5, repeat: Infinity, ease: "easeInOut", delay}}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl" style={{border: "2.5px solid rgba(255,255,255,0.7)", background: "white"}}>
        <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
}
