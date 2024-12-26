import React from "react";
import ProductDetails from "./in1Productdetail";


function ProductDetail(){
    return(
        <section class="sec-product-detail bg0 p-t-65 p-b-60">

            <ProductDetails/>


            <div class="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
			    <span class="stext-107 cl6 p-lr-25">
				    SKU: JAK-01
			    </span>

			    <span class="stext-107 cl6 p-lr-25">
				    Categories: Jacket, Men
			    </span>
		    </div>
	    </section>

    );
}   
export default ProductDetail;