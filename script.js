// ============================================
// GLOBAL VARIABLES
// ============================================
let currentScene = 'arcade';

// Arcade game variables
let arcadeScore = 0;
let catcherPosition = 50;
let arcadeActive = false;
let spawnInterval;

// Memory game variables


const memorySymbols = [
    { image: 'memory1.png', title: "our first new year together", text: "you watched me play in people's park and we light up the firecrackers together with your siblings." },
    { image: 'memory2.png', title: "our first tagaytay!", text: "it was our first time going for a long ride and we had so much fun exploring where lomihan is located and we had no choice but to watch the Demon Slayer 'cause it was raining." },
    { image: 'memory3.png', title: "our MOA moments", text: "it was frightening to ride the ferris wheel and you got angry because I couldn't smile but I was just enjoying the view with you. I love you XD" },
    { image: 'memory4.png', title: "IBits moments", text: "it was a fun day not because we were together, but because we both decided to go public as a couple and your parents actually approved." },
    { image: 'memory5.png', title: "UP moments", text: "i had so much fun to see UP and other spots that I can only see on Tiktok and other socmed." },
    { image: 'memory6.png', title: "It takes two", text: "this game taught me how to be patient with you and i had realized that in our retirement phase, we'll still be together and playing games to waste our time together." }
];
let memoryCards = [];
let flippedMemoryCards = [];
let matchedPairs = 0;
let canFlipMemory = true;
let currentMemoryIndex = 0;

// Date selection messages
const dateMessages = {
    cafe: "huwag ka na mamili gagawin din naman natin lahat yan! see you beh, i love you ♡",
    park: "huwag ka na mamili gagawin din naman natin lahat yan! see you beh, i love you ♡",
    movies: "huwag ka na mamili gagawin din naman natin lahat yan! see you beh, i love you ♡"
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createSparkles();
    initArcadeGame();
    initMemoryGame();
    initDateSelection();
});

// Create sparkles
function createSparkles() {
    const container = document.getElementById('sparkles');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(sparkle);
    }
}

// ============================================
// SCENE TRANSITIONS
// ============================================
function switchScene(fromScene, toScene) {
    const from = document.getElementById(fromScene + '-scene');
    const to = document.getElementById(toScene + '-scene');
    
    from.classList.remove('active');
    
    setTimeout(() => {
        to.classList.add('active');
        currentScene = toScene;
    }, 500);
}

// ============================================
// PART 2: ARCADE GAME
// ============================================
function initArcadeGame() {
    const startBtn = document.getElementById('start-arcade-btn');
    const continueBtn = document.getElementById('continue-to-memory-btn');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const catcher = document.getElementById('catcher');
    const gameArea = document.getElementById('game-area');
    const scoreDisplay = document.getElementById('arcade-score');
    
    startBtn.addEventListener('click', startArcadeGame);
    continueBtn.addEventListener('click', () => switchScene('arcade', 'memory'));
    leftBtn.addEventListener('click', () => moveCatcher('left'));
    rightBtn.addEventListener('click', () => moveCatcher('right'));
    
    leftBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveCatcher('left');
    });
    
    rightBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveCatcher('right');
    });
    
    document.addEventListener('keydown', (e) => {
        if (currentScene === 'arcade' && arcadeActive) {
            if (e.key === 'ArrowLeft') moveCatcher('left');
            if (e.key === 'ArrowRight') moveCatcher('right');
        }
    });
    
    function startArcadeGame() {
        document.getElementById('arcade-start-view').classList.remove('active');
        document.getElementById('arcade-game-view').classList.add('active');
        arcadeActive = true;
        arcadeScore = 0;
        updateArcadeScore();
        startSpawning();
    }
    
    function updateArcadeScore() {
        scoreDisplay.textContent = arcadeScore;
        if (arcadeScore >= 10) {
            endArcadeGame();
        }
    }
    
    function moveCatcher(direction) {
        if (!arcadeActive) return;
        
        if (direction === 'left') {
            catcherPosition = Math.max(10, catcherPosition - 8);
        } else {
            catcherPosition = Math.min(90, catcherPosition + 8);
        }
        catcher.style.left = catcherPosition + '%';
    }
    
    function startSpawning() {
        spawnInterval = setInterval(() => {
            if (arcadeActive && arcadeScore < 10) {
                spawnItem();
            }
        }, 1500);
    }
    
    function spawnItem() {
        const item = document.createElement('div');
        item.className = 'falling-item';
        
        const items = ['💖', '💕', '💗', '💝', '💓', '💖', '💕', '💗', '🌟', '✨'];
        const emoji = items[Math.floor(Math.random() * items.length)];
        item.textContent = emoji;
        
        const startX = 10 + Math.random() * 80;
        item.style.left = startX + '%';
        
        const duration = 3 + Math.random() * 2;
        item.style.animationDuration = duration + 's';
        
        gameArea.appendChild(item);
        
        const checkCollision = setInterval(() => {
            if (!arcadeActive) {
                clearInterval(checkCollision);
                return;
            }
            
            const itemRect = item.getBoundingClientRect();
            const catcherRect = catcher.getBoundingClientRect();
            
            if (
                itemRect.left < catcherRect.right &&
                itemRect.right > catcherRect.left &&
                itemRect.top < catcherRect.bottom &&
                itemRect.bottom > catcherRect.top
            ) {
                if (emoji.includes('💖') || emoji.includes('💕') || emoji.includes('💗') || 
                    emoji.includes('💝') || emoji.includes('💓')) {
                    arcadeScore++;
                    updateArcadeScore();
                    item.remove();
                    clearInterval(checkCollision);
                    
                    catcher.style.transform = 'translateX(-50%) scale(1.2)';
                    setTimeout(() => {
                        catcher.style.transform = 'translateX(-50%) scale(1)';
                    }, 100);
                }
            }
        }, 50);
        
        setTimeout(() => {
            if (item.parentElement) {
                item.remove();
            }
            clearInterval(checkCollision);
        }, duration * 1000);
    }
    
    function endArcadeGame() {
        arcadeActive = false;
        clearInterval(spawnInterval);
        setTimeout(() => {
            document.getElementById('arcade-game-view').classList.remove('active');
            document.getElementById('arcade-result-view').classList.add('active');
        }, 500);
    }
}

