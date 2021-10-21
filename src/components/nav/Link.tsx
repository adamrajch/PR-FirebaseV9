import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { ReactElement } from "react";
interface Props {
  href: string;
  title: string;
}

export default function StyledLink({ href, title }: Props): ReactElement {
  return (
    <Link as={NextLink} href={href}>
      {title}
    </Link>
  );
}
