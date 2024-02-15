import { Box, Heading } from "@chakra-ui/react";

export const NavigationMain = () => {

  return (
    <Box as="nav" position="sticky" top="0" left="0" zIndex="1" background="white">
      <Box background="whiteAlpha.300" padding={3} boxShadow="base" mb={1}>
        <Heading textAlign="center" fontSize="4xl">Mitobyte</Heading>
      </Box>
    </Box>
  )
}
