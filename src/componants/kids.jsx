import style from "./kids.module.css"
import Navbar from "./nav";
import Footer from "./footer";
import CountdownTimer from "./timmer";
function Kids(){
    let logos=["logos (1).jpg","logos (2).jpg","logos (3).jpg","logos (4).jpg","logos (5).jpg","logos (6).jpg","logos (7).jpg","logos (8).jpg","logos (9).jpg"]
    let baby=["baby (1).jpg","baby (2).jpg","baby (3).jpg","baby (4).jpg","baby (5).jpg","baby (6).jpg","baby (7).jpg","baby (8).jpg","baby (9).jpg","baby (10).jpg","baby (11).jpg"]
    let d=["d (1).jpg","d (2).jpg","d (3).jpg","d (4).jpg","d (5).jpg"]
    let a=["a (1).jpg","a (2).jpg","a (3).jpg","a (4).jpg","a (5).jpg","a (6).jpg","a (7).jpg","a (8).jpg","a (9).jpg","a (10).jpg"]
    let num=["num (1).jpg","num (2).jpg","num (3).jpg","num (4).jpg","num (5).jpg","num (6).jpg"]
    let mici=["mici (1).jpg","mici (2).jpg"]
    let pri=["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg"]
    let log=["log (1).jpg","log (2).jpg","log (3).jpg","log (4).jpg","log (5).jpg"]
  return<>
    <Navbar></Navbar>
    <CountdownTimer></CountdownTimer>
    <img src="kid1.jpg" alt="" className={style["kid1img"]}/>
    <h3 className={style["fvrt"]}>FAVORATE BRANDS</h3>
    <div style={{marginTop:"40px"}}>
        {logos.map((l)=><img src={l} className={style["logoimg"]}></img>)}
    </div>
    <div>
        {baby.map((a)=><img src={a} className={style["baby1"]}></img>)}
    </div>
    <h3 className={style["fvrt"]}>ICONIC BRANDS</h3>

    <div>
        {d.map((d)=><img src={d} className={style["dimg"]}></img>)}
    </div>
    <h3 className={style["fvrt"]}>FASION & ESSENTIALS</h3>
    <div style={{marginLeft:"10px"}}>
        {a.map((a)=><img src={a} className={style["aimg"]}></img>)}
    </div>
    <h3 className={style["fvrt"]}>EXPLORE MORE</h3>

    <div>
        {num.map((nu)=><img src={nu} className={style["numimg"]}></img>)}
    </div>
    <h3 className={style["fvrt"]}>THE KIDS SPACE</h3>
    <div>
    {mici.map((mi)=><img src={mi} style={{height:"452px"}}></img>)}
    </div>
    <h3 className={style["fvrt"]}>BUGET BUY</h3>
    <div style={{marginTop:"40px"}}>
        {pri.map((p)=><img src={p} style={{height:"220px"}}></img>)}
    </div>
    <h3 className={style["fvrt"]}>SHOP MORE BRANDS</h3>
    <div>
        {log.map((lo)=><img src={lo} style={{height:"310px"}}></img>)}
    </div>
    <img src="fix.png" alt="" className={style["fixed"]}/>
    <Footer></Footer>
    </>
}
export default Kids;