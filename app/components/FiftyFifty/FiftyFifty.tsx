import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react"
import { FC } from "react";

export interface FiftyFiftyProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  swapOrder?: boolean;
}

export const FiftyFifty: FC<FiftyFiftyProps> = ({
  imageSrc,
  imageAlt,
  title,
  text,
  swapOrder = false,
}) => {
  return (
    <Flex columnGap={10}>
      <Box flex={1} order={swapOrder ? 2 : 1}>
        <Image src={imageSrc} alt={imageAlt} borderRadius="full" />
      </Box>
      <Box flex={2} order={swapOrder ? 1 : 2}>
        <Heading mb="2">{title}</Heading>
        <Text>{text}</Text>
      </Box>
    </Flex>
  )
}
