# 🔧 Forklift Technical Manifest

**A comprehensive troubleshooting tool for the Toyota 7FBEU20 electric forklift — built by a maintenance technician, using AI, in under 3 days.**

![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Mac%20%7C%20Linux-blue)
![Built With](https://img.shields.io/badge/built%20with-AI%20%2B%20Experience-orange)

---

## 💡 Why This Exists

While executives sit in boardrooms debating AI's ROI and theorizing about the future of work, **I built this on my lunch breaks. On my cell phone.**

28+ years turning wrenches taught me one thing: **we know exactly what we need.** The people doing the work don't need consultants to tell us where the gaps are. We live in those gaps every day.

This app started as a simple idea: *What if I had every error code, every wire color, every troubleshooting step for this forklift — all in one place, searchable, on my phone or tablet?*

Three days later, it exists. Not because I'm a software developer. Because **AI gave me the leverage to build what I've always needed.**

---

## 🎯 What This Proves

**To my fellow technicians:** You can do this. If you can troubleshoot a servo drive or trace a wire, you can build tools like this. AI doesn't replace us — it amplifies us. The guardrails are off. Start building.

**To employers:** Your maintenance techs are sitting on decades of knowledge. Give them AI tools and watch what happens. We're not threats to your IT department — we're force multipliers.

**To everyone debating "AI in the workplace":** Stop talking. The working man already figured it out.

---

## ✨ Features

### 📋 Complete Technical Reference
- Equipment specifications and physical dimensions
- Component weights for service planning
- Wiring legend with decoded abbreviations

### ⚠️ Error Code Database
- All 7FB series error codes with plain-English descriptions
- Quick symptom index (No Travel, No Lift, Overheat, etc.)
- First-check recommendations for every fault

### 🔌 Interactive Schematic
- Zoomable wiring diagram
- High-contrast mode for shop floor visibility
- Saved zoom level between sessions

### ✅ PM Checklist
- Daily, 250hr, 500hr, 1000hr, 2000hr intervals
- PDF report generation with timestamp
- Clock number tracking for documentation

### 🔍 Global Search
- Search everything: specs, errors, wiring, procedures
- Voice search support
- Instant results with highlighting

### 🌓 Light/Dark Mode
- Dark mode default (easy on the eyes in dim control rooms)
- Light mode for bright shop floor conditions

---

## 🚀 Quick Start

### Option 1: Just Open the HTML (Easiest)

1. Download `index.html`
2. Double-click to open in any browser
3. Done. Bookmark it.

Works on phones, tablets, laptops — anything with a browser.

### Option 2: Run as Desktop App (Electron)

**Prerequisites:** Node.js installed ([download here](https://nodejs.org))

```bash
# Clone or download this repo
cd forklift-technical-manifest

# Install dependencies
npm install

# Run the app
npm start
```

### Option 3: Build Installers

```bash
# Windows installer (.exe)
npm run build-win

# Mac installer (.dmg)
npm run build-mac

# Linux installer (.AppImage)
npm run build-linux
```

Installers appear in the `dist/` folder.

---

## 📁 What's In The Box

```
forklift-technical-manifest/
├── index.html      # The app — everything in one file
├── main.js         # Electron main process
├── preload.js      # Secure IPC bridge
├── package.json    # Node/Electron config
└── README.md       # You're reading it
```

---

## 🛠️ Customizing For Your Equipment

This was built for a specific forklift, but the template works for anything:

1. Fork this repo
2. Replace the specs, error codes, and wiring data
3. Update the branding/colors
4. Deploy

**Ideas:** CNC machines, robots, conveyor systems, HVAC units — anything with error codes and maintenance intervals.

---

## 📱 Mobile Use

The app is fully responsive. On your phone:

1. Open `index.html` in your browser
2. Tap "Add to Home Screen" (iOS) or "Install App" (Android)
3. Now it's on your phone like a native app

---

## ⌨️ Keyboard Shortcuts (Desktop)

| Shortcut | Action |
|----------|--------|
| `Ctrl+R` | Reload |
| `Ctrl++` | Zoom in |
| `Ctrl+-` | Zoom out |
| `Ctrl+0` | Reset zoom |
| `F11` | Fullscreen |
| `F12` | Developer tools |

---

## 🤝 Contributing

Found a bug? Have error codes to add? Know a better troubleshooting sequence?

1. Fork it
2. Fix it
3. PR it

Or just [open an issue](https://github.com/TheWiredWatchman/forklift-technical-manifest/issues).

---

## 📜 License

MIT — do whatever you want with it. Build something for your shop.

---

## 👤 About The Builder

**Joseph Overberg** — 28+ years in electrical and industrial maintenance. Currently a Lead Maintenance Technician in automotive manufacturing working with PLCs, robotics, vision systems, and CNC machines.

I believe AI is the most powerful tool to hit the trades since the multimeter. I'm proving it by building things.

🔗 **Links:**
- YouTube: [@TheWiredWatchman](https://youtube.com/@TheWiredWatchman)
- Website: [thewiredwatchman.com](https://thewiredwatchman.com)
- LinkedIn: [josephoverberg](https://linkedin.com/in/josephoverberg)
- GitHub: [TheWiredWatchman](https://github.com/TheWiredWatchman)

---

## 💬 The Real Message

> *"If you are a vocational technician... now, they're very valuable, if not irreplaceable, because we can make them into something different than what they were, very rapidly. And those jobs are going to become more valuable."*  
> — Alex Karp, CEO of Palantir, Davos 2026

The future isn't AI replacing technicians.  
**It's technicians wielding AI.**

---

*Built in under 3 days. On breaks. On a cell phone. What's your excuse?*
