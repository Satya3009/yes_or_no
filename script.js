// script.js

// Define positions for the "No" button
const positions = [
    { top: '10px', left: '10px' },
    { top: '10px', right: '10px' },
    { bottom: '10px', left: '10px' },
    { bottom: '10px', right: '10px' },
    { top: '50%', left: '10px' },
    { top: '50%', right: '10px' },
    { bottom: '50%', left: '10px' },
    { bottom: '50%', right: '10px' },
    { top: '25%', left: '50%' },
    { bottom: '25%', left: '50%' },
    { top: '75%', left: '50%' },
    { bottom: '75%', left: '50%' },
    { top: '0%', left: '50%' },
    { bottom: '0%', left: '50%' },
    { left: '0%', top: '50%' },
    { right: '0%', top: '50%' }
];

let noClickCount = 0;

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Hehe, I Knew It!";
    document.getElementById('response').style.color = 'green';
    document.getElementById('gifImage').src = "c:\Users\HP\Pictures\giphy.webp"; // Path to your dog GIF
    noClickCount = 0; // Reset count if needed
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    
    if (noClickCount <= positions.length) {
        const pos = positions[noClickCount - 1];
        const noButton = document.getElementById('noButton');
        noButton.style.top = pos.top || 'auto';
        noButton.style.left = pos.left || 'auto';
        noButton.style.right = pos.right || 'auto';
        noButton.style.bottom = pos.bottom || 'auto';
    }
});
