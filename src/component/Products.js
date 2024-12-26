import React from "react";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";

function Products(){
    return(
        <section class="bg0 p-t-23 p-b-140">
		<div class="container">
			<div class="p-b-10">
				<h3 class="ltext-103 cl5">
					Product Overview
				</h3>
			</div>
            <ProductFilter/>
            {/* <ProductGrid/> */}

            <div className="flex-c-m flex-w w-full p-t-45">
				<a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
					Load More
				</a>
			</div>

            </div>
        </section>
    );
}

export default Products;