
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AboutSchool from "./components/AboutSchool/AboutSchool";
import DiscoverSchool from "./components/DiscoverSchool/DiscoverSchool";
import ExploreOurCampus from "./components/ExploreOurCampus/ExploreOurCampus";
import LearningLife from "./components/LearningLife/LearningLife";
import ManipalAdvantage from "./components/ManipalAdvantage/ManipalAdvantage";
import PrincipalDesk from "./components/PrincipalDesk/PrincipalDesk";
import Activities from "./components/Activities/Activities";
import Testimonials from "./components/Testimonials/Testimonials";
import CounsellingForm from "./components/CounsellingForm/CounsellingForm";



export default function Home() {
  return (
    <section>
      <HeroBanner/>
      <AboutSchool/>
      <DiscoverSchool/>
      <ExploreOurCampus/>
      <LearningLife/>
      <ManipalAdvantage/>
      <PrincipalDesk/>
      <Activities/>
      <Testimonials/>
      <CounsellingForm/>
    </section>
  );
}
