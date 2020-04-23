import "./styles/main.scss";
import * as p5 from "p5";

let a = (aa) => {
  let colors = [
    "#dddae8",
    "#a4bcc2",
    "#779fb5",
    "#56b093",
    "#96a480",
    "#9ab9ad",
    "#2a514d",
    "#d9ea9a",
    "#a09958",
    "#c58b68",
  ];
  let qouteInsert = document.querySelector(".quote");
  let quotes = [
    "&#182; alone, i am nothing. i have nothing.we have power.but we will never know it,we will never see it work.unless we come together to make it work.",
    "&#182; true, I used to see a lot of hope. I saw men tear down the veils behind which the truth had been hidden. But then the same men, when they have power in their hands at last, began to find the veils useful.",
  ];
  qouteInsert.innerHTML = `<p>${
    quotes[Math.floor(Math.random() * quotes.length)]
  }</p>`;

  aa.setup = () => {
    let w = aa.windowWidth / 2;
    let h = aa.windowHeight;
    aa.createCanvas(w, h);
    aa.background(colors[Math.floor(Math.random() * colors.length)]);
    aa.stroke(colors[Math.floor(Math.random() * colors.length)]);
    aa.strokeWeight(5);
    for (let i = 0; i < 40; i++) {
      let noiseVal = aa.noise(Math.random() * h, Math.random() * w);
      aa.line(
        Math.random() * w,
        Math.random() * h,
        i / Math.random(50),
        Math.random() * w
      );
      aa.point(Math.random() * w, Math.random() * h);
      aa.angleMode(aa.DEGREES);
      aa.rotate(35 + i);
    }
  };

  aa.draw = () => {};

  aa.windowResized = () => {
    aa.resizeCanvas(aa.windowWidth / 2, aa.windowHeight);
    aa.setup();
  };
};
const P5 = new p5(a);
