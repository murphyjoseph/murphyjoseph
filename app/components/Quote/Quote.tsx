import { Heading } from "@chakra-ui/react";
import { FC } from "react"

export interface QuoteProps {
  quote: string;
}

export const Quote: FC<QuoteProps> = ({
  quote,
}) => {
  return (
    <Heading>
      "{quote}"
    </Heading>
  )
}
