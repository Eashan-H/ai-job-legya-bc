# Meraz 2026 - Intergalactic Festival Website 🌌

**"Where Cultures Orbit"**

An immersive, AI-generated website for Meraz 2026, the annual cultural and technical festival at IIT Bhilai. This project showcases cutting-edge web design with cosmic themes, fluid animations, and intuitive user experience.

---

## 🎨 Design Philosophy

### Theme: **Intergalactic Festival**
The website embodies the concept of Meraz as a cosmic celebration across galaxies, where different cultures and events orbit around a central festival experience.

### Visual Identity
- **Color Palette**: Deep space blacks, cosmic purples, neon pinks, and cyan glows
- **Typography**: 
  - Orbitron (headings) - A futuristic, geometric font for titles
  - Space Grotesk (body) - Clean, modern sans-serif for readability
- **Aesthetic**: Minimal UI with maximum atmospheric depth

---

## ✨ Key Features Implemented

### 1. **Modern, Themed User Interface**
- Fully responsive design that works across all devices
- Dark space aesthetic with subtle nebula effects
- Floating animations creating zero-gravity feel
- Glass-morphism effects for modern depth

### 2. **Animated Starfield Background**
- Canvas-based particle system with 300+ twinkling stars
- Realistic drift motion simulating deep space
- Performance-optimized using requestAnimationFrame

### 3. **Interactive Events Page - Floating Planets**
- Each event represented as a 3D-style planet
- Hover interactions trigger:
  - Glow intensification
  - Orbital ring animations
  - Stardust particle emissions
- Click to open detailed event modal with glassmorphism design

### 4. **Space Map Navigation System**
- Interactive SVG-based galaxy map
- Venue clusters organized by type (Performance, Technical, Creative)
- Hover effects with pulsing rings and labels
- Side panel with detailed venue information

### 5. **Cursor Trail Effect**
- Subtle star trail following mouse movement
- Creates sense of movement through space
- Automatically disabled on touch devices

### 6. **Smooth Page Transitions**
- Framer Motion powered animations
- Fade transitions between pages
- Staggered reveal effects for UI elements

### 7. **Floating Navigation Menu**
- Minimalist circular toggle button
- Expandable menu with smooth animations
- Active page indicator with morphing effect

---

## 🚀 Custom Features

### **Vibe-Centric Engagement Elements**

1. **Cosmic Countdown Timer** (Concept - Ready to Implement)
   - Animated countdown with orbital mechanics
   - Each digit styled as a glowing celestial body

2. **3D Event Banners** (Implemented via Planet System)
   - Events displayed as interactive 3D planets
   - Dynamic rotation and hover effects

3. **Interactive Nebula Background**
   - Three-layer parallax nebula effects
   - Subtle drift animations creating depth

4. **Zero-Gravity UI Interactions**
   - Buttons levitate on hover
   - Smooth easing mimicking weightlessness
   - Spring-physics based transitions

---

## 📁 Project Structure

```
meraz-intergalactic/
├── public/
│   └── logo.png                 # Meraz logo
├── src/
│   ├── components/
│   │   ├── HomePage.jsx         # Hero section with animated intro
│   │   ├── EventsPage.jsx       # Floating planets events display
│   │   ├── SpaceMap.jsx         # Interactive campus galaxy map
│   │   ├── Navigation.jsx       # Floating menu system
│   │   ├── StarField.jsx        # Animated background canvas
│   │   └── CursorTrail.jsx      # Mouse trail effect
│   ├── styles/
│   │   ├── App.css              # Global styles & variables
│   │   ├── HomePage.css         # Hero animations
│   │   ├── EventsPage.css       # Planet & modal styles
│   │   ├── SpaceMap.css         # Map & SVG styles
│   │   ├── Navigation.css       # Menu animations
│   │   ├── StarField.css        # Canvas positioning
│   │   └── CursorTrail.css      # Trail effect
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

---

## 🛠️ Technologies Used

- **React 18** - Component-based architecture
- **Framer Motion** - Fluid animations and transitions
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom animations and effects
- **Canvas API** - Starfield particle system
- **SVG** - Interactive galaxy map

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation Steps

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:3000`

---

## 🎯 Event Data Structure

Events are structured with the following properties:

```javascript
{
  id: number,
  name: string,
  category: 'Technical' | 'Cultural' | 'Music',
  description: string,
  date: string,
  venue: string,
  contact: string,
  color: string (hex),
  planetSize: 'small' | 'medium' | 'large'
}
```

