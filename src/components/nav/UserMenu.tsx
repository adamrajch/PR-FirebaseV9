import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { ReactElement } from "react";
import StyledLink from "./Link";

export default function UserMenu({
  mobile,
}: {
  mobile: boolean;
}): ReactElement {
  const { data: session } = useSession();
  return (
    <Box py={mobile && 2}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isactive={isOpen ? "true" : "false"}>
              <Avatar
                size={mobile ? "xl" : "sm"}
                name={session.user.name ? session.user.name : "John Doe"}
                src={session.user.image ? session.user.image : ""}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <StyledLink href="/dashboard" title="Dashboard" />
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
}