// ============================================
// PART 3: MEMORY GAME
// ============================================
function initMemoryGame() {
    const grid = document.getElementById('memory-grid');
    const progressDisplay = document.getElementById('memory-progress');
    const progressFill = document.getElementById('memory-progress-fill');
    const modal = document.getElementById('memory-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    
    closeBtn.addEventListener('click', closeMemoryModal);
    
    let gameSymbols = [...memorySymbols, ...memorySymbols];
    gameSymbols = shuffle(gameSymbols);
    
    grid.innerHTML = '';
    memoryCards = [];
    
    gameSymbols.forEach((memoryData, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = memoryData.image;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back">?</div>
                <div class="card-face card-front">
                    <img src="${memoryData.image}" alt="memory" class="memory-card-img">
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => flipMemoryCard(card));
        grid.appendChild(card);
        memoryCards.push(card);
    });
    
    function flipMemoryCard(card) {
        if (!canFlipMemory || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }
        
        card.classList.add('flipped');
        flippedMemoryCards.push(card);
        
        if (flippedMemoryCards.length === 2) {
            canFlipMemory = false;
            setTimeout(checkMemoryMatch, 600);
        }
    }
    
    function checkMemoryMatch() {
        const [card1, card2] = flippedMemoryCards;
        const match = card1.dataset.symbol === card2.dataset.symbol;
        
        if (match) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            
            updateMemoryProgress();
            showMemoryModal();
            
            if (matchedPairs === 6) {
                setTimeout(() => {
                    switchScene('memory', 'date');
                }, 1000);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 400);
        }
        
        flippedMemoryCards = [];
        canFlipMemory = true;
    }
    
    function updateMemoryProgress() {
        progressDisplay.textContent = matchedPairs;
        progressFill.style.width = (matchedPairs / 6 * 100) + '%';
    }
    
    function showMemoryModal() {
        const matchedCard = flippedMemoryCards[0];
        const matchedImage = matchedCard.dataset.symbol;
        
        const memoryData = memorySymbols.find(memory => memory.image === matchedImage);
        
        if (memoryData) {
            document.getElementById('modal-title').textContent = memoryData.title;
            document.getElementById('modal-text').textContent = memoryData.text;
            modal.classList.add('active');
        }
    }
    
    function closeMemoryModal() {
        modal.classList.remove('active');
    }
}

// ============================================
// PART 4: DATE SELECTION
// ============================================
function initDateSelection() {
    const dateCards = document.querySelectorAll('.date-card');
    const finalModal = document.getElementById('final-modal');
    const finalMessage = document.getElementById('final-message');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    dateCards.forEach(card => {
        card.addEventListener('click', () => {
            const place = card.dataset.place;
            finalMessage.textContent = dateMessages[place];
            finalModal.classList.add('active');
        });
    });
    
    yesBtn.addEventListener('click', sayYes);
    noBtn.addEventListener('click', function() { 
        runAway(this); 
        showNoButtonMessage(); 
    });
    
    let noClickCount = 0;
    const noMessages = [
        "wag ka na mag-tampo",
        "yes na please", 
        "mag yeyes na yan!",
        "wala hindi mo macliclick yan!"
    ];
    
    function showNoButtonMessage() {
        const message = noMessages[noClickCount % noMessages.length];
        noBtn.textContent = message;
        noClickCount++;
    }
}

function sayYes() {
    document.getElementById('celebration').classList.add('active');
    createCelebrationHearts();
}

function runAway(btn) {
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    btn.style.position = 'fixed';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
    btn.style.zIndex = '2000';
}

function createCelebrationHearts() {
    const container = document.getElementById('celebration-hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = '2rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.animation = 'floatUp 4s ease-in-out';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 200);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}