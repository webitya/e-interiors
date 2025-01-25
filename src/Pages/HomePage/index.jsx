import LuxuryCards from "../../Components/Home/Cards"
import FeaturesSection from "../../Components/Home/FeaturesSection"
import HeroSection from "../../Components/Home/HeroSection"
import HeroSection2 from "../../Components/Home/HeroSection2"
import HomeCarrousel from "../../Components/Home/Home_carrousel"
import PartnerCarousel from "../../Components/Home/OurPartners"
import HomeTabSection from "../../Components/Home/TabSection"
import CallToAction from "../../Shared/CallToAction"
import CleaningService from "../../Shared/HeroSection"
// import HomeHero from "../../Components/Home/HomeHero"
import LayoutEl from "../../Shared/Layout"


const HomePage=()=>{
    return (
        <>
         <LayoutEl>
            <HeroSection2/>
            {/* <HeroSection/> */}
            <FeaturesSection/>
            {/* <HomeCarrousel/> */}
            <LuxuryCards/>
            {/* <CleaningService/> */}
            <HomeTabSection/>
            <PartnerCarousel/>
            <CallToAction/>
         </LayoutEl>
        
        </>
    )
}
export default HomePage