import Navbar from "../Navbar"


const LayoutEl=(data)=>{
    return (
        <>
        <Navbar/>
        {data.children}
        </>
    )
}
export default LayoutEl