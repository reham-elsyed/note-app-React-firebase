import React from "react"

export default function Navbar(props){


    return(
        <>
        <nav className="navbar">
        <button onClick ={props.createNote}>CREATE NOTE</button>
        </nav>
        </>
    )
}