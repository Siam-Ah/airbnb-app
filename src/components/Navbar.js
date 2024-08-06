import React from "react"
import airbnbPhoto from "../images/airbnb-logo.png"

// Component that displays the navigation bar
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnbPhoto} className="navbar--airbnbPhoto" />
        </nav>
    )
}