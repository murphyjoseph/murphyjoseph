import { Box, Heading, Image } from "@chakra-ui/react"

export const SectionHero = () => {

  return (
    <Box
      height={{base: '300px', md: '400px', lg: '500px'}}
      width="100%"
      position="relative"
      overflow="hidden"
    >
      <Box
        bg="hsl(0,0%,0%, 0.75)"
        position="absolute"
        width="100%"
        height="100%"
        zIndex="1"
        >
        <Heading
          position="absolute"
          top="50%"
          right="50%"
          transform="translate(50%, -50%)"
          color="white"
          textAlign="center"
          fontSize="6xl"
        >
            Let's Build Together
        </Heading>
      </Box>
      <Image
        alt="serious banner"
        src="./backdrop-min.jpeg"
        position="absolute"
        top={{base: '0', md: '-100px', lg: '-150px'}}
        transform="translateX(50%, -50%)"
        width="100%"
      />
    </Box>
  )
}
