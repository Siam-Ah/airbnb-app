import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import dataImport from "./data"

// Main application component that renders Navbar, Main, and a list of Card components
export default function App() {
    // Creates an array of Card components from the imported data
    const dataElements = dataImport.map(data => {
        return <Card 
            key={data.id}
            data={data}
        />
    })
    return (
        <div>
            <Navbar />
            <Main />
            <section className="cards-list">
                {dataElements}
            </section>
        </div>
    )
}