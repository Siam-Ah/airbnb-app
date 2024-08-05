import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import dataImport from "./data"

export default function App() {
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