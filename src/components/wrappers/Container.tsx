import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent={props.justify ? props.justify : "flex-start"}
      h="100%"
      {...props}
    />
  );
};
