import React from "react";
import Order from "./Order";

const OrderList = () => {
  const orders = [
    {
      id: 1,
      name: "Anika Ahmed",
      email: "anika@gmail.com",
      service: "Skin Care Treatment",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      id: 2,
      name: "Anika Ahmed",
      email: "anika@gmail.com",
      service: "Skin Care Treatment",
      paymentMethod: "Credit Card",
      status: "Done",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg">
        <div className='flex items-center justify-between font-bold'>
                <h1>Order List</h1>
                <h1>Pro Rasel</h1>
            </div>
    <div className="bg-slate-50 min-h-screen p-8">
    <div className="overflow-x-auto border-2 rounded-2xl bg-white">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>Email</th>
        <th>Service</th>
        <th>PaymentMethodr</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        orders.map(order => <Order key={order.id} order={order}></Order>)
    }
    
    </tbody>
    {/* foot */}
   
  </table>
</div>
    </div>
    </div>
  );
};

export default OrderList;
