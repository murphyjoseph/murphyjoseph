import { Heading, Avatar, Box, SimpleGrid } from '@chakra-ui/react'

export const SectionSponsors = () => {

  return (
    <Box maxW="lg" margin="0 auto">
      <Heading textAlign="center" mb={4}>Sponsors</Heading>
      <SimpleGrid templateColumns='repeat(auto-fill, minmax(150px, 1fr))' spacing={2} >
        <Avatar size="2xl" src="/armswideopen.png" />
        <Avatar size="2xl" src="/armswideopen.png" />
        <Avatar size="2xl" src="/armswideopen.png" />
      </SimpleGrid>
    </Box>
  )
}