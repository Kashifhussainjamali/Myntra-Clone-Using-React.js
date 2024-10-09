import Navbar from "./nav";
import style from "./home.module.css"
import Footer from "./footer";
import Allads from "./adds";
import CountdownTimer from "./timmer";

function Home(){
    const pics=["pic1.png","pic2.png","pic3.png","pic4.png","pic5.png","pic6.png","pic7.png","pic8.png","pic9.png","pic10.png","pic11.png","pic12.png","pic13.png","pic14.png","pic15.png","pic16.png","pic17.png","pic18.png","pic19.png","pic20.png","pic21.png","pic22.png","pic23.png","pic24.png","pic25.png","pic26.png"]

    return<>
    <Navbar></Navbar>
    <CountdownTimer></CountdownTimer>
    <Allads></Allads>


    <div className={style["sections"]}>
    <div className={style["secimg"]}>
        <img src="ladies1.png" alt="" />
        <img src="ladies2.png" alt="" />
        <img src="ladies3.png" alt="" />
    </div>
    <div className={style["secimg"]}>
        <img src="male1.png" alt="" />
        <img src="male2.png" alt="" />
        <img src="male3.png" alt="" />
    </div>
    <div className={style["secimg"]}>
        <img src="maleshoes1.png" alt="" />
        <img src="maleshoes2.png" alt="" />
        <img src="maleshoes3.png" alt="" />
    </div>
    </div>
    <img src="add7.png" alt="" style={{marginTop:"20px"}}/>
    <div className={style["offimgs"]}>
    {pics.map((pic)=><img src={pic} className={style["images"]}></img>)}
    </div>
    <img src="add8.png" alt="" style={{marginLeft:"50px",marginTop:"20px"}}/>
    <Footer></Footer>
    </>
}
export default Home;