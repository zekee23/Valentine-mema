# Valentine's Day Interactive Experience 💕

A romantic, interactive Valentine's Day experience built with HTML, CSS, and JavaScript. This project creates an engaging journey through games and memories, culminating in a heartfelt Valentine's proposal.

## 🎮 Features

### Multi-Stage Experience
- **Arcade Game**: Catch falling hearts to unlock memories
- **Memory Card Game**: Match photo pairs to reveal personal messages
- **Date Selection**: Choose your perfect Valentine's date
- **Interactive Proposal**: Final Valentine's question with playful interactions

### 🎨 Customization
- **Personal Photos**: Replace placeholder images with your own memories
- **Custom Messages**: Personalized Tagalog messages for each date option
- **Dynamic Interactions**: Moving "NO" button with cycling messages
- **Responsive Design**: Works on desktop and mobile devices

## 📁 Project Structure

```
valentines-mema/
├── index.html          # Main HTML structure
├── script.js           # Game logic and interactions
├── styles.css           # Styling and animations
├── catcher.png          # Arcade game catcher image
├── memory1.png         # Memory card images (6 total)
├── memory2.png
├── memory3.png
├── memory4.png
├── memory5.png
└── memory6.png
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Setup
1. **Clone or download** the project files
2. **Add your photos**: Replace `memory1.png` through `memory6.png` with your own memories
3. **Add catcher image**: Replace `catcher.png` with your preferred catcher design
4. **Customize messages**: Edit `dateMessages` in `script.js` to personalize
5. **Open in browser**: Simply open `index.html` in any web browser

## 🎮 How to Play

### Stage 1: Arcade Game
- Use **arrow keys** or **on-screen buttons** to move the catcher
- **Catch 10 hearts** to progress to the next stage
- Hearts and stars fall from the top - catch the hearts!

### Stage 2: Memory Game
- **Click cards** to flip and reveal photos
- **Match pairs** of identical photos to unlock messages
- Each matched pair shows a personalized memory message
- Complete all 6 pairs to reach the final stage

### Stage 3: Date Selection
- Choose from three romantic date options
- Each option has a personalized Tagalog message
- Click to see your personalized date confirmation

### Stage 4: The Big Question
- Answer the ultimate Valentine's question
- **"YES!"** leads to celebration screen
- **"NO"** button moves around playfully with cycling messages

## 🛠️ Customization Guide

### Changing Photos
1. Replace `memory1.png` to `memory6.png` with your own photos
2. Use square images for best results (1:1 ratio)
3. Recommended size: 400x400px or larger

### Editing Messages
Edit the `dateMessages` object in `script.js`:
```javascript
const dateMessages = {
    cafe: "your custom message here",
    park: "your custom message here", 
    movies: "your custom message here"
};
```

### Memory Card Messages
Edit the `memorySymbols` array to customize memory messages:
```javascript
const memorySymbols = [
    { 
        image: 'memory1.png', 
        title: "your title", 
        text: "your personal memory message" 
    },
    // ... more memories
];
```

## 🎨 Styling
- **Responsive design** adapts to different screen sizes
- **Smooth animations** for card flips and transitions
- **Arcade aesthetic** with retro gaming vibes
- **Romantic color scheme** with pinks, reds, and golds

## 🌟 Special Features

### Interactive Elements
- **Keyboard support**: Arrow keys for arcade game
- **Touch support**: Mobile-friendly buttons
- **Sound ready**: Structure prepared for audio additions
- **Accessibility**: Semantic HTML and ARIA-friendly

### Easter Eggs
- **Playful NO button**: Cycles through 4 custom messages
- **Random positioning**: NO button moves to random locations
- **Celebration screen**: Animated hearts and success message

## 📱 Mobile Compatibility
- Fully responsive design
- Touch-friendly controls
- Optimized for mobile browsers
- Works in both portrait and landscape

## 🎯 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern features
- **CSS3**: Animations, flexbox, grid
- **Vanilla JavaScript**: No external dependencies
- **Google Fonts**: Bungee, VT323, IBM Plex Mono, Crimson Pro

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 💝 Deployment

### GitHub Pages
1. **Push to GitHub**: Upload all files to your repository
2. **Enable GitHub Pages**: In repository settings
3. **Visit site**: `https://username.github.io/repository-name`

### Self-Hosting
1. **Upload files**: Use any web hosting service
2. **Ensure paths**: All file paths remain relative
3. **Test live**: Verify all interactions work

## 🎁 Gift Ideas

This project makes a perfect digital Valentine's gift when:
- **Personalized with your own photos**
- **Customized with meaningful messages**
- **Shared via a simple link**
- **Accessible on any device**

## 💌 Message from the Creator

This Valentine's experience is designed to be:
- **Personal and intimate**
- **Fun and interactive**
- **Memorable and shareable**
- **Easy to customize**

Perfect for surprising someone special with a thoughtful, digital Valentine's celebration that shows you care enough to create something unique just for them. 💝

---

**Created with ❤️ for Valentine's Day 2025**
