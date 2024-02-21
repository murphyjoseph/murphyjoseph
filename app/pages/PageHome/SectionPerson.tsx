import { FC } from "react"
import { FiftyFifty, FiftyFiftyProps } from "~/components/FiftyFifty/FiftyFifty"
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper"

export interface SectionPersonProps extends FiftyFiftyProps, Omit<WrapperProps, 'children'> {}

export const SectionPerson: FC<SectionPersonProps> = ({
  imageSrc,
  imageAlt,
  title,
  text,
  swapOrder,
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
      <FiftyFifty
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        title={title}
        text={text}
        swapOrder={swapOrder}
      />
    </Wrapper>
  )
}
