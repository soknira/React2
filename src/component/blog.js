import React from 'react';

const BlogPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="bg-img1 txt-center p-lr-15 p-tb-92"
                style={{ backgroundImage: "url('images/bg-02.jpg')" }}
            >
                <h2 className="ltext-105 cl0 txt-center">Blog</h2>
            </section>

            {/* Content Page */}
            <section className="bg0 p-t-62 p-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9 p-b-80">
                            <div className="p-r-45 p-r-0-lg">
                                {/* Blog Item */}
                                {[1, 2, 3].map((item, index) => (
                                    <div className="p-b-63" key={index}>
                                        <a
                                            href="/blog-detail"
                                            className="hov-img0 how-pos5-parent"
                                        >
                                            <img src={`images/blog-0${4 + index}.jpg`} alt="IMG-BLOG" />
                                            <div className="flex-col-c-m size-123 bg9 how-pos5">
                                                <span className="ltext-107 cl2 txt-center">22</span>
                                                <span className="stext-109 cl3 txt-center">Jan 2018</span>
                                            </div>
                                        </a>

                                        <div className="p-t-32">
                                            <h4 className="p-b-15">
                                                <a
                                                    href="/blog-detail"
                                                    className="ltext-108 cl2 hov-cl1 trans-04"
                                                >
                                                    Blog Title {index + 1}
                                                </a>
                                            </h4>

                                            <p className="stext-117 cl6">
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                                                sapien eu varius
                                            </p>

                                            <div className="flex-w flex-sb-m p-t-18">
                                                <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                                    <span>
                                                        <span className="cl4">By</span> Admin
                                                        <span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        StreetStyle, Fashion, Couple
                                                        <span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>8 Comments</span>
                                                </span>

                                                <a
                                                    href="/blog-detail"
                                                    className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                                                >
                                                    Continue Reading
                                                    <i className="fa fa-long-arrow-right m-l-9"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Pagination */}
                                <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
                                    <a
                                        href="/blog-detail"
                                        className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="/blog-detail"
                                        className="flex-c-m how-pagination1 trans-04 m-all-7"
                                    >
                                        2
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 p-b-80">
                            <div className="side-menu">
                                <div className="bor17 of-hidden pos-relative">
                                    <input
                                        className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                                        type="text"
                                        name="search"
                                        placeholder="Search"
                                    />
                                    <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>
                                </div>

                                {/* Categories */}
                                <div className="p-t-55">
                                    <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
                                    <ul>
                                        {["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"].map(
                                            (category, index) => (
                                                <li className="bor18" key={index}>
                                                    <a
                                                        href="/blogdetail"
                                                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                    >
                                                        {category}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Featured Products */}
                                <div className="p-t-65">
                                    <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
                                    <ul>
                                        {[
                                            { name: "White Shirt With Pleat Detail Back", price: "$19.00" },
                                            { name: "Converse All Star Hi Black Canvas", price: "$39.00" },
                                            { name: "Nixon Porter Leather Watch In Tan", price: "$17.00" },
                                        ].map((product, index) => (
                                            <li className="flex-w flex-t p-b-30" key={index}>
                                                <a
                                                    href="/blog-detail"
                                                    className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                                                >
                                                    <img
                                                        src={`images/product-min-0${index + 1}.jpg`}
                                                        alt="PRODUCT"
                                                    />
                                                </a>

                                                <div className="size-215 flex-col-t p-t-8">
                                                    <a
                                                        href="/blog-detail"
                                                        className="stext-116 cl8 hov-cl1 trans-04"
                                                    >
                                                        {product.name}
                                                    </a>
                                                    <span className="stext-116 cl6 p-t-20">{product.price}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Archive */}
                                <div className="p-t-55">
                                    <h4 className="mtext-112 cl2 p-b-20">Archive</h4>
                                    <ul>
                                        {[
                                            "July 2018",
                                            "June 2018",
                                            "May 2018",
                                            "April 2018",
                                            "March 2018",
                                        ].map((month, index) => (
                                            <li className="p-b-7" key={index}>
                                                <a
                                                    href="/blog-detail"
                                                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span>{month}</span>
                                                    <span>({10 + index})</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="p-t-50">
                                    <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
                                    <div className="flex-w m-r--5">
                                        {["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"].map(
                                            (tag, index) => (
                                                <a
                                                    href="/blog-detail"
                                                    className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                                    key={index}
                                                >
                                                    {tag}
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
