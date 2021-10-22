import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import React, { ReactElement } from "react";
import { Container } from "../../components/wrappers/Container";

export default function SignIn({ providers }: any): ReactElement {
  return (
    <Container justify="center">
      <Stack flexDir="column" align="center" spacing={4}>
        <Text
          bgGradient="linear(to-l, #1574b4, #17e5ec)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          ml="1rem"
          cursor="pointer"
        >
          Sign In
        </Text>
        {Object.values(providers).map((provider) => (
          <Box key={provider.name}>
            <Button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              colorScheme="cyan"
            >
              Sign in with {provider.name}
            </Button>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