---

## 🎨 Design Choices Explained

### 1. **Why Minimal UI?**
To let the cosmic atmosphere and animations take center stage without overwhelming users. Clean interfaces improve focus on content.

### 2. **Why Floating Planets for Events?**
Creates a unique, memorable interaction pattern. Users explore events by "traveling" through space, making the experience gamified and engaging.

### 3. **Why Dark Theme?**
- Reduces eye strain for long viewing sessions
- Allows neon accents to pop visually
- Creates authentic space atmosphere
- Modern, premium feel

### 4. **Why Canvas for Starfield?**
Canvas provides better performance than CSS or DOM-based animations for hundreds of particles. Allows real-time physics calculations.

### 5. **Typography Choices**
- **Orbitron**: Geometric, futuristic - perfect for sci-fi aesthetic
- **Space Grotesk**: Modern, readable - excellent for body text while maintaining theme

---

## 🎭 Animation Philosophy

All animations follow these principles:
1. **Purposeful** - Every animation serves UX or aesthetic function
2. **Smooth** - Easing curves mimic natural motion
3. **Performant** - Hardware-accelerated transforms
4. **Subtle** - Never overwhelming or distracting
5. **Zero-gravity** - Floating, weightless feel throughout

---

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

Key responsive features:
- Stacked planet layout on mobile
- Bottom-sheet info panel on mobile
- Adjusted typography scales
- Touch-optimized interactions

---

## 🎪 Event Information

The website currently showcases 6 featured events:

1. **Vibe Coding** - Technical (Purple)
2. **Cosmic Dance** - Cultural (Pink)
3. **Stellar Beats** - Music (Cyan)
4. **Quantum Quiz** - Technical (Violet)
5. **Nebula Art** - Cultural (Orange)
6. **Robotics Arena** - Technical (Emerald)

Each event displays:
- Name & description
- Date & time
- Venue location
- Contact person
- Registration button

---

## 🗺️ Campus Map Features

The galaxy map organizes venues into three clusters:

- **Alpha Cluster** (Pink) - Performance Zones
- **Beta Cluster** (Purple) - Technical Hubs
- **Gamma Cluster** (Cyan) - Creative Spaces

Interactive features:
- Hover to highlight venues
- Click for detailed information
- Orbital rings indicate active selection
- Smooth SVG animations

---

## 🚀 Future Enhancements

Potential additions for expanded functionality:

1. **User Authentication System**
   - Firebase/Auth0 integration
   - Profile dashboards
   - Event registration tracking

2. **Live Event Countdown**
   - Real-time countdown timers
   - Notification system

3. **AI Chatbot Assistant**
   - Festival information queries
   - Navigation help
   - Event recommendations

4. **Photo Gallery**
   - Past festival highlights
   - AI-generated event posters
   - Interactive carousel

5. **Sponsor Showcase**
   - Rotating sponsor logos
   - Partnership information

6. **Registration Forms**
   - Integrated event registration
   - Payment gateway
   - Ticket generation

---

## 🎨 AI Prompting Strategy

This website was created using advanced AI prompting techniques:

### Design Prompts Used:
- "Create a minimalist intergalactic theme with cosmic purple and neon pink"
- "Generate smooth zero-gravity floating animations"
- "Design interactive planet elements for event browsing"

### Code Generation Approach:
- Structured component-based architecture prompts
- Animation-specific CSS generation
- Performance optimization requests

### Asset Generation:
- All visual effects created via code
- Logo integration from provided file
- SVG graphics for scalability

---

## 📄 License & Credits

**Created for**: Meraz 2026, IIT Bhilai  
**Developed by**: Data Science & Artificial Intelligence Club  
**Design Theme**: "Where Cultures Orbit"

This project demonstrates the power of AI-assisted development in creating professional, production-ready web experiences.

---

## 🌟 Highlights

- ✅ 100% AI-generated code
- ✅ Zero external image dependencies (except logo)
- ✅ Fully responsive design
- ✅ Accessible navigation
- ✅ Performance optimized
- ✅ Modern React practices
- ✅ Clean, maintainable code structure

---

## 📞 Contact

For questions or feedback about this project:

**Event Coordinators:**
- Vatsal: +91-7983870917 | vatsalyd@iitbhilai.ac.in
- Rudra: +91-9326110119 | rudramd@iitbhilai.ac.in

---

**May your code compile and your designs inspire! 🚀✨**
