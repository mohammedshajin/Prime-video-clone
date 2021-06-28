import React from 'react'
import './NavBar.css' 

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png" alt="logo" />
            <div className="navitems">
            <span>Home</span>
            <span>Tv Shows</span>
            <span>Movies</span>
            <span>Kids</span>
            </div>
            
        </div>
    )
}

export default NavBar
