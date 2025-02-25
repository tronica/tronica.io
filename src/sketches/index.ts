import { connections } from "./connections";
import type P5 from "p5";

export type SketchImplementation = (
  width: number,
  height: number,
  p5: P5,
) => any;

export const sketches = {
  connections: connections,
};

export default sketches;
