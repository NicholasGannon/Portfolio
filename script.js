 // Optional: Adjust the scroll speed dynamically
 const scrollingText = document.querySelector('.scrolling-text');
 const container = document.querySelector('.overflow-hidden');

 // Calculate speed based on text width and container width
 function adjustSpeed() {
     const textWidth = scrollingText.offsetWidth;
     const containerWidth = container.offsetWidth;
     const speed = (textWidth / containerWidth) * 5; // Adjust multiplier for speed
     scrollingText.style.animationDuration = `${speed}s`;
 }

 window.onload = adjustSpeed;
