# 🌌 Cosmic Navigator 3D

**Cosmic Navigator 3D** is an interactive, production-oriented **React + Vite + Three.js + React Three Fiber** web application for exploring an interpretive visualization of **Vedic/Puranic cosmology**.

The application provides an immersive 3D navigation experience through the **14 material Lokas**, beginning from **Bhūrloka (Earth)** and extending toward the separately represented transcendental realms of **Goloka Vṛndāvana, Vaikuṇṭha, and Maheśa-dhāma**.

> **Live Demo:**
> https://hacker-ram8867.github.io/Cosmic-Navigator-project/

---

## ✨ Project Preview

### 🌍 Cosmic Navigator 3D

<p align="center">
  <img src="screenshots/cosmic-navigator-home.png" alt="Cosmic Navigator 3D Home Screen" width="900">
</p>

### 🪐 Loka Exploration

<p align="center">
  <img src="screenshots/loka-exploration.png" alt="Loka Exploration 3D View" width="900">
</p>

### 📖 Scripture Reference Panel

<p align="center">
  <img src="screenshots/scripture-reference.png" alt="Scripture Reference Panel" width="900">
</p>

### 🧭 Interactive Navigation

<p align="center">
  <img src="screenshots/navigation.png" alt="Interactive Cosmic Navigation" width="900">
</p>

> **Note:** Add your actual screenshots inside the `screenshots/` folder using the filenames shown above.

---

## 🚀 Live Application

**Production Website:**
https://hacker-ram8867.github.io/Cosmic-Navigator-project/

The application is deployed using **GitHub Pages**.

---

## 🎯 Project Overview

Cosmic Navigator 3D was designed to provide an interactive visual representation of a traditional cosmological hierarchy.

Instead of presenting the cosmological structure as a static diagram, the application allows users to:

* Explore Lokas in an interactive 3D environment
* Rotate, pan, and zoom around the cosmic scene
* Select individual Lokas
* Travel between different cosmic levels
* Search and filter cosmological entities
* View associated scripture references
* Explore transcendental realms separately from the material Lokas
* Use the application across desktop, tablet, and mobile devices

The 3D positioning is an **interpretive visualization of the supplied cosmological hierarchy** and is **not intended to represent modern astronomical distances or scientific measurements**.

---

## 🌌 Main Features

### 🪐 14 Material Lokas

The application represents the traditional fourteen material Lokas:

1. Satyaloka
2. Tapoloka
3. Janaloka
4. Maharloka
5. Svargaloka
6. Bhuvarloka
7. Bhūrloka
8. Atala
9. Vitala
10. Sutala
11. Talātala
12. Mahātala
13. Rasātala
14. Pātāla

---

### 🌺 Transcendental Realms

A separate transcendental region is provided for:

* **Goloka Vṛndāvana**
* **Vaikuṇṭha**
* **Maheśa-dhāma**

These realms are visually separated from the material Loka hierarchy.

---

## 🎮 Interactive 3D Experience

The application uses **Three.js** and **React Three Fiber** to create an interactive WebGL environment.

Users can:

* 🖱️ Orbit around the cosmic scene
* 🔍 Zoom in and out
* ✋ Pan across the scene
* 🪐 Select Loka nodes
* 🚀 Travel to selected Lokas
* 🔎 Search for Lokas
* 📚 Open scripture references
* 📱 Use responsive controls on smaller screens

---

## 🔎 Search & Navigation

The search interface allows users to quickly locate specific Lokas and cosmological entities.

The navigation system supports:

* Loka search
* Filtering
* Selection
* Camera travel
* Focused 3D exploration
* Details display

---

## 📖 Scripture References

Each relevant cosmological entity can be associated with scripture references through the centralized scripture database.

The reference panel provides contextual information while exploring the 3D visualization.

---

## 🛡️ Runtime Error Handling

The application includes a runtime error fallback mechanism to prevent the interface from becoming a completely blank page when a WebGL or runtime problem occurs.

The project includes:

* React error boundary
* WebGL/runtime fallback
* Graceful error presentation
* Safer component rendering

---

## 📱 Responsive Design

Cosmic Navigator 3D is designed for multiple screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

The UI adapts navigation, controls, search, and information panels according to the available screen size.

---

## 🧰 Technology Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React             | Frontend application              |
| Vite              | Development server and build tool |
| Three.js          | 3D graphics                       |
| React Three Fiber | React-based Three.js rendering    |
| JavaScript        | Application logic                 |
| HTML5             | Application structure             |
| CSS3              | Styling and responsive layout     |
| WebGL             | Hardware-accelerated 3D rendering |
| Git               | Version control                   |
| GitHub Pages      | Deployment                        |

