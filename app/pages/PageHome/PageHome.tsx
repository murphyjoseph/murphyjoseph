import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionMission } from "~/pages/PageHome/SectionMission";
import { SpacerSection } from "~/patterns/Spacer/SpacerSection";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEvents } from "./SectionEvents";

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
      <SpacerSection>
        <SectionSponsors />
      </SpacerSection>
    </>
  )
}
