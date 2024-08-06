import React from "react"
import photoGrid from "../images/photo-grid.png"

// Component that displays the main introductory section
export default function Main() {
    return (
        <section className="main">
            <img src={photoGrid} className="main--photoGrid" />
            <h1 className="main--header">Online Experiences</h1>
            <p className="main--text">Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.</p>
        </section>
    )
}