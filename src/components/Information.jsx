import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Img,
} from "@chakra-ui/react";
import * as React from "react";

export const Information = () => (
  <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
    <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" mt="6">
          &ldquo;Hacemos hasta lo imposible por preservar la salud de todas las mascotas que lleguen a nuestra clinica,
          junto con nuestro banco de sangre podemos tratar a tiempo los animales críticos.&rdquo;
        </Text>
        <Quotee
          name="Andréa Sigismondi"
          jobTitle="Médico Veterinario"
          imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          mt="8"
        />
      </Flex>
      <HStack
        justify="center"
        spacing="4"
        mt="8"
        color={useColorModeValue("gray.300", "gray.600")}
      >
        <Circle w="3" h="3" bg="purple.500" />
      </HStack>
    </Box>
  </Box>
);

export const Quotee = (props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props
  return (
    <Box {...boxProps}>
      <Img src={imageSrc} mx="auto" objectFit="cover" w="16" h="16" rounded="full" />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}
