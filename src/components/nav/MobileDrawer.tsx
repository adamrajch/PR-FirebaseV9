import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { ReactElement } from "react";
import { DarkModeSwitchIcon } from "../Chakra/DarkModeSwitchIcon";
import StyledLink from "./Link";
import { LinkConstants } from "./LinkConstants";
import UserMenu from "./UserMenu";
interface Props {}

export default function MobileDrawer({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { data: session } = useSession();
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
            <Flex
              justify="flex-start"
              align="center"
              flexDir="column"
              h="100%"
              py={16}
            >
              <VStack spacing={6} as="ul">
                {session && (
                  <Box py={2}>
                    <UserMenu mobile={true} />
                    <Text>{session.user.username}</Text>
                  </Box>
                )}

                <DarkModeSwitchIcon />
                {LinkConstants.map((link) => (
                  <StyledLink
                    href={link.href}
                    title={link.title}
                    key={link.href}
                  />
                ))}
                {!session && (
                  <Button onClick={() => signIn()} colorScheme="teal" w="full">
                    Sign In
                  </Button>
                )}
                {session && (
                  <Button
                    onClick={() => signOut()}
                    colorScheme="teal"
                    w="full"
                    rightIcon={<ExternalLinkIcon />}
                  >
                    Sign Out
                  </Button>
                )}
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
