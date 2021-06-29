import React from 'react'
import './NavBar.css' 
import Search from '../../assets/Search';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png" alt="logo" />
            <div className="navitems">
            <span>Home</span>
            <span>Tv Shows</span>
            <span>Movies</span>
            <span>Kids</span>
            <div className="placeSearch">
            <Search fill="#b9bbbf" ></Search>
            <input placeholder=" Search" className="navsearch" type="text" />
            </div>
            <img className="avatar" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="avatar" />
            
            </div>
            
          
            
        </div>
    )
}

export default NavBar
