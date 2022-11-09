import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
    return (
        <div className="nav"> 
            <div className="nav__links admin-links">
                <Link className="nav__logo" to='/orders'>Dashboard</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/dashboard/products'>Products</Link>
            </div>
            <div className="nav__side">
                <Link to='/login' className="btn-danger">Logout</Link>
            </div>
        </div>
    )
}

export default AdminNav