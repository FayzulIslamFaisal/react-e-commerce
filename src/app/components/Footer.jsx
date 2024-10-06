import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  const contactInfo = [
    {
      id: crypto.randomUUID(),
      icon: <FaLocationDot />,
      title: "Find Us",
      contact: "Dhaka, Bangladesh",
    },
    {
      id: crypto.randomUUID(),
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      contact: "01739245723",
    },
    {
      id: crypto.randomUUID(),
      icon: <FaMailBulk />,
      title: "Mail Us",
      contact: "mfbfaisal@gmail.com",
    },
  ];

  return (
    <div className="px-4 py-3 bg-gray-700 text-white">
      <div className=" container mx-auto flex col-span-1 md:col-span-2 lg:col-span-3 justify-between ">
        {contactInfo?.map((items) => {
          const { id, icon, title, contact } = items;
          return (
            <div key={id} className="p-3 flex gap-3">
              <div className="text-white">{icon}</div>
              <div className="">
                <h4>{title}</h4>
                <p>{contact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
