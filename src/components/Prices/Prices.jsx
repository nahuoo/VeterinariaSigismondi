import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";
import { ActionButton } from "./ActionButton";
import { PricingCard } from "./PricingCard";

export const Prices = () => (
  <Box
    as="section"
    bg={useColorModeValue("gray.50", "gray.800")}
    py="14"
    px={{ base: "4", md: "8" }}
  >
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: "8", lg: "0" }}
      maxW="7xl"
      mx="auto"
      justifyItems="center"
      alignItems="center"
    >
      <PricingCard
        data={{
          name: "Vacunación",
          features: [
            "Prevención",
            "Antiparasitos",
            "Anti-rabica",
          ],
        }}
        icon={SiMicrosoft}
        button={
          <ActionButton variant="outline" borderWidth="2px">
          Solicitar Turno
          </ActionButton>
        }
      />
      <PricingCard
        zIndex={1}
        isPopular
        transform={{ lg: "scale(1.00)" }}
        data={{
          name: "Internación",
          features: [
            "Cirujias",
            "Anestesia",
            "Observación",
            "Cuidado",
          
          ],
        }}
        icon={SiHive}
        button={<ActionButton>Mas información...</ActionButton>}
      />
      <PricingCard
        data={{
          name: "Intervenciones",
          features: [
            "Cirujuas",
            "Transfuciónes",
            "Banco de Sangre",
          ],
        }}
        icon={SiMarketo}
      />
    </SimpleGrid>
  </Box>
);
