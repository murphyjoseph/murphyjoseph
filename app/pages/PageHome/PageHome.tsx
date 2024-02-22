import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionMission } from "~/pages/PageHome/SectionMission";
import { SpacerSection } from "~/components/Spacer/SpacerSection";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEvents } from "./SectionEvents";
import { SectionPersons } from "./SectionPersons";
import { SectionQuotes } from "./SectionQuotes";
import { Wrapper } from "~/components/Wrapper/Wrapper";

export const PageHome = () => {

  return (
    <>
      <NavigationMain />
      <SectionHero />
      <SpacerSection>
        <SectionMission />
      </SpacerSection>
      <SpacerSection>
        <SectionEvents />
      </SpacerSection>
      <SectionPersons
        maxWidth="4xl"
      />
      <Wrapper
        paddingTop={20}
        paddingBottom={20}
        maxWidth="2xl"
      >
        <SectionQuotes />
      </Wrapper>
      <SpacerSection>
        <SectionSponsors />
      </SpacerSection>
    </>
  )
}
