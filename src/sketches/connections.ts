import type P5 from "p5";
import type { SketchImplementation } from ".";

export const connections: SketchImplementation = (w, h, p5) => {
  let dotCount = 100;
  let dots: any[] = [];

  p5.setup = () => {
    p5.createCanvas(w, h);
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        vx: p5.random(-0.5, 0.5),
        vy: p5.random(-0.5, 0.5),
      });
    }
  };

  p5.draw = () => {
    p5.clear();
    for (let i = 0; i < dotCount; i++) {
      const dot = dots[i];
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > p5.width) {
        dot.vx *= -1;
      }
      if (dot.y < 0 || dot.y > p5.height) {
        dot.vy *= -1;
      }

      let connections = 0;
      for (let j = 0; j < dotCount; j++) {
        if (i === j) continue;
        if (connections >= 2) break;

        const other = dots[j];
        const distance = p5.dist(dot.x, dot.y, other.x, other.y);

        if (distance > 70) {
          continue;
        }

        p5.fill(50);
        p5.noStroke();
        p5.ellipse(dot.x, dot.y, 5, 5);

        p5.stroke(50);
        p5.noFill();
        p5.line(dot.x, dot.y, other.x, other.y);
        connections++;
      }
    }
  };
};
