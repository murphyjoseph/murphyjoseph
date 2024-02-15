import { Text, Heading, Box, SimpleGrid, Container } from '@chakra-ui/react'
import { CardEvent } from '~/components/CardEvent/CardEvent'

export const SectionEvents = () => {

  return (
    <Container margin="0 auto" maxWidth="3xl">
      <Heading textAlign="center" mb={5}>Our Core Events</Heading>
      <Text textAlign="center" maxW="lg" mb={9} mr="auto" ml="auto">Our core events comprise of 2 monthly networking and coding events. We also are working on adding two hackathons a year.</Text>
      <SimpleGrid columns={[2, null]} spacingX={9} spacingY={9} alignItems="center">
        <CardEvent
          imageSrc="/events/event-code-and-brews.png"
          heading="Code + Brews"
          description="Occurs on the second Wednesday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
          linkEventbrite=''
          linkMeetup=''
          linkOther=''
        />
        <CardEvent
          imageSrc="/events/event-code-and-coffee.png"
          heading="Code & Coffee"
          description="Occurs on the first Saturday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
          linkEventbrite=''
          linkMeetup=''
          linkOther=''
        />
      </SimpleGrid>
    </Container>
  )
}
