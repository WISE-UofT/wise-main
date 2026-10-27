import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Menu, X, ChevronDown} from "lucide-react";
import {logoGradient} from "@/data/assets";
import {PAGE_TO_PATH} from "@/data/content";

function scrollToOpportunities(pathname: string, navigate: ReturnType<typeof useNavigate>) {
  if (pathname === "/") {
    document.querySelector("#opportunities")?.scrollIntoView({behavior: "smooth"});
 } else {
    navigate("/", {state: {scrollTo: "opportunities"}});
 }
}

export default function Nav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const navBtns: [string, string][] = [
    ["WISE Events", "/events"],
    ["Initiatives", "/initiatives"],
    ["Conference", "/conference"],
    ["Stories of WISE", "/stories"],
  ];

  const isAboutActive = pathname === "/team" || pathname === "/sponsors";
  const onOpportunities = () => {
    setMenuOpen(false);
    scrollToOpportunities(pathname, navigate);
 };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(248,242,255,0.28)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "0.5px solid rgba(255,255,255,0.5)",
     }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link to={PAGE_TO_PATH.home} className="flex-shrink-0">
          <img src={logoGradient} alt="WISE UofT" loading="lazy" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {/* About dropdown */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button
              className="flex items-center gap-1 text-sm font-medium py-1 relative"
              style={{color: "#281b71"}}
            >
              About
              <motion.span animate={{rotate: aboutOpen ? 180 : 0}} transition={{duration: 0.2}}>
                <ChevronDown size={13} />
              </motion.span>
              {isAboutActive && (
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{background: "#5b21b6"}}
                />
              )}
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{opacity: 0, y: 6, scale: 0.97}} animate={{opacity: 1, y: 0, scale: 1}} exit={{opacity: 0, y: 6, scale: 0.97}} transition={{duration: 0.16}}
                  className="absolute top-full left-0 mt-3 w-44 rounded-xl overflow-hidden"
                  style={{background: "rgba(250,246,255,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(91,33,182,0.14)", boxShadow: "0 12px 40px rgba(91,33,182,0.16)"}}
                >
                  {([["Our Team", "/team"], ["Our Sponsors", "/sponsors"]] as [string, string][]).map(([label, path]) => (
                    <Link key={path} to={path} onClick={() => setAboutOpen(false)}
                      className="w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-2 group"
                      style={{color: "#281b71"}}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(91,33,182,0.06)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{background: "#7c3aed"}} />
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Page nav buttons */}
          {navBtns.map(([label, path]) => (
            <Link key={path} to={path}
              className="relative text-sm font-medium group py-1 whitespace-nowrap"
              style={{color: "#281b71"}}
            >
              {label}
              {pathname === path ? (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{background: "#5b21b6"}} />
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-px rounded-full group-hover:w-full transition-all duration-250" style={{background: "#5b21b6"}} />
              )}
            </Link>
          ))}

          {/* Opportunities */}
          <button onClick={onOpportunities}
            className="relative text-sm font-medium group py-1 whitespace-nowrap"
            style={{color: "#281b71"}}
          >
            Opportunities
            <span className="absolute bottom-0 left-0 w-0 h-px rounded-full group-hover:w-full transition-all duration-250" style={{background: "#5b21b6"}} />
          </button>
        </nav>

        <motion.button
          onClick={onOpportunities}
          whileHover={{scale: 1.04}} whileTap={{scale: 0.97}}
          className="hidden lg:inline-flex px-4 py-2 text-sm font-semibold rounded-lg text-white"
          style={{background: "#5b21b6"}}
        >
          Join WISE
        </motion.button>

        <button className="lg:hidden p-2" style={{color: "#281b71"}} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} transition={{duration: 0.2}}
            className="lg:hidden px-6 pb-6 pt-4 flex flex-col gap-1"
            style={{background: "rgba(14,2,40,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.08)"}}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{color: "rgba(255,255,255,0.3)"}}>About</p>
            {([["Our Team", "/team"], ["Our Sponsors", "/sponsors"]] as [string, string][]).map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)} className="text-left py-2.5 text-sm font-medium pl-3" style={{color: "rgba(255,255,255,0.78)"}}>{label}</Link>
            ))}
            <div className="h-px my-2" style={{background: "rgba(255,255,255,0.08)"}} />
            {navBtns.map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)} className="text-left py-2.5 text-sm font-medium" style={{color: "rgba(255,255,255,0.78)"}}>{label}</Link>
            ))}
            <button onClick={onOpportunities} className="text-left py-2.5 text-sm font-medium" style={{color: "rgba(255,255,255,0.78)"}}>Opportunities</button>
            <button
              onClick={onOpportunities}
              className="mt-3 px-4 py-2.5 text-sm font-semibold rounded-lg text-center text-white" style={{background: "#5b21b6"}}
            >
              Join WISE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
