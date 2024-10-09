import style from "./living.module.css";
import Navbar from "./nav";
import Footer from "./footer";
import CountdownTimer from "./timmer";

function Living() {
  let fruniture = [
    "furni (1).jpg",
    "furni (2).jpg",
    "furni (3).jpg",
    "furni (4).jpg",
    "furni (5).jpg",
    "furni (6).jpg",
  ];
  let list = [
    "Furnishings & Bed Linen",
    "Bed Sheets",
    "Bedding Sets & Bed Covers",
    "Blankets, Quilts & Dohars",
    "Pillows & Pillow Covers",
    "Cushions & Cushion Covers",
    "Curtains",
    "Mats & Dhurries",
    "Carpets",
    "Bath & Bed Linen",
    "Towels & Towel Sets",
    "Bath Robes",
    "Bathroom Accessories",
    "Shower Curtains",
    "Bath Rugs",
    "Home Décor",
    "Pooja Essentials",
    "Laptop Table",
    "Ottomans",
    "Artificial Flowers & Plants",
    "Candles & Candle Holders",
    "Clocks",
    "Planters & Garden Accessories",
    "Home Fragrances",
    "Mirrors",
    "Wall Art",
    "Wall Décor",
    "Wall Shelves",
    "Showpieces & Vases",
    "Lamps & Lighting",
    "Floor Lamps",
    "Table Lamps",
    "Wall Lamp & String Lights",
    "Bathroom Lights & Outdoor Lamps",
    "Ceiling Lamps",
    "Kitchen & Table",
    "Dinnerware",
    "Cups & Mugs",
    "Water Bottles",
    "Bakeware",
    "Trays & Serveware",
    "Bar & Drinkware",
    "Cookware & Kitchen Tools",
    "Kitchen Storage",
    "Table Covers & Furnishings",
    "Storage & Organisers",
    "Organisers",
    "Hooks & Holders",
  ];
  let bed=["bed (1).jpg","bed (2).jpg","bed (3).jpg"]
  let signs=["signs (1).jpg","signs (2).jpg","signs (3).jpg","signs (4).jpg","signs (5).jpg",]
  return (
    <>
      <Navbar></Navbar>
      <CountdownTimer></CountdownTimer>
      <img src="fix.png" alt="" className={style["fixed"]} />
      <img
        src="sofa.jpg"
        alt=""
        style={{ height: "330px", marginTop: "90px", marginLeft: "50px" }}
      />
      <div style={{display:"flex"}}>
        <div style={{width:"980px"}}>
          <h3 className={style["txt"]}>NICE TO SEE YOU, COME ON IN!</h3>
          <div style={{ marginLeft: "40px", marginTop: "40px" }}>
            {fruniture.map((fur) => (
              <img src={fur} className={style["furimg"]}></img>
            ))}
          </div>
        </div>
        <ul className={style["ul"]}>
          {list.map((li)=><li className={style["li"]}>{li}</li>)}
        </ul>
      </div>
      <img src="aspire.jpg" alt="" style={{height:"175px"}}/>
      <div className={style["beds"]}>
            {bed.map((b)=><img src={b} className={style["bedimgs"]}></img>)}
      </div>
      <h2 style={{marginTop:"30px",marginLeft:"70px"}}>FEATURED BRANDS</h2>
      {signs.map((s)=><img src={s} className={style["signimg"]} style={{height:"110px",marginLeft:"70px",marginTop:"20px"}}></img>)}
    <Footer></Footer>
    </>
  );
}
export default Living;
