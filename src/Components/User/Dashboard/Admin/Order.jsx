import React from 'react';

const Order = ({order}) => {
    const {name, email,service,paymentMethod,status} = order
    return (
        <tr>
        <th>
        {name}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
             {email}
            </div>
           
          </div>
        </td>
        <td>
          {service}
          
        </td>
        <td>{paymentMethod}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{status}</button>
        </th>
      </tr>
    );
};

export default Order;