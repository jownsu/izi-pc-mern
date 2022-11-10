import React from "react";
import AdminNav from "../components/AdminNav";
import { SlTrash } from "react-icons/sl";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Orders() {
    return (
        <div className="container orders">
            <AdminNav />

            <div className="orders__main">
                <div className="orders__filter">
                    <form>
                        <input type="text" name="search" placeholder="Search"/>
                    </form>
                    <select name="filter" id="filter">
                        <option value="order-in-process">Order in process</option>
                        <option value="shipped">Shipped</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <div className="table">
                    <table>
                        <thead className="table__heading">
                            <tr>
                                <th>Order ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Billing Address</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to={`/order/1`}>1</Link>
                                </td>
                                <td>Jhones Digno</td>
                                <td>{new Date().toLocaleDateString("en-US")}</td>
                                <td>Rosal St. Brgy. 187</td>
                                <td>₱1523</td>
                                <td className="table__status">
                                    <select name="status" id="status">
                                        <option value="order-in-process">Order in Process</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to={"/order/2"}>2</Link>
                                </td>
                                <td>Jhones Digno</td>
                                <td>{new Date().toLocaleDateString("en-US")}</td>
                                <td>Rosal St. Brgy. 187</td>
                                <td>₱1523</td>
                                <td className="table__status">
                                    <select name="status" id="status">
                                        <option value="order-in-process">Order in Process</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Pagination />
        </div>
    );
}

export default Orders;
