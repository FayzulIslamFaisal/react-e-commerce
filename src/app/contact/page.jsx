"use client";
const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    const allData = Object.fromEntries(formData.entries());
    console.log("handleFormSubmit", allData);
  };
  return (
    <>
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
              className="text-white text-left capitalize w-full text-white px-2 py-1 bg-transparent border-white border-2 border-solid rounded-md"
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
