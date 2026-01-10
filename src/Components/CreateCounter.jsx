import { useEffect, useRef, useState } from "react";

const Counter = ({ target, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  /*  Detect when component enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /*  Counting logic */
  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startCounting, target, duration]);

  return (
    <h2 ref={counterRef} className="text-3xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};

export default Counter;
