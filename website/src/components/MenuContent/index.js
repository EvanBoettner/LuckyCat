import React from "react";
import "./index.css";
import tebasaki from "../../assets/menu-items/tebasaki.png";
import fries from "../../assets/menu-items/OkonomiFries.jpg";
import gyoza from "../../assets/menu-items/Gyoza.jpg";
import korokke from "../../assets/menu-items/korokke.jpg";
import karaage from "../../assets/menu-items/karaage.jpg";
import katsu from "../../assets/menu-items/katsuSando.jpg";
import ebi from "../../assets/menu-items/ebi.webp";
import burger from "../../assets/menu-items/burger.jpg";
import tofu from "../../assets/menu-items/tofu.jpg";
import chickcurry from "../../assets/menu-items/chicken curry.jpg";
import gyuniku from "../../assets/menu-items/Gyuniku.jpg";
import veggie from "../../assets/menu-items/veggiecurry.jpg";
import katsuCurry from "../../assets/menu-items/KatsuCurry.JPG";
import chickenKatsu from "../../assets/menu-items/chickenKatsu.jpg";
import ebiKatsu from "../../assets/menu-items/ebiKatsu.png";
import tofuKatsu from "../../assets/menu-items/tofuKatsu.png";
import saikoro from "../../assets/menu-items/saikoroSteak.png";

