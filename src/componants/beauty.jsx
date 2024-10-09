import style from "./beauty.module.css"
import Navbar from "./nav";
import CountdownTimer from "./timmer";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Footer from "./footer";
import Product from "./product";
import { maincontext } from "../context/api";
import { useContext, useEffect, useState } from "react";
function Beauty(){
    let api=useContext(maincontext)
    let cato=["Lipstick","Nail Polish","Perfume","Massage Oils","Face Wash and Cleanser","Serum and Gel","Bindi","Skin Care Combo"]
    let brands=["Comet Busters","PERPAA","MI FASHION","NOY","VOLO","Deve Herbes","ME-ON","Menjewell"]
    let discount=["10% and above","20% and above","30% and above","40% and above","50% and above","60% and above","70% and above","80% and above"]
    let all=[["all (21).jpg","Polish","Mattle Match Foundation -20","RS.622","RS.699","(11% OFF)"],
["all (2).jpg","Nail Polish","Red Color Nail Polish -40","RS.722","RS.1199","(11% OFF)"],
["all (4).jpg","Gell Pen","Best Blue Signature pen -30","RS.234","RS.453","(21% OFF)"],
["all (5).jpg","Nano Lipstick","Red LipStick -10","RS.926","RS.999","(2% OFF)"],
["all (6).jpg","Nail Polish","Shining Polish -09","RS.126","RS.199","(23% OFF)"],
["all (8).jpg","Indulekha","Hair Shampo -12","RS.720","RS.999","(13% OFF)"],
["all (7).jpg","Shiner Nails","Shiner Nail Liner -10","RS.990","RS.1399","(33% OFF)"],
["all (9).jpg","Tripple Bond Repair","Joining Bonds -20","RS.9026","RS.11999","(13% OFF)"],
["all (10).jpg","CUFFS N LASHES","Pressed Powder Compact - 06","Rs. 200","Rs. 250","(20% OFF)"],
["all (11).jpg","Shahnaz Husain","Professional Power Facial Kit","Rs. 337","Rs. 375","(10% OFF)"],
["all (12).jpg","NISARA","Girl Power Long Lasting EDP","Rs. 754","Rs. 999","(Rs. 245 OFF)"],
["all (13).jpg","Modicare","Sizes: 200-220 ML","Rs. 436","Rs. 485","(10% OFF)"],
["all (14).jpg","Marks & Spencer","Fresh Citrus & Moss EDT 100ml","Rs. 1299"],
["all (15).jpg","GLAM21","Highlighter Makeup Palette- 01","Rs. 415","Rs. 519","(20% OFF)"],
["all (16).jpg","SUGAR","Sizes: 30-40 ML","Rs. 601","Rs. 699","(14% OFF)"],
["all (17).jpg","CUFFS N LASHES","6Pcs Mini Lip & Cheek Tint Set","Rs. 479","Rs. 599","(20% OFF)"],
["all (18).jpg","LOreal Professionnel","Absolute Repair Shampoo 300ml","Rs. 790"],
["all (19).jpg","Ponds Lotion","Lotion cream -10","RS.499","RS.999","(50% OFF)"],
["all (20).jpg","Gleva","Instant Hair Root Concealer","Rs. 601","Rs. 699","(14% OFF)"],
["all (21).jpg","Skinn","Skin Caring -10","RS.1226","RS.1699","(23% OFF)"],
["all (22).jpg","F C B","Body Spray  -30","RS.1111","RS.2222","(50% OFF)"],
["all (23).jpg","Fetual ","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (24).jpg","Dove","Shampo -10","RS.2000","RS.3000","(30% OFF)"],
["all (25).jpg","Lution","Shine Liner -10","RS.111","RS.499","(23% OFF)"],
["all (26).jpg","Mamaearth","Creamy Matte LongStay Lipstick","Rs. 319","Rs. 399","(20% OFF)"],
["all (28).jpg","Cetaphil","Gentle Skin Cleanser - 125 ml","Rs. 359","Rs. 399","(10% OFF)"],
["all (27).jpg","Bondplex","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (29).jpg","Lakme","Sun Expert Ultra Matte Compact","Rs. 224","Rs. 299","(25% OFF)"],]

let men=[["men (1).jpg","SERUM","Mattle Match Foundation -20","RS.622","RS.699","(11% OFF)"],
["men (2).jpg","Nail Polish","Red Color Nail Polish -40","RS.722","RS.1199","(11% OFF)"],
["men (4).jpg","Gell Pen","Best Blue Signature pen -30","RS.234","RS.453","(21% OFF)"],
["men (5).jpg","Nano Lipstick","Red LipStick -10","RS.926","RS.999","(2% OFF)"],
["men (6).jpg","Nail Polish","Shining Polish -09","RS.126","RS.199","(23% OFF)"],
["men (8).jpg","Indulekha","Hair Shampo -12","RS.720","RS.999","(13% OFF)"],
["men (7).jpg","Shiner Nails","Shiner Nail Liner -10","RS.990","RS.1399","(33% OFF)"],
["men (9).jpg","Tripple Bond Repair","Joining Bonds -20","RS.9026","RS.11999","(13% OFF)"],
["all (25).jpg","Lution","Shine Liner -10","RS.111","RS.499","(23% OFF)"],
["all (28).jpg","Cetaphil","Gentle Skin Cleanser - 125 ml","Rs. 359","Rs. 399","(10% OFF)"],
["men (10).jpg","CUFFS N LASHES","Pressed Powder Compact - 06","Rs. 200","Rs. 250","(20% OFF)"],
["men (11).jpg","Shahnaz Husain","Professional Power Facial Kit","Rs. 337","Rs. 375","(10% OFF)"],
["men (12).jpg","NISARA","Girl Power Long Lasting EDP","Rs. 754","Rs. 999","(Rs. 245 OFF)"],
["men (13).jpg","Modicare","Sizes: 200-220 ML","Rs. 436","Rs. 485","(10% OFF)"],
["all (26).jpg","Mamaearth","Creamy Matte LongStay Lipstick","Rs. 319","Rs. 399","(20% OFF)"],
["men (14).jpg","Marks & Spencer","Fresh Citrus & Moss EDT 100ml","Rs. 1299"],
["all (16).jpg","SUGAR","Sizes: 30-40 ML","Rs. 601","Rs. 699","(14% OFF)"],
["all (18).jpg","LOreal Professionnel","Absolute Repair Shampoo 300ml","Rs. 790"],
["all (19).jpg","Ponds Lotion","Lotion cream -10","RS.499","RS.999","(50% OFF)"],
["all (20).jpg","Gleva","Instant Hair Root Concealer","Rs. 601","Rs. 699","(14% OFF)"],
["all (21).jpg","Skinn","Skin Caring -10","RS.1226","RS.1699","(23% OFF)"],
["all (22).jpg","F C B","Body Spray  -30","RS.1111","RS.2222","(50% OFF)"],
["all (23).jpg","Fetual ","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (24).jpg","Dove","Shampo -10","RS.2000","RS.3000","(30% OFF)"],
["all (27).jpg","Bondplex","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (5).jpg","Lakme","Sun Expert Ultra Matte Compact","Rs. 224","Rs. 299","(25% OFF)"]]

let women=[["w1.png","Negosium","Mattle Match Foundation -20","RS.622","RS.699","(11% OFF)"],
["all (28).jpg","Cetaphil","Gentle Skin Cleanser - 125 ml","Rs. 359","Rs. 399","(10% OFF)"],
["men (10).jpg","CUFFS N LASHES","Pressed Powder Compact - 06","Rs. 200","Rs. 250","(20% OFF)"],
["men (11).jpg","Shahnaz Husain","Professional Power Facial Kit","Rs. 337","Rs. 375","(10% OFF)"],
["men (12).jpg","NISARA","Girl Power Long Lasting EDP","Rs. 754","Rs. 999","(Rs. 245 OFF)"],
["men (13).jpg","Modicare","Sizes: 200-220 ML","Rs. 436","Rs. 485","(10% OFF)"],
["all (26).jpg","Mamaearth","Creamy Matte LongStay Lipstick","Rs. 319","Rs. 399","(20% OFF)"],
["men (14).jpg","Marks & Spencer","Fresh Citrus & Moss EDT 100ml","Rs. 1299"],
["all (16).jpg","SUGAR","Sizes: 30-40 ML","Rs. 601","Rs. 699","(14% OFF)"],
["all (18).jpg","LOreal Professionnel","Absolute Repair Shampoo 300ml","Rs. 790"],
["all (19).jpg","Ponds Lotion","Lotion cream -10","RS.499","RS.999","(50% OFF)"],
["all (20).jpg","Gleva","Instant Hair Root Concealer","Rs. 601","Rs. 699","(14% OFF)"],
["w2.png","Nail Polish","Red Color Nail Polish -40","RS.722","RS.1199","(11% OFF)"],
["w3.png","Gell Pen","Best Blue Signature pen -30","RS.234","RS.453","(21% OFF)"],
["w4.png","Nano Lipstick","Red LipStick -10","RS.926","RS.999","(2% OFF)"],
["w6.png","Indulekha","Hair Shampo -12","RS.720","RS.999","(13% OFF)"],
["w7.png","Shiner Nails","Shiner Nail Liner -10","RS.990","RS.1399","(33% OFF)"],
["w8.png","Tripple Bond Repair","Joining Bonds -20","RS.9026","RS.11999","(13% OFF)"],
["w9.png","Lution","Shine Liner -10","RS.111","RS.499","(23% OFF)"],
["all (28).jpg","Cetaphil","Gentle Skin Cleanser - 125 ml","Rs. 359","Rs. 399","(10% OFF)"],
["w10.png","CUFFS N LASHES","Pressed Powder Compact - 06","Rs. 200","Rs. 250","(20% OFF)"],
["w11.png","Shahnaz Husain","Professional Power Facial Kit","Rs. 337","Rs. 375","(10% OFF)"],
["w16.png","Shiner Nails","Shiner Nail Liner -10","RS.990","RS.1399","(33% OFF)"],
["w12.png","NISARA","Girl Power Long Lasting EDP","Rs. 754","Rs. 999","(Rs. 245 OFF)"],
["w13.png","Modicare","Sizes: 200-220 ML","Rs. 436","Rs. 485","(10% OFF)"],
["all (26).jpg","Mamaearth","Creamy Matte LongStay Lipstick","Rs. 319","Rs. 399","(20% OFF)"],
["w14.png","Marks & Spencer","Fresh Citrus & Moss EDT 100ml","Rs. 1299"],
["w16.png","SUGAR","Sizes: 30-40 ML","Rs. 601","Rs. 699","(14% OFF)"],
["all (18).jpg","LOreal Professionnel","Absolute Repair Shampoo 300ml","Rs. 790"],
["all (19).jpg","Ponds Lotion","Lotion cream -10","RS.499","RS.999","(50% OFF)"],
["all (20).jpg","Gleva","Instant Hair Root Concealer","Rs. 601","Rs. 699","(14% OFF)"],
["all (21).jpg","Skinn","Skin Caring -10","RS.1226","RS.1699","(23% OFF)"],
["all (22).jpg","F C B","Body Spray  -30","RS.1111","RS.2222","(50% OFF)"],
["all (23).jpg","Fetual ","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (24).jpg","Dove","Shampo -10","RS.2000","RS.3000","(30% OFF)"],
["all (27).jpg","Bondplex","Silver Shine Liner -10","RS.1126","RS.1999","(23% OFF)"],
["all (1).jpg","Lakme","Sun Expert Ultra Matte Compact","Rs. 224","Rs. 299","(25% OFF)"]]
let [data,setdata]=useState(all)

function update_all(){
    setdata(all)
}
function update_men(){
    setdata(men)
}
function update_women(){
    setdata(women)
}



    
    return<>
    <Navbar></Navbar>
    <CountdownTimer></CountdownTimer>
    <img src="fix.png" alt="" className={style["fixed"]}/>
    <p className={style["home-txt"]}>Home/ <b>Personal Care</b></p>
    <p className={style["home-txt1"]}><b>Personal Care</b>-117786 items</p>
    <div style={{display:"flex"}}>
        <p style={{marginTop:"10px"}}><b style={{marginLeft:"30px"}}>FILTER</b> </p>
    <div>
        <pre className={style["bund"]}>Bundles<IoIosArrowDown />   Country of Origin<IoIosArrowDown />   Size <IoIosArrowDown /></pre>
    </div>
    <div className={style["reco"]}>
        <pre style={{marginTop:"8px"}}>Sort by :<b>Recommended</b>          <IoIosArrowDown style={{fontSize:"19px"}}/> </pre>
    </div>
    </div>
    <hr />
    <div style={{display:"flex"}}>
    {/* here is left div */}
    <div className={style["leftdiv"]}> 

    <div style={{marginLeft:"20px"}}>
    <label htmlFor="all"> <input onClick={update_all} className={style["women"]} type="radio"  name="same" id="all" /> <b className={style["name"]}>ALL</b></label> <br />  
    <label htmlFor="men"> <input  onClick={update_men} className={style["women"]}  type="radio"  name="same" id="men" /> <b className={style["name"]}>MEN</b></label> <br />  
    <label htmlFor="women"> <input onClick={update_women} className={style["women"]} type="radio"  name="same" id="women" /> <b className={style["name"]}>Women</b></label> <br />
    <label htmlFor="boy"> <input onClick={()=>alert("Will Avaliable Soon")} className={style["women"]} type="radio"  name="same" id="boy" /> <b className={style["name"]}>Boys</b></label> <br />
    <label htmlFor="girl"> <input onClick={()=>alert("Will Avaliable Soon")} className={style["women"]} type="radio"  name="same" id="girl" /> <b className={style["name"]}>Girls</b></label>
    </div>
    <hr />
    <div className={style["line"]}></div>

    <b className={style["cato"]}>CATOGRIES</b><CiSearch className={style["searchicon"]}/>

    {cato.map((c)=><p className={style["lables"]}><label htmlFor={c} className={style["catlabel"]}><input className={style["check"]} type="checkbox" id={c} />{c}</label></p>)}
    <hr />
    <b className={style["cato"]}>BRANDS       </b><CiSearch className={style["searchicon"]}/>
    {brands.map((c)=><p className={style["lables"]}><label htmlFor={c} className={style["catlabel"]}><input className={style["check"]} type="checkbox" id={c} />{c}</label></p>)}
    <hr />
    <b className={style["cato"]}>PRICE</b><br />
    <input type="range" className={style["range"]}/>
    <b className={style["cato"]}>RS.100-RS.10000</b>
    <hr />
    <b className={style["cato"]}>DISCOUNT</b><br />
    {discount.map((c)=><p className={style["lables"]}><label htmlFor={c} className={style["catlabel"]}><input className={style["check"]} name={c} type="radio" id={c} />{c}</label></p>)}
    </div>
    <div className={style["products"]}>
        <div className={style["data"]}>
    {data.map((a)=><Product all={a}></Product>)}
    </div>
    </div>
    </div>
    <Footer></Footer>
    </>
}
export default Beauty;