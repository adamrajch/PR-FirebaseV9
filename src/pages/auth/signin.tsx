import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import React, { ReactElement } from "react";

export default function SignIn({ providers }: any): ReactElement {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
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
