import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
            <Link to="/about">  <img src={require('./img/flutter.jpg')} ></img></Link>
        </div>
    )
}

export default Contact