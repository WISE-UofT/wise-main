import { motion } from "motion/react";

export default function EventsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">

        {/* header */}
        <div className="space-y-4">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5b21b6" }}>
            2025 - 2027 Season
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#1a0a3d" }}>
            WISE Events
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
            className="text-base max-w-lg font-medium" style={{ color: "rgba(26,10,61,0.62)", lineHeight: 1.75 }}>
            All our upcoming events - from industry mixers to workshops, we keep the calendar full.
          </motion.p>
        </div>

        {/* luma calendar */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="rounded-3xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(91,33,182,0.15)", backdropFilter: "blur(12px)" }}
        >
          <iframe
            src="https://luma.com/embed/calendar/cal-HkwfI7SX1257oT0/events"
            title="WISE events calendar"
            width="100%"
            height="600"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            style={{ border: 0, display: "block", background: "transparent" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
