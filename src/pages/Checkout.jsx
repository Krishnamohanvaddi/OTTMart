import React, { use, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
    const[billingtoggle,setBillingToggle]=useState(true)
    const[shippingtoggle,setShippingToggle]=useState(false)
    const[paymenttoggle,setPaymentToggle]=useState(false)

    const[paymentmethod,setPaymentMethod]=useState("cod")

    const cart=useSelector(state => state.cart)
    const navigate=useNavigate()

    const[shippingInfo,setShippingInfo]=useState({
        address:'',
        city:'',
        zip:''
    })

    const handleClick=()=>{
        const newOrder={
            products:cart.products,
            shippingInformation:shippingInfo,
            orderNumber:"1234",
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">

        <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=>setBillingToggle(!billingtoggle)}>
                <h3 className="text-lg font-semibold mb-2">
                    Billing Information</h3>
                {billingtoggle ? <FaAngleDown/>: <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${billingtoggle ? "":"hidden"}`}>
                <div>
                    <label className="block text-gray-700" >Name</label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="border w-full px-3 py-2"
                  />
                </div>
         
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email"
                    placeholder="Enter mail"
                     className="border w-full px-3 py-2"

                    />
                </div>
        
                <div>
                    <label className="block text-gray-700">Phone</label>
                    <input type="text"
                    placeholder="Enter phone number"
                    className="border w-full px-3 py-2"
                    />
                </div>
            </div>
        </div>

        <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=>setShippingToggle(!shippingtoggle)}>
                <h3 className="text-lg font-semibold mb-2">
                    Shipping Information</h3>
                {shippingtoggle ? <FaAngleDown/>: <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${shippingtoggle ? "":"hidden"}`}>
                <div>
                    <label className="block text-gray-700" >Address</label>
                    <input 
                    type="text"
                    name="Address"
                    placeholder="Enter Address"
                    className="border w-full px-3 py-2"
                    onChange={(e)=>setShippingInfo({...shippingInfo,address:e.target.value})}
                  />
                </div>
         
                <div>
                    <label className="block text-gray-700">City</label>
                    <input type="Text"
                    placeholder="Enter City"
                     className="border w-full px-3 py-2"
                    onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})}
                    />
                </div>
        
                <div>
                    <label className="block text-gray-700">Zip Code</label>
                    <input type="text"
                    placeholder="Enter Zip Code"
                    className="border w-full px-3 py-2"
                    onChange={(e)=>setShippingInfo({...shippingInfo,zip:e.target.value})}
                    />
                </div>
            </div>
        </div>

        <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=>setPaymentToggle(!paymenttoggle)}>
                <h3 className="text-lg font-semibold mb-2">
                    Payment Method</h3>
                {paymenttoggle ? <FaAngleDown/>: <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${paymenttoggle ? "":"hidden"}`}>
                <div className="flex items-center mb-2">
                    <input 
                    type="radio"
                    name="payment"
                    checked={paymentmethod==="cod"}
                    onChange={()=>setPaymentMethod("cod")}
                  />
                <label className="block text-gray-700 ml-2" >Cash on Delivery</label>

                </div>

                <div className="flex items-center mb-2">
                    <input 
                    type="radio"
                    name="payment"
                    checked={paymentmethod==="dc"}
                    onChange={()=>setPaymentMethod("dc")}
                  />
                <label className="block text-gray-700 ml-2" >Debit Card</label>

                </div>
        {paymentmethod ==="dc"&&(
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-4">Debit card info</h3>
                <div className="mb-4">
                    <label className="block font-semibold mb-2 text-gray-700">Card Number</label>
                    <input type="text" placeholder="Enter Debit Card Number"
                    className="border p-2 w-full rounded" />
               </div>
     
               <div>
                    <label className="block font-semibold mb-2 text-gray-700">Card Holder Name</label>
                    <input type="text" placeholder="Enter Card Holder Name"
                    className="border p-2 w-full rounded" />

               </div>
               
            </div>
        )}
            </div>
        </div>

        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-3 ml-11 pl-7">Order Summary</h3>
        <div className="space-y-4">
            
            {cart.products.map(product=>(
                <div key={product.id} className="flex justify-between">
                    <div className="flex items-center">
                        <img src={product.image} alt=""
                        className="w-16 h-16 object-contained rounded"/>
                        <div className="ml-4">
                            
                            <h4 className="text-md font-semibold">{product.name}</h4>
                            <p className="text-gray-600">
                            ₹{product.price} X {product.quantity} 
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        ₹{product.price*product.quantity}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-4 border-t pt-4"> 
            <div className="flex justify-between">
                <span>Total Price</span>
                <span className="font-semibold">₹{cart.totalPrice.toFixed(2)}</span>
            </div>
            <button
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            onClick={handleClick}
            >Place Order</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
