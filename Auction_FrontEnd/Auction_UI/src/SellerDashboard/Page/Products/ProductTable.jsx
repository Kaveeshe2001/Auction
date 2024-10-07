import React, { useState, useEffect } from 'react';
import { getOrderStatus } from '../../lib/utils';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    product_id: '',
    customer_id: '',
    customer_name: '',
    order_date: '',
    order_total: '',
    current_order_status: '',
    shipment_address: ''
  });

  useEffect(() => {
    // Simulating data fetch from an API
    const fetchData = async () => {
      // Replace this with actual API call
      const data = [
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
        // ... other product data
      ];
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    setEditingId(null);
    // Here you would typically make an API call to update the product
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
    // Here you would typically make an API call to delete the product
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setProducts(products.map(product => 
      product.id === id ? { ...product, [name]: value } : product
    ));
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const id = (parseInt(products[products.length - 1].id) + 1).toString();
    setProducts([...products, { id, ...newProduct }]);
    setNewProduct({
      product_id: '',
      customer_id: '',
      customer_name: '',
      order_date: '',
      order_total: '',
      current_order_status: '',
      shipment_address: ''
    });
    // Here you would typically make an API call to add the new product
  };

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className='text-gray-700 font-medium'>Products</strong>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>#{product.id}</td>
                <td>
                  {editingId === product.id ? (
                    <input
                      name="product_id"
                      value={product.product_id}
                      onChange={(e) => handleInputChange(e, product.id)}
                    />
                  ) : (
                    product.product_id
                  )}
                </td>
                <td>
                  {editingId === product.id ? (
                    <input
                      name="customer_name"
                      value={product.customer_name}
                      onChange={(e) => handleInputChange(e, product.id)}
                    />
                  ) : (
                    product.customer_name
                  )}
                </td>
                <td>{new Date(product.order_date).toLocaleDateString()}</td>
                <td>{product.order_total}</td>
                <td>{product.shipment_address}</td>
                <td>{getOrderStatus(product.current_order_status)}</td>
                <td>
                  {editingId === product.id ? (
                    <button onClick={() => handleSave(product.id)}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(product.id)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4'>
        <h3>Add New Product</h3>
        <input
          name="product_id"
          value={newProduct.product_id}
          onChange={handleNewProductChange}
          placeholder="Product ID"
        />
        <input
          name="customer_name"
          value={newProduct.customer_name}
          onChange={handleNewProductChange}
          placeholder="Customer Name"
        />
        {/* Add other input fields for the new product */}
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default ProductTable;