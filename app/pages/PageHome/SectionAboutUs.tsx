import { Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'
import { SectionAboutUsCard } from './SectionAboutUsCard'

export const SectionAboutUs = () => {

  return (
    <Box margin="0 auto">
      <Heading textAlign="center" mb={2}>Meet the Team</Heading>
      <Text maxW="lg" mb={4} mr="auto" ml="auto">an oil painting of a mitochondria who is also a software engineer</Text>
      <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' spacing={2} alignItems="center">
        <SectionAboutUsCard imageSrc="/armswideopen.png" imageAlt="person1" title="person1" description="i hate rust" linkGithub="" linkLinkedIn="" />
        <SectionAboutUsCard imageSrc="/armswideopen.png" imageAlt="person2" title="person2" description="i love java" linkGithub="" linkLinkedIn="" />
        <SectionAboutUsCard imageSrc="/armswideopen.png" imageAlt="person3" title="person3" description="i am cool" linkGithub="" linkLinkedIn="" />
        <SectionAboutUsCard imageSrc="/armswideopen.png" imageAlt="person4" title="person4" description="i dont know" linkGithub="" linkLinkedIn="" />
        <SectionAboutUsCard imageSrc="/armswideopen.png" imageAlt="person5" title="person5" description="i want taco" linkGithub="" linkLinkedIn="" />
      </SimpleGrid>
    </Box>
  )
}