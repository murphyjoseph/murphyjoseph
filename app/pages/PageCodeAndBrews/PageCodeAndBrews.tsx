import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionGallery } from "./SectionGallery";

export const PageCodeAndBrews = () => {

  return (
    <>
      <NavigationMain />
      <SectionHero
        marginBottom={20}
      />
      <SectionGallery
        paddingTop={20}
        paddingBottom={20}
      />
    </>
  )
}
