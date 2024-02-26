import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import { LogoEventbrite } from "../Logos/LogoEventbrite";
import { LogoMeetup } from "../Logos/LogoMeetup.tsx";
import { Link } from "@remix-run/react";

export interface CardEventProps {
  heading: string;
  description: string;
  imageSrc: string;
  linkMeetup?: string;
  linkEventbrite?: string;
  linkText?: string;
  linkTo?: string;
  showLink?: boolean;
}

export const CardEvent = ({
  heading,
  description,
  imageSrc,
  linkMeetup,
  linkEventbrite,
  linkText,
  linkTo,
  showLink = true,
}: CardEventProps) => {
  return (
    <Card maxW='md'>
      <CardHeader pb={2}>
        <Image
          objectFit='cover'
          src={imageSrc}
          alt='event image'
          maxHeight="60px"
          margin="0 auto"
          // pb={3}
        />
        {/* <Heading size='md'>{heading}</Heading> */}
      </CardHeader>

      <CardBody>
        {description}
      </CardBody>

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
        { showLink && (
          <Button as={Link} flex='1' variant='ghost' leftIcon={<InfoIcon />} to={linkTo}>
            {linkText}
          </Button>
          )
        }
      </CardFooter>
    </Card>
  )
}
