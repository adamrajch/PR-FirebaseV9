import { Box, HStack } from "@chakra-ui/layout";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function SocialBar(): ReactElement {
  const hColor = useColorModeValue("blue.300", "blue.300");
  return (
    <HStack
      align="center"
      justify="center"
      spacing={4}
      pt={12}
      display={{
        base: "inline-block",
        xl: "none",
      }}
    >
      <Box
        as="a"
        href="https://github.com/adamrajch"
        target="_blank"
        cursor="pointer"
        _hover={{
          transform: "translateY(-0.2em)",
          color: hColor,
        }}
      >
        <Icon
          as={AiOutlineGithub}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{
            transform: "translateY(-0.2em)",
            color: hColor,
          }}
        />
      </Box>
      <Box
        as="a"
        href="https://www.linkedin.com/in/adamrajchwald/"
        target="_blank"
        cursor="pointer"
      >
        <Icon
          as={AiOutlineLinkedin}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{
            transform: "translateY(-0.2em)",
            color: hColor,
          }}
        />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/tendon_mcgee/?hl=en"
        target="_blank"
        cursor="pointer"
      >
        <Icon
          as={AiOutlineInstagram}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{
            transform: "translateY(-0.2em)",
            color: hColor,
          }}
        />
      </Box>
    </HStack>
  );
}
