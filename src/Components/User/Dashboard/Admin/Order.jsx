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
          <select value={status} name="" id="">
            <option value="Pending">Pending</option>
            <option  value="Done">Done</option>
          </select>
        </th>
      </tr>
    );
};

export default Order;