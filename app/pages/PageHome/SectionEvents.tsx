import { Text, Heading, Box, SimpleGrid, Container, Button, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CardEvent } from '~/components/CardEvent/CardEvent'
import { LogoEventbrite } from '~/components/Logos/LogoEventbrite'
import { LogoMeetup } from '~/components/Logos/LogoMeetup.tsx'
import { Wrapper, WrapperProps } from '~/components/Wrapper/Wrapper'

export interface SectionEventsProps extends Omit<WrapperProps, 'children'> {}

export const SectionEvents: FC<SectionEventsProps> = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {

  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Heading textAlign="center" mb={5}>Our Core Events</Heading>
      <Text textAlign="center" maxW="lg" mb={6} mr="auto" ml="auto">Our core events comprise of 2 monthly networking and coding events. We also are working on adding two hackathons a year.</Text>
      <Flex margin="0 auto" mb={14} textAlign="center" justifyContent="center">
        <Button as="a" variant='outline' leftIcon={<LogoMeetup />} mr={3} href="https://www.meetup.com/milwaukee-code-and-coffee/events/">
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
          linkText='Learn More >'
          linkTo='/codeandbrews'
        />
        <CardEvent
          imageSrc="/events/event-code-and-coffee.png"
          heading="Code & Coffee"
          // description="Occurs on the first Saturday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          linkText='Learn More >'
          linkTo='/codeandcoffee'
        />
        <CardEvent
          imageSrc="/events/event-hackreation-big.png"
          heading="Hackreation"
          // description="Our newest recurring event. Come to this event for focused hacking or working on person projects and show and tell at the end."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          linkText='Learn More >'
          linkTo='/hackreation'
        />
      </SimpleGrid>
    </Wrapper>

  )
}
