import { Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface SectionIntroProps {
  title: string;
  text?: string;
  addBottomMargin?: boolean;
  showText?: boolean;
}

export const SectionIntro: FC<SectionIntroProps> = ({
  title,
  text,
  showText,
  addBottomMargin = true
}) => {
  return (
    <>
      <Heading
        textAlign="center"
        mb={addBottomMargin || showText ? 5 : 0}
      >
        {title}
      </Heading>
      {
        showText &&
        <Text
          textAlign="center"
          maxW="lg"
          mb={addBottomMargin ? 16 : 0}
          mr="auto"
          ml="auto"
        >
          {text}
        </Text>
      }
    </>
  );
}
