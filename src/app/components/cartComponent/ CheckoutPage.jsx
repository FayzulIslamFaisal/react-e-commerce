"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Visa");
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    email: "",
    name: "",
    address: "",
  });

  const router = useRouter();
  const [from, setFrom] = useState("/");

  // Handling location safely
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.state) {
      setFrom(window.location.state?.from?.pathname || "/");
    }
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, using selected payment method (activeTab)
    console.log("Payment Method:", activeTab);
    console.log("Form submitted with data: ", formData);
    alert("Your order was placed successfully");

    localStorage.removeItem("cart");
    router.push(from); // redirecting after form submission
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button
        onClick={handleShow}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {/* Modal */}
      {show && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="payment-modal-title"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2
                id="payment-modal-title"
                className="text-lg font-semibold text-black"
              >
                Payment Options
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4">
              <p className="text-black">
                Select your preferred payment method:
              </p>
              <div className="flex space-x-4 mt-2">
                <button
                  onClick={() => handleTabChange("Visa")}
                  className={`${
                    activeTab === "Visa"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400"
                  } py-2 px-4 rounded`}
                >
                  Visa
                </button>
                <button
                  onClick={() => handleTabChange("MasterCard")}
                  className={`${
                    activeTab === "MasterCard"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400"
                  } py-2 px-4 rounded`}
                >
                  MasterCard
                </button>
                <button
                  onClick={() => handleTabChange("PayPal")}
                  className={`${
                    activeTab === "PayPal"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400"
                  } py-2 px-4 rounded`}
                >
                  PayPal
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {/* Conditional rendering based on the selected payment method */}
                {activeTab === "PayPal" ? (
                  <>
                    <div>
                      <label className="text-left block text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-left block text-black">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-left block text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded w-full"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClose}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
