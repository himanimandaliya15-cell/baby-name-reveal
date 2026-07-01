# 🎀 Baby Girl Name Reveal

An interactive web application to reveal your baby girl's name with beautiful animations and confetti celebrations!

## ✨ Features

- **3D Flip Animation** - Interactive mystery box with smooth 3D flip effect
- **Confetti Celebration** - Colorful confetti falls when the name is revealed
- **Name Meanings** - Displays the meaning behind each baby name
- **Responsive Design** - Works perfectly on mobile and desktop devices
- **Beautiful UI** - Gradient backgrounds and smooth animations
- **Customizable** - Easy to add your own names and meanings

## 🚀 Live Demo

Open `index.html` in your browser to see the app in action!

## 🛠️ How to Use

1. **Clone or Download** this repository
2. **Open** `index.html` in your web browser
3. **Click** the "Reveal the Name!" button or the mystery box
4. **Enjoy** the animation and confetti celebration!

## 📝 Customization

To add your own baby names, edit the `babyNames` array in `script.js`:

```javascript
const babyNames = [
    { name: "Your Name", meaning: "Meaning here" },
    { name: "Another Name", meaning: "Its meaning" },
    // Add more names as needed
];
```

## 🎨 Customizing Colors

Edit the colors in `style.css`:
- Change `#ff1493` (deep pink) to your preferred color
- Modify gradient colors in `.box-front` and other classes
- Update the confetti colors array in `script.js`

## 📱 Deployment Options

### Option 1: GitHub Pages (Free & Easy) ⭐ RECOMMENDED
1. Go to your repository → **Settings**
2. Scroll down to **Pages** section
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://himanimandaliya15-cell.github.io/baby-name-reveal` in 2-3 minutes!

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub account and select this repository
4. Click **Deploy**
5. Your site goes live instantly!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Select your GitHub repository
4. Click **Import**
5. Your site deploys automatically!

### Option 4: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init` and `firebase deploy`

## 📦 Files Included

- `index.html` - Main HTML file
- `style.css` - All styling and animations
- `script.js` - JavaScript functionality
- `README.md` - This file

## 🎯 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Tips

- You can click either the button or the box itself to reveal the name
- Press Enter key to reveal the name
- Customize the number of confetti pieces in the `createConfetti()` function
- Add sound effects by uncommenting the `playSound()` function call

## 📄 License

Free to use and modify!

## 🎉 Enjoy!

Have fun revealing your baby girl's name! 💕

---

**Made with ❤️ for special moments**