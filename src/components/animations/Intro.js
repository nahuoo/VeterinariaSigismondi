import {
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";

export const Intro = () => {
    useEffect(()=>{
        let tl = gsap.timeline({
          defaults: {
            ease: "none",
            duration: 1.3,
          },
        });
        tl.fromTo(".hr", { width: "10px", left: '50%' }, { width: '100vw', left: '0%', opacity: 0 });
    tl.to(".box1", { y: "-100%", ease: "expo.inOut" });
     tl.to(
       ".box2",
       { y: "100%", ease: "expo.inOut" },
       "<"
     );
    },[])
  return (
    <>
      <Box
        className="hr"
        w={"full"}
        h={"1.7px"}
        background={"gray"}
        top={"50%"}
        pos="fixed"
        transform={"translate(-50, -50)"}
        zIndex={101}
      />
      <Flex
        className="box1"
        bg={"white"}
        w={"full"}
        h={"50vh"}
        pos="fixed"
        zIndex={100}
        justify={"end"}
        align={"center"}
        direction={"column"}
      >
        <Image src="/logovete.png" alt="LogoVeterinaria" marginRight={1.5} />
        <Box
          color={"rgba(159, 63, 9, 0.8)"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
        >
          CLINICA VETERINARIA
        </Box>
      </Flex>
      <Flex
        className="box2"
        bg={"white"}
        w={"full"}
        h={"50vh"}
        pos="fixed"
        top={"50%"}
        zIndex={100}
        justify={"center"}
        align={"start"}
      >
        <Box
          color={"rgba(159, 63, 9, 0.8)"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
        >
          SIGISMONDI
        </Box>
      </Flex>
    </>
  );
};
