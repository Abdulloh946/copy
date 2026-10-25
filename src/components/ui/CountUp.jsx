import { useEffect, useRef, useState } from "react";

// "10,000$+" -> animates the 10000 and keeps the "$+" around it
function CountUp({ value, duration = 1600 }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const [skipAnimation] = useState(
    () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
  );
  const [current, setCurrent] = useState(skipAnimation ? target : 0);
  const ref = useRef(null);

  useEffect(() => {
    if (!match || skipAnimation) return;
    const node = ref.current;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, skipAnimation]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {match[1]}
      {current.toLocaleString("en-US")}
      {match[3]}
    </span>
  );
}

export default CountUp;
