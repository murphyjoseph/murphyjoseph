import { chakra, Box, Heading } from "@chakra-ui/react";

export const NavigationCassette = () => {

  return (
    <Box 
      as="nav" 
      position="absolute" 
      right="0" 
      left="0" 
      margin="auto" 
      zIndex="1" 
      background="blackAlpha.800"
      width="25%"
      borderBottomRightRadius="md"
      borderBottomLeftRadius="md"
    >
      <Box padding={3}>
        <Heading textAlign="center" fontSize="lg">Joseph Murphy</Heading>
      </Box>
    </Box>
  )
}