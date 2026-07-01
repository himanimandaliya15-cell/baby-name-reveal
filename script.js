// Baby names and their meanings
const babyNames = [
    { name: "Riyanshi", meaning: "Noble and Sublime - A name of strength and grace" }
];

// Current baby name index
let currentNameIndex = 0;

// DOM Elements
const mysteryBox = document.getElementById('mysteryBox');
const revealBtn = document.getElementById('revealBtn');
const babyNameElement = document.getElementById('babyName');
const nameMeaningElement = document.getElementById('nameMeaning');
const confettiContainer = document.getElementById('confetti');

// Set initial name
function setInitialName() {
    currentNameIndex = Math.floor(Math.random() * babyNames.length);
    babyNameElement.textContent = babyNames[currentNameIndex].name;
    nameMeaningElement.textContent = babyNames[currentNameIndex].meaning;
}

// Reveal the name
function revealName() {
    // Add revealed class to flip the box
    mysteryBox.classList.add('revealed');
    
    // Disable button after click
    revealBtn.disabled = true;
    revealBtn.textContent = "🎊 Name Revealed! 🎊";
    
    // Create confetti
    createConfetti();
    
    // Play a sound effect (optional - you can uncomment if you want)
    // playSound();
}

// Create confetti pieces
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6d9', '#ffc0cb', '#ffd6e8'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Random position
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 0.3;
        const randomDuration = 2 + Math.random() * 1.5;
        
        // Random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.backgroundColor = randomColor;
        
        // Random shape (circle or square)
        if (Math.random() > 0.5) {
            confettiPiece.style.borderRadius = '50%';
        }
        
        confettiPiece.style.left = randomX + 'px';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.animation = `confettiFall ${randomDuration}s ease-out ${randomDelay}s forwards`;
        
        confettiContainer.appendChild(confettiPiece);
        
        // Remove element after animation
        setTimeout(() => {
            confettiPiece.remove();
        }, (randomDuration + randomDelay) * 1000);
    }
}

// Optional: Play sound on reveal (uncomment to use)
function playSound() {
    // You can use Web Audio API or embed an audio element
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 1000;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.1, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Event listener for reveal button
revealBtn.addEventListener('click', revealName);

// Allow clicking on the box to reveal (optional)
mysteryBox.addEventListener('click', () => {
    if (!mysteryBox.classList.contains('revealed')) {
        revealName();
    }
});

// Initialize
setInitialName();

// Optional: Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !revealBtn.disabled) {
        revealName();
    }
});
