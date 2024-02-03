import { Box, Image } from "@chakra-ui/react"

export const SectionHeroCassette = () => {

  return (
    <Box
      height="75vh"
      width="100%"
      position="relative"
      bg="orange.50"
    >
      <Box
        height="100%"
        margin={7}
        borderRadius="md"
        bg="blackAlpha.700"
        position="relative"
      >
        <Box
          borderRadius="full"
          position="absolute"
          top="50%"
          left="20%"
          background="blackAlpha.600"
          height="250px"
          width="250px"
          transform="translate(-50%, -50%)"
        />

      </Box>
    </Box>
  )
}