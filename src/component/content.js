import React from "react";
import Cart from "./cart";
import Banner from "./banner";
import Products from "./Products";
import SliderComponent from "./slide-show";



function Content(){
    return(
        <div>
            <Cart/>
            <SliderComponent/>
            <Banner/>
            <Products/>
        </div>
    );
}
export default Content;