import { Container, Heading, Text } from "@chakra-ui/react"
import { FC } from "react"
import { FiftyFifty } from "~/components/FiftyFifty/FiftyFifty"
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper"

export interface SectionPersonsProps extends Omit<WrapperProps, 'children'> {}

export const SectionPersons: FC<SectionPersonsProps> = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <Container maxW="md">
        <Heading textAlign="center" mb="3">
          About Us
        </Heading>
        <Text textAlign="center" mb="7">We are software engineers in the Milwaukee community, looking to connect with you!</Text>
      </Container>
      <Container
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      >
        <FiftyFifty
          imageSrc="/people/person1.webp"
          imageAlt="A person"
          title="Person Personhood"
          text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          swapOrder={false}
        />
      </Container>
      <Container
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      >
        <FiftyFifty
          imageSrc="/people/person1.webp"
          imageAlt="A person"
          title="Person Personhood"
          text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          swapOrder={true}
        />
      </Container>
    </Wrapper>
  )
}
