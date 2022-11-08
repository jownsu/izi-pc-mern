import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <Link className="nav__logo" to='/'>IZI PC</Link>
            <div className="nav__side">
                <Link className='cart_count' to='/cart'>Shopping Cart (0)</Link>
                <Link to='/login' className="btn-danger">Logout</Link>
            </div>
        </div>
    )
}

export default Nav