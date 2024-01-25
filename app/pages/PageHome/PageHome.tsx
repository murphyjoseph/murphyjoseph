import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionAboutUs } from "./SectionAboutUs";
import { SectionHero } from "./SectionHero";
import { SectionMission } from "~/pages/PageHome/SectionMission";
import { SpacerSection } from "~/patterns/Spacer/SpacerSection";
import { SectionSponsors } from "./SectionSponsors";

export const PageHome = () => {

  return (
    <>
      <NavigationMain />
      <SectionHero />
      <SpacerSection>
        <SectionMission />
      </SpacerSection>
      <SpacerSection>
        <SectionAboutUs />
      </SpacerSection>
      <SpacerSection>
        <SectionSponsors />
      </SpacerSection>
    </>
  )
}