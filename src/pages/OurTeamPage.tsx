import {useState} from "react";     
import {motion} from "motion/react";

import {TEAM_STRUCTURE, type ModalState, type TeamRole} from "@/data/content";
import {PresidentsGroupCard, MemberCard, TeamModal} from "@/components/TeamCards";


export default function OurTeamPage() {
  const [modal, setModal] = useState<ModalState>(null);

  const openModal = (member: TeamRole, subteam: string, color: string, isVP?: boolean) => {
    setModal({member, subteam, color, isVP});
 };

  return (
    <>
      <TeamModal modal={modal} onClose={() => setModal(null)} />
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="relative min-h-screen pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <motion.div initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{delay: 0.05}}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
              style={{background: "rgba(91,33,182,0.1)", border: "1px solid rgba(91,33,182,0.25)", color: "#5b21b6"}}
            > 
              2026 – 2027     {/* Year */}
            </motion.div>
            <motion.h1 initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
              style={{fontFamily: "'Playfair Display', serif", color: "#1a0a3d"}}
            >
              Meet Our Team
            </motion.h1>
            <motion.p initial={{opacity: 0, y: 12}} animate={{opacity: 1, y: 0}} transition={{delay: 0.16}}
              className="text-base max-w-xl mx-auto font-medium"
              style={{color: "rgba(26,10,61,0.62)", lineHeight: 1.75}}
            >
              The incredible people who show up every day to make WISE the community it is.
              <br />
              <span className="text-sm" style={{color: "rgba(26,10,61,0.42)"}}>Click any card to learn more.</span>
            </motion.p>
          </div>
          {TEAM_STRUCTURE.map((team) => (
            <motion.div key={team.name} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5}} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0 shadow-lg" style={{background: team.color, boxShadow: `0 0 12px ${team.color}88`}} />
                <h2 className="text-sm font-bold uppercase tracking-[0.18em]" style={{color: "#1a0a3d"}}>
                  {team.name}
                </h2>
                <div className="flex-1 h-px" style={{background: `linear-gradient(to right, ${team.color}44, transparent)`}} />
              </div>
              {team.isPresidents ? (
                <div className="max-w-2xl mx-auto">
                  <PresidentsGroupCard members={team.members} color={team.color} sharedQuote={team.sharedQuote} onSelect={(m) => openModal(m, team.name, team.color)} />
                </div>
              ) : (
                <div className="space-y-4">
                  {team.vps && team.vps.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 max-w-[420px]">
                      {team.vps.map((vp, vi) => (
                        <MemberCard key={vi} member={vp} color={team.color} light={team.light} border={team.border} isVP onClick={() => openModal(vp, team.name, team.color, true)} />
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {team.members.map((m, mi) => (
                      <MemberCard key={mi} member={m} color={team.color} light="rgba(255,255,255,0.52)" border="rgba(26,10,61,0.10)" onClick={() => openModal(m, team.name, team.color)} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
