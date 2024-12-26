import React, { useState, useEffect } from "react";

function In1product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch products from the API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="row isotope-grid">
            {products.map((product) => (
                <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
                    {/* Block2 */}
                    <div className="block2">
                        <div className="block2-pic hov-img0">
                            <img src={product.image} alt={product.title} />

                            <a href="/detail" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                Quick View
                            </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                            <div className="block2-txt-child1 flex-col-l">
                                <a href="#" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    {product.title}
                                </a>

                                <span className="stext-105 cl3">
                                    ${product.price}
                                </span>
                            </div>

                            <div className="block2-txt-child2 flex-r p-t-3">
                                <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                    <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                    <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default In1product;
