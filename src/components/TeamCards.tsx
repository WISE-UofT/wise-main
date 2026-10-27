import {motion, AnimatePresence} from "motion/react";
import {User, Linkedin} from "lucide-react";
import {copresidentsPhoto} from "@/data/assets";
import {teamPhoto} from "@/data/teamPhotos";
import type {TeamRole, ModalState} from "@/data/content";

// presidents group card

export function PresidentsGroupCard({members, sharedQuote, onSelect}: {members: TeamRole[]; color: string; sharedQuote?: string; onSelect: (m: TeamRole) => void}) {
  // single quote shown on the photo, falls back when empty
  const quote = sharedQuote || "Quote coming soon...";
  const left = members[0];
  const right = members[1];

  const nameBlock = (m: TeamRole | undefined, align: "left" | "right") => (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p className="text-xs font-semibold" style={{color: "#c084fc"}}>{m?.role}</p>
      <p
        className="text-sm font-bold mt-0.5 group-hover:underline underline-offset-4"
        style={{color: m?.name ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)", fontStyle: m?.name ? "normal" : "italic"}}
      >
        {m?.name || "Name TBD"}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
      transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
      className="relative w-full rounded-3xl overflow-hidden group"
      style={{
        aspectRatio: "16/9",
        boxShadow: "0 16px 56px rgba(91,33,182,0.22), 0 4px 16px rgba(0,0,0,0.1)",
        border: "1.5px solid rgba(255,255,255,0.35)",
     }}
    >
      {/* Photo */}
      <img
        src={copresidentsPhoto} alt="Co-Presidents" loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{objectPosition: "center 20%"}}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(26,10,61,0.82) 0%, rgba(76,29,149,0.18) 55%, transparent 100%)"}} />

      {/* Shared quote overlay - top portion (clicks pass through to the halves below) */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-6 pb-4 pointer-events-none" style={{background: "linear-gradient(to bottom, rgba(26,10,61,0.5) 0%, transparent 100%)"}}>
        <div className="flex items-start gap-2">
          <span className="text-[38px] leading-none font-black flex-shrink-0 -mt-2" style={{color: "#c084fc", fontFamily: "Georgia, serif"}}>&ldquo;</span>
          <p className="text-sm leading-relaxed pt-1 italic" style={{color: "rgba(255,255,255,0.55)"}}>
            {quote}
          </p>
          <span className="text-[38px] leading-none font-black flex-shrink-0 self-end -mb-4" style={{color: "#c084fc", fontFamily: "Georgia, serif"}}>&rdquo;</span>
        </div>
      </div>

      {/* Left half - opens the left president's modal */}
      {left && (
        <button
          onClick={() => onSelect(left)}
          aria-label={`Open ${left.name || left.role} profile`}
          className="group absolute left-0 top-0 bottom-0 w-1/2 flex items-end justify-start text-left px-6 py-5 cursor-pointer"
        >
          {nameBlock(left, "left")}
        </button>
      )}

      {/* Right half - opens the right president's modal */}
      {right && (
        <button
          onClick={() => onSelect(right)}
          aria-label={`Open ${right.name || right.role} profile`}
          className="group absolute right-0 top-0 bottom-0 w-1/2 flex items-end justify-end text-right px-6 py-5 cursor-pointer"
        >
          {nameBlock(right, "right")}
        </button>
      )}
    </motion.div>
  );
}

// shared photo box (card + modal both use this)

function PhotoBox({member, color, isVP, round}: {
  member: TeamRole; color: string; isVP?: boolean; round?: boolean;
}) {
  const src = teamPhoto(member.photo);
  if (src) {
    return (
      <div
        className="relative flex-shrink-0 w-full overflow-hidden"
        style={round
          ? {width: 96, height: 96, borderRadius: "50%"}
          : {aspectRatio: "3/4", borderRadius: "10px"}}
      >
        <img src={src} alt={member.name || member.role} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "center 20%"}} />
      </div>
    );
 }
  // No photo set in content.ts -> dashed placeholder icon.
  return (
    <div
      className="relative flex-shrink-0 w-full flex items-center justify-center overflow-hidden"
      style={round
        ? {width: 96, height: 96, borderRadius: "50%", background: `linear-gradient(135deg, ${color}22, ${color}44)`, border: `2px dashed ${color}66`}
        : {aspectRatio: "3/4", borderRadius: "10px", background: `linear-gradient(135deg, ${color}1a, ${color}38)`, border: `2px dashed ${color}55`}}
    >
      <User size={round ? 36 : isVP ? 26 : 22} style={{color: round ? `${color}cc` : `${color}99`}} />
      {!round && (
        <div className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{background: color, boxShadow: "0 2px 6px rgba(0,0,0,0.2)"}}>
          <svg width="9" height="9" viewBox="0 0 12 12" fill="white"><path d="M6 4.5A1.5 1.5 0 1 1 6 7.5 1.5 1.5 0 0 1 6 4.5Z"/><path fillRule="evenodd" d="M1.5 2.5h1l.8-1.2h5.4l.8 1.2H11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Zm4.5 6A2.5 2.5 0 1 0 6 4a2.5 2.5 0 0 0 0 5Z" clipRule="evenodd"/></svg>
        </div>
      )}
      {round && (
        <div className="absolute inset-0 rounded-full" style={{background: `radial-gradient(circle at 40% 35%, ${color}18, transparent 70%)`}} />
      )}
    </div>
  );
}

