import { useState, useEffect, useRef } from "preact/hooks";
import type { FunctionComponent } from "preact";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: FunctionComponent<TypewriterProps> = ({
  text,
  speed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% is visible
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isVisible]);

  return (
    <span ref={elementRef}>
      {displayedText ? displayedText : <span class="hidden">{text}</span>}
    </span>
  );
};

export default Typewriter;
