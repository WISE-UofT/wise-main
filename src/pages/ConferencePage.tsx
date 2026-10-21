import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {CONFERENCE_GALLERY} from "@/data/content";

export default function ConferencePage() {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const prev = () => setGalleryIdx(i => (i - 1 + CONFERENCE_GALLERY.length) % CONFERENCE_GALLERY.length);
  const next = () => setGalleryIdx(i => (i + 1) % CONFERENCE_GALLERY.length);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <motion.p initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{delay: 0.05}}
            className="text-xs font-semibold tracking-widest uppercase" style={{color: "#5b21b6"}}
          >
            Flagship Event
          </motion.p>
          <motion.h1 initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
            className="text-5xl lg:text-6xl font-bold tracking-tight"
            style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}
          >
            WISE Annual Conference
          </motion.h1>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[{label: "Date", value: "TBD"}, {label: "Location", value: "The Westin Harbour Castle, Toronto"}].map(({label, value}, i) => (
            <motion.div key={label} initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2 + i * 0.08}}
              className="rounded-2xl px-6 py-5 space-y-1"
              style={{background: "rgba(255,255,255,0.55)", border: "1px solid rgba(91,33,182,0.15)", backdropFilter: "blur(12px)"}}
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{color: "#7c3aed"}}>{label}</p>
              <p className="text-xl font-bold" style={{color: "#1a0a3d"}}>{value}</p>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}
          className="rounded-2xl p-8 lg:p-10 space-y-5"
          style={{background: "rgba(255,255,255,0.55)", border: "1px solid rgba(91,33,182,0.15)", backdropFilter: "blur(12px)"}}
        >
          <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}>About the Conference</h2>
          <p style={{color: "rgba(26,10,61,0.65)", lineHeight: 1.8}}>
            The WISE Annual Conference is our signature event, bringing together students, industry leaders, and researchers to celebrate the achievements of women in STEM. Each year we curate inspiring keynotes, interactive workshops, and networking sessions designed to empower the next generation of engineers and scientists.
          </p>
          <p style={{color: "rgba(26,10,61,0.65)", lineHeight: 1.8}}>
            Whether you&apos;re a first-year student or a seasoned professional, the WISE Conference offers something for everyone. Registration details will be announced closer to the date — stay tuned!
          </p>
          <span
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white cursor-default"
            style={{background: "linear-gradient(135deg, #5b21b6, #7c3aed)", boxShadow: "0 8px 28px rgba(91,33,182,0.35)", opacity: 0.65}}
          >
            Registration coming soon
          </span>
        </motion.div>

        {/* Last Year section */}
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4}} className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: "#7c3aed"}} />
            <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}>
              Last Year&apos;s Conference — January 17–18, 2026
            </h2>
          </div>

          {/* Photo gallery */}
          <div className="relative rounded-3xl overflow-hidden" style={{aspectRatio: "16/7"}}>
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryIdx}
                src={CONFERENCE_GALLERY[galleryIdx]}
                alt="Conference photo"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{opacity: 0, scale: 1.03}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.98}}
                transition={{duration: 0.45}}
              />
            </AnimatePresence>
            <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(14,2,50,0.65) 0%, transparent 55%)"}} />

            {/* Gallery controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <motion.button onClick={prev} whileHover={{scale: 1.1}} whileTap={{scale: 0.92}}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.35)", color: "white"}}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button onClick={next} whileHover={{scale: 1.1}} whileTap={{scale: 0.92}}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.35)", color: "white"}}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {CONFERENCE_GALLERY.map((_, i) => (
                <motion.button key={i} onClick={() => setGalleryIdx(i)}
                  animate={{width: i === galleryIdx ? 24 : 8, backgroundColor: i === galleryIdx ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"}}
                  transition={{duration: 0.3}}
                  className="h-1.5 rounded-full"
                />
              ))}
            </div>
          </div>

          <p className="text-sm" style={{color: "rgba(76,29,149,0.65)", lineHeight: 1.75}}>
            Our most recent conference drew students, faculty, and industry professionals from across UofT and the GTA. Attendees experienced two days of keynote talks, interactive sessions, and meaningful connections — all celebrating women in STEM.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}
