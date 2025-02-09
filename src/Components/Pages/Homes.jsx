import React from 'react';
import  "./Homes.css";
const Homes = () => {
    return (
        <>

            <div className="img-heading">
                <img src="https://www.shutterstock.com/shutterstock/photos/505581388/display_1500/stock-photo-young-and-beautiful-rock-girl-playing-the-electric-guitar-505581388.jpg" alt=" hi" className="homepage-img"></img>
                <img src="https://www.shutterstock.com/shutterstock/photos/2439663371/display_1500/stock-photo-musicians-playing-acoustic-guitar-close-up-2439663371.jpg"  alt="hello" className="homepage-img"></img>
                <img src="https://c8.alamy.com/comp/2CF32BM/close-up-hands-of-beautiful-woman-recording-music-singing-and-playing-piano-while-standing-in-loft-workplace-or-at-home-concept-of-hobby-music-art-and-creation-creating-first-single-2CF32BM.jpg" alt="gdm" className="homepage-img"></img>
            </div>
            <center>
                <h1 className="music-heading1">Embark on Your Musical</h1>
                <h1 className="music-heading2">Journey</h1>
                <p className="music-heading3">At MelodyMart, we bring you the finest instruments to inspire<br></br> your musical dreams. Explore our curated selection and find the<br></br> perfect match for your sound.</p>
                <button className="shop-now">Shop Now</button>
            </center>
        </>
    );
};

export default Homes;
