import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Quote } from '~/components/Quote/Quote';

export const SectionQuotes = () => {

  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <Quote quote="I don't talk to my mama but I talk to my diary." />
      </SplideSlide>
      <SplideSlide>
        <Quote quote="'Twas I who stole from the cookie jar." />
      </SplideSlide>
    </Splide>
  )
}
