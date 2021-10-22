import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import React, { ReactElement, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atoms/modalAtom";
import StyledLink from "./Link";
import { LinkConstants } from "./LinkConstants";
import MobileDrawer from "./MobileDrawer";
import UserMenu from "./UserMenu";

export default function StickyNav(): ReactElement {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  console.log(session);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const navColor = useColorModeValue("gray.100", "#13181af2");
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (window.scrollY > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <HStack
      py="0.5em"
      mt="0"
      spacing={4}
      bg={isTop ? "transparent" : navColor}
      pos="fixed"
      top="0"
      zIndex={100}
      w="100%"
      justifyContent="flex-end"
      align="center"
      pr={4}
      transition="0.5s"
      transitionTimingFunction="ease-in"
      display={visible ? "flex" : "none"}
      boxShadow={isTop ? "none" : " 0px 0px 5px #000"}
    >
      <Text
        bgGradient="linear(to-l, #1574b4, #17e5ec)"
        bgClip="text"
        fontSize={["2xl", "4xl"]}
        fontWeight="extrabold"
        ml="1rem"
        cursor="pointer"
      >
        PERIODIZE
      </Text>

      <Spacer />

      <HStack
        spacing={4}
        fontSize="1.1em"
        display={{ base: "none", xl: "flex" }}
        pr="2rem"
      >
        {LinkConstants.map((link) => (
          <StyledLink href={link.href} title={link.title} key={link.href} />
        ))}
      </HStack>
      <Box display={{ base: "none", xl: "block" }}>
        {session && <UserMenu mobile={false} />}
      </Box>

      {!session && (
        <Button
          onClick={() => signIn()}
          colorScheme="teal"
          display={{ base: "none", xl: "inline-block" }}
        >
          Sign In
        </Button>
      )}
      <MobileDrawer />
    </HStack>
  );
}
