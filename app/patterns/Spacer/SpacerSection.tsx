import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface SpacerSectionProps {
  children: React.ReactNode
}

export const SpacerSection: FC<SpacerSectionProps> = ({ children }) => {
  return (
    <Box marginTop={16} marginBottom={16}>
      {children}
    </Box>
  )
}