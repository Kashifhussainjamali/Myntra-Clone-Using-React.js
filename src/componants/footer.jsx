import style from "./footer.module.css"
function Footer(){
    return<>
        <div className={style["mainfooter"]}>

            <div className={style["allul"]}>
                <ul className={style["ul1"]}>
                    <li className={style["head"]}>ONLINE SHOPPING</li>
                    <li className={style["txt"]}>Men</li>
                    <li className={style["txt"]}>Women</li>
                    <li className={style["txt"]}>Kids</li>
                    <li className={style["txt"]}>Home & Living</li>
                    <li className={style["txt"]}>Beauty</li>
                    <li className={style["txt"]}>Gift Cards</li>
                    <li className={style["txt"]}>Myntra Insider</li>

                    <li className={style["head"]}>USEFUL LINKS</li>
                    
                    <li className={style["txt"]}>Blog</li>
                    <li className={style["txt"]}>Careers</li>
                    <li className={style["txt"]}>Site Map</li>
                    <li className={style["txt"]}>Corporate Information</li>
                    <li className={style["txt"]}>Whitehat</li>
                    <li className={style["txt"]}>Cleartrip</li>
                </ul>
                <ul className={style["ul1"]}>
                    <li className={style["head"]}>CUSTOMER POLICIES</li>
                    <li className={style["txt"]}>Contact Us</li>
                    <li className={style["txt"]}>FAQ</li>
                    <li className={style["txt"]}>T&C</li>
                    <li className={style["txt"]}>Terms Of Use</li>
                    <li className={style["txt"]}>Track Orders</li>
                    <li className={style["txt"]}>Shipping</li>
                    <li className={style["txt"]}>Cancellation</li>
                    <li className={style["txt"]}>Returns</li>
                    <li className={style["txt"]}>Privacy policy</li>
                    <li className={style["txt"]}>Grievance Officer</li>
                </ul>

                <ul className={style["ul1"]}>
                    <li><img src="play.png" alt="" /></li>
                    <li className={style["head"]}>KEEP IN TOUCH</li>
                    <li><img src="social.png" alt="" /></li>
                </ul>
                <ul className={style["ul1"]}>
                    <li><img src="veri1.png" alt="" /></li>
                    <li><img src="veri2.png" alt="" style={{marginTop:"20px",marginLeft:"7px"}}/></li>
                </ul>
            </div>
            <ul className={style["pop"]}>
                <li style={{marginTop:"6px",marginRight:"10px"}}>POPULER SEARCHES</li>
                <li><hr className={style["hr1"]}/></li>
            </ul>
            <p className={style["allnames"]}>Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat | Inner Wear | Nightwear | Jeans | Shirts | Jogger Jeans | Men Suits | T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans | Ethnic Wear | Hoodies | Raksha Bandhan Gifts | Watches | Shoes | Belts | Swimwear | Dhotis | Boxers | Vests | Thermals | Socks | Shrugs | Bracelets | Rings | Sunglasses | Headphones | Wallets | Helmets | Caps | Mufflers | Gloves | Ties | Cufflinks | Men Sandals | Floaters | Flip Flops | Trunks | Bags</p>

        
        <b className={style["head"]} style={{marginLeft:"85px"}}>MEN’S SHOPPING AT MYNTRA: A SUPERIOR EXPERIENCE</b>
        <p className={style["allnames1"]}>
        Myntra is one of the best sites when it comes to online shopping for men. The finest of material, superior design and unbeatable style go into the making of our men’s shopping collection. Our range of online shopping men’s wear, accessories, footwear and personal care products are second to none. Compared with other men’s shopping sites, Myntra brings you the best price products which won’t hurt your pocket. With seasonal discounts on trendy casual wear, suits, blazers, sneakers and more, online shopping for men at Myntra just gets even more irresistible!</p>
        
        <b className={style["head"]} style={{marginLeft:"85px"}}>ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</b>
        <p className={style["allnames1"]}>At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Myntra:</p>
        <b className={style["head"]} style={{marginLeft:"85px"}}>MEN’S SHOPPING MADE EASY AT MYNTRA</b>
        <p className={style["allnames1"]}>Myntra is the most convenient men’s online store, what with our simplified shopping and payment procedures. With just a few clicks of the mouse or taps on your smartphone, you can buy your favorites from the best men’s brands right away.</p>
        </div>
        </>
}
export default Footer;