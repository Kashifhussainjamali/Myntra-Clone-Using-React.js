import Navbar from "./nav"
import Allads from "./adds";
import MenProducts from "./menproducts";
import Footer from "./footer";
import CountdownTimer from "./timmer";
function Men(){
    return<>
    <Navbar></Navbar>
    <CountdownTimer></CountdownTimer>
    <Allads></Allads>
    <MenProducts></MenProducts>
    <Footer></Footer>
    </>
}
export default Men;