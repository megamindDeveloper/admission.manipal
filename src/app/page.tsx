import HeroBanner from "./components/HeroBanner/HeroBanner";
import dynamic from "next/dynamic";

const AboutSchool = dynamic(() => import("./components/AboutSchool/AboutSchool"));
const DiscoverSchool = dynamic(() => import("./components/DiscoverSchool/DiscoverSchool"));
const ExploreOurCampus = dynamic(() => import("./components/ExploreOurCampus/ExploreOurCampus"));
const LearningLife = dynamic(() => import("./components/LearningLife/LearningLife"));
const ManipalAdvantage = dynamic(() => import("./components/ManipalAdvantage/ManipalAdvantage"));
const PrincipalDesk = dynamic(() => import("./components/PrincipalDesk/PrincipalDesk"));
const Activities = dynamic(() => import("./components/Activities/Activities"));
const Testimonials = dynamic(() => import("./components/Testimonials/Testimonials"));
const CounsellingForm = dynamic(() => import("./components/CounsellingForm/CounsellingForm"));

export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroBanner />
      <AboutSchool />
      <DiscoverSchool />
      {/* <ExploreOurCampus/> */}
      <LearningLife />
      <ManipalAdvantage />
      {/* <PrincipalDesk/> */}
      <Activities />
      <Testimonials />
      <CounsellingForm />
    </section>
  );
}
