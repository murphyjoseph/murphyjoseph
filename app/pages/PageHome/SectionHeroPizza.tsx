import { Box, Image } from "@chakra-ui/react"

export const SectionHeroPizza = () => {

  return (
    <Box
      height="100vh"
      width="100%"
      position="relative"
    >
      <Box 
        background="linear-gradient(to bottom, #ff9999, #cc0000)"
        height="50vh"
        width="80%"
      >

      </Box>
      <Image 
        // todo: dont want image loading via css
        // backgroundImage="url('/armswideopen.png')"
        backgroundRepeat="repeat"
        backgroundSize="contain"
        alt="serious banner" 
        height="300px" 
        src="/armswideopen.png"
        position="absolute"
        bottom="0"
        transform="translateX(50%, -50%)"
        // width="100%" 
      />
    </Box>
  )
}