import React from "react";
// import emailIcon from './images/icons/icon-email.png';


function ContactPage() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <h2 className="ltext-105 cl0 txt-center">Contact</h2>
      </section>

      {/* Content Section */}
      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="flex-w flex-tr">
            {/* Contact Form */}
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <form>
                <h4 className="mtext-105 cl2 txt-center p-b-30">
                  Send Us A Message
                </h4>

                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  <img
                    className="how-pos4 pointer-none"
                    src="images/icons/icon-email.png"
                    alt="ICON"
                  />
                </div>

                <div className="bor8 m-b-30">
                  <textarea
                    className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                    name="msg"
                    placeholder="How Can We Help?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-map-marker"></span>
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Address</span>
                  <p className="stext-115 cl6 size-213 p-t-18">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>

              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-phone-handset"></span>
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Let's Talk</span>
                  <p className="stext-115 cl1 size-213 p-t-18">+1 800 1236879</p>
                </div>
              </div>

              <div className="flex-w w-full">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-envelope"></span>
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Sale Support</span>
                  <p className="stext-115 cl1 size-213 p-t-18">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map">
      {/* Embedded Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11305.443218280534!2d104.91022662479504!3d11.572002526110658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2skh!4v1732254382685!5m2!1sen!2skh"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

      {/* Additional Map Section (if required for data attributes) */}
      {/* <div
        className="size-303"
        id="google_map"
        data-map-x="11.572579"
        data-map-y="104.910070"
        data-pin="images/icons/pin.png"
        data-scrollwheel="0"
        data-draggable="1"
        data-zoom="11"
      ></div> */}
    </div>
    </>
  );
}

export default ContactPage;
