const subTitle = "Save The Day";
const title = "Join on Day Long Free workShop Advance Mastaring on Sale";
const des = "Limited Time Offer! hurry Up";

const Register = () => {
  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-5">
        <div className="">
          <span className="text-2xl pb-4 block">{subTitle}</span>
          <h2 className="text-4xl mb-4 leading-10">{title}</h2>
          <p className="text-xl">{des}</p>
        </div>
        <div className="">
          <h4 className="text-center text-4xl capitalize mb-5">Register Now</h4>
          <form>
            <div className=" bg-gray-800 px-4 py-8 rounded-xl">
              <div className="pb-3">
                <label className="pb-1 block w-full" htmlFor="name">
                  User Name
                </label>
                <input
                  className="w-full px-4 py-1 bg-gray-600 outline-none rounded-md "
                  type="text"
                  name="name"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="pb-3">
                <label className="pb-1 block w-full" htmlFor="email">
                  User Email
                </label>
                <input
                  className="w-full px-4 py-1 bg-gray-600 outline-none rounded-md "
                  type="email"
                  name="email"
                  placeholder="Enter User Email"
                />
              </div>
              <div className="pb-3">
                <label className="pb-1 block w-full" htmlFor="phone">
                  User Phone
                </label>
                <input
                  className="w-full px-4 py-1 bg-gray-600 outline-none rounded-md "
                  type="text"
                  name="phone"
                  placeholder="Enter User Phone"
                />
              </div>
              <div className="pb-3">
                <button className=" border-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                  Register Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
