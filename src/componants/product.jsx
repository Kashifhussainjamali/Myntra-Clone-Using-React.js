import style from "./product.module.css"
const Product=({all})=>{
    
    return<>
    <div className={style["mainproducts"]}>
        <img src={all[0]} alt="" className={style["pimg"]}/> <br />
        <b style={{fontSize:"14px"}}>{all[1]}</b> <br />
        <p className={style["txt1"]}>{all[2]}</p>
        <p><b style={{fontSize:"13px"}}>{all[3]}  </b><s style={{color:"rgb(105, 105, 105)",fontSize:"11px"}}>{all[4]}   </s><span style={{fontSize:"11px",color:"red"}}>{all[5]}</span></p>
    </div>
    </>
}
export default Product;