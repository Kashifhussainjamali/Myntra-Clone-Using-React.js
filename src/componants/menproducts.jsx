import style from "./products.module.css"

function MenProducts(){
    let men_images=["male1.png","male2.png","male3.png","maleshoes1.png","maleshoes2.png","maleshoes3.png"]
    let off1_pic=["off1.png","off2.png","off3.png","off4.png","off5.png"]
    let off2_pic=["off6.png","off7.png","off8.png","off9.png","off10.png","off11.png","off12.png","off13.png","off14.png","off15.png"]
    return<>

<div className={style["sections"]}>
    <div className={style["secimg"]}>
        {men_images.map((p)=><img src={p} alt="" className={style["bigimg"]}/>)}
    </div>
    </div>
    <img src="add7.png" alt="" style={{marginTop:"20px"}}/>
     <div className={style["offimgs"]}>
        {off1_pic.map((p)=><img src={p} alt="" style={{marginLeft:"20px"}}/>)}
    </div>
    <div className={style["offall"]}>
        {off2_pic.map((p)=><img src={p} alt="" style={{marginLeft:"20px",marginTop:"20px"}}/>)}
      
    </div>
    <img src="add8.png" alt="" style={{marginLeft:"50px",marginTop:"20px"}}/>
    </>
}
export default MenProducts;