import React from 'react';
import { useSelector } from 'react-redux';
import OrderInvoice from '../components/OrderInvoice';
import { PDFViewer } from "@react-pdf/renderer";

const OrderPage = () => {
    const  {cart}  = useSelector((state) => state);
   
    return (
        <div>
            {cart.map((order) => (
                <PDFViewer key={order.id} style={{ width: "100%", height: "100vh" }}>
                    <OrderInvoice order={order}  />
                </PDFViewer>
            ))}
        </div>
    );
};

export default OrderPage;