// team member card

export function MemberCard({member, color, light, border, isVP, onClick}: {
  member: TeamRole; color: string; light: string; border: string;
  isVP?: boolean; onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
      whileHover={{y: -4, scale: 1.02}} whileTap={{scale: 0.98}}
      transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center cursor-pointer group w-full"
      style={{
        background: isVP ? light : "rgba(255,255,255,0.52)",
        border: `1.5px solid ${isVP ? border : "rgba(26,10,61,0.1)"}`,
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.25s",
     }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${color}28`}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"}
    >
      {/* photo or placeholder */}
      <PhotoBox member={member} color={color} isVP={isVP} />
      {/* Name + role */}
      <div className="w-full space-y-0.5">
        <p className="text-xs font-semibold leading-tight"
          style={{color: member.name ? "#1a0a3d" : "rgba(26,10,61,0.35)", fontStyle: member.name ? "normal" : "italic"}}>
          {member.name || "Name TBD"}
        </p>
        <p className="text-[10px] leading-snug" style={{color: isVP ? color : "rgba(26,10,61,0.52)"}}>
          {member.role}
        </p>
      </div>
    </motion.button>
  );
}

// team modal

export function TeamModal({modal, onClose}: {modal: ModalState; onClose: () => void}) {
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{background: "rgba(6,1,20,0.82)", backdropFilter: "blur(16px)"}}
          onClick={onClose}
        >
          <motion.div
            initial={{scale: 0.88, y: 24, opacity: 0}} animate={{scale: 1, y: 0, opacity: 1}} exit={{scale: 0.88, y: 24, opacity: 0}}
            transition={{type: "spring", stiffness: 320, damping: 26}}
            className="relative max-w-xs w-full rounded-3xl overflow-hidden"
            style={{background: "linear-gradient(160deg, rgba(20,6,55,0.98) 0%, rgba(10,2,30,0.98) 100%)", border: `1px solid ${modal.color}44`, boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${modal.color}22`}}
            onClick={e => e.stopPropagation()}
          >
            <div className="h-1.5 w-full" style={{background: `linear-gradient(90deg, ${modal.color}, ${modal.color}88)`}} />
            <div className="p-8 flex flex-col items-center gap-5 text-center">
              <PhotoBox member={modal.member} color={modal.color} isVP={modal.isVP} round />
              <div className="space-y-1">
                <p className="text-xl font-bold text-white" style={{fontFamily: "'Playfair Display', serif"}}>
                  {modal.member.name || "Name TBD"}
                </p>
                <p className="text-sm font-semibold" style={{color: modal.color}}>{modal.member.role}</p>
                {modal.member.program && (
                  <p className="text-xs mt-0.5" style={{color: "rgba(255,255,255,0.75)"}}>{modal.member.program}</p>
                )}
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mt-1" style={{background: `${modal.color}18`, color: modal.color, border: `1px solid ${modal.color}33`}}>
                  {modal.subteam}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{color: "rgba(255,255,255,0.88)", fontStyle: "italic"}}>
                {modal.member.quote || "Bio coming soon — check back later!"}
              </p>
              <div className="flex items-center gap-2 w-full">
                <div className="flex-1 h-px" style={{background: `${modal.color}22`}} />
                <span className="text-xs" style={{color: `${modal.color}66`}}>✦</span>
                <div className="flex-1 h-px" style={{background: `${modal.color}22`}} />
              </div>
              {modal.member.linkedin && (
                <a href={modal.member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{background: `${modal.color}18`, color: modal.color, border: `1px solid ${modal.color}33`}}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${modal.color}28`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = `${modal.color}18`}
                >
                  <Linkedin size={16} />
                </a>
              )}
              <button onClick={onClose} className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{background: `${modal.color}18`, color: modal.color, border: `1px solid ${modal.color}33`}}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${modal.color}28`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = `${modal.color}18`}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
