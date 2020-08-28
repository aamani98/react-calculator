import React from 'react'
import "./navbar.css"
export default function Navbar({history}) {
    const download_history = () => {
        const newHistory = history.join('\n');
        const blob = new Blob([newHistory],{type:'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden','');
        a.setAttribute('href',url);
        a.setAttribute('download','download.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    return (
        <div className = "navbar">
            <nav className = "container">
                <span><h1><strong>myCALCi</strong></h1></span>
                <span>
                    <span onClick = {download_history}><p>History</p></span>
                </span>
            </nav>
        </div>
    )
}
