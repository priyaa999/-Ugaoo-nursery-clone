import React, { useEffect, useState } from 'react'
import './Announcements.css'

export default function Announcements() {
    const announcements = [
        { text: "🚚 Free Shipping above ₹499 | All India Delivery", link: "/shipping-policy" },
        { text: "🌱 Organic Fertilizers | Shop Now", link: "/fertilizers" },
        { text: "🪴 Buy Our XL Plants", link: "/xl-plants" }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === announcements.length - 1 ? 0 : prevIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (

        <>
            <div className="announcement-container">

                {/* {Static view on large screens} */}

                <div className="announcement-static">
                    {announcements.map((item, index) =>
                    (
                        <a key={index} href={item.link} className='announcement-text'>
                            {item.text}
                        </a>
                    ))}
                </div>


                {/* {Scrolling view on small screens} */}

                <div className='announcement-slider'>
                    <div className='announcement-bar'>
                        {announcements.concat(announcements).map((item, index) => ( // concat use for duplicate the list 
                            <a key={index} href={item.link} className="announcement-text">
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )



}

