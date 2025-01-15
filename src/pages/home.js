import React, { useRef, useEffect, useState } from 'react';
import NavigationBar from '../components/navbar';
import videoSource from '../assets/Logovid.mp4'; // Import the video file from the assets directory
import logoImage from '../assets/Logo.jpeg'; // Import the logo image

const Home = () => {
  const videoRef = useRef(null); // Create a reference to the video element
  const [videoEnded, setVideoEnded] = useState(false); // State to track if the video has ended

  // Check local storage to see if the video has already played
  const hasVideoPlayed = sessionStorage.getItem('videoPlayed');

  useEffect(() => {
    if (!hasVideoPlayed && videoRef.current) {
      // Autoplay the video if it hasn't played yet
      videoRef.current.play();
      videoRef.current.playbackRate = 5;
      // Mark the video as played in session storage
      sessionStorage.setItem('videoPlayed', 'true');
    }
  }, [hasVideoPlayed]);

  // Function to handle the video end event
  const handleVideoEnd = () => {
    setVideoEnded(true); // Set the state to indicate the video has ended
  };

  return (
    <div style={{ minHeight: '150vh' }}> {/* Extend the main site page height */}
    <div style={{ position: 'sticky', top: 0, zIndex: 100}}>
      <NavigationBar username="JohnDoe" />
    </div>
 {/* Include the NavigationBar in the Home component */}
      <div style={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "5px"}}>
        {/* Add a video element to render the video */}
        {!hasVideoPlayed && ( // Only render the video if it hasn't played yet
          <video
            ref={videoRef} // Attach the reference to the video element
            style={{
              width: '100%', // Adjust video width
              height: '98%', // Adjust video height
              objectFit: 'cover', // Ensure the video covers the container
              borderRadius: '2px', // Add border radius to the video
              opacity: videoEnded ? 0 : 1, // Fade out the video when it ends
              transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Smooth fade and scale transition
              transform: videoEnded ? 'scale(0.9)' : 'scale(1)', // Slightly scale down the video when it ends
            }}
            muted
            onEnded={handleVideoEnd} // Attach the event handler for the end event
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Add an image element to display the logo */}
        <img
          src={logoImage}
          alt="Logo"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${videoEnded || hasVideoPlayed ? 1 : 0.9})`, // Center and scale the image
            height: 'auto', // Maintain original size
            maxWidth: '100%', // Ensure it doesn't overflow
            maxHeight: '100%', // Ensure it doesn't overflow
            borderRadius: '5px', // Add border radius
            opacity: videoEnded || hasVideoPlayed ? 1 : 0, // Fade in the image when the video ends or if video has already played
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Smooth fade and scale transition
            boxShadow: videoEnded || hasVideoPlayed ? '0 4px 15px rgba(0, 0, 0, 0.3)' : 'none', // Add shadow for better transition
          }}
        />
      </div>
    </div>
  );
};

export default Home;