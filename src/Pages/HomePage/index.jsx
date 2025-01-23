import LuxuryCards from "../../Components/Home/Cards"
import HomeCarrousel from "../../Components/Home/Home_carrousel"
import CleaningService from "../../Shared/HeroSection"
// import HomeHero from "../../Components/Home/HomeHero"
import LayoutEl from "../../Shared/Layout"


const HomePage=()=>{
    return (
        <>
         <LayoutEl>
            <HomeCarrousel/>
            <LuxuryCards/>
            <CleaningService/>
         </LayoutEl>
        
        </>
    )
}
export default HomePage