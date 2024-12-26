import React from "react";

const BlogDetail = () => {
  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
        <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
          Home
          <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
        </a>

        <a href="blog.html" className="stext-109 cl8 hov-cl1 trans-04">
          Blog
          <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
        </a>

        <span className="stext-109 cl4">
          8 Inspiring Ways to Wear Dresses in the Winter
        </span>
      </div>

      {/* Content Page */}
      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* Blog Image */}
                <div className="wrap-pic-w how-pos5-parent">
                  <img src="images/blog-04.jpg" alt="IMG-BLOG" />

                  <div className="flex-col-c-m size-123 bg9 how-pos5">
                    <span className="ltext-107 cl2 txt-center">22</span>
                    <span className="stext-109 cl3 txt-center">Jan 2018</span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-t-32">
                  <span className="flex-w flex-m stext-111 cl2 p-b-19">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      22 Jan, 2018
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      StreetStyle, Fashion, Couple
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>8 Comments</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">
                    8 Inspiring Ways to Wear Dresses in the Winter
                  </h4>

                  <p className="stext-117 cl6 p-b-26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet est vel orci luctus sollicitudin. Duis
                    eleifend vestibulum justo, varius semper lacus condimentum
                    dictum...
                  </p>

                  <p className="stext-117 cl6 p-b-26">
                    Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
                    Pellentesque sem ex, tristique sit amet suscipit in, mattis
                    imperdiet enim...
                  </p>
                </div>

                {/* Tags */}
                <div className="flex-w flex-t p-t-16">
                  <span className="size-216 stext-116 cl8 p-t-4">Tags</span>
                  <div className="flex-w size-217">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="p-t-40">
                  <h5 className="mtext-113 cl2 p-b-12">Leave a Comment</h5>
                  <p className="stext-107 cl6 p-b-40">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form>
                    <div className="bor19 m-b-20">
                      <textarea
                        className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
                        name="cmt"
                        placeholder="Comment..."
                      ></textarea>
                    </div>
                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="name"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="email"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="bor19 size-218 m-b-30">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="web"
                        placeholder="Website"
                      />
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                {/* Search */}
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
                    <li className="bor18">
                      <a
                        href="#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        Fashion
                      </a>
                    </li>
                    {/* Add more categories as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
