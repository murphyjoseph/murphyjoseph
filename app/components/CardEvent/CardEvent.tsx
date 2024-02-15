import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Link, Image } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import { LogoEventbrite } from "../Logos/LogoEventbrite";
import { LogoMeetup } from "../Logos/LogoMeetup.tsx";

export interface CardEventProps {
  heading: string;
  description: string;
  imageSrc: string;
  linkMeetup: string;
  linkEventbrite: string;
  linkOther: string;
}

export const CardEvent = ({
  heading,
  description,
  imageSrc,
  linkMeetup,
  linkEventbrite,
  linkOther,
}: CardEventProps) => {
  return (
    <Card maxW='md'>
      <CardHeader pb={2}>
        <Heading size='md'>{heading}</Heading>
      </CardHeader>
      <CardBody>
        {description}
      </CardBody>
      <Image
        objectFit='cover'
        src={imageSrc}
        alt='event image'
        padding={4}
      />
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        columnGap={1}
        rowGap={1}
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button as="a" flex='1' variant='ghost' leftIcon={<LogoMeetup />} href={linkMeetup}>
          Meetup
        </Button>
        <Button as="a" flex='1' variant='ghost' leftIcon={<LogoEventbrite />} href={linkEventbrite}>
          Eventbrite
        </Button>
        {/* <Link as={Button} flex='1' variant='ghost' leftIcon={<InfoIcon />} href={linkOther}>
          Other
        </Link> */}
      </CardFooter>
    </Card>
  )
}