export default function MenuContent() {
  return (
    <div className="main-content">
      <div className="sectionTitle">
        <h2>Our Menu</h2>
        <p>Call (123) 456-7891 to order takeout or delivery</p>
      </div>
      <div className="Container">
        <div className="menu-column">
          <h4>Zensai-Appetizers</h4>
          <div className="singleMenu item1">
            <img src={tebasaki} alt="tebasaki" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Lucky Cat Tebasaki{" "}
                <span className="infoPrice">
                  6 for $10.95/ 12 for 18.95 (GF)
                </span>
              </h5>
              <p>
                Japanese Nagoya style chicken wings, deep fried and then coated
                with a house made marinade for full flavor.
              </p>
            </div>
          </div>
          <div className="singleMenu item2">
            <img src={fries} alt="street fries" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Japanese Street Fries <span className="infoPrice">$7.95</span>
              </h5>
              <p>
                French fries loaded with umami flavor! Served with choice of
                non-vegan or vegan spicy mayo.
              </p>
            </div>
          </div>
          <div className="singleMenu item3">
            <img src={gyoza} alt="gyoza" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Gyoza{" "}
                <span className="infoPrice">
                  Choice of fried or steamed 5 per order. $8.00
                </span>
              </h5>
              <p>
                Japan's signature dumpling! These little guys are made in house
                and filled with pork, cabbage, garlic and chives.
              </p>
            </div>
          </div>
          <div className="singleMenu item4">
            <img src={gyoza} alt="gyoza" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Vegan Gyoza{" "}
                <span className="infoPrice">5 per order. $8.50</span>
              </h5>
              <p>
                Spinach, tofu, and shiitake are just some of the textures and
                flavors in these delightful dumplings! Even tastier with the
                accompanying miso dipping sauce.
              </p>
            </div>
          </div>
          <div className="singleMenu item5">
            <img src={korokke} alt="korokke" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Korokke <span className="infoPrice"> 2 per order (V)</span>
              </h5>
              <p>
                Or "croquette" which is a Japanese interpretation of the
                original European import. These tasty treats incorporate a blend
                of meat, vegetables, or seafood shaped into a patty or log,
                coated in air crispy panko crumbs and deep fried.
              </p>
              <span className="infoPrice">
                Potato-ground beef, potatoes, and cream, formed into a patty and
                deep fried. $6.00
                <br /> <br />
                Kani cream-succulent crab mixed with bechamel sauce and shaped
                into cute little logs. $7.25
                <br /> <br />
                Curry brown rice, the curry adds an exceptional flavor boost
                when paired with brown rice and diced veggies! $6.95
              </span>
            </div>
          </div>
          <div className="singleMenu item6">
            <img src={karaage} alt="kara-age" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Kara-age{" "}
                <span className="infoPrice">3pcs. for $5.75/ 7 for $12.75</span>
              </h5>
              <span className="infoPrice">
                Chicken-marinated boneless chicken thing.
              </span>
              <span className="infoPrice">
                Ika Geso-Marinated squid tentacles. $9.75
              </span>
              <p>
                This technique of Japanese deep frying was imported from China
                and has been commonplace since the eighteenth century. Goes
                great with a cold beer!
              </p>
            </div>
          </div>
        </div>
        <div className="menu-column2">
          <h4>Sandos</h4>
          <div className="singleMenu item1">
            <img src={katsu} alt="katsu" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Katsu Sando <span className="infoPrice">$13.95</span>
              </h5>
              <p>
                A cutlet of your choice of pork or chicken breast, panko breaded
                and deep fried topped with cabbage salad slathered with your
                choice of a zingy tonkatsu sauce or a zesty yoshoku sauce.
              </p>
            </div>
          </div>
          <div className="singleMenu item1">
            <img src={ebi} alt="ebi" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Ebi Katsu Sando <span className="infoPrice">$15.00</span>
              </h5>
              <p>
                House made prawn cutlet patty topped with spicy Japanese tartar
                sauce, leaf lettuce, and pickles.
              </p>
            </div>
          </div>
          <div className="singleMenu item1">
            <img src={burger} alt="burger" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Godzilla Burger <span className="infoPrice">$13.50</span>
              </h5>
              <p>
                A monster two patty burger packed with umami flavor! Dressed
                with cheddar cheese, lettuce, tomato, avocado and grilled or raw
                onions, this burger is finished with Lucky Cat's special house
                sauce.
              </p>
              <span className="infoPrice">
                {" "}
                Burgers include a side of fries, you can add furikake for $1.00
              </span>
            </div>
          </div>
          <div className="singleMenu item1">
            <img src={tofu} alt="tofu" className="menuImg" />
            <div className="menu-content">
              <h5 className="foodTitle">
                Lucky Cat's vegan tofu burger{" "}
                <span className="infoPrice">$12.00</span>
              </h5>
              <p>
                Lucky Cat's signature vegan sando! Seasoned tofu and diced
                vegetables lovingly mixed and formed into patties, panko breaded
                and fried. Topped with avocado and microgreens.
              </p>
              <span className="infoPrice">
                {" "}
                Burgers include a side of fries, you can add furikake for $1.00
              </span>
            </div>
          </div>
          <div className="menu-column3">
            <h4>Japanese Curry</h4>
            <div className="singleMenu item1">
              <img src={chickcurry} alt="Chicken Curry" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Okaasan Kare Raisu <span className="infoPrice">$8.95</span>
                </h5>
                <p>
                  Tender pieces of chicken, carrots, potatoes, and onions cooked
                  in our rich savory curry sauce. Served with rice and Japanese
                  pickles. Mild spice.
                </p>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={gyuniku} alt="Gyuniku Curry" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Gyuniku Kare Raisu <span className="infoPrice">$9.95</span>
                </h5>
                <p>
                  Medium spiced curry with beef! Served with rice and Japanese
                  pickles.
                </p>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={veggie} alt="veggie Curry" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Veggie Kare Raisu <span className="infoPrice">$8.50</span>
                </h5>
                <p>Vegan version in a medium spiced curry sauce</p>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={katsuCurry} alt="Katsu Curry" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Pork katsu curry <span className="infoPrice">$13.00</span>
                </h5>
                <p>Panko breaded and sliced pork cutlet over curry rice.</p>
                <span className="infoPrice">
                  You can upgrade to beef curry for $3.00 or chicken for $2.00
                </span>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={chickenKatsu} alt="Chicken Katsu" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Chicken katsu curry <span className="infoPrice">$12.50</span>
                </h5>
                <p>Panko breaded and sliced chicken cutlet over curry rice.</p>
                <span className="infoPrice">
                  You can upgrade to beef curry for $3.00 or chicken for $2.00
                </span>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={ebiKatsu} alt="Ebi Katsu" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Ebi katsu curry <span className="infoPrice">$14.25</span>
                </h5>
                <p>Panko breaded shrimp over curry rice.</p>
                <span className="infoPrice">
                  You can upgrade to beef curry for $3.00 or chicken for $2.00
                </span>
              </div>
            </div>
            <div className="singleMenu item1">
              <img src={tofuKatsu} alt="Tofu Katsu" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Tofu katsu curry <span className="infoPrice">$12.00</span>
                </h5>
                <p>Panko breaded and cubed tofu over curry rice.</p>
                <span className="infoPrice">
                  You can upgrade to beef curry for $3.00 or chicken for $2.00
                </span>
              </div>
            </div>
          </div>
          <div className="menu-column4">
            <h4>Kitchen Entrees</h4>
            <div className="singleMenu item1">
              <img src={saikoro} alt="saikoro steak" className="menuImg" />
              <div className="menu-content">
                <h5 className="foodTitle">
                  Saikoro Steak <span className="infoPrice">$17.00</span>
                </h5>
                <p>
                  Cubed steak quickly stir fried in butter with garlic and
                  scallions, then flavored with soy sauce. A refreshing tomato
                  salad accompanies this dish with your choice of steamed rice,
                  creamy potato salad or Hawaiian macaroni salad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
