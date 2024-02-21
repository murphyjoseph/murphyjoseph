import { Text, Heading, Box, SimpleGrid, Container, Button, Flex } from '@chakra-ui/react'
import { CardEvent } from '~/components/CardEvent/CardEvent'
import { LogoEventbrite } from '~/components/Logos/LogoEventbrite'
import { LogoMeetup } from '~/components/Logos/LogoMeetup.tsx'

export const SectionEvents = () => {

  return (
    <Box bg="gray.50" p="14">
      <Container margin="0 auto" maxWidth="3xl">
        <Heading textAlign="center" mb={5}>Our Core Events</Heading>
        <Text textAlign="center" maxW="lg" mb={9} mr="auto" ml="auto">Our core events comprise of 2 monthly networking and coding events. We also are working on adding two hackathons a year.</Text>
        <Flex margin="0 auto" mb={9} textAlign="center" justifyContent="center">
          <Button as="a" variant='outline' leftIcon={<LogoMeetup />} href="" mr={3}>
            Meetup
          </Button>
          <Button as="a" variant='outline' leftIcon={<LogoEventbrite />} href="">
            Eventbrite
          </Button>
        </Flex>
        <SimpleGrid columns={[3, null]} spacingX={9} spacingY={9} alignItems="stretch">
          <CardEvent
            imageSrc="/events/event-code-and-brews.png"
            heading="Code + Brews"
            // description="Occurs on the second Wednesday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            linkEventbrite=''
            linkMeetup=''
            linkOther=''
          />
          <CardEvent
            imageSrc="/events/event-code-and-coffee.png"
            heading="Code & Coffee"
            // description="Occurs on the first Saturday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            linkEventbrite=''
            linkMeetup=''
            linkOther=''
          />
          <CardEvent
            imageSrc="/events/event-hackreation.png"
            heading="Hackreation"
            // description="Our newest recurring event. Come to this event for focused hacking or working on person projects and show and tell at the end."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            linkEventbrite=''
            linkMeetup=''
            linkOther=''
          />
        </SimpleGrid>
      </Container>
    </Box>

  )
}
