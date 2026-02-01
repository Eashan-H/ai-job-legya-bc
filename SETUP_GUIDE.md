# Meraz 2026 - Setup Guide 🚀

## Quick Start

### Option 1: Using npm (Recommended)

```bash
# Navigate to project directory
cd meraz-intergalactic

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Option 2: Using yarn

```bash
# Install dependencies
yarn

# Start development server
yarn dev
```

---

## System Requirements

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (comes with Node.js)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

---

## Installation Steps (Detailed)

### 1. Install Node.js

If you don't have Node.js installed:

**Windows/Mac:**
- Download from: https://nodejs.org/
- Run the installer
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Extract Project Files

Unzip the project folder to your desired location.

### 3. Install Dependencies

Open terminal/command prompt in the project directory:

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Framer Motion 10.16.4
- Vite 5.0.0
- Vite React Plugin 4.2.0

### 4. Run Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.0.0  ready in 342 ms

➜  Local:   http://localhost:3000/
➜  Network: http://192.168.1.x:3000/
```

### 5. Open in Browser

Navigate to `http://localhost:3000` in your web browser.

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

To preview the production build:

```bash
npm run preview
```

---

## Project Structure

```
meraz-intergalactic/
├── public/              # Static assets
│   └── logo.png        # Meraz logo
├── src/
│   ├── components/     # React components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Build config
└── README.md          # Documentation
```

---

## Troubleshooting

### Issue: Port 3000 already in use

**Solution:** Change port in `vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
}
```

### Issue: npm install fails

**Solutions:**
1. Clear npm cache:
   ```bash
   npm cache clean --force
   npm install
   ```

2. Delete `node_modules` and retry:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Use legacy peer deps:
   ```bash
   npm install --legacy-peer-deps
   ```

### Issue: Animations not smooth

**Solution:** Ensure hardware acceleration is enabled in your browser:
- Chrome: `chrome://settings/system` → Enable hardware acceleration
- Firefox: `about:preferences` → Performance → Use hardware acceleration

### Issue: Logo not displaying

**Solution:** Ensure `logo.png` exists in `public/` directory.

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer: Not supported

---

## Performance Tips

1. **Enable hardware acceleration** in browser settings
2. **Close unnecessary tabs** for smoother animations
3. **Use latest browser version** for best performance
4. **Disable browser extensions** if experiencing lag

---

## Development Tips

### Hot Module Replacement (HMR)

Vite provides instant updates without page refresh. Just save your files and see changes immediately.

### Component Development

Each component is in `src/components/`. To modify:

1. Open the component file (e.g., `HomePage.jsx`)
2. Make changes
3. Save - changes appear instantly

### Styling

All CSS files are in `src/styles/`. The project uses:
- CSS variables for theming
- CSS animations for effects
- Responsive design with media queries

### Adding New Events

Edit the `events` array in `src/components/EventsPage.jsx`:

```javascript
{
  id: 7,
  name: 'Your Event',
  category: 'Technical',
  description: 'Event description',
  date: 'Day X, Time',
  venue: 'Venue name',
  contact: 'Name (+91-XXXXXXXXXX)',
  color: '#hexcolor',
  planetSize: 'medium',
}
```

---

## Deployment Options

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Option 2: Netlify

1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Website goes live

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/meraz",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## Customization Guide

### Changing Colors

Edit CSS variables in `src/styles/App.css`:

```css
:root {
  --cosmic-purple: #9333ea;  /* Main purple */
  --neon-pink: #ec4899;      /* Accent pink */
  --cyan-glow: #06b6d4;      /* Cyan highlights */
}
```

### Changing Fonts

Update font imports in `src/styles/App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

Then use in components:
```css
font-family: 'YourFont', sans-serif;
```

### Adjusting Animations

Animation speeds can be modified in respective CSS files:
- `HomePage.css` - Hero animations
- `EventsPage.css` - Planet interactions
- `SpaceMap.css` - Map animations

---

## Support

For technical issues:
1. Check this guide's troubleshooting section
2. Review browser console for errors (F12)
3. Ensure all dependencies are installed
4. Verify Node.js version compatibility

For project-related queries:
- Vatsal: vatsalyd@iitbhilai.ac.in
- Rudra: rudramd@iitbhilai.ac.in

---

## Next Steps

After successful setup:

1. ✅ Explore the three pages (Home, Events, Map)
2. ✅ Test on different devices/screen sizes
3. ✅ Review the code structure
4. ✅ Customize content for your needs
5. ✅ Deploy to production when ready

---

**Happy Coding! 🌌✨**
