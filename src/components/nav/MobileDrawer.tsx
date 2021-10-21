import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { DarkModeSwitchIcon } from "../Chakra/DarkModeSwitchIcon";
import StyledLink from "./Link";
import { LinkConstants } from "./LinkConstants";
interface Props {}

export default function MobileDrawer({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon
        h={8}
        w={8}
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "inline-block", xl: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex justify="center" align="center" flexDir="column" h="100%">
              <VStack spacing={4} as="ul">
                <DarkModeSwitchIcon />
                {LinkConstants.map((link) => (
                  <StyledLink
                    href={link.href}
                    title={link.title}
                    key={link.href}
                  />
                ))}
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
