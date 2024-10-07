import React from 'react'
import { getOrderStatus } from '../../lib/utils'

const RecentOrders = () => {

  const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23147',
        customer_name: 'Vimukthi Dilshan',
        order_date: '2024-05-31T03:24:00',
        order_total: 'LKR 42 500.00',
        current_order_status: 'PLACED',
        shipment_address: 'Kurunda, Udugama, Galle 80700'
    },
    {
        id: '2',
        product_id: '4324',
        customer_id: '23147',
        customer_name: 'Vimukthi Dilshan',
        order_date: '2024-05-31T03:24:00',
        order_total: 'LKR 42 500.00',
        current_order_status: 'SHIPPED',
        shipment_address: 'Kurunda, Udugama, Galle 80700'
    },
    {
        id: '3',
        product_id: '4324',
        customer_id: '23147',
        customer_name: 'Vimukthi Dilshan',
        order_date: '2024-05-31T03:24:00',
        order_total: 'LKR 42 500.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'Kurunda, Udugama, Galle 80700'
    },
    {
        id: '4',
        product_id: '4324',
        customer_id: '23147',
        customer_name: 'Vimukthi Dilshan',
        order_date: '2024-05-31T03:24:00',
        order_total: 'LKR 42 500.00',
        current_order_status: 'SHIPPED',
        shipment_address: 'Kurunda, Udugama, Galle 80700'
    },
    {
        id: '5',
        product_id: '4324',
        customer_id: '23147',
        customer_name: 'Vimukthi Dilshan',
        order_date: '2024-05-31T03:24:00',
        order_total: 'LKR 42 500.00',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Kurunda, Udugama, Galle 80700'
    },

  ]

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className='text-gray-700 font-medium'>Recent Orders</strong>
      <div className='mt-3'>
        <table className='w-full text-gray-700 border-x border-gray-300'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Order Total</th>
                    <th>Shipping Address</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
                {recentOrderData.map((order) => (
                    <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.product_id}</td>
                        <td>{order.customer_name}</td>
                        <td>{new Date(order.order_date).toLocaleDateString()}</td>
                        <td>{order.order_total}</td>
                        <td>{order.shipment_address}</td>
                        <td>{getOrderStatus(order.current_order_status)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrders
