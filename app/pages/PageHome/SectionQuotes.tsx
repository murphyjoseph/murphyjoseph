import { Box } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Quote } from '~/components/Quote/Quote';

export const SectionQuotes = () => {

  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <Box maxW="350px" margin="0 auto">
          <Quote
             author="Anonymous"
             quote="I don't talk to my mama but I talk to my diary."
           />
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box maxW="350px" margin="0 auto">
          <Quote
            author="Anonymous"
            quote="'Twas I who stole from the cookie jar."
          />
        </Box>
      </SplideSlide>
    </Splide>
  )
}
