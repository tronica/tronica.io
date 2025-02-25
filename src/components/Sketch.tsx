import { useEffect, useRef } from "preact/hooks";
import sketches from "../sketches";
import P5 from "p5";

interface SketchProps {
  name: keyof typeof sketches;
}

export default function Sketch({ name }: SketchProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketch = useRef<P5>(null);
  const id = useRef((Math.random() * 1000000).toFixed(0).toString());

  useEffect(() => {
    if (!containerRef.current) return;

    const implementation = sketches[name];

    const container = containerRef.current;
    const width = container?.clientWidth ?? 500;
    const height = container?.clientHeight ?? 500;

    sketch.current = new P5((p5: P5) => {
      implementation(width, height, p5);
    }, containerRef.current);
  }, [name]);

  return (
    <div
      id={id.current}
      ref={containerRef}
      className="absolute w-full h-full left-[50%] top-[50%] transform [&_canvas]:translate-x-[-50%] [&_canvas]:translate-y-[-50%]"
    />
  );
}
