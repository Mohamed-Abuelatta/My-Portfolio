import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> FullStack Developer</span></h4>
                <p className="about-text">
                    Full Stack Developer with 6+ years of hands-on experience designing, 
                    developing, and implementing applications and solutions using a range of technologies and programming languages. 
                    Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Mohamed Ibrahim Abuelatta</p>
                        <p>: 37</p>
                        <p>: Egyption</p>
                        <p>: Arabic (native), English (IELTS), Turkiesh (Beginner)</p>
                        <p>: 40-42, Mihraci ST, Ornek, Ataşehir, Istanbul Asian Side, Turkey</p>
                        <p>: Egypt, Turkey</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
