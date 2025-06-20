import React, { useState, useEffect } from 'react';

const images = [
    { src: '/assets/birthdaycake.jpg', alt: 'Birthday Cake Example' },
    { src: '/assets/vanilla cake.jpg', alt: 'Vanilla Cake Example' },
    { src: '/assets/red velvet cake.jpg', alt: 'Red Velvet Cake Example' },
    { src: '/assets/chocolate cake.jpg', alt: 'Chocalate Cake Example' },
    { src: '/assets/graduationcake.jpg', alt: 'Graduation Cake Example' }
  ];

function ImageTransitions() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);}, 3000); // This will transition each image every 3 seconds.
        return () => clearInterval(interval);}, []);

    return (
        <div className="image-transition">
            <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                style={{
                width: '400px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px'
                }}
                className="transition-image"
                />


            <style>{`
                .image-transition {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                .transition-image {
                    width: 100%;
                    height: auto;
                    transition: opacity 1s ease-in-out;
                }
            `}</style>
        </div>
    );
}

export default ImageTransitions;
