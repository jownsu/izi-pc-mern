import React from 'react'
import AdminNav from '../components/AdminNav'
import { SlTrash } from 'react-icons/sl'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
import { getFive } from '../data/products'

function AdminProducts() {

    const products = getFive()

    return (
        <div className="container orders">
            <AdminNav />

            <div className="orders__main">
                <div className='table'>
                    <table>
                        <thead className='table__heading'>
                            <tr>
                                <th>Picture</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Inventory Count</th>
                                <th>Quantity Sold</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            products.map(item => {
                            let images = JSON.parse(item.images);

                            return (
                                <tr>
                                    <td><img src={`/images/${images[0]}`} alt={item.name} /></td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.inventory}</td>
                                    <td>{item.sold}</td>
                                    <td>
                                        <form>
                                            <input type="hidden" name="id" value={item.id} />
                                            <button className='btn-light mr-3'>Edit</button>
                                            <button type='submit' className='btn-danger'><SlTrash /></button>
                                        </form>
                                    </td>
                                </tr>
                            )
                            })
                        }
                        </tbody>

                    </table>
                </div>
            </div>

            <Pagination />
        </div>
    )
}

export default AdminProducts