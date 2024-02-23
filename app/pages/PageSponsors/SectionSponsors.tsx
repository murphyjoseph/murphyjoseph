import { Heading, Image, Box, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'
import { Wrapper, WrapperProps } from '~/components/Wrapper/Wrapper'

const sponsors = [
  '/sponsors/logo-caredirect.png',
  '/sponsors/logo-codeworks.jpg',
  '/sponsors/logo-expansive.png',
  '/sponsors/logo-indeed.png',
  '/sponsors/logo-new-resources.png',
  '/sponsors/logo-skygen.jpg',
  '/sponsors/logo-vba.jpg',
  '/sponsors/logo-wickid-cool.png',
  '/sponsors/logo-form-labs.jpg',
  '/sponsors/logo-roof-marketplace.png',
  '/sponsors/logo-pkware.png',
]

export interface SectionSponsorsProps extends Omit<WrapperProps, 'children'> {}

export const SectionSponsors: FC<SectionSponsorsProps> = ({
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
      <Heading textAlign="center" mb={10}>Sponsors</Heading>
      <SimpleGrid columns={[2, null, 3]} spacingX={9} spacingY={9} >
        {
          sponsors.map((sponsor) => (
            <Image key={sponsor} maxWidth="150px" borderRadius="0" src={sponsor} alignSelf="center" />
          ))
        }
      </SimpleGrid>
    </Wrapper>

  )
}
