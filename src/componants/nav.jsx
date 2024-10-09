import { NavLink } from "react-router-dom"
import style from "./nav.module.css"
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import "/src/App.css"

function Navbar(){
  let mens=["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets"]
  let women=["Kurtas & Suits","Kurtis, Tunics & Tops","Sarees","Dress Materials","Skirts & Palazzos","Dupattas & Shawls","Suits","Jackets","Lehenga Cholis"] 
  let kids=["Kurtas & Suits","Rompers & Sleepsuits","Clothing Sets","Tshirts & Tops","Dresses","Bottom wear","Winter Wear","Innerwear & Sleepwear","Jackets","Infant Care"]
  let home=["Bed Runners","Mattress Protectors","Blankets, Quilts & Dohars","Bedding Sets","Bed Covers","Pillows & Pillow Covers","Diwan Sets","Innerwear & Sleepwear","Chair Pads & Covers","Sofa Covers"]
  let beauty=["Lipstick","Lip Gloss","Lip Liner","Mascara","Eyeliner","Primer","Diwan Sets","Eyeshadow","Foundation","Kajal"]
  return<>
    <nav class="navbar navbar-expand-lg " id={style["mainnav"]}>
  <div class="container-fluid">
    <a class="navbar-brand">
        <NavLink to="/" >
        <img src="logo.png" alt="" id={style["logoimg"]}/>
        </NavLink>
        
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item dropdown">
        <NavLink to="/men"  id={style["name"]}> MEN</NavLink>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" id={style["color"]}>Topwear</a></li>
      <li><hr class="dropdown-divider"/></li>
      {mens.map((a)=> <li><a class="dropdown-item" id={style["items"]}>{a}</a></li>)}
    </ul>
  </li>
  <li class="nav-item dropdown">
        <NavLink to="/women" id={style["name"]}> WOMEN</NavLink>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" id={style["color"]}>Indian & Fusion Wear</a></li>
      <li><hr class="dropdown-divider"/></li>
      {women.map((a)=> <li><a class="dropdown-item" id={style["items"]}>{a}</a></li>)}
    </ul>
  </li>
<li class="nav-item dropdown">
        <NavLink to="/kids"  id={style["name"]}> KIDS</NavLink>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" id={style["color"]}>Bodysuits</a></li>
      <li><hr class="dropdown-divider"/></li>
      {kids.map((a)=> <li><a class="dropdown-item" id={style["items"]}>{a}</a></li>)}
    </ul>
  </li>

  <li class="nav-item dropdown">
        <NavLink to="/living"  id={style["name"]}>HOME&LIVINGS</NavLink>
    <ul class="dropdown-menu">
<li><a class="dropdown-item" id={style["color"]}>Bed Linen & Furnishing</a></li>
      <li><hr class="dropdown-divider"/></li>
      {home.map((a)=> <li><a class="dropdown-item" id={style["items"]}>{a}</a></li>)}
    </ul>
  </li>
  <li class="nav-item dropdown">
        <NavLink to="/beauty"  id={style["name"]}>BEAUTY</NavLink>
    <ul class="dropdown-menu">
<li><a class="dropdown-item" id={style["color"]}>Makeup</a></li>
      <li><hr class="dropdown-divider"/></li>
      {beauty.map((a)=> <li><a class="dropdown-item" id={style["items"]}>{a}</a></li>)}
    </ul>
  </li>
  <li class="nav-item dropdown">
        <NavLink to="/about"  id={style["name"]}>STUDIO</NavLink>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item"><img src="studio.png" alt="" /></a></li>
    </ul>
  </li>
  <form class="d-flex" role="search">
    <div className={style["searchdiv"]}>
    <CiSearch className={style["sicon"]}/>
    <input type="search" placeholder="Search for products & brands and more" />
    </div>       
</form>
    <div className={style["iconsdiv"]}>
        <CgProfile className={style["icons"]}/><br />
        Profile
    </div>
    <div className={style["iconsdiv"]}>
        <CiHeart className={style["icons"]}/><br />
        Wishlist
    </div>
    <div className={style["iconsdiv"]}>
        <FiShoppingBag className={style["icons"]}/><br />
        Bag
    </div>
  </ul>

    </div>
  </div>
</nav>
    </>
}
export default Navbar;