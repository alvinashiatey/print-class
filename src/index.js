import "./styles/main.scss";
import * as p5 from "p5";

let a = (aa) => {
  let w = aa.windowWidth / 2;
  let h = aa.windowHeight;
  aa.setup = () => {
    aa.createCanvas(w, h);
  };

  aa.draw = () => {
    aa.background("rgba(255,255,250,1.0)");

    aa.stroke("#a97");
    for (let i = 0; i < 300; i++) {
      let noiseVal = aa.noise(Math.random() * h, Math.random() * w);
      aa.line(
        Math.random() * h,
        Math.random() * w,
        noiseVal,
        i / Math.random(50)
      );
      aa.point(Math.random() * w, Math.random() * h);
      aa.angleMode(aa.DEGREES);
      aa.rotate(2);
    }
  };

  aa.windowResized = () => {
    aa.resizeCanvas(aa.windowWidth / 2, aa.windowHeight);
  };
};
const P5 = new p5(a);
