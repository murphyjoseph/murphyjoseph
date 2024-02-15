import { Box, Image } from "@chakra-ui/react"

export const SectionHero = () => {

  return (
    <Box
      height={{base: '300px', md: '400px', lg: '500px'}}
      width="100%"
      position="relative"
      overflow="hidden"
    >
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
