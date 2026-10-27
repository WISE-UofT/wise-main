// React components 
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

// Components 
import Nav from "@/components/Nav";
import HomePage from "@/pages/HomePage";
import OurTeamPage from "@/pages/OurTeamPage";
import OurSponsorsPage from "@/pages/OurSponsorsPage";
import EventsPage from "@/pages/EventsPage";
import InitiativesPage from "@/pages/InitiativesPage";
import ConferencePage from "@/pages/ConferencePage";
import StoriesPage from "@/pages/StoriesPage";
import {pageBg, heroBg} from "@/data/assets";

// Manages window scroll position on route changes, scrolling to top by default or to specifc sections on redirect.
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as {scrollTo?: string} | null;
    if (location.pathname === "/" && state?.scrollTo) {
      // Cross-page "Opportunities" request: wait for HomePage to mount, then scroll
      const t = setTimeout(() => {
        document.querySelector("#opportunities")?.scrollIntoView({behavior: "smooth"});
        // Clear router state so back/forward doesn't re-trigger the scroll
        window.history.replaceState({}, "");
     }, 350);
      return () => clearTimeout(t);
   }
    window.scrollTo({top: 0, behavior: "instant" as ScrollBehavior});
 }, [location.pathname, location.state]);

  return null;
}

// The main layout shell that manages dynamic page backgrounds, mobile navigation state, and route rendering.
function Shell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";   // homepage url 

  // Close the mobile menu on every route change
  useEffect(() => {
    setMenuOpen(false);
 }, [location.pathname]);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundImage: `url(${isHome ? heroBg : pageBg})`,
        backgroundSize: "130% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "#270b4f", // fallback color under the image
     }}
     // Subpage routes:
    >
      <ScrollManager />              
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/sponsors" element={<OurSponsorsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

// Top-level root function to enable all client side rioutes
export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
