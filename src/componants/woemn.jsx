import Navbar from "./nav";
import Allads from "./adds";
import style from "./women.module.css"
import Footer from "./footer";
import CountdownTimer from "./timmer";

function Women(){
    let women_img=["ladies2.png","ladies3.png","ladies1.png"]
    let women_items=["w1.png2","w2.png","w3.png","w4.png","w6.png","w7.png","w8.png","w9.png","w10.png","w11.png","w12.png","w13.png","w14.png","w15.png","w16.png"]
    return<>
    <Navbar></Navbar>
    <CountdownTimer></CountdownTimer>
    <Allads></Allads>
    <div className={style["sections"]}>
    <div className={style["secimg"]}>
        {women_img.map((p)=><img src={p} alt="" className={style["bigimg"]}/>)}
    </div>
    </div>
    <img src="add7.png" alt="" style={{marginTop:"20px"}}/>

    <div className={style["offall"]}>
        {women_items.map((p)=><img src={p} alt="" style={{marginLeft:"20px",marginTop:"20px"}}/>)}
      
    </div>
    <img src="add8.png" alt="" style={{marginLeft:"50px",marginTop:"20px"}}/>
    <Footer></Footer>

    </>
}
export default Women;