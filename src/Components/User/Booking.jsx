import React from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Anti Age Face Treatment",
        paymentMethod: "creditCard",
        cardNumber: "",
        expiry: "",
        cvc: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment Successful!");
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-semibold mb-4">Book</h1>
    
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Service</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  readOnly
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Pay with</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === "creditCard"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Credit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    PayPal
                  </label>
                </div>
              </div>
    
              {formData.paymentMethod === "creditCard" && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Card Number"
                      required
                    />
                  </div>
    
                  <div className="flex gap-4">
                    <div className="mb-4 w-1/2">
                      <label className="block text-gray-700 font-medium mb-2">Expiry</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
    
                    <div className="mb-4 w-1/2">
                      <label className="block text-gray-700 font-medium mb-2">CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="CVC"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
    
              <div className="text-gray-700 mb-4">
                Your Service charged will be <span className="font-bold">$1000</span>
              </div>
    
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      );
};

export default Booking;