import React from 'react'
import AdminNav from '../components/AdminNav'
import { SlTrash } from 'react-icons/sl'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

function Orders() {
    return (
        <div className="container order">
            <AdminNav />

            <div className="order__main">
                <div className="order__info">
                    <div>
                        <p className="heading-2">Order ID: 47</p>
                        <p className="fw-bold">Customer Shipping Info: </p>
                        <div>
                            <p>Name: </p>
                            <p>Jhones Digno</p>
                        </div>
                        <div>
                            <p>Address: </p>
                            <p>Rosal St. Brgy. 187</p>
                        </div>
                        <div>
                            <p>City: </p>
                            <p>Caloocan City</p>
                        </div>
                        <div>
                            <p>State: </p>
                            <p>Metro Manila</p>
                        </div>
                        <div>
                            <p>Zip: </p>
                            <p>1427</p>
                        </div>
                    </div>

                    <div>
                        <p className="fw-bold mt-2">Customer Billing Info: </p>
                        <div>
                            <p>Name: </p>
                            <p>Jhones Digno</p>
                        </div>
                        <div>
                            <p>Address: </p>
                            <p>Rosal St. Brgy. 187</p>
                        </div>
                        <div>
                            <p>City: </p>
                            <p>Caloocan City</p>
                        </div>
                        <div>
                            <p>State: </p>
                            <p>Metro Manila</p>
                        </div>
                        <div>
                            <p>Zip: </p>
                            <p>1427</p>
                        </div>
                    </div>

                </div>
                <div className="order__table">
                    <div className='table'>
                        <table>
                            <thead className='table__heading'>
                                <tr>
                                    <th>ID</th>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>80</td>
                                    <td>Deepcool KG722 65%</td>
                                    <td>₱2618</td>
                                    <td className='text-right'>5</td>
                                    <td className='text-right'>₱13,090</td>
                                </tr>
                                <tr>
                                    <td>80</td>
                                    <td>Deepcool KG722 65%</td>
                                    <td>₱2618</td>
                                    <td className='text-right'>5</td>
                                    <td className='text-right'>₱13,090</td>
                                </tr>
                                <tr>
                                    <td>80</td>
                                    <td>Deepcool KG722 65%</td>
                                    <td>₱2618</td>
                                    <td className='text-right'>5</td>
                                    <td className='text-right'>₱13,090</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="order__sub-info">
                    <p className="order__status order__status--process">Status: In Process</p>
                    <div className="order__total-container">
                        <div>
                            <p>Sub Total:</p>
                            <p>₱14,995.00</p>
                        </div>
                        <div>
                            <p>Shipping:</p>
                            <p>₱50.00</p>
                        </div>
                        <div>
                            <p>Total Price:</p>
                            <p>16,045.00</p>
                        </div>
                    </div>
                </div>
                                                                                                        </div>

        </div>
    )
}

export default Orders