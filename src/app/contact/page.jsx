"use client";

import PageHeader from "../components/PageHeader";

const contactList = [
  {
    imgUrl: "/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    const allData = Object.fromEntries(formData.entries());
    console.log("handleFormSubmit", allData);
  };
  return (
    <>
      <div className="pt-12">
        <PageHeader
          pageTitle="Get in touch With Us"
          currentPage="Countact Us"
        />
      </div>
      <div className="py-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24198.751624492204!2d17.315782682885516!3d40.69943426927258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1346530aec9a9737%3A0xef72bef381c9015b!2zNzQwMTUgTWFydGluYSBGcmFuY2EsIOCmn-CmvuCmsOCmvuCmqOCnjeCmn-CniyDgpqrgp43gprDgpqbgp4fgprYsIOCmh-CmpOCmvuCmsuCmvw!5e0!3m2!1sbn!2sbd!4v1728839961948!5m2!1sbn!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }} // Correctly set the style as an object
          allowFullScreen="" // Changed to camelCase `allowFullScreen`
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" container mx-auto px-4 py-[30px] md:py-[60px]">
        <h1 className="text-center capitalize font-semibold text-white text-3xl">
          Contact Us{" "}
        </h1>
        <form
          action={handleFormSubmit}
          className="max-w-md mx-auto w-full text-white  p-5"
        >
          <div className="pb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="false"
              className="w-full text-white px-2 py-1 bg-transparent border-white border-2 border-solid rounded-md"
            />
          </div>
          <div className="pb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="false"
              className="w-full text-white px-2 py-1 bg-transparent border-white border-2 border-solid rounded-md"
            />
          </div>
          <div className="pb-3">
            <textarea
              name="message"
              placeholder="Enter your message"
              autoComplete="false"
              rows={8}
              className="w-full text-white px-2 py-1 bg-transparent border-white border-2 border-solid rounded-md"
            />
          </div>
          <div className="pb-0">
            <button
              type="submit"
              className=" text-left capitalize w-full text-white px-2 py-1 bg-transparent border-white border-2 border-solid rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
