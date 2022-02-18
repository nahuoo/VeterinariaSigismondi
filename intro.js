import { DivTitulo, DivBlack, Container } from "./styledIntro";
import gsap from "gsap";
import { useEffect } from "react";
export const Intro = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#startAnimation",
        start: "top top",
        scrub: 1,
        pin: true,
      },
      defaults: {
        ease: "expo.inOut",
        duration: 2,
      },
    });
    tl.fromTo(
      "#divBlack1",
      { x: "-100%", background: "black" },
      { x: "0%", background: "black" }
    );
    tl.fromTo(
      "#divBlack2",
      { x: "-100%", background: "black" },
      { x: "0%", background: "black" },
      "<0.5"
    );
    tl.fromTo(
      "#divBlack3",
      { x: "-100%", background: "black" },
      { x: "0%", background: "black" },
      "<0.4"
    );
     tl.fromTo(
       "#divBlack1",
       { x: "0%", y: 0 },
       { x: "100%" },
       "<0.8"
     );
     tl.fromTo(
       "#divBlack2",
       { x: "0%" },
       { x: "100%" },
       "<0.2"
     );
     tl.fromTo(
       "#divBlack3",
       { x: "0%" },
       { x: "100%" },
       "<0.2"
     );
    tl.fromTo(
      "#startAnimation",
      {
        background: "white",
        color: "white",
      },
      { background: "black"},
      "<0.9"
    )
    tl.fromTo(
      "#divDesign",
      { color: "gray", "clip-path": "circle(0% at 50% 50%)", background: 'black' },
      { color: 'white', "clip-path": "circle(100% at 50% 50%)" },
      '<1'
    );
    
  }, []);

  return (
    <Container id="startAnimation">
      <DivBlack id="divBlack1" />
      <DivBlack id="divBlack2" />
      <DivBlack id="divBlack3" />
      <DivTitulo id="divTitulo">
        <p>DOMINGO</p>
      </DivTitulo>
      <DivTitulo id="divDesign">
        <p>DESIGN</p>
      </DivTitulo>
    </Container>
  );
};
