import FooterEl from "../FooterEl"
import Navbar from "../Navbar"


const LayoutEl=(data)=>{
    return (
        <>
        <Navbar/>
        {data.children}
        <FooterEl/>
        </>
    )
}
export default LayoutEl