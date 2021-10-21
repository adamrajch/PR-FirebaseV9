import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export const DarkModeSwitchIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const color = useColorModeValue("blue.600", "white");
  const hColor = useColorModeValue("blue.300", "blue.300");
  if (isDark) {
    return (
      <SunIcon
        onClick={toggleColorMode}
        cursor="pointer"
        w={7}
        h={7}
        _hover={{ transform: "translateY(-0.1em)", color: hColor }}
      />
    );
  }
  return (
    <MoonIcon
      onClick={toggleColorMode}
      cursor="pointer"
      w={7}
      h={7}
      _hover={{ transform: "translateY(-0.1em)", color: hColor }}
    />
  );
};
