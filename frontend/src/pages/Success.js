import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Success() {
    return (
        <div className="container success">
            <Nav />
            <p>Order in Process!</p>
            <Link className="btn-primary" to='/'>Go to Products</Link>
        </div>
    );
}

export default Success;
