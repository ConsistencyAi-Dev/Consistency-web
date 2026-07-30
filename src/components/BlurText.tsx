"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
}

export default function BlurText({
  text,
  delay = 200,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
  }: BlurTextProps) {
  const [elements, setElements] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (animateBy === "words") {
      setElements(text.split(" "));
    } else {
      setElements(text.split(""));
    }
  }, [text, animateBy]);

  const getInitial = () => {
    switch (direction) {
      case "top":
        return { opacity: 0, filter: "blur(10px)", y: -20 };
      case "bottom":
        return { opacity: 0, filter: "blur(10px)", y: 20 };
      case "left":
        return { opacity: 0, filter: "blur(10px)", x: -20 };
      case "right":
        return { opacity: 0, filter: "blur(10px)", x: 20 };
      default:
        return { opacity: 0, filter: "blur(10px)", y: -20 };
    }
  };

  return (
    <div className={className} ref={ref}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={getInitial()}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0, x: 0 } : getInitial()}
          transition={{
            duration: 0.8,
            delay: delay / 1000 + i * (animateBy === "words" ? 0.1 : 0.03),
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginRight: animateBy === "words" && i < elements.length - 1 ? "0.25em" : "0" }}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </div>
  );
}
