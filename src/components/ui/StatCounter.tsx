import {useState, useEffect, useRef} from "react";

function useCountUp(target: number, duration = 1600, trigger = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (trigger === 0) return;
    setCount(0);
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) rafId = requestAnimationFrame(tick);
   };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
 }, [target, duration, trigger]);
  return count;
}

export default function StatCounter({value, suffix = "", label}: {value: number; suffix?: string; label: string}) {
  const ref = useRef<HTMLDivElement>(null);
  const triggerCount = useRef(0);
  const [trigger, setTrigger] = useState(0);
  const count = useCountUp(value, 1600, trigger);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        triggerCount.current += 1;
        setTrigger(triggerCount.current);
     }
   }, {threshold: 0.4});
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
 }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold tracking-tight" style={{fontFamily: "'Bricolage Grotesque', sans-serif", color: "#3b0764"}}>{count}{suffix}</p>
      <p className="text-xs font-semibold uppercase tracking-widest mt-1.5" style={{color: "rgba(109,40,217,0.6)"}}>{label}</p>
    </div>
  );
}
