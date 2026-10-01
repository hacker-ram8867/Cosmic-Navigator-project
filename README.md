# COSMIC NAVIGATOR 3D

Production-oriented React + Vite + Three.js + React Three Fiber interactive Vedic/Puranic cosmology visualization.

## Requirements

- Node.js 20.19+ or Node.js 22.12+
- npm 10+
- Modern browser with WebGL enabled

## Install and run

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Main features

- Bhūrloka / Earth starting point
- 14 material Lokas
- Separate transcendental region for Goloka Vṛndāvana, Vaikuṇṭha and Maheśa-dhāma
- Interactive 3D orbit, pan and zoom
- Loka selection and camera travel
- Search/filter
- Scripture reference panel
- Responsive desktop/tablet/mobile layout
- WebGL/runtime error fallback instead of a blank page
- Centralized cosmology data

## Project structure

```text
src/
  components/
    CosmicScene.jsx
    Earth.jsx
    LokaNode.jsx
    TranscendentalRealm.jsx
    TravelCamera.jsx
    DetailsPanel.jsx
    SearchPanel.jsx
    NavigationBar.jsx
    Controls.jsx
    ErrorBoundary.jsx
  data/
    lokas.js
    versesDatabase.js
  hooks/
    useCosmicNavigation.js
  utils/
    cosmicUtils.js
  App.jsx
  main.jsx
  styles.css
vite.config.js
package.json
```

The 3D arrangement is an interpretive visualization of the supplied cosmological hierarchy and is not presented as modern astronomical distance data.
