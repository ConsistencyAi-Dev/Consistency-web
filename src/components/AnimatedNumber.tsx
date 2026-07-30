"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  startValue?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  startValue = 0,
  prefix = "",
  suffix = "",
  className = "",
  duration = 2000,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    if (isInView) {
      const startTime = performance.now();
      let animationFrameId: number;
      
      const updateNumber = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentNumber = Math.floor(startValue + easeProgress * (value - startValue));
        
        setDisplayValue(currentNumber);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateNumber);
        } else {
          setDisplayValue(value);
        }
      };
      
      animationFrameId = requestAnimationFrame(updateNumber);
      return () => cancelAnimationFrame(animationFrameId);
    } else {
      setDisplayValue(startValue);
    }
  }, [isInView, value, startValue, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