---

## 📂 Project Structure

```text
Cosmic-Navigator-project/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── CosmicScene.jsx
│   │   ├── Earth.jsx
│   │   ├── LokaNode.jsx
│   │   ├── TranscendentalRealm.jsx
│   │   ├── TravelCamera.jsx
│   │   ├── DetailsPanel.jsx
│   │   ├── SearchPanel.jsx
│   │   ├── NavigationBar.jsx
│   │   ├── Controls.jsx
│   │   └── ErrorBoundary.jsx
│   │
│   ├── data/
│   │   ├── lokas.js
│   │   └── versesDatabase.js
│   │
│   ├── hooks/
│   │   └── useCosmicNavigation.js
│   │
│   ├── utils/
│   │   └── cosmicUtils.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── screenshots/
│   ├── cosmic-navigator-home.png
│   ├── loka-exploration.png
│   ├── scripture-reference.png
│   └── navigation.png
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Requirements

Before running the project locally, install:

* **Node.js 20.19+** or **Node.js 22.12+**
* **npm 10+**
* Modern browser
* WebGL-enabled graphics environment

Check your installed versions:

```bash
node --version
npm --version
```

---

## 💻 Installation

Clone the repository:

```bash
git clone https://github.com/hacker-ram8867/Cosmic-Navigator-project.git
```

Move into the project directory:

```bash
cd Cosmic-Navigator-project
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Open the URL displayed by Vite.

Usually:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

The project is deployed through **GitHub Pages**.

Production URL:

```text
https://hacker-ram8867.github.io/Cosmic-Navigator-project/
```

---

## 🔄 Deployment Workflow

After making changes:

```bash
git add .
git commit -m "Update Cosmic Navigator"
git push origin main
```

GitHub Actions can then build and deploy the updated application.

---

## 🧩 Core Components

### `CosmicScene.jsx`

Responsible for the main 3D cosmic environment and scene composition.

### `Earth.jsx`

Represents Bhūrloka / Earth as the starting point of the interactive experience.

### `LokaNode.jsx`

Creates interactive Loka representations within the 3D scene.

### `TranscendentalRealm.jsx`

Handles the separate visualization of the transcendental realms.

### `TravelCamera.jsx`

Controls camera movement and travel between selected cosmic locations.

### `DetailsPanel.jsx`

Displays information about the currently selected entity.

### `SearchPanel.jsx`

Provides search and filtering functionality.

### `NavigationBar.jsx`

Provides application-level navigation controls.

### `Controls.jsx`

Provides interactive camera and navigation controls.

### `ErrorBoundary.jsx`

Provides runtime error handling and prevents complete blank-screen failures.

---

## 🗃️ Centralized Cosmology Data

Cosmological information is maintained separately from the rendering components.

```text
src/data/lokas.js
```

Scripture references are maintained in:

```text
src/data/versesDatabase.js
```

This separation makes the project easier to maintain and extend.

---

## 🔮 Future Enhancements

Potential future improvements include:

* 🌌 More detailed cosmic environments
* 🪐 Enhanced 3D Loka models
* 🎵 Optional ambient audio
* 📜 Expanded scripture references
* 🔖 Bookmarking favorite Lokas
* 🌐 Multi-language support
* 🎥 Guided cosmic tours
* 📱 Improved mobile gestures
* ⚡ Additional WebGL performance optimization
* 🧭 Guided navigation mode
* 📚 Expanded cosmological knowledge database

---

## ⚠️ Visualization Disclaimer

This project is an **interactive educational/visualization experience based on supplied Vedic/Puranic cosmological concepts**.

The spatial arrangement, visual scale, distances, and 3D positioning are interpretive design choices intended to make the hierarchy navigable.

They should **not be interpreted as modern astronomical measurements, physical distances, or scientific claims**.

---

## 👨‍💻 Developer

**Ramanjaneya B.**

AI/ML Engineer | Java Developer | Full-Stack Developer

GitHub:

https://github.com/hacker-ram8867

---

## 📄 License

This project is intended for educational, experimental, and visualization purposes.

See the repository for applicable project licensing and third-party dependency licenses.

---

## ⭐ Support the Project

If you find **Cosmic Navigator 3D** interesting, consider giving the repository a ⭐ on GitHub.

**Explore the cosmos in 3D. 🌌**
