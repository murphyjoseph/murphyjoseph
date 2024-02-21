import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionMission } from "~/pages/PageHome/SectionMission";
import { SpacerSection } from "~/components/Spacer/SpacerSection";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEvents } from "./SectionEvents";
import { SectionPerson } from "./SectionPerson";
import { SectionQuotes } from "./SectionQuotes";

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
      <SectionPerson
        imageSrc="/people/person1.webp"
        imageAlt="A person"
        title="Person Personhood"
        text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        swapOrder={false}
        // background="gray.100"
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      />
      <SectionPerson
        imageSrc="/people/person1.webp"
        imageAlt="A person"
        title="Person Personhood"
        text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        swapOrder={true}
        // background="gray.100"
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      />
      <SectionQuotes />
      <SpacerSection>
        <SectionSponsors />
      </SpacerSection>
    </>
  )
}
